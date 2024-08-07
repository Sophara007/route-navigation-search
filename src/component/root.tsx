// src/pages/Root.tsx


import { Outlet } from 'react-router-dom';
import {NavigationBar} from "./nav/navigationBar.tsx";

const Root = () => {
    return (
        <>
            <NavigationBar />
            <main className="page-container h-full">
                <Outlet /> {/* Render nested routes here */}
            </main>
        </>
    );
};

export default Root;
