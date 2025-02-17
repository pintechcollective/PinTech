import type { Meta, StoryObj } from '@storybook/react';
import FAQs from '.';

const meta = {
  title: 'Components/LandingPage/FAQs',
  component: FAQs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Pricing Component component displays a call to action button and a short description for potential client, regarding reaching out for services.

Key Features:
- A gradient background and bold typography for visual emphasis.
- Flexbox layout for easy alignment of elements.

Copy Provided: 
Fully customizable and tailored pricing for your exact needs.
   Get A Quote
**

Usage:

Call To action button to guide the user to the contact form page to contact Pintech for their services. 

### Code Example
        

          \`\`\`tsx
          import PricingSection from 'path/to/PricingSection';

          \`\`\`

### Props:
- No props are currently passed to this component.`,
      },
    },
  },
  args: {},
} satisfies Meta<typeof FAQs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
