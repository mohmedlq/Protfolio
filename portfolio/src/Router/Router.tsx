import{BrowserRouter, Route, Routes}from "react-router-dom"; 
import Home from "../Pages/Portfolio";
import NotFound from "../Pages/NotFound";

export default function Router()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
        </BrowserRouter>
        
        
        </>
    );
}