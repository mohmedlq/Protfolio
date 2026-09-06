import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

export type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: unknown;
};

type ToastState = {
  toasts: Toast[];
};

type ToastAction =
  | {
      type: "ADD_TOAST";
      toast: Toast;
    }
  | {
      type: "UPDATE_TOAST";
      toast: Partial<Toast> & { id: string };
    }
  | {
      type: "DISMISS_TOAST";
      toastId?: string;
    }
  | {
      type: "REMOVE_TOAST";
      toastId?: string;
    };

type ToastProps = Omit<Toast, "id" | "open" | "onOpenChange">;

type ToastReturn = {
  id: string;
  dismiss: () => void;
  update: (props: Partial<Toast>) => void;
};

function genId(): string {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string): void => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);

    dispatch({
      type: "REMOVE_TOAST",
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const reducer = (
  state: ToastState,
  action: ToastAction
): ToastState => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.toast.id
            ? { ...toast, ...action.toast }
            : toast
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === toastId || toastId === undefined
            ? {
                ...toast,
                open: false,
              }
            : toast
        ),
      };
    }

    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }

      return {
        ...state,
        toasts: state.toasts.filter(
          (toast) => toast.id !== action.toastId
        ),
      };

    default:
      return state;
  }
};

const listeners: Array<React.Dispatch<React.SetStateAction<ToastState>>> =
  [];

let memoryState: ToastState = {
  toasts: [],
};

function dispatch(action: ToastAction): void {
  memoryState = reducer(memoryState, action);

  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

function toast(props: ToastProps): ToastReturn {
  const id = genId();

  const update = (newProps: Partial<Toast>): void => {
    dispatch({
      type: "UPDATE_TOAST",
      toast: {
        ...newProps,
        id,
      },
    });
  };

  const dismiss = (): void => {
    dispatch({
      type: "DISMISS_TOAST",
      toastId: id,
    });
  };

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) {
          dismiss();
        }
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] =
    React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);

    return () => {
      const index = listeners.indexOf(setState);

      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string): void => {
      dispatch({
        type: "DISMISS_TOAST",
        toastId,
      });
    },
  };
}

export { useToast, toast };