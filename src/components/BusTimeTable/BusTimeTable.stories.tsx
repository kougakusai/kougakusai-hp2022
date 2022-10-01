import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BusTimeTable } from './BusTimeTable';

export default {
  component: BusTimeTable,
} as ComponentMeta<typeof BusTimeTable>;

const Template: ComponentStory<typeof BusTimeTable> = () => <BusTimeTable />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const busTimeTable = Template.bind({});
