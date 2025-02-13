import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Header component is a presentational component that serves as the navigation bar for the webpage. It provides users with access to various sections of the site, including links to important pages and a responsive mobile menu.

- **Branding**: Displays the company logo, linking back to the homepage.
- **Responsive Navigation**: Includes a mobile-friendly menu that toggles open and closed, providing easy access to navigation links on smaller screens.
- **Active Link Highlighting**: Highlights the currently active page link for better user orientation.
- **Legal Links**: Provides access to legal information such as Terms of Service and Privacy Policy.

  Usage:
This component is integrated to be seen and available in all pages, to streamline user inquiries and enhance overall communication, thereby improving customer satisfaction and engagement.
 
Copy Provided: 
  **

**
  
  ### Code Example
          
  
            \`\`\`tsx
            import Header from 'path/to/Header';
  
            \`\`\`
  
  ### Props:
  - No props are currently passed to this component.`,
      },
    },
  },
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
