import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from './Heading';

export default {
  component: Heading,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const heading = Template.bind({});
heading.args = {
  children: 'Heading',
};
