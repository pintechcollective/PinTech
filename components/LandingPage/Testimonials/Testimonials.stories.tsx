import type { Meta, StoryObj } from '@storybook/react';
import Testimonials from '.';


const meta = {
  title: 'Components/LandingPage/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Testimonials component displays client feedback, showcasing the positive experiences of previous customers. It is designed to enhance credibility and trust, featuring smooth animations for an engaging presentation.

Key Features:
- Display of multiple testimonials with client names and titles.
- Responsive design that adapts to various screen sizes.
- Smooth animations to enhance user engagement.

Copy Provided: 
REVIEWS
“I had the opportunity to work with the founders of Pinnacle Technology Collective during their time at 
Cobalt Robotics, where they were integral to running a smooth and efficient Operations and Maintenance 
program. By building strong teams, they ensured reliable support and had a tremendous impact on the 
success of the company. I’m excited to see Pinnacle Technology Collective offer the same level of consistency 
and expertise to its clients.
Sam Johnson
Former Director of Field Operations @ Cobalt Robotics”

“Jeff and Chris, the Founders of Pinnacle Technology Collective, played a key role in scaling our field 
operations and maintenance program during their tenure at Cobalt Robotics. Their practical approach and 
deep understanding of robotics operations made them a valuable part of the team. I'm confident that with 
Pinnacle Technology Collective, businesses will receive solid, dependable service and support for their robot 
operations."
Mark Powers
Former Director of Senior VP of Operations and Maintenance @ Cobalt Robotics”

Usage:

The Testimonials component is ideal for landing pages, providing potential clients with insights into the quality of service and support offered by the company, reinforcing trust and reliability.`,
      },
    },
  },
  args: {
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

