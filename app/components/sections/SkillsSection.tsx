/* eslint-disable @next/next/no-img-element */

const languagesAndFrameworks = [
    { name: 'HTML5', icon: 'html5/html5-original.svg', hoverColor: 'hover:border-orange-500/50 hover:shadow-orange-500/20' },
    { name: 'CSS3', icon: 'css3/css3-original.svg', hoverColor: 'hover:border-blue-400/50 hover:shadow-blue-400/20' },
    { name: 'JavaScript', icon: 'javascript/javascript-original.svg', hoverColor: 'hover:border-yellow-500/50 hover:shadow-yellow-500/20' },
    { name: 'TypeScript', icon: 'typescript/typescript-original.svg', hoverColor: 'hover:border-blue-500/50 hover:shadow-blue-500/20' },
    { name: 'Python', icon: 'python/python-original.svg', hoverColor: 'hover:border-yellow-400/50 hover:shadow-yellow-400/20' },
    { name: 'React', icon: 'react/react-original.svg', hoverColor: 'hover:border-cyan-400/50 hover:shadow-cyan-400/20' },
    { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original.svg', hoverColor: 'hover:border-teal-400/50 hover:shadow-teal-400/20' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original.svg', hoverColor: 'hover:border-green-500/50 hover:shadow-green-500/20' },
    { name: 'Next.js', icon: 'nextjs/nextjs-original.svg', hoverColor: 'hover:border-white/50 hover:shadow-white/10', invert: true },
    { name: 'Git', icon: 'git/git-original.svg', hoverColor: 'hover:border-orange-600/50 hover:shadow-orange-600/20' },
    { name: 'Figma', icon: 'figma/figma-original.svg', hoverColor: 'hover:border-pink-500/50 hover:shadow-pink-500/20' },
    { name: 'Nginx', icon: 'nginx/nginx-original.svg', hoverColor: 'hover:border-green-600/50 hover:shadow-green-600/20' },
];

const databases = [
    { name: 'MySQL', icon: 'mysql/mysql-original.svg', hoverColor: 'hover:border-blue-600/50 hover:shadow-blue-600/20' },
    { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg', hoverColor: 'hover:border-green-600/50 hover:shadow-green-600/20' },
    { name: 'MariaDB', icon: 'mariadb/mariadb-original.svg', hoverColor: 'hover:border-amber-600/50 hover:shadow-amber-600/20' },
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg', hoverColor: 'hover:border-sky-500/50 hover:shadow-sky-500/20' },
    { name: 'Firebase', icon: 'firebase/firebase-plain.svg', hoverColor: 'hover:border-amber-500/50 hover:shadow-amber-500/20' },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="min-h-screen flex items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-xs sm:text-sm font-bold tracking-widest text-indigo-500 uppercase mb-2 sm:mb-3">My Arsenal</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Technical <span className="gradient-text">Proficiency</span>
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Programming Languages & Frameworks */}
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-6 sm:mb-8 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Languages & Frameworks
                    </h4>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        {languagesAndFrameworks.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center group">
                                <div className={`skill-card ${skill.hoverColor}`}>
                                    <img
                                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                                        alt={skill.name}
                                        className={skill.invert ? 'invert' : ''}
                                    />
                                </div>
                                <span className="text-gray-400 text-[10px] sm:text-xs mt-2 sm:mt-3 group-hover:text-white transition-colors text-center">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Databases */}
                <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-6 sm:mb-8 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                            />
                        </svg>
                        Databases
                    </h4>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                        {databases.map((db) => (
                            <div key={db.name} className="flex flex-col items-center group">
                                <div className={`skill-card ${db.hoverColor}`}>
                                    <img
                                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${db.icon}`}
                                        alt={db.name}
                                    />
                                </div>
                                <span className="text-gray-400 text-[10px] sm:text-xs mt-2 sm:mt-3 group-hover:text-white transition-colors">
                                    {db.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
