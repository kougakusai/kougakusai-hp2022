import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Copyright } from './Copyright';

export default {
  component: Copyright,
} as ComponentMeta<typeof Copyright>;

const Template: ComponentStory<typeof Copyright> = () => <Copyright />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const copyright = Template.bind({});
