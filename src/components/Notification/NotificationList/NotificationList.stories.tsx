import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './NotificationList';

export default {
  component: NotificationList,
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = () => (
  <NotificationList />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const notificationList = Template.bind({});
