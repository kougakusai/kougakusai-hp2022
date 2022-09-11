import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopPageLayout } from './TopPageLayout';

export default {
  component: TopPageLayout,
} as ComponentMeta<typeof TopPageLayout>;

const Template: ComponentStory<typeof TopPageLayout> = (args) => (
  <TopPageLayout {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const topPageLayout = Template.bind({});
topPageLayout.args = {
  children: (
    <div className="h-[400px] w-full bg-gray-200">（ページコンテンツ）</div>
  ),
};
