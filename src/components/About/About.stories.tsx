import { ComponentStory, ComponentMeta } from '@storybook/react';

import { About } from './About';

export default {
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const about = Template.bind({});
