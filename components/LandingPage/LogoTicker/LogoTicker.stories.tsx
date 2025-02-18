import type { Meta, StoryObj } from '@storybook/react';
import LogoTicker from '.';


const meta = {
  title: 'Components/LandingPage/LogoTicker',
  component: LogoTicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The LogoTicker component displays a continuous scrolling ticker of logos, showcasing the brand's identity. It utilizes Framer Motion for smooth animations and is designed to be responsive, ensuring a visually appealing presentation across different screen sizes.

Key Features:
- Continuous scrolling effect for logos using Framer Motion.
- Responsive design that adapts to various screen sizes.
- Customizable logo images for branding purposes.

Usage:

The LogoTicker component enhances brand visibility by displaying logos in a dynamic and engaging manner, making it suitable for landing pages and promotional sections.

Copy Provided: 
**
None
**


### Code Example
        

          \`\`\`tsx
          import LogoTicker from 'path/to/LogoTicker';

          \`\`\`

### Props:
- No props are currently passed to this component.`,
      },
    },
  },
  args: {
  },
} satisfies Meta<typeof LogoTicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};