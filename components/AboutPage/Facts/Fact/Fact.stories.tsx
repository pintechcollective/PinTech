import type { Meta, StoryObj } from '@storybook/react';
import Fact from '.';


const meta = {
  title: 'Components/AboutPage/Facts/Fact/Fact',
  component: Fact,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Fact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fact1: Story = {
  args:     {
    id: 1,
    hours: 8,
    service: 'years of experience',
    image:
      'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
};
export const Fact2: Story = {
    args:         {
        id: 2,
        hours: 300,
        service: 'robots serviced',
        image:
          'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
  };
  export const Fact3: Story = {
    args:         {
        id: 3,
        hours: 7000,
        service: 'service hours',
        image:
          'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
  };