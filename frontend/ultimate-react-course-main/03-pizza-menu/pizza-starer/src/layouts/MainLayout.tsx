import { PizzaHomePage } from "../features/home-page/PizzaHomePage";
import { Header } from "../components/nav/Header"; 
import { Footer } from "../components/nav/Footer";
import { Outlet } from "react-router-dom";

export function MainLayout(){
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
        
    );
}