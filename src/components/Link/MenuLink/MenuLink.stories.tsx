import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuLink } from './MenuLink';

export default {
  component: MenuLink,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof MenuLink>;

const Template: ComponentStory<typeof MenuLink> = (args) => (
  <MenuLink {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const menuLink = Template.bind({});
menuLink.args = {
  href: '/',
  children: 'トップ',
};
