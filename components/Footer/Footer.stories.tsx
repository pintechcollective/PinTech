import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Footer component is a presentational component that serves as the footer section of the webpage. It is designed to provide users with quick links, industry information, and social media icons, enhancing navigation and engagement.
## Key Features

- **Branding**: Displays the company logo, linking back to the homepage.
- **Quick Links**: Provides easy access to important pages such as Home, About, Services, Terms of Service, and Privacy Policy.
- **Industry Information**: Lists relevant industries to inform users about the company's focus areas.
- **Social Media Links**: Includes icons linking to various social media platforms for user engagement.

  Usage:
This component is integrated to be seen and available in all pages, to streamline user inquiries and enhance overall communication, thereby improving customer satisfaction and engagement.
 
Copy Provided: 
  **

**
  
  ### Code Example
          
  
            \`\`\`tsx
            import Footer from 'path/to/Footer';
  
            \`\`\`
  
  ### Props:
  - No props are currently passed to this component.`,
      },
    },
  },
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
