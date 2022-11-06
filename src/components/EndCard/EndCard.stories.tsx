import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EndCard } from './EndCard';

export default {
  component: EndCard,
} as ComponentMeta<typeof EndCard>;

const Template: ComponentStory<typeof EndCard> = () => <EndCard />;

// eslint-disable-next-line storybook/prefer-pascal-case
export const endCard = Template.bind({});
