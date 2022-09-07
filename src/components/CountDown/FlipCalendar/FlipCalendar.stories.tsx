import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FlipCalendar } from './FlipCalendar';

export default {
  component: FlipCalendar,
} as ComponentMeta<typeof FlipCalendar>;

const Template: ComponentStory<typeof FlipCalendar> = () => <FlipCalendar />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const flipCalendar = Template.bind({});
