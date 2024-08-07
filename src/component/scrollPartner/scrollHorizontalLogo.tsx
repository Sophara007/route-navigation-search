import { useRef, useState, useEffect } from 'react';
import { scrollContainer } from '../../utils/scrollUtils';
import styles from "./barCss.module.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function ScrollHorizontalLogo() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState({ left: false, right: false });

    useEffect(() => {
        const checkOverflow = () => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const { scrollWidth, clientWidth, scrollLeft } = container;
                setIsOverflowing({
                    left: scrollLeft > 0,
                    right: scrollWidth > clientWidth + scrollLeft
                });
            }
        };

        // Check overflow initially and on window resize
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setIsOverflowing({
                left: scrollLeft > 0,
                right: scrollWidth > clientWidth + scrollLeft
            });
        }
    };

    // Array of items to display in the scrollable container
    const items = [
        { id: 1, color: 'bg-green-500', text: 'Hello' },
        { id: 2, color: 'bg-blue-500', text: 'Partner 1' },
        { id: 3, color: 'bg-green-500', text: 'Partner 2' },
        { id: 4, color: 'bg-green-500', text: 'Partner 2' },
        { id: 5, color: 'bg-green-500', text: 'Partner 2' },
        { id: 6, color: 'bg-green-500', text: 'Partner 2' },
        { id: 7, color: 'bg-green-500', text: 'Partner 2' },
        // Add more items as needed
    ];

    return (
        <div className="relative flex  items-center bg-opacity-25  bg-pink-100 h-1/4 w-3/4 overflow-hidden rounded-lg shadow-lg p-4">
            {isOverflowing.left && (
                <button
                    onClick={() => scrollContainer(scrollContainerRef.current, 'left')}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-300"
                >
                    <FaChevronLeft size={20} />
                </button>
            )}
            {isOverflowing.right && (
                <button
                    onClick={() => scrollContainer(scrollContainerRef.current, 'right')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-300"
                >
                    <FaChevronRight size={20} />
                </button>
            )}
            <div
                ref={scrollContainerRef}
                className={`flex overflow-x-auto  ${styles.noScrollbar}`}
                onScroll={handleScroll}

            >
                <ul className="flex space-x-6">
                    {/* Map over the items array to create list items */}
                    {items.map(({ id, color, text }) => (
                        <li
                            key={id}
                            className={`${color} h-32 w-64 flex-shrink-0 flex items-center justify-center text-white font-semibold rounded-lg shadow-md`}
                        >
                            <p>{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
