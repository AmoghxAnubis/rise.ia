const ClapperIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Main board body */}
            <rect
                x="15"
                y="45"
                width="70"
                height="40"
                stroke="white"
                strokeWidth="4"
                fill="none"
            />

            {/* Top clapperboard stick - angular */}
            <path
                d="M15 45 L20 25 L85 25 L85 45 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinejoin="miter"
            />

            {/* Clapper stripes - diagonal lines */}
            <line
                x1="30"
                y1="25"
                x2="25"
                y2="45"
                stroke="white"
                strokeWidth="3"
            />
            <line
                x1="45"
                y1="25"
                x2="40"
                y2="45"
                stroke="white"
                strokeWidth="3"
            />
            <line
                x1="60"
                y1="25"
                x2="55"
                y2="45"
                stroke="white"
                strokeWidth="3"
            />
            <line
                x1="75"
                y1="25"
                x2="70"
                y2="45"
                stroke="white"
                strokeWidth="3"
            />

            {/* Play triangle in center */}
            <path
                d="M40 55 L40 75 L60 65 Z"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="miter"
            />
        </svg>
    );
};

export default ClapperIcon;
