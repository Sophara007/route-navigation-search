// src/App.tsx

import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from "../router/route.tsx";

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
