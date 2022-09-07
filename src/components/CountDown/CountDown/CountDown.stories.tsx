import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CountDown } from './CountDown';

export default {
  component: CountDown,
} as ComponentMeta<typeof CountDown>;

const Template: ComponentStory<typeof CountDown> = () => <CountDown />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const countDown = Template.bind({});
