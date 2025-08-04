// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro', // Intro doc at the top
    {
      type: 'category',
      label: 'Tech Stacks',
      items: [
        'nodejs',
        'cpp',
        'java',
        'react',
        'rust',
        'typescript',
      ],
    },
  ],
};

export default sidebars;
// This file defines the sidebar structure for the documentation site.