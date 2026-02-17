const RocketIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Main rocket body - angular triangle */}
            <path
                d="M50 10 L30 70 L50 65 L70 70 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinejoin="miter"
            />

            {/* Left fin */}
            <path
                d="M30 70 L15 85 L30 80 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinejoin="miter"
            />

            {/* Right fin */}
            <path
                d="M70 70 L85 85 L70 80 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinejoin="miter"
            />

            {/* Window - square */}
            <rect
                x="43"
                y="30"
                width="14"
                height="14"
                stroke="white"
                strokeWidth="3"
                fill="none"
            />

            {/* Flame - geometric triangles */}
            <path
                d="M40 75 L35 90 L45 85 Z"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="miter"
            />
            <path
                d="M60 75 L55 90 L65 85 Z"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="miter"
            />
        </svg>
    );
};

export default RocketIcon;
