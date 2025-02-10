import type { Meta, StoryObj } from '@storybook/react';
import TermsStatement from '.';


const meta = {
  title: 'Components/TermsPage/TermsStatment',
  component: TermsStatement,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof TermsStatement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};