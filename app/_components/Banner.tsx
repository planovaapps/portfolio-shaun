'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Typewriter from 'typewriter-effect';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(() => {
        // Slide-up animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'bottom 70%',
                end: 'bottom 10%',
                scrub: 1,
            },
        });

        tl.fromTo(
            '.slide-up-and-fade',
            { y: 0 },
            { y: -150, opacity: 0, stagger: 0.02 },
        );

        // Count-up animation
        const counters = gsap.utils.toArray<HTMLElement>('.count') as HTMLElement[];

        counters.forEach((counter) => {
            const finalValue = Number(counter.dataset.target ?? '0');
            const obj = { val: 0 };

            gsap.to(obj, {
                val: finalValue,
                duration: 2,
                ease: 'power1.out',
                delay: 1.5,
                scrollTrigger: {
                    trigger: counter,
                    start: 'top 90%',
                },
                onUpdate: () => {
                    counter.textContent = String(Math.round(obj.val));
                },
            });
        });
    }, { scope: containerRef });

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton flex gap-3">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 40,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("STUDENT")
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString("WEB DEVELOPER")
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString("ANDROID DEV")
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString("PROBLEM SOLVER")
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground group">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Shaun
                        </span>
                        , a Computer Engineering student at&nbsp;
                        <a
                            href="https://frcrce.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-foreground transition-colors underline group-hover:text-primary"
                        >
                            <span className="font-medium text-foreground group-hover:text-primary">
                              Fr. Conceicao Rodrigues College of Engineering
                            </span>
                        </a>
                        .
                        I build modern Android apps using Kotlin & Jetpack Compose, and
                        I also work with web technologies like HTML, CSS,
                        JavaScript, and React.
                    </p>
                    <Button
                        as="link"
                        rel="noopener noreferrer"
                        href="#selected-projects"
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        View My Projects
                    </Button>
                </div>

                {/* RIGHT SIDE - STATISTICS */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade group cursor-pointer">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary group-hover:text-white transition-colors duration-300 mb-1.5">
                            <span className="count" data-target="1">0</span>+
                        </h5>
                        <p className="text-muted-foreground text-sm">Published App</p>
                    </div>

                    <div className="slide-up-and-fade group cursor-pointer">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary group-hover:text-white transition-colors duration-300 mb-1.5">
                            <span className="count" data-target="10">0</span>+
                        </h5>
                        <p className="text-muted-foreground text-sm">Projects Built</p>
                    </div>

                    <div className="slide-up-and-fade group cursor-pointer">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary group-hover:text-white transition-colors duration-300 mb-1.5">
                            CE
                        </h5>
                        <p className="text-muted-foreground">B.Tech Student</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
