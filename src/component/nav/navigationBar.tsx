import {Link, NavLink} from "react-router-dom";
import {Search} from "../search/search.tsx";
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

export function NavigationBar() {
    // Array of navigation links
    const navLinks = [
        {to: "/about", label: "About"},
        {to: "/contact", label: "Contact Us"},
        {to: "/mission", label: "Mission"},
        {to: "/blog", label: "Blog"},
        {to: "/media", label: "Media"},
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="navigationBar sticky top-0 bg-gray-800 text-white w-full py-4">
            <div className="container mx-auto flex items-center justify-between max-sm:px-6 max-lg:px-6">
                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="lg:hidden p-2">
                    {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                </button>
                {/* Logo */}
                <Link to="/" className=" max-lg:hidden flex-shrink-0">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDgwIDMwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9Il8yMDAyMDQ2NTA4X19hIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTYuODAwMDIgLTE3LjI4IDExLjQ4NDAzIDExLjE2NTA0IDQwLjk2IDI5KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM2NDIwRkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2NDIwRkYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJfMjAwMjA0NjUwOF9fYiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQ2LjcxOTk2IDQuMTYgLTMuMzE1NjEgMzcuMjM2ODggMS45MiAxNy42NCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4yNSIgc3RvcC1jb2xvcj0iIzAwQzRDQyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQzRDQyIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9Il8yMDAyMDQ2NTA4X19jIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoLTM4Ljg1IDU0LjIyIC0zNS4zKSBzY2FsZSgzMC4yMjYgMjAuNjY3NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNjQyMEZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjQyMEZGIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iXzIwMDIwNDY1MDhfX2QiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgzMS4zMjAwMSAtMTUuMzYgMTAuNTAyNjkgMjEuNDE1NjYgMi4yOCAyNi4yKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM2NDIwRkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2NDIwRkYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJfMjAwMjA0NjUwOF9fZSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDY3Ljk5OTgyIDE1LjAzOTk2IC0xOC40NDU5NiA4My4zOTkyNSA3LjY4IDIuOTIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQzRDQyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQzRDQyIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cGF0dGVybiBpZD0iXzIwMDIwNDY1MDhfX2YiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxwYXRoIGZpbGw9IiM3RDJBRTciIGQ9Ik0wIDBoMTAwdjEwMEgweiIvPjxwYXRoIGZpbGw9InVybCgjXzIwMDIwNDY1MDhfX2EpIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48cGF0aCBmaWxsPSJ1cmwoI18yMDAyMDQ2NTA4X19iKSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHBhdGggZmlsbD0idXJsKCNfMjAwMjA0NjUwOF9fYykiIGQ9Ik0wIDBoMTAwdjEwMEgweiIvPjxwYXRoIGZpbGw9InVybCgjXzIwMDIwNDY1MDhfX2QpIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48cGF0aCBmaWxsPSJ1cmwoI18yMDAyMDQ2NTA4X19lKSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI18yMDAyMDQ2NTA4X19mKSIgZD0iTTc5LjQ0NCAxOC4wOTZjLS4xMzYgMC0uMjYuMDg4LS4zMjQuMjcyLS44MiAyLjM0LTEuOTI4IDMuNzMyLTIuODQgMy43MzItLjUyNCAwLS43MzYtLjU4NC0uNzM2LTEuNSAwLTIuMjkyIDEuMzcyLTcuMTUyIDIuMDY0LTkuMzY4LjA4LS4yNjguMTMyLS41MDguMTMyLS43MTIgMC0uNjQ0LS4zNTItLjk2LTEuMjI0LS45Ni0uOTQgMC0xLjk1Mi4zNjgtMi45MzYgMi4wOTItLjM0LTEuNTItMS4zNjgtMi4xODQtMi44MDQtMi4xODQtMS42NiAwLTMuMjY0IDEuMDY4LTQuNTg0IDIuOC0xLjMyIDEuNzMyLTIuODcyIDIuMy00LjA0IDIuMDIuODQtMi4wNTYgMS4xNTItMy41OTIgMS4xNTItNC43MzIgMC0xLjc4OC0uODg0LTIuODY4LTIuMzEyLTIuODY4LTIuMTcyIDAtMy40MjQgMi4wNzItMy40MjQgNC4yNTIgMCAxLjY4NC43NjQgMy40MTYgMi40NDQgNC4yNTYtMS40MDggMy4xODQtMy40NjQgNi4wNjQtNC4yNDQgNi4wNjQtMS4wMDggMC0xLjMwNC00LjkzMi0xLjI0OC04LjQ2LjAzNi0yLjAyNC4yMDQtMi4xMjguMjA0LTIuNzQgMC0uMzUyLS4yMjgtLjU5Mi0xLjE0NC0uNTkyLTIuMTM2IDAtMi43OTYgMS44MDgtMi44OTYgMy44ODRhMTAuMjMzIDEwLjIzMyAwIDAgMS0uMzY4IDIuMzMyYy0uODkyIDMuMTg0LTIuNzMyIDUuNi0zLjkzMiA1LjYtLjU1NiAwLS43MDgtLjU1Ni0uNzA4LTEuMjg0IDAtMi4yOTIgMS4yODQtNS4xNTYgMS4yODQtNy42IDAtMS43OTYtLjc4OC0yLjkzMi0yLjI3Mi0yLjkzMi0xLjc0OCAwLTQuMDYgMi4wOC02LjI0OCA1Ljk3Ni43Mi0yLjk4NCAxLjAxNi01Ljg3Mi0xLjExNi01Ljg3MkEyLjg4NiAyLjg4NiAwIDAgMCAzNiA5LjkxNmEuNzUyLjc1MiAwIDAgMC0uNDMyLjcyOGMuMjA0IDMuMTc2LTIuNTYgMTEuMzEyLTUuMTggMTEuMzEyLS40NzYgMC0uNzA4LS41MTYtLjcwOC0xLjM0OCAwLTIuMjk2IDEuMzY4LTcuMTQ0IDIuMDU2LTkuMzY0LjA4OC0uMjg4LjEzNi0uNTM2LjEzNi0uNzUyIDAtLjYwOC0uMzc2LS45Mi0xLjIyOC0uOTItLjkzNiAwLTEuOTUyLjM1Ni0yLjkzMiAyLjA4LS4zNDQtMS41Mi0xLjM3Mi0yLjE4NC0yLjgwOC0yLjE4NC0yLjM1NiAwLTQuOTg4IDIuNDkyLTYuMTQ0IDUuNzQtMS41NDggNC4zMzYtNC42NjggOC41MjQtOC44NjggOC41MjQtMy44MTIgMC01LjgyNC0zLjE3Mi01LjgyNC04LjE4NEM0LjA2OCA4LjMxMiA5LjM4IDIuNCAxMy4zMiAyLjRjMS44ODQgMCAyLjc4NCAxLjIgMi43ODQgMy4wNCAwIDIuMjI4LTEuMjQ0IDMuMjY0LTEuMjQ0IDQuMTEyIDAgLjI2LjIxNi41MTYuNjQ0LjUxNiAxLjcxMiAwIDMuNzI4LTIuMDEyIDMuNzI4LTQuNzU2UzE3LjAwNC41NiAxMy4wNjQuNTZDNi41NTIuNTYgMCA3LjExMiAwIDE1LjUwOGMwIDYuNjggMy4yOTYgMTAuNzA4IDguOTk2IDEwLjcwOCAzLjg4OCAwIDcuMjg0LTMuMDI0IDkuMTE2LTYuNTUyLjIwOCAyLjkyNCAxLjUzNiA0LjQ1MiAzLjU2IDQuNDUyIDEuOCAwIDMuMjU2LTEuMDcyIDQuMzY4LTIuOTU2LjQyOCAxLjk3MiAxLjU2NCAyLjkzNiAzLjA0IDIuOTM2IDEuNjkyIDAgMy4xMDgtMS4wNzIgNC40NTYtMy4wNjQtLjAyIDEuNTY0LjMzNiAzLjAzNiAxLjY5MiAzLjAzNi42NCAwIDEuNDA0LS4xNDggMS41NC0uNzA4IDEuNDI4LTUuOTA0IDQuOTU2LTEwLjcyNCA2LjAzNi0xMC43MjQuMzIgMCAuNDA4LjMwOC40MDguNjcyIDAgMS42MDQtMS4xMzIgNC44OTItMS4xMzIgNi45OTIgMCAyLjI2OC45NjQgMy43NjggMi45NTYgMy43NjggMi4yMDggMCA0LjQ1Mi0yLjcwNCA1Ljk0OC02LjY1Ni40NjggMy42OTIgMS40OCA2LjY3MiAzLjA2NCA2LjY3MiAxLjk0NCAwIDUuMzk2LTQuMDkyIDcuNDg4LTguNDI0LjgyLjEwNCAyLjA1Mi4wNzYgMy4yMzYtLjc2LS41MDQgMS4yNzYtLjggMi42NzItLjggNC4wNjggMCA0LjAyIDEuOTIgNS4xNDggMy41NzIgNS4xNDggMS43OTYgMCAzLjI1Mi0xLjA3MiA0LjM2OC0yLjk1Ni4zNjggMS43IDEuMzA4IDIuOTMyIDMuMDM2IDIuOTMyIDIuNzA0IDAgNS4wNTItMi43NjQgNS4wNTItNS4wMzIgMC0uNi0uMjU2LS45NjQtLjU1Ni0uOTY0ek0yMy4zMiAyMS44ODhjLTEuMDkyIDAtMS41Mi0xLjEtMS41Mi0yLjc0IDAtMi44NDggMS45NDgtNy42MDQgNC4wMDgtNy42MDQuOSAwIDEuMjQgMS4wNiAxLjI0IDIuMzU2IDAgMi44OTItMS44NTIgNy45ODgtMy43MjggNy45ODh6bTM3LjQwNC04LjVjLS42NTItLjc3Ni0uODg4LTEuODMyLS44ODgtMi43NzIgMC0xLjE2LjQyNC0yLjE0LjkzMi0yLjE0cy42NjQuNS42NjQgMS4xOTZjMCAxLjE2NC0uNDE2IDIuODY0LS43MDggMy43MTZ6bTguNDY4IDguNWMtMS4wOTIgMC0xLjUyLTEuMjY0LTEuNTItMi43NCAwLTIuNzQ4IDEuOTQ4LTcuNjA0IDQuMDI0LTcuNjA0LjkgMCAxLjIyIDEuMDUyIDEuMjIgMi4zNTYgMCAyLjg5Mi0xLjgyIDcuOTg4LTMuNzI0IDcuOTg4eiIvPjwvc3ZnPg=="

                        alt="Logo"
                        className="h-8"
                    />
                </Link>


                {/* Navigation Links */}
                <div
                    className={`flex flex-col sm:hidden lg:flex-row lg:space-x-4 ${isOpen ? 'block' : 'hidden lg:flex'}`}>
                    {navLinks.map(({to, label}) => (
                        <NavLink
                            key={to}
                            to={to}
                            style={({isActive}) => ({
                                color: isActive ? 'rgb(100, 200, 83)' : 'rgb(255, 165, 0)',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                            className="py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                <Search/>
            </div>
            <div className={`flex flex-col lg:hidden lg:flex-row lg:space-x-4 ${isOpen ? 'block' : 'hidden lg:flex'}`}>
                {navLinks.map(({to, label}) => (
                    <NavLink
                        key={to}
                        to={to}
                        style={({isActive}) => ({
                            color: isActive ? 'rgb(100, 200, 83)' : 'rgb(255, 165, 0)',
                            fontWeight: isActive ? 'bold' : 'normal',
                        })}
                        className="py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
