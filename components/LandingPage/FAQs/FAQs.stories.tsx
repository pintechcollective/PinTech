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
        component: `The FAQs Component displays an interactive accordion, listing the most commonly asked questions about the company's services along with the answers to each question.

Key Features:
- A gradient background and bold typography for visual emphasis.
- Flexbox layout for easy alignment of elements.
- Interactive accordion items that expand to reveal answers.

### Code Example
\`\`\`tsx
import FAQs from 'path/to/FAQs';
\`\`\`

### Props:
- No props are currently passed to this component.

### Component Structure:
- The component consists of a list of FAQ items, each containing a question and an answer.
- Each FAQ item can be expanded or collapsed by clicking on it, utilizing animations for a smooth user experience.

### FAQ Items:
- Each FAQ item is represented by an object containing:
  - **id**: A unique identifier for the FAQ item.
  - **questions**: The question text.
  - **answers**: The answer text.

Usage:
Helps deliver imporant impoation and answers to most common questions that potential clients may have regaridng the service. 
`,
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
