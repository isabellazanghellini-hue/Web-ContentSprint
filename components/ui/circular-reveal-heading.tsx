"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

interface TextItem {
    text: string;
}

interface CircularRevealHeadingProps {
    items: TextItem[];
    centerText: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const sizeConfig = {
    sm: {
        container: 'h-[300px] w-[300px]',
        fontSize: 16,
        radius: 130,
        gap: 38,
    },
    md: {
        container: 'h-[400px] w-[400px]',
        fontSize: 18,
        radius: 160,
        gap: 30,
    },
    lg: {
        container: 'h-[480px] w-[480px]',
        fontSize: 22,
        radius: 185,
        gap: 22,
    }
};

export const CircularRevealHeading = ({
    items,
    centerText,
    className,
    size = 'md'
}: CircularRevealHeadingProps) => {
    const config = sizeConfig[size];

    const createTextSegments = () => {
        const totalItems = items.length;
        const totalGapDegrees = config.gap * totalItems;
        const availableDegrees = 360 - totalGapDegrees;
        const segmentDegrees = availableDegrees / totalItems;
        return items.map((item, index) => {
            const startPosition = index * (segmentDegrees + config.gap);
            const startOffset = `${(startPosition / 360) * 100}%`;
            return (
                <g key={index}>
                    <text
                        fontSize={config.fontSize}
                        fontWeight="700"
                        letterSpacing="0.3em"
                        className="uppercase"
                    >
                        <textPath
                            href="#curve"
                            fill="url(#textGradient)"
                            startOffset={startOffset}
                            textLength={`${segmentDegrees * 1.75}`}
                            lengthAdjust="spacingAndGlyphs"
                        >
                            {item.text}
                        </textPath>
                    </text>
                </g>
            );
        });
    };

    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
                "relative overflow-hidden rounded-full",
                config.container,
                className
            )}
            style={{
                background: "radial-gradient(circle at 40% 35%, #2D1A6E, #14083E 70%)",
                boxShadow: "20px 20px 50px #0a0320, -10px -10px 30px #2e1a70, 0 0 80px rgba(128,68,216,0.2)"
            }}
        >
            {/* Inner shadow ring */}
            <div
                className="absolute inset-[2px] rounded-full pointer-events-none"
                style={{ boxShadow: "inset 3px 3px 12px #0a0320, inset -3px -3px 12px #2a1868" }}
            />

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                {centerText}
            </div>

            {/* Rotating text ring */}
            <motion.div
                className="absolute inset-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D4AAFF" />
                            <stop offset="50%" stopColor="#8044D8" />
                            <stop offset="100%" stopColor="#C89AF0" />
                        </linearGradient>
                    </defs>
                    <path
                        id="curve"
                        fill="none"
                        d={`M 200,200 m -${config.radius},0 a ${config.radius},${config.radius} 0 1,1 ${config.radius * 2},0 a ${config.radius},${config.radius} 0 1,1 -${config.radius * 2},0`}
                    />
                    {createTextSegments()}
                </svg>
            </motion.div>

            {/* Subtle glow ring */}
            <div
                className="absolute inset-6 rounded-full pointer-events-none"
                style={{ boxShadow: "0 0 40px rgba(128,68,216,0.25), inset 0 0 20px rgba(128,68,216,0.1)" }}
            />
        </motion.div>
    );
};
