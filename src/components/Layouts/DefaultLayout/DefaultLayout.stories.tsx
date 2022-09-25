import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DefaultLayout } from './DefaultLayout';

export default {
  component: DefaultLayout,
} as ComponentMeta<typeof DefaultLayout>;

const Template: ComponentStory<typeof DefaultLayout> = (args) => (
  <DefaultLayout {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const defaultLayout = Template.bind({});
defaultLayout.args = {
  pageTitle: '通常ページ',
  children: (
    <div className="h-[400px] w-full bg-gray-200">（ページコンテンツ）</div>
  ),
};
