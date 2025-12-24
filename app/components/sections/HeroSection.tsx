import TypingAnimation from '../ui/TypingAnimation';

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Done' },
    { value: '15+', label: 'Happy Clients' },
    { value: '10+', label: 'Awards Won' },
];

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-start text-left mb-16 ml-6">
                    <TypingAnimation />
                    <div className="flex flex-col sm:flex-row gap-5">
                        <a
                            href="#portfolio"
                            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            View portfolio
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                        >
                            More about me
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-12 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="min-w-40 px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 transition-colors text-center"
                        >
                            <div className="text-indigo-400 text-4xl font-bold mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
