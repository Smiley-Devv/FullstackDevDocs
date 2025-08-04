/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro', // intro doc at top level
    {
      type: 'category',
      label: 'Tech Stacks',
      items: ['nodejs', 'cpp', 'java', 'react', 'rust', 'typescript'],
    },
  ],
};

export default sidebars;
