import type { Meta, StoryObj } from '@storybook/react';
import CalendlyWidget from './index';

const meta: Meta<typeof CalendlyWidget> = {
  title: 'Components/CalendlyWidget',
  component: CalendlyWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CalendlyWidget>;

export const Default: Story = {
  args: {
    url: 'https://calendly.com/oscarleal234/30min?background_color=1a1a1a&text_color=ffffff',
    height: 700,
    minWidth: 320,
  },
};

export const CustomSize: Story = {
  args: {
    url: 'https://calendly.com/oscarleal234/30min?background_color=1a1a1a&text_color=ffffff',
    height: 900,
    minWidth: 400,
  },
};
