import type { Meta, StoryObj } from '@storybook/react';
import Hero from '.';


const meta = {
  title: 'Components/LandingPage/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Hero component serves as the introductory section of the landing page, showcasing the brand and its key offerings. It features a visually striking design with a gradient background, animated logo, and prominent call-to-action buttons.

Key Features:
- Animated logo using Framer Motion for a dynamic visual effect.
- Responsive design that adapts to various screen sizes.
- Engaging typography and layout to capture user attention.
- Call-to-action buttons for easy navigation to services and contact pages.

Usage:

The Hero component is designed to create an impactful first impression, guiding potential clients towards the company's services and values.  

### Code Example
        

          \`\`\`tsx
          import Hero from 'path/to/Hero';

          \`\`\`

### Props:
- No props are currently passed to this component.`,
      },
    },
  },
  args: {
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

