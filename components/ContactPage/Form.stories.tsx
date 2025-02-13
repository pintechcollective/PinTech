import type { Meta, StoryObj } from '@storybook/react';
import Form from '.';

const meta = {
  title: 'Components/ContactPage/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Form component is a crucial interactive element designed to facilitate user input and engagement on the Contact Page. It provides a structured way for users to submit inquiries, feedback, or requests, enhancing communication between the company and its audience.
  
  Key Features:
  
  

  Usage:
This component can be integrated into the Contact Page or any other relevant section of the website to streamline user inquiries and enhance overall communication, thereby improving customer satisfaction and engagement.
 
Copy Provided: 
  **

**
  
  ### Code Example
          
  
            \`\`\`tsx
            import Form from 'path/to/Form';
  
            \`\`\`
  
  ### Props:
  - No props are currently passed to this component.`,
      }
    }
  },
  args: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
