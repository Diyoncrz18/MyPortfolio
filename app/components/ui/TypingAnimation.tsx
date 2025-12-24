'use client';

import { useEffect, useState } from 'react';

export default function TypingAnimation() {
    const [displayText, setDisplayText] = useState('');
    const [currentPhase, setCurrentPhase] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const prefix = "Hi, My Name Is ";
    const middle = "Dion Kobi";
    const suffix = "I am currently working as a software engineer.";

    useEffect(() => {
        const phases = [prefix, middle, suffix];
        const currentText = phases[currentPhase] || '';

        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + currentText[charIndex]);
                setCharIndex(charIndex + 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else if (currentPhase < 2) {
            const timeout = setTimeout(() => {
                setCurrentPhase(currentPhase + 1);
                setCharIndex(0);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            // Reset after completion
            const timeout = setTimeout(() => {
                setDisplayText('');
                setCurrentPhase(0);
                setCharIndex(0);
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, currentPhase]);

    const getPrefixText = () => {
        if (currentPhase === 0) {
            return displayText;
        }
        return prefix;
    };

    const getMiddleText = () => {
        if (currentPhase === 0) return '';
        if (currentPhase === 1) {
            return displayText.slice(prefix.length);
        }
        return middle;
    };

    const getSuffixText = () => {
        if (currentPhase < 2) return '';
        return displayText.slice(prefix.length + middle.length);
    };

    const showCursor = () => {
        return <span className="animate-pulse">|</span>;
    };

    return (
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight min-h-[5em] sm:min-h-[4em]">
            <span className="text-xl sm:text-3xl md:text-5xl font-semibold block mb-2">
                {getPrefixText()}
                {currentPhase === 0 && showCursor()}
            </span>
            {currentPhase >= 1 && (
                <span className="gradient-text text-2xl sm:text-3xl md:text-5xl font-bold block mb-3 sm:mb-4">
                    {getMiddleText()}
                    {currentPhase === 1 && showCursor()}
                </span>
            )}
            {currentPhase >= 2 && (
                <span className="text-base sm:text-xl md:text-3xl font-normal text-gray-400 block">
                    {getSuffixText()}
                    {currentPhase === 2 && showCursor()}
                </span>
            )}
        </h1>
    );
}
