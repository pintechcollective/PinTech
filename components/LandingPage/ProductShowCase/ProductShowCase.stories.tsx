import type { Meta, StoryObj } from '@storybook/react';
import ProductShowCase from '.';


const meta = {
  title: 'Components/LandingPage/ProductShowCase',
  component: ProductShowCase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The ProductShowCase component showcases automated products, emphasizing their reliability and productivity. It features a visually appealing layout with smooth animations using Framer Motion, ensuring an engaging user experience.

Key Features:
- Dynamic animations that respond to scroll events.
- A gradient background for enhanced visual appeal.
- Responsive design that adapts to various screen sizes.

Usage:

The ProductShowCase component is ideal for highlighting key products, providing potential clients with a clear view of the technology offered by the company.

Copy Provided: 
**
None
**

### Code Example
        

          \`\`\`tsx
          import ProductShowCase from 'path/to/ProductShowCase';

          \`\`\`

### Props:
- No props are currently passed to this component.`,
      },
    },
  },
  args: {
  },
} satisfies Meta<typeof ProductShowCase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

