// utils/scrollUtils.ts

export const scrollContainer = (
    container: HTMLDivElement | null,
    direction: 'left' | 'right',
    scrollAmount: number = 300
) => {
    if (container) {
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
};
