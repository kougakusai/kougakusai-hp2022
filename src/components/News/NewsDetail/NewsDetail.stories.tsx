import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewsDetail } from './NewsDetail';

export default {
  component: NewsDetail,
} as ComponentMeta<typeof NewsDetail>;

const Template: ComponentStory<typeof NewsDetail> = (args) => (
  <NewsDetail {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const newsDetail = Template.bind({});
newsDetail.args = {
  href: '/',
  date: '2022/9/25',
  category: 'その他',
  title: 'HPが公開されました。',
  detail:
    'こうがく祭は茨城大学工学部による学園祭です。今年は3年ぶりの対面開催になります！様々なサークル・研究室の企画をご覧ください。',
};
