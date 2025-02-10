import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';


const meta = {
  title: 'Components/ServicesPage/Cards/Card/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Train: Story = {
  args:     {
    id: 1,
    title: 'Train',
    statement: 'Empowering success for your team and ours',
    image: '/robots/Mock bot Small 2.jpg',
  },
};
export const Deploy: Story = {
    args:
    {
        id: 2,
        title: 'Deploy',
        statement: '',
        image: '/robots/Mock Bot 1.jpg',
      }
  };
  export const Maintain: Story = {
    args:      {
        id: 3,
        title: 'Maintain',
        statement: '',
        image: '/robots/Mock bot Small 3.jpg',
      }
  };
