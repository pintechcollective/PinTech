import type { Meta, StoryObj } from '@storybook/react';
import AboutHero from '.';
const meta = {
  title: 'Components/AboutPage/AboutHero',
  component: AboutHero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Fullscreen layout to showcase the hero
    docs: {
      description: {
        component: `The AboutHero component is designed for the "About Us" section on the About page of the website. It features a hero banner with a logo on the left (hidden on small screens) and a heading with a description of the company on the right.

Key Features:
- A responsive design that adapts to different screen sizes.
- A gradient background and bold typography for visual emphasis.
- Flexbox layout for easy alignment of elements.
- Includes a logo and descriptive text about the company’s mission.

Copy Provided: 
**Pinnacle Technology Collective specializes in providing skilled
            technicians and consulting services for Autonomous Mobile Robot
            (AMR) companies. Our focus is on deploying and maintaining robots,
            offering AMR companies an affordable and reliable Operations and
            Maintenance Program provider. Our mission is to enable businesses to
            enhance efficiency and streamline operations through effective
            robotic solutions, ensuring optimal performance and longevity of
            their robotic assets.**

### Code Example
          You can use the AboutHero component as follows:

          \`\`\`tsx
          import AboutHero from 'path/to/AboutHero';

          \`\`\`

### Props:
- No props are currently passed to this component.`,
      },
    },
  },
  args: {
    logoSrc: '/path/to/logo.svg',
    heading: 'About Us',
    description:
      'Pinnacle Technology Collective specializes in providing skilled technicians...',
  },
} satisfies Meta<typeof AboutHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
