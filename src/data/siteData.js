export const siteInfo = {
  name: 'Haro Archive', //左上角标题
  banner: '/images/demo-banner.jpg',
  navItems: [
    { label: 'Home', href: '/' },
    // { label: 'Archive', href: '/archive/' },
    { label: 'About', href: '/about/' },
  ],
  profile: {
    name: '不知源的哈罗哈',
    avatar: '/images/demo-avatar.png',
    bio: '社会で宇宙人なんてあだ名でも',
    bio2: '宇宙の待ち合わせ室で',
    bio3: 'メイビーまた巡りあえるよね',
    links: ['GitHub', 'Twitter', 'Mail'],
  },
}

export const notices = [
  'Welcome to my new blog! This site is still under construction.',
  'This React version keeps each section isolated for future API integration.',
]

export const categories = [
  { name: 'Examples', count: 6 },
]

export const tags = [
  { name: 'Markdown', count: 4 },
  { name: 'Blogging', count: 3 },
  { name: 'Demo', count: 6 },
  { name: 'Video', count: 1 },
]

export const posts = [
  {
    id: 'guide',
    title: 'How to Use This Blog Template',
    href: '/posts/guide/',
    date: '2024-04-01',
    category: 'Examples',
    tags: ['Markdown', 'Blogging', 'Demo'],
    excerpt: '测试中文显示.',
    cover: '/images/guide-cover.jpeg',
    words: 986,
    minutes: 4,
  },
  {
    id: 'markdown',
    title: '中文 Example',
    href: '/posts/markdown/',
    date: '2023-10-05',
    category: 'Examples',
    tags: ['Markdown', 'Blogging', 'Demo'],
    excerpt: '测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示.测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示.测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示.测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示测试中文显示.',
    words: 1490,
    minutes: 6,
  },
  {
    id: 'markdown-extended',
    title: 'Extended Markdown Features',
    href: '/posts/markdown-extended/',
    date: '2023-09-18',
    category: 'Examples',
    tags: ['Markdown', 'Demo'],
    excerpt: 'Extra syntax examples for richer posts, including alerts, math-style content, diagrams, and custom callout blocks.',
    words: 1210,
    minutes: 5,
  },
  {
    id: 'expressive-code',
    title: 'Expressive Code Example',
    href: '/posts/expressive-code/',
    date: '2023-08-16',
    category: 'Examples',
    tags: ['Blogging', 'Demo'],
    excerpt: 'A quick look at code presentation, highlighted lines, terminal frames, and compact snippets inside article pages.',
    words: 680,
    minutes: 3,
  },
  {
    id: 'video',
    title: 'Include Video in the Posts',
    href: '/posts/video/',
    date: '2022-08-01',
    category: 'Examples',
    tags: ['Demo', 'Video'],
    excerpt: 'This post explains how video content can be embedded into long-form pages while keeping the card layout consistent.',
    words: 210,
    minutes: 1,
  },
  {
    id: 'draft',
    title: 'Draft Example',
    href: '/posts/draft/',
    date: '2022-07-01',
    category: 'Examples',
    tags: ['Markdown', 'Blogging', 'Demo'],
    excerpt: 'This article is currently in a draft state and is not published. The content is still a work in progress and may require review.',
    words: 72,
    minutes: 1,
  },
]
