import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkButton } from './LinkButton';

export default {
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const SeeMoreButton = Template.bind({});
SeeMoreButton.args = {
  href: '/news',
  children: 'もっと見る',
  disabled: false,
  onClick: () => {},
  className: 'border border-solid border-[#18283F] text-[#18283F] font-bold',
};

export const ContactButton = Template.bind({});
ContactButton.args = {
  href: '/contact',
  children: 'お問い合わせ',
  disabled: false,
  onClick: () => {},
  className: 'bg-[#18283F] text-white font-bold',
};
