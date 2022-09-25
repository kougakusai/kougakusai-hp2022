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
  date: '2022/09/26',
  category: 'その他',
  title: 'ホームページが公開されました。',
  detail:
    '2022 年度こうがく祭のホームページが公開されました。コンテンツは随時アップデートされますので、どうぞお楽しみに！',
};
