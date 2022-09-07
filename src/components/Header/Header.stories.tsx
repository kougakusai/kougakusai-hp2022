import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const header = Template.bind({});
