import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'category',
      label: 'HTML',
      link: {
        type: 'generated-index',
        title: 'Cours HTML',
        slug: '/cours/html',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'html',
        },
      ],
    },
    {
      type: 'category',
      label: 'CSS',
      link: { type: 'doc', id: 'css/intro' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'css',
        },
      ],
    },
  ],
}

export default sidebars
