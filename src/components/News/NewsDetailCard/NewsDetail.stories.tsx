import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewsDetailCard } from './NewsDetailCard';

export default {
  component: NewsDetailCard,
} as ComponentMeta<typeof NewsDetailCard>;

const Template: ComponentStory<typeof NewsDetailCard> = (args) => (
  <NewsDetailCard {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const newsDetailCard = Template.bind({});
newsDetailCard.args = {
  date: '2022/9/25',
  category: 'その他',
  title: 'HPが公開されました。',
  detail:
    'こうがく祭は茨城大学工学部による学園祭です。今年は3年ぶりの対面開催になります！様々なサークル・研究室の企画をご覧ください。',
};
