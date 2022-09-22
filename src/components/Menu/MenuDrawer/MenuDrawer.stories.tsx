import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuDrawer } from './MenuDrawer';

export default {
  component: MenuDrawer,
} as ComponentMeta<typeof MenuDrawer>;

const Template: ComponentStory<typeof MenuDrawer> = () => <MenuDrawer />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const menuDrawer = Template.bind({});
