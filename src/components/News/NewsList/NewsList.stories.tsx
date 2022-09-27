import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewsList } from './NewsList';

export default {
  component: NewsList,
} as ComponentMeta<typeof NewsList>;

const Template: ComponentStory<typeof NewsList> = () => <NewsList />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const newsList = Template.bind({});
