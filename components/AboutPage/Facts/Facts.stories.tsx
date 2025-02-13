import type { Meta, StoryObj } from '@storybook/react';
import Facts from '.';


const meta = {
  title: 'Components/AboutPage/Facts',
  component: Facts,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
        description: {
          component: `The Facts component displays key statistics about the services offered. It presents a list of facts, each represented by a Fact component, showcasing the number of years of experience, robots serviced, and total service hours. The component is styled with a gradient background and responsive layout to ensure a visually appealing presentation across different screen sizes.
  
  Key Features:
  - Using Motion Value + Framer to create a border effect on Mouse Hover, similiar to Features section on Landing page
  - A responsive design that adapts to different screen sizes.
  - A gradient background and bold typography for visual emphasis.
  -Flexbox layout for easy alignment of elements.
  
  Copy Provided: 
  **
8+ years of experience
300+ robots serviced
7,000+ service hours
**
  
  ### Code Example
          
  
            \`\`\`tsx
            import Facts from 'path/to/Facts';
  
            \`\`\`
  
  ### Props:
  - No props are currently passed to this component.`,
        },
      },
    },

  args: {
  },
} satisfies Meta<typeof Facts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};