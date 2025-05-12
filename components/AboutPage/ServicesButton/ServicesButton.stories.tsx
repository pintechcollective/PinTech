import type { Meta, StoryObj } from '@storybook/react';
import ServicesButton from '.';


const meta = {
  title: 'Components/AboutPage/ServicesButton',
  component: ServicesButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The ServicesButton component serves as an interactive element on the About Page, designed to enhance user engagement by providing quick access to the company's services.
  
  Key Features:
  - Call-to-Action: The button encourages users to explore the services offered by the company, promoting user interaction and navigation.
  - A responsive design that adapts to different screen sizes.
  - Customizable: The component can be easily customized with different labels, styles, and actions, allowing for flexibility in its implementation.
  

  Usage: 

  Usage:
  This component can be integrated into the About Page or any other relevant section of the website to facilitate user access to service-related information, thereby enhancing the overall user experience and promoting the company's offerings.
 
Copy Provided: 
  **

**
  
  ### Code Example
          
  
            \`\`\`tsx
            import Gallery from 'path/to/ServicesButton';
  
            \`\`\`
  
  ### Props:
  - No props are currently passed to this component.`,
      }
    }
  },
  args: {
  },
} satisfies Meta<typeof ServicesButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};