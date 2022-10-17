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
  arrow: 'right',
  href: '/news',
  children: 'もっと見る',
  className: 'border border-solid border-[#18283F] text-[#18283F]',
};

export const ContactButton = Template.bind({});
ContactButton.args = {
  href: '/contact',
  children: 'お問い合わせ',
  className: 'bg-[#18283F] text-white',
};

export const BackListButton = Template.bind({});
BackListButton.args = {
  arrow: 'left',
  href: '/news',
  children: 'お知らせ一覧へ戻る',
  className: 'border border-solid border-[#18283F] text-[#18283F]',
};
