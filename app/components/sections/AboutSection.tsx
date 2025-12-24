'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const Profile3D = dynamic(() => import('../ui/Profile3D'), { ssr: false });

const skills = [
    { label: 'UI/UX Design', color: 'bg-indigo-500' },
    { label: 'Web Development', color: 'bg-purple-500' },
    { label: 'Project Manager', color: 'bg-indigo-500' },
    { label: 'Mobile App Development', color: 'bg-purple-500' },
];

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto w-full font-light">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2 relative group flex items-center justify-center" style={{ minHeight: '620px' }}>
                        {/* 3D Animated Background Canvas */}
                        <Profile3D />

                        {/* Glow effect behind image */}
                        <div
                            className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 blur-3xl animate-pulse"
                            style={{ zIndex: 2 }}
                        />

                        {/* Profile Image */}
                        <div
                            className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500"
                            style={{ zIndex: 10 }}
                        >
                            <Image
                                src="/images/profile/dion.png"
                                alt="Dion Kobi"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Building scalable digital solutions with
                            <span className="gradient-text"> passion & precision.</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            I enjoy building scalable digital solutions with a clean and passionate approach. Currently, I am a
                            Software Engineer and Full Stack Developer, as well as a student at Universitas Klabat, with a strong
                            interest in turning ideas into useful and impactful software.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            In addition, I am part of a software house company called KlabatDev Company, where I work as a Full
                            Stack Developer. There, I contribute to various projects, from system design to backend and frontend
                            development, ensuring that applications are reliable and ready for real-world use.
                        </p>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <span className={`block w-2 h-2 rounded-full ${skill.color}`} />
                                    <span className="text-white/80">{skill.label}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
                        >
                            Download Resume
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
