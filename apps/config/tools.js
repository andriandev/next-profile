const MY_TOOLS = [
  {
    title: 'Base64 Encode Decode',
    slug: 'base64',
    image: 'https://i.ibb.co/h8wjxqx/Base64-Tools.png',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: true,
    preview: '/tools/base64',
    source_code: '',
  },
  {
    title: 'Money Converter',
    slug: 'money-converter',
    image: 'https://i.ibb.co/my30C17/Money-Converter-Tools.png',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: true,
    preview: '/tools/money-converter',
    source_code: '',
  },
  {
    title: 'Web Screenshot',
    slug: 'web-screenshot',
    image: 'https://i.ibb.co/By7c3Px/Web-Screenshot-Tools.png',
    stack: ['Next Js', 'React Js', 'Bootstrap'],
    isFeatured: true,
    preview: '/tools/web-screenshot',
    source_code: '',
  },
];

const limitToolsPerPage = 50;

export function getAllTools(page = 1, limit = limitToolsPerPage) {
  const limitTools = limit * page;
  const offsetTools = (page - 1) * limit;
  return MY_TOOLS.slice(offsetTools, limitTools);
}

export function getFeaturedTools() {
  return MY_TOOLS.filter((tools) => tools.isFeatured);
}

export function getToolsBySlug(slug) {
  return MY_TOOLS.find((tools) => tools.slug === slug);
}

export function getPageCount(limit = limitToolsPerPage) {
  const pageCount = MY_TOOLS.length / limit;
  return Math.ceil(pageCount);
}
