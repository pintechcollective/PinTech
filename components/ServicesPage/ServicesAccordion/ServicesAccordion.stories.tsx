import type { Meta, StoryObj } from '@storybook/react';
import ServicesAccordion from '.';


const meta = {
  title: 'Components/ServicesPage/ServicesAccordion/ServicesAccordion',
  component: ServicesAccordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof ServicesAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};