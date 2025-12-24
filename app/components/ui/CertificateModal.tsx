'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    certificate: {
        imageSrc: string;
        title: string;
        category: string;
        issuer: string;
        year: string;
    } | null;
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !certificate) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div>
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                            {certificate.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1">{certificate.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            {certificate.issuer} • {certificate.year}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 overflow-auto max-h-[70vh]">
                    <Image
                        src={certificate.imageSrc}
                        alt={certificate.title}
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
