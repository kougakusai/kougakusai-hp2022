import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from './Popover';

export default {
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <div className="border border-solid border-black">Click here</div>
  </Popover>
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const popover = Template.bind({});
popover.args = {
  popup: 'Popover text',
  disable: false,
};
