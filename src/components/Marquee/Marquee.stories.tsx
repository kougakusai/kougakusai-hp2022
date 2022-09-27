import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Marquee } from './Marquee';

export default {
  component: Marquee,
} as ComponentMeta<typeof Marquee>;

const Template: ComponentStory<typeof Marquee> = (args) => (
  <Marquee {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const marquee = Template.bind({});
marquee.args = {
  direction: 'left',
  text: 'KOUGAKUSAI',
  className: '!font-bold !text-[2.5rem] !text-white !font-[Roboto]',
  speed: 50,
};
