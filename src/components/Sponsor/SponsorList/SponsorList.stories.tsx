import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SponsorList } from './SponsorList';

export default {
  component: SponsorList,
} as ComponentMeta<typeof SponsorList>;

const Template: ComponentStory<typeof SponsorList> = () => <SponsorList />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const sponsorList = Template.bind({});
