import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paragraph } from './Paragraph';

export default {
  component: Paragraph,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const paragraph = Template.bind({});
paragraph.args = {
  children: 'Paragraph',
};
