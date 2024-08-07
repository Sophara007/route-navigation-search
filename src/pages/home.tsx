// src/pages/HomePage.tsx
import {ScrollHorizontalLogo} from "../component/scrollPartner/scrollHorizontalLogo.tsx";


const HomePage = () => {
    return (
        <div className="page-container bg-neutral-100 w-full h-dvh flex flex-col justify-evenly items-center " style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1722451944721-ad61bd5c9bf9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className="text-3xl text-fuchsia-400 font-bold underline">Hello Engineer</h1>
            {/* Add more content here */}
            <ScrollHorizontalLogo />
        </div>
    );
};

export default HomePage;
