
import { motion, useReducedMotion } from 'motion/react'

/* Longitude animation */
const LONGITUDE_VARIANTS = {
    normal: {
        scaleX: 1,
    },
    animate: {
        scaleX: [1, 0, -1, 0, 1],
        transition: {
            duration: 3,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.25, 0.5, 0.75, 1],
        },
    },
}

/* Component */
export function GlobeIcon({
    className = '',
    size = 48,
    color = 'currentColor',
    ...props
}) {
    const shouldReduceMotion = useReducedMotion()
    const animationState = shouldReduceMotion
        ? 'normal'
        : 'animate'

    return (
        <span
            className={className}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color,
                verticalAlign: 'middle',
            }}
            {...props}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                {/* Outer sphere */}
                <circle cx="50" cy="50" r="40" />

                {/* Latitude lines */}
                <ellipse
                    cx="50"
                    cy="50"
                    rx="40"
                    ry="15"
                />

                <path d="M10 50H90" />

                {/* Rotating longitude lines */}
                <motion.g
                    initial="normal"
                    animate={animationState}
                    variants={LONGITUDE_VARIANTS}
                    style={{
                        transformOrigin: '50px 50px',
                    }}
                >
                    <ellipse
                        cx="50"
                        cy="50"
                        rx="18"
                        ry="40"
                    />

                    <ellipse
                        cx="50"
                        cy="50"
                        rx="30"
                        ry="40"
                    />
                </motion.g>
            </svg>
        </span>
    )
}
