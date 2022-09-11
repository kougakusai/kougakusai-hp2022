import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Landing } from './Landing';

export default {
  component: Landing,
} as ComponentMeta<typeof Landing>;

const Template: ComponentStory<typeof Landing> = () => <Landing />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const landing = Template.bind({});
