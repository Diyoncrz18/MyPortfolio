import TypingAnimation from '../ui/TypingAnimation';

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Done' },
    { value: '15+', label: 'Happy Clients' },
    { value: '10+', label: 'Awards Won' },
];

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center text-center md:items-start md:text-left mb-12 md:mb-16 md:ml-6">
                    <TypingAnimation />
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
                        <a
                            href="#portfolio"
                            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-center text-sm sm:text-base"
                        >
                            View portfolio
                        </a>
                        <a
                            href="#about"
                            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm text-center text-sm sm:text-base"
                        >
                            More about me
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 transition-colors text-center"
                        >
                            <div className="text-indigo-400 text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                            <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
