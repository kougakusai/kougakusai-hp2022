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
export const linkButton = Template.bind({});
linkButton.args = {
  text: 'もっと見る',
  disabled: false,
  onClick: () => {},
  className: '',
};
