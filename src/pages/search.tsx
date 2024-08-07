import { useSearchParams } from "react-router-dom";

export function SearchResultPage() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('query') || ''; // Adjusted to match the query parameter used

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Hello! You've found what you're looking for: <span className="text-blue-500">{searchQuery}</span>
            </h1>
        </div>
    );
}
