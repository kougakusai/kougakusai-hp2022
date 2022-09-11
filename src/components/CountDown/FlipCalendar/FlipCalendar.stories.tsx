import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FlipCalendar } from './FlipCalendar';

export default {
  component: FlipCalendar,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof FlipCalendar>;

const Template: ComponentStory<typeof FlipCalendar> = (args) => (
  <FlipCalendar {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const flipCalendar = Template.bind({});
flipCalendar.args = {
  children: '0',
};
