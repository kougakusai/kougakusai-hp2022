import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundedButton } from './RoundedButton';

export default {
  component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => (
  <RoundedButton {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const roundedButton = Template.bind({});
roundedButton.args = {
  href: '',
  children: '詳しく見る',
  className: '',
  disabled: false,
};
