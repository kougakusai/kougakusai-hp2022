import { ComponentStory, ComponentMeta } from '@storybook/react';
import { link } from 'fs/promises';

import { LinkButton } from './LinkButton';

export default {
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const seeMoreButton = Template.bind({});
seeMoreButton.args = {
  href: '/news',
  children: 'もっと見る',
  disabled: false,
  onClick: () => {},
  className: 'border border-solid border-[#18283F] text-[#18283F] font-bold',
};

// eslint-disable-next-line storybook/prefer-pascal-case
export const contactButton = Template.bind({});
contactButton.args = {
  href: '/contact',
  children: 'お問い合わせ',
  disabled: false,
  onClick: () => {},
  className: 'bg-[#18283F] text-white font-bold',
};
