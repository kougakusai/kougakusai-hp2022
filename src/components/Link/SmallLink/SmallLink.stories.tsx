import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SmallLink } from './SmallLink';

export default {
  component: SmallLink,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof SmallLink>;

const Template: ComponentStory<typeof SmallLink> = (args) => (
  <SmallLink {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const smallLink = Template.bind({});
smallLink.args = {
  href: '/',
  children: 'プライバシーポリシー',
};
