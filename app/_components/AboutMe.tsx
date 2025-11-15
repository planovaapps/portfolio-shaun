'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I love building clean, intuitive and meaningful products that
                    genuinely help people in their daily lives.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Shaun.
                            <br/>
                        </p>

                        {/* Profile GIF */}
                        <div className="mt-8 w-full flex justify-center slide-up-and-fade">
                            <img
                                src="assets/animated_profile_pic.gif"
                                alt="Profile GIF"
                                className="
                w-44
                h-44
                rounded-full
                object-cover
                border
                border-white/10
                shadow-xl
            "
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a Computer Engineering student with a passion
                                for building real-world applications. I enjoy working on
                                Android development, frontend development, and exploring
                                backend + cloud technologies.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                One of my recent projects is{' '}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.shaun.quickplan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-foreground hover:text-primary transition-colors underline"
                                >
                                    QuickPlan
                                </a>
                                — a productivity & task-planning Android app published on the Google Play Store.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                You can also check out my project portfolio here:{' '}
                                <a
                                    href="https://planovaapps.github.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-foreground hover:text-primary transition-colors underline"
                                >
                                    planovaapps.github.io
                                </a>
                                .
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I’m currently improving my skills in Data Structures &
                                Algorithms, AI/ML, and modern development tools while
                                building projects that challenge me and help me grow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
