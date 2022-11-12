const MY_PROJECT = [
  {
    title: 'Next AnimeDB (Anilist API)',
    slug: 'next-animedb-anilist-api',
    image: 'https://i.ibb.co/ZLSgMHT/Next-Anime-DB-Anilist-API.png',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: true,
    preview: 'https://animedb.my.id',
    source_code: '',
  },
  {
    title: 'Next Blog Mongo DB',
    slug: 'next-blog-mongo-db',
    image: 'https://i.ibb.co/cC2F5H0/Next-Blog-Mongo-DB.png',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: true,
    preview: 'https://animeinfo-id.vercel.app/',
    source_code: 'https://github.com/andriandev/next-blog-anime-info-id',
  },
  {
    title: 'Next Portofolio',
    slug: 'next-portofolio',
    image: 'https://i.ibb.co/RBxfCXV/Next-Portofolio.png',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: true,
    preview: 'https://andriandev.my.id',
    source_code: '',
  },
  {
    title: 'Simple Chakra UI Design',
    slug: 'simple-chakra-ui-design',
    image: 'https://i.ibb.co/Qp5dk1f/Simple-Chakra-UI-Design.png',
    stack: ['Next Js', 'React Js', 'Chakra UI'],
    isFeatured: true,
    preview: 'https://adikfilm.link',
    source_code: 'https://github.com/andriandev/adikfilm-link',
  },
  {
    title: 'Simple Next Blog',
    slug: 'simple-next-blog',
    image: 'https://i.ibb.co/yQZmFdh/Simple-Next-Blog.png',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: false,
    preview: 'https://andriandev-next-blog.vercel.app/',
    source_code: 'https://github.com/andriandev/next-blog',
  },
  {
    title: 'Simple Next Bootstrap Layout',
    slug: 'simple-next-bootstrap-layout',
    image: 'https://i.ibb.co/RQcRqvj/Simple-Next-Bootstrap-Layout.png',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: false,
    preview: 'https://andriandev-next-bootstrap.vercel.app/',
    source_code: 'https://github.com/andriandev/next-bootstrap',
  },
  {
    title: 'Simple Next Event',
    slug: 'simple-next-event',
    image: 'https://i.ibb.co/f12qyGb/Simple-Next-Event.png',
    stack: ['Next Js', 'React Js'],
    isFeatured: false,
    preview: 'https://andriandev-next-events-project.vercel.app/',
    source_code: 'https://github.com/andriandev/next-events-project',
  },
  {
    title: 'Simple React Feedback App',
    slug: 'simple-react-feedback-app',
    image: 'https://i.ibb.co/fHpdDDZ/React-Feedback-App.png',
    stack: ['React Js'],
    isFeatured: false,
    preview: 'https://andriandev-react-feedback-app.vercel.app/',
    source_code: 'https://github.com/andriandev/react-feedback-app',
  },
  {
    title: 'Adblock Detector Javascript',
    slug: 'adblock-detector-javascript',
    image: 'https://i.ibb.co/sq1Fbvw/Adblock-Detector-Javascript.png',
    stack: ['Javascript'],
    isFeatured: false,
    preview: 'https://andriandev.github.io/adblock-javascipt/',
    source_code: 'https://github.com/andriandev/adblock-javascipt',
  },
];

const limitProjectPerPage = 50;

export function getAllProject(page = 1, limit = limitProjectPerPage) {
  const limitProject = limit * page;
  const offsetProject = (page - 1) * limit;
  return MY_PROJECT.slice(offsetProject, limitProject);
}

export function getFeaturedProject() {
  return MY_PROJECT.filter((project) => project.isFeatured);
}

export function getProjectBySlug(slug) {
  return MY_PROJECT.find((project) => project.slug === slug);
}

export function getPageCount(limit = limitProjectPerPage) {
  const pageCount = MY_PROJECT.length / limit;
  return Math.ceil(pageCount);
}
