'use client';

import { useState } from 'react';
import Image from 'next/image';
import CertificateModal from '../ui/CertificateModal';
import AnimatedSection from '../ui/AnimatedSection';

const certificates = [
    {
        imageSrc: '/images/certificates/dicoding-FrontEnd.jpg',
        title: 'Front-End Web Developer',
        category: 'Web Development',
        issuer: 'Dicoding Indonesia',
        year: '2024',
        hoverColor: 'hover:border-indigo-500/50',
        overlayColor: 'bg-indigo-600/80',
        categoryColor: 'text-indigo-400',
        titleHover: 'group-hover:text-indigo-400',
    },
    {
        imageSrc: '/images/certificates/codepolitan-fullstack.jpg',
        title: 'Full Stack Web Developer',
        category: 'Full Stack',
        issuer: 'Codepolitan',
        year: '2024',
        hoverColor: 'hover:border-purple-500/50',
        overlayColor: 'bg-purple-600/80',
        categoryColor: 'text-purple-400',
        titleHover: 'group-hover:text-purple-400',
    },
    {
        imageSrc: '/images/certificates/uiux.jpg',
        title: 'UI/UX Design',
        category: 'Design',
        issuer: 'Professional Certification',
        year: '2025',
        hoverColor: 'hover:border-pink-500/50',
        overlayColor: 'bg-pink-600/80',
        categoryColor: 'text-pink-400',
        titleHover: 'group-hover:text-pink-400',
    },
    {
        imageSrc: '/images/certificates/hackerrank2.jpg',
        title: 'JavaScript Skills',
        category: 'JavaScript',
        issuer: 'HackerRank',
        year: '2023',
        hoverColor: 'hover:border-cyan-500/50',
        overlayColor: 'bg-cyan-600/80',
        categoryColor: 'text-cyan-400',
        titleHover: 'group-hover:text-cyan-400',
    },
    {
        imageSrc: '/images/certificates/hackerrank3.jpg',
        title: 'SQL Skills',
        category: 'Database',
        issuer: 'HackerRank',
        year: '2023',
        hoverColor: 'hover:border-orange-500/50',
        overlayColor: 'bg-orange-600/80',
        categoryColor: 'text-orange-400',
        titleHover: 'group-hover:text-orange-400',
    },
    {
        imageSrc: '/images/certificates/ymke14ppnxuo3cmk4wyn.jpg',
        title: 'Professional Certificate',
        category: 'Achievement',
        issuer: 'Professional Certification',
        year: '2024',
        hoverColor: 'hover:border-amber-500/50',
        overlayColor: 'bg-amber-600/80',
        categoryColor: 'text-amber-400',
        titleHover: 'group-hover:text-amber-400',
    },
];

export default function CertificatesSection() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <>
            <section id="certificates" className="min-h-screen flex items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto w-full">
                    <AnimatedSection animation="fadeInUp">
                        <div className="text-center mb-10 sm:mb-12 md:mb-16">
                            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-indigo-500 uppercase mb-2 sm:mb-3">Achievements</h2>
                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
                                My <span className="gradient-text">Certificates</span>
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                                Professional certifications and achievements that validate my expertise
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={150} staggerChildren>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className={`group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${cert.hoverColor} transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
                                    onClick={() => setSelectedCert(cert)}
                                >
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={cert.imageSrc}
                                            alt={cert.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div
                                            className={`absolute inset-0 ${cert.overlayColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                                        >
                                            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 font-semibold rounded-full text-sm sm:text-base">
                                                View Certificate
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                                            <span className={`text-[10px] sm:text-xs font-bold ${cert.categoryColor} uppercase tracking-wider`}>
                                                {cert.category}
                                            </span>
                                            <span className="text-[10px] sm:text-xs text-gray-500">{cert.year}</span>
                                        </div>
                                        <h4 className={`text-sm sm:text-lg font-bold mb-1 sm:mb-2 ${cert.titleHover} transition-colors`}>{cert.title}</h4>
                                        <p className="text-gray-400 text-xs sm:text-sm">Issued by {cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <CertificateModal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                certificate={selectedCert}
            />
        </>
    );
}



