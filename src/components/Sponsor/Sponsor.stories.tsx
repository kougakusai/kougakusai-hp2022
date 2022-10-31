import { ComponentStory, ComponentMeta } from '@storybook/react';
import { sponsorData } from 'data/sponsor';

import { Sponsor } from './Sponsor';

export default {
  component: Sponsor,
} as ComponentMeta<typeof Sponsor>;

const Template: ComponentStory<typeof Sponsor> = (args) => (
  <Sponsor {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const sponsor = Template.bind({});
