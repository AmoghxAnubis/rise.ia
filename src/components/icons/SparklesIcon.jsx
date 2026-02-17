const SparklesIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Large center star - angular 4 point */}
            <path
                d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinejoin="miter"
            />

            {/* Top right small star */}
            <path
                d="M75 15 L77 22 L85 25 L77 28 L75 35 L73 28 L65 25 L73 22 Z"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="miter"
            />

            {/* Bottom left small star */}
            <path
                d="M25 65 L27 72 L35 75 L27 78 L25 85 L23 78 L15 75 L23 72 Z"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="miter"
            />

            {/* Top left accent */}
            <rect
                x="15"
                y="15"
                width="8"
                height="8"
                stroke="white"
                strokeWidth="3"
                fill="none"
                transform="rotate(45 19 19)"
            />

            {/* Bottom right accent */}
            <rect
                x="77"
                y="77"
                width="8"
                height="8"
                stroke="white"
                strokeWidth="3"
                fill="none"
                transform="rotate(45 81 81)"
            />
        </svg>
    );
};

export default SparklesIcon;
