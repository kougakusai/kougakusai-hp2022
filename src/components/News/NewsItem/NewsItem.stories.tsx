import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewsItem } from './NewsItem';

export default {
  component: NewsItem,
} as ComponentMeta<typeof NewsItem>;

const Template: ComponentStory<typeof NewsItem> = (args) => (
  <NewsItem {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const newsItem = Template.bind({});
newsItem.args = {
  date: '2022/9/22',
  category: 'その他',
  text: 'HPが公開されました。',
};
