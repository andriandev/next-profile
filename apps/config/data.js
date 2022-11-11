const MY_PROJECT = [
  {
    title: 'Anime DB',
    slug: 'projek-satu',
    image: 'https://i.ibb.co/y0Nf2rp/rekomendasi-anime-time-travel.jpg',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: true,
  },
  {
    title: 'Next Blog',
    slug: 'projek-dua',
    image: 'https://i.ibb.co/y0Nf2rp/rekomendasi-anime-time-travel.jpg',
    stack: ['Next Js', 'Bootstrap'],
    isFeatured: true,
  },
  {
    title: 'Feedback App',
    slug: 'projek-tiga',
    image: 'https://i.ibb.co/y0Nf2rp/rekomendasi-anime-time-travel.jpg',
    stack: ['React Js'],
    isFeatured: true,
  },
  {
    title: 'Next Blog MongoDB',
    slug: 'projek-empat',
    image: 'https://i.ibb.co/y0Nf2rp/rekomendasi-anime-time-travel.jpg',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: false,
  },
  {
    title: 'Next Blog 5',
    slug: 'projek-lima',
    image: 'https://i.ibb.co/y0Nf2rp/rekomendasi-anime-time-travel.jpg',
    stack: ['Next Js', 'Bootstrap'],
    isFeatured: false,
  },
  {
    title: 'Feedback App 6',
    slug: 'projek-enam',
    image: 'https://i.ibb.co/y0Nf2rp/rekomendasi-anime-time-travel.jpg',
    stack: ['React Js'],
    isFeatured: true,
  },
  {
    title: 'Next Blog MongoDB 7',
    slug: 'projek-tujuh',
    image: 'https://i.ibb.co/y0Nf2rp/rekomendasi-anime-time-travel.jpg',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: false,
  },
];

const limitProjectPerPage = 50;

export function getAllProject(page = 1, limit = limitProjectPerPage) {
  const limitPost = limit * page;
  const offsetPost = (page - 1) * limit;
  return MY_PROJECT.slice(offsetPost, limitPost);
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
