export type NavItem = {
  id: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "الرئيسية" },
  { id: "about", label: "عني" },
  { id: "skills", label: "المهارات" },
  { id: "projects", label: "المشاريع" },
  { id: "contact", label: "تواصل" },
];

export type SkillLayer = {
  title: string;
  tag: string;
  accent: string;
  desc: string;
  tech: string[];
};

export const SKILL_LAYERS: SkillLayer[] = [
  {
    title: "Backend Development",
    tag: "المجال الأساسي",
    accent: "#E3A75E",
    desc: "تصميم الـ APIs ومنطق الأعمال، وربط التطبيق بالبيانات.",
    tech: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST APIs",
      "EF Core",
      "ADO.NET",
      "LINQ",
    ],
  },

  {
    title: "Frontend Development",
    tag: "قيد التوسع",
    accent: "#5FC9B8",
    desc: "بناء واجهات حديثة وربطها بالـ Backend لتجربة متكاملة.",
    tech: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    title: "Databases",
    tag: "الأساس",
    accent: "#8FA0AF",
    desc: "تصميم العلاقات والاستعلامات وربطها بطبقة التطبيق.",
    tech: [
      "SQL Server",
      "SQL",
      "Entity Framework",
      "Relational Design",
    ],
  },

  {
    title: "Software Architecture",
    tag: "أسلوب التفكير",
    accent: "#C9A6E3",
    desc: "مسؤولية واضحة لكل جزء، وقابلية صيانة على المدى الطويل.",
    tech: [
      "3-Tier Architecture",
      "OOP",
      "SOLID",
      "Clean Code",
      "Design Patterns",
    ],
  },
];

export type Project = {
  name: string;
  type: string;
  role: string;
  description: string;
  story: string;
  tech: string[];
  demo: string;
  github: string;
  accent: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    name: "نَشَاط | Nashat",
    type: "Web Platform",
    role: "Full Stack Development",

    description:
      "منصة ويب لإدارة وتسهيل أعمال النشاط المدرسي، تجمع إنشاء التقارير والإذاعات والمحتوى المدرسي في تجربة واحدة.",

    story:
      "بدأ من مشكلة عملية في إعداد المحتوى المدرسي — تحويل خطوات متكررة إلى تجربة رقمية أبسط، مع REST API وقدرات مدعومة بالذكاء الاصطناعي.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      "REST API",
      "AI",
    ],

    demo: "https://nashat-orcin.vercel.app/",
    github: "https://github.com/mohmedlq/Nashat",

    accent: "#5FC9B8",

    image: "/src/assets/nashat.png",
  },

  {
    name: "Training Center",
    type: "Management System",
    role: "Backend Development",

    description:
      "نظام لإدارة مركز تدريبي يشمل الطلاب والمعلمين والدورات والبيانات المرتبطة بها من خلال REST API.",

    story:
      "التركيز على Backend منظم بـ 3-Tier Architecture وفصل المسؤوليات، مع API يمكن للواجهة الأمامية الاعتماد عليه.",

    tech: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      "REST API",
      "SOLID",
    ],

    demo: "",
    github: "https://github.com/mohmedlq/TrainingCenter-Backend",

    accent: "#E3A75E",

    image: "/src/assets/training.png",
  },

  {
    name: "DVLD System",
    type: "Desktop Management System",
    role: "Backend & System Development",

    description:
      "نظام متكامل لإدارة السائقين والمركبات والرخص وعمليات الإصدار والتجديد.",

    story:
      "تحويل متطلبات واقعية إلى نظام مترابط، مع الاهتمام بمنطق الأعمال وتدفق العمليات وتصميم البيانات.",

    tech: [
      "C#",
      ".NET",
      "OOP",
      "3-Tier Architecture",
      "SQL Server",
      "ADO.NET",
    ],

    demo: "",
    github:
      "https://github.com/mohmedlq/Drivers-Vehicles-Licensing-System",

    accent: "#8FA0AF",

    image: "/src/assets/dvld.png",
  },
];

export const CONTACTS = {
  github: "https://github.com/mohmedlq",

  whatsapp: "https://wa.me/966577117504",

  phone: "+966 57 711 7504",

  phoneHref: "tel:+966577117504",

  linkedin: "https://www.linkedin.com/in/mohamed-ibrahim-issa-86b960372",

  email: "mohmedissa365@gmail.com",

  location: "Saudi Arabia",
};