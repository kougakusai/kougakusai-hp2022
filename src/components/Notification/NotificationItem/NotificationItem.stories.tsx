import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

export default {
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const notificationItem = Template.bind({});
notificationItem.args = {
  date: '2022/9/22',
  category: 'その他',
  text: 'HPが公開されました。',
};
