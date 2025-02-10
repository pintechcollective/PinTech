import type { Meta, StoryObj } from '@storybook/react';
import PrivacyStament from '.';


const meta = {
  title: 'Components/PrivacyPage/PrivacyStatement',
  component: PrivacyStament,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof PrivacyStament>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};