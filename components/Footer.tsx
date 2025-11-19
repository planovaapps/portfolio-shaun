import { GENERAL_INFO } from '@/lib/data';
import { Github } from 'lucide-react';

const Footer = async () => {
    return (
        <footer id="contact" className="pb-10 pt-16 text-center border-t border-white/10">
            <div className="container mx-auto">

                {/* Heading */}
                <p className="text-lg text-muted-foreground">
                    Have a project in mind?
                </p>

                {/* Email */}
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton mt-4 inline-block hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                {/* Bottom */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://github.com/planovaapps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-white transition hover:underline"
                    >
                        <Github size={18} />
                        <span>Designed & built with ❤</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
