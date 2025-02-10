import type { Meta, StoryObj } from '@storybook/react';
import Form from '.';

const meta = {
  title: 'Components/ContactPage/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
