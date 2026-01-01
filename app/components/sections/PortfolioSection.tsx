import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';

const projects = [
    {
        id: 1,
        title: 'Auto Motive Website',
        category: 'Car Website',
        description: 'Platform otomotif dengan sistem inventori terintegrasi untuk memantau stok kendaraan secara real-time.',
        gradient: 'from-indigo-900/50 to-purple-900/50',
        categoryColor: 'text-indigo-400',
        borderColor: 'border-indigo-500/50',
        image: '/images/portfolio/Screenshot (1).png',
    },
    {
        id: 2,
        title: 'Luxuri Hotel',
        category: 'Hospitality Website',
        description: 'Website hotel mewah dengan sistem reservasi online, galeri interaktif, dan pengalaman pengguna premium.',
        gradient: 'from-purple-900/50 to-pink-900/50',
        categoryColor: 'text-purple-400',
        borderColor: 'border-purple-500/50',
        image: '/images/portfolio/Screenshot (43).png',
    },
    {
        id: 3,
        title: 'Stay  Hotel',
        category: 'Hospitality Website',
        description: 'Website hotel mewah dengan sistem reservasi online, galeri interaktif, dan pengalaman pengguna premium.',
        gradient: 'from-blue-900/50 to-cyan-900/50',
        categoryColor: 'text-blue-400',
        borderColor: 'border-blue-500/50',
        image: '/images/portfolio/Screenshot (44).png',
    },
    {
        id: 4,
        title: 'Hotel Sochi',
        category: 'Hospitality Website',
        description: 'Website hotel dengan sistem manajemen terintegrasi untuk pemesanan kamar',
        gradient: 'from-emerald-900/50 to-teal-900/50',
        categoryColor: 'text-emerald-400',
        borderColor: 'border-emerald-500/50',
        image: '/images/portfolio/Screenshot (47).png',
    },
    {
        id: 5,
        title: 'Car Rental Website',
        category: 'E-Commerce',
        description: 'Website rental kendaraan dengan katalog lengkap, sistem booking online, dan informasi harga transparan.',
        gradient: 'from-orange-900/50 to-amber-900/50',
        categoryColor: 'text-orange-400',
        borderColor: 'border-orange-500/50',
        image: '/images/portfolio/image.png',
    },
    {
        id: 6,
        title: 'Company Profile',
        category: 'Software House',
        description: 'Landing page profesional dengan desain 3D modern, animasi menarik, dan call-to-action yang efektif.',
        gradient: 'from-rose-900/50 to-pink-900/50',
        categoryColor: 'text-rose-400',
        borderColor: 'border-rose-500/50',
        image: '/images/portfolio/Screenshot (6).png',
    },
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="min-h-screen flex items-center py-20 px-6 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto w-full">
                <AnimatedSection animation="fadeInUp">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3">Selected Works</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Featured <span className="gradient-text">Projects</span>
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A showcase of my recent work and creative endeavors
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={150} staggerChildren>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-60 group-hover:opacity-30 transition-opacity`}
                                    />
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
                </AnimatedSection>
            </div>
        </section>
    );
}

