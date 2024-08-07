
// src/routes.tsx

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from "../component/root.tsx";
import HomePage from "../pages/home.tsx";
import AboutPage from "../pages/about.tsx";
import {SearchResultPage} from "../pages/search.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<HomePage />} />  {/* Default route */}
            <Route path="about" element={<AboutPage />}/>

            <Route path="about/hi" element={<h1>Hello</h1>}/>
            <Route path="search" element={<SearchResultPage />}/>

            {/* Add more nested routes here */}
        </Route>
    )
);

export default router;
