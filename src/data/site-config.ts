export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Victor R.R.',
    subtitle: 'Programador',
    description: 'Portfolio y web personal',
    image: {
        src: '',
        alt: ''
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/vctorr1'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/v%C3%ADctor-r%C3%ADos-recio-0b4432299/'
        }
    ],
    hero: {
        title: 'Portfolio y proyectos personales',
        text: "Soy Víctor Ríos, programador recientemente titulado y especializado en Java, aunque he realizado proyectos en otros lenguajes, como Dart/Flutter, Javascript y Python. Visíte <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
        image: {
            src: '',
            alt: ''
        },
        actions: [
            {
                text: 'Contactar',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Actualizaciones por email',
        text: 'Recibe información sobre mis proyectos y publicaciones.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
