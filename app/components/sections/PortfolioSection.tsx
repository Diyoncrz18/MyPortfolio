const projects = [
    {
        id: 1,
        title: 'Neon Finance Dashboard',
        category: 'Fintech App',
        description: 'A comprehensive financial dashboard with real-time data visualization and dark mode aesthetic.',
        gradient: 'from-indigo-900/50 to-purple-900/50',
        categoryColor: 'text-indigo-400',
        borderColor: 'border-indigo-500/50',
    },
    {
        id: 2,
        title: 'Luxe Streetwear',
        category: 'E-Commerce',
        description: 'High-end fashion e-commerce platform with 3D product previews and seamless checkout.',
        gradient: 'from-purple-900/50 to-pink-900/50',
        categoryColor: 'text-purple-400',
        borderColor: 'border-purple-500/50',
    },
    {
        id: 3,
        title: 'Neural Interface',
        category: 'AI Platform',
        description: 'Web interface for an AI generation engine, featuring node-based workflows and instant previews.',
        gradient: 'from-blue-900/50 to-cyan-900/50',
        categoryColor: 'text-blue-400',
        borderColor: 'border-blue-500/50',
    },
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="min-h-screen flex items-center py-20 px-6 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3">Selected Works</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h3>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and creative endeavors
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="aspect-video bg-gray-800 relative overflow-hidden">
                                <div
                                    className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} group-hover:opacity-0 transition-opacity`}
                                />
                                <div className="flex items-center justify-center h-full text-white/10 font-bold text-4xl">
                                    PROJECT 0{project.id}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className={`text-xs font-bold ${project.categoryColor} uppercase tracking-wider mb-2`}>
                                    {project.category}
                                </div>
                                <h4 className={`text-xl font-bold mb-3 group-hover:${project.categoryColor} transition-colors`}>
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <a
                                    href="#"
                                    className={`inline-block text-sm font-medium text-white border-b ${project.borderColor} pb-0.5 hover:${project.categoryColor} transition-colors`}
                                >
                                    View Case Study
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
