import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Small } from './Small';

export default {
  component: Small,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Small>;

const Template: ComponentStory<typeof Small> = (args) => <Small {...args} />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const small = Template.bind({});
small.args = {
  children: 'Small',
};
