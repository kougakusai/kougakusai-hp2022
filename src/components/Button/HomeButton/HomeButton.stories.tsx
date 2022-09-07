import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeButton } from './HomeButton';

export default {
  component: HomeButton,
} as ComponentMeta<typeof HomeButton>;

const Template: ComponentStory<typeof HomeButton> = () => <HomeButton />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const homeButton = Template.bind({});
