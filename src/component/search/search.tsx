import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Search() {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputRef.current) {
            const searchText = inputRef.current.value.trim().toLowerCase();
            navigate(`/search?query=${encodeURIComponent(searchText)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative flex items-center">
            <input
                ref={inputRef}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                type="text"
                placeholder="Search"
            />
            <button type="submit"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
                <i className="fas fa-search"></i>
            </button>
        </form>
    );
}
