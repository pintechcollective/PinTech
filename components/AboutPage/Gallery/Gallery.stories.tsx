import type { Meta, StoryObj } from '@storybook/react';
import Gallery from '.';


const meta = {
  title: 'Components/AboutPage/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Gallery component is a visually engaging section of the About Page that showcases a collection of images related to automation. It features a responsive layout that adapts to different screen sizes, ensuring an optimal viewing experience across devices.
  
  Key Features:
  - Image Display: The component displays a series of images, each with a unique identifier, source path, and alternative text for accessibility.
  - A responsive design that adapts to different screen sizes.
  - Styling: The background is set to black, enhancing the visibility of the images, while the heading is styled with a bold font and large size to draw attention.
  - Accessibility: Each image includes an alt attribute, improving accessibility for users with visual impairments.
  

  Usage:
This component can be integrated into the About Page to highlight the company's innovative automation solutions, making it an essential part of the overall user experience.
 
Copy Provided: 
  **
Mock Up images Provided
**
  
  ### Code Example
          
  
            \`\`\`tsx
            import Gallery from 'path/to/Gallery';
  
            \`\`\`
  
  ### Props:
  - No props are currently passed to this component.`,
      }
    }
  },
  args: {
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};