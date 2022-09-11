import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuButton } from './MenuButton';

export default {
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = () => <MenuButton />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const menuButton = Template.bind({});
