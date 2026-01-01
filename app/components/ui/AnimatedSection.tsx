'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
    delay?: number;
    threshold?: number;
    staggerChildren?: boolean;
}

export default function AnimatedSection({
    children,
    className = '',
    animation = 'fadeInUp',
    delay = 0,
    threshold = 0.1,
    staggerChildren = false,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    const getAnimationClass = () => {
        switch (animation) {
            case 'scaleIn':
                return 'animate-scale';
            case 'slideLeft':
                return 'animate-slide-left';
            case 'slideRight':
                return 'animate-slide-right';
            case 'fadeIn':
            case 'fadeInUp':
            default:
                return 'animate-section';
        }
    };

    const animationStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

    return (
        <div
            ref={ref}
            className={`${getAnimationClass()} ${staggerChildren ? 'stagger-children' : ''} ${isVisible ? 'is-visible' : ''} ${className}`}
            style={animationStyle}
        >
            {children}
        </div>
    );
}
