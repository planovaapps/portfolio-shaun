import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'planovaapps@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Shaun, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/planovaapps' },
    { name: 'linkedin', url: 'https://www.linkedin.com/' },
    { name: 'facebook', url: 'https://www.facebook.com/' }
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS',
            icon: '/logo/css.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        }
    ],
    database: [
        {
            name: "SQlite",
            icon: "/logo/sqlite.webp" }
    ],
    backend: [
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        }
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Android Studio',
            icon: '/logo/android_studio.webp',
        },
        {
            name: 'IntelliJ IDEA',
            icon: '/logo/intellij-idea.svg',
        },
        {
            name: 'WebStorm',
            icon: '/logo/webstorm.svg',
        },
        {
            name: 'VSCode',
            icon: '/logo/vs-code.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    // ⭐ QUICKPLAN — MAIN PROJECT
    {
        title: "QuickPlan",
        slug: "quickplan",
        liveUrl: 'https://play.google.com/store/apps/details?id=com.shaun.quickplan',
        year: 2025,
        description: `
        Ever forget an important task, birthday, or meeting?
        Struggle to keep your day organised? You're not alone — but with QuickPlan, staying on top of your life just got simpler.
        <br><br>
        QuickPlan is a clean, powerful daily planner and to-do list app designed to help you stay organised, set task reminders, and boost your productivity — all without needing an account.
        Whether it’s a work project, a grocery list, or a birthday reminder — QuickPlan has your back.
        <br/><br/>
        <ul>
            <li>🔔 Smart task reminders with notification actions</li>
            <li>🎨 Infinite theme color customizations</li>
            <li>🌐 Multi-language support (English, Hindi, Marathi, French)</li>
            <li>⭐ Star Important Tasks. Highlight what matters most.</li>
            <li>📅 Calendar screen with date-based task filtering</li>
            <li>🏷️ Colored task labels</li>
            <li>🏃 Habits Tracker. Set, track, and build positive habits.</li>
            <li>🔍 Search + Sort functionality</li>
            <li>📱 Interactive home screen widget</li>
        </ul>
        <p> You can also check out my project portfolio here: 
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
        `,
        role: `
        Sole Android Developer
        <ul>
            <li>Developed entire UI using Jetpack Compose</li>
            <li>Implemented clean MVVM architecture</li>
            <li>Integrated Room DB for persistent offline storage</li>
            <li>Designed widgets, notifications & animations</li>
        </ul>
        `,
        techStack: [
            "Kotlin",
            "Jetpack Compose",
            "Material Design 3",
            "Room DB",
            "ACRA"
        ],
        thumbnail:  '/projects/images/infinite_customizations.png',
        longThumbnail: '/projects/long/quickplan_promo_800x1000.png',
        images: [
            '/projects/images/feature_graphic.png',
            '/projects/images/infinite_customizations.png',
        ],
    },

    // ⭐ Snake Game (Pygame)
    {
        title: "Snake Game",
        slug: "snake-game",
        year: 2023,
        techStack: ["Python", "Pygame"],
        liveUrl: 'https://github.com/planovaapps/pygame_showcase/tree/main/snake-game',
        thumbnail: "/projects/images/snake_game_running.png",
        longThumbnail: "/projects/images/snake_game_running.png",
        images: [
            "/projects/images/snake_game_start_screen.png",
            "/projects/images/snake_game_running.png"
        ],
        description: `
        A classic Snake game built using Pygame with smooth movement, score tracking, 
        collision handling, and increasing difficulty mechanics.<br/>
        <p> Project source code available 
            <a 
            href="https://github.com/planovaapps/pygame_showcase/tree/main/snake-game"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary transition-colors underline"
            >
            here
            </a>
        </p>
        `,
        role: `
        Python Developer
        <ul>
            <li>Implemented classic Snake game logic from scratch</li>
            <li>Added scoring & speed scaling system</li>
            <li>Handled collision logic and sprite rendering</li>
        </ul>
        `
    },

    // ⭐ Lottie Watermark Remover (Python Script)
    {
        title: "Lottie Watermark Remover",
        slug: "lottie-watermark-remover",
        year: 2024,
        techStack: ["Python", "JSON Manipulation"],
        thumbnail: "/projects/thumbnail/lottie_lab.jpeg",
        longThumbnail: "/projects/thumbnail/lottie_lab.jpeg",
        images: [],
        description: `
        A Python automation script that removes default watermarks added by LottieLab 
        or similar editors by parsing and cleaning the exported JSON animation files.
        `,
        role: `
        Python Developer
        <ul>
            <li>Created a script to detect and remove watermark layers</li>
            <li>Automated JSON cleanup for Lottie files</li>
            <li>Improved animation export workflow for creators</li>
        </ul>
        `
    }
];