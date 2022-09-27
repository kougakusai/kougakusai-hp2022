import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from 'components/Popover';

import { CopyButton } from './CopyButton';

export default {
  component: CopyButton,
} as ComponentMeta<typeof CopyButton>;

const Template: ComponentStory<typeof CopyButton> = (args) => (
  <CopyButton {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const copyButton = Template.bind({});
copyButton.args = {};
