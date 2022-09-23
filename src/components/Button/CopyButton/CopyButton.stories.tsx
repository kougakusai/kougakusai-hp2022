import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CopyButton } from './CopyButton';

export default {
  component: CopyButton,
} as ComponentMeta<typeof CopyButton>;

const Template: ComponentStory<typeof CopyButton> = (args) => (
  <CopyButton {...args} />
);

// eslint-disable-next-line storybook/prefer-pascal-case
export const copyButton = Template.bind({});
copyButton.args = {
  /** コピーされるリンク */
  link: 'http://kougakusai.eng.ibaraki.ac.jp/',
  /** ハイパーリンクの表示テキスト */
  text: 'こうがく祭',
  title: 'こうがく祭公式サイトへのリンクをコピー',
};
