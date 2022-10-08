import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TwitterTimeline } from './TwitterTimeline';

export default {
  component: TwitterTimeline,
} as ComponentMeta<typeof TwitterTimeline>;

const Template: ComponentStory<typeof TwitterTimeline> = (args) => (
  <TwitterTimeline {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const twitterTimeline = Template.bind({});
twitterTimeline.args = {};
