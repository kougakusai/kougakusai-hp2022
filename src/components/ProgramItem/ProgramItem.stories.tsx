import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProgramItem } from './ProgramItem';

const SampleImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpVUrDnaQ4pChOlkoKuIoVSyChdJWaNXB5NIvaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIo5OToouU+L+k0CLWg+N+vLv3uHsHCI0KU82eKKBqlpGKx8RsblX0vaIPIfgxgKjETD2RXsyg6/i6h4evdxGe1f3cn2NQyZsM8IjEc0w3LOIN4plNS+e8TxxkJUkhPieeMOiCxI9cl11+41x0WOCZQSOTmicOEovFDpY7mJUMlXiaOKyoGuULWZcVzluc1UqNte7JXxjIaytprtMcRRxLSCAJETJqKKMCCxFaNVJMpGg/1sUfcvxJcsnkKoORYwFVqJAcP/gf/O7WLExNukmBGND7YtsfY4BvF2jWbfv72LabJ4D3GbjS2v5qA5j9JL3e1sJHwNA2cHHd1uQ94HIHGHnSJUNyJC9NoVAA3s/om3LA8C3Qv+b21trH6QOQoa6Wb4CDQ2C8SNnrXd7t7+zt3zOt/n4AjiZyspuV9GoAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAALiMAAC4jAXilP3YAAAFzSURBVHja7ZjRDsIgDEVh2W/5/x/lAz4Z2cKAlk5gHJIligbGoVza611wwS3cNrd4AwAAAAAAAAAAAAAAAAAAAAAArNj22j8Gf/zuO7gI33ewnHvTLP6q79ER0GvX0YCRIkCjEan+81lOHSdptGk1apOEfvDOvd5tGhH353REojEtGuUlrnA8aI5wvMPSzzm1r+2X3BYiDYgHPBMO/vc8WgRTVGsj4x95gnQDdotJR7kmNfOrE6GRcwRJJKhT4fO1ZnH2a8cIvnwUTSMgNVluxy2iQTKG9P3U1+BMRQ6psJsoAiiGZiyGRjBIiICeAOIdn9koQQPuutNzBkiNhpRMEisNuj0CUgZIycAopbSWJu1tAHIa4cPxyY3R8nuXI2Bd+DxSBK08BIsqdO9Jv7T40uIsrt9txMVrLHFtJJikwlcGhdXu1ljsUydCUngtBsgU5XDOfls2Fb6r3sAQoRwGAAAAAAAAAAAAAAAAAAAAAACs1z5FT5S7jicr6QAAAABJRU5ErkJggg==';

export default {
  component: ProgramItem,
} as ComponentMeta<typeof ProgramItem>;

const Template: ComponentStory<typeof ProgramItem> = (args) => (
  <div className="max-h-[22rem] max-w-[14rem]">
    <ProgramItem {...args} />
  </div>
);

export const BaseProgramItem = Template.bind({});
BaseProgramItem.args = {
  programName: '企画のタイトル',
  groupName: '団体の名前',
  place: 'inside',
  introduction: 'これは紹介文。いろはにほへとちりぬるを',
  image: '',
  groupLink: '',
};

export const FullProgramItem = Template.bind({});
FullProgramItem.args = {
  programName: '企画のタイトル',
  groupName: 'リンクがある団体の名前',
  place: 'stage',
  introduction: `これは紹介文。
いろはにほへと　ちりぬるを
わかよたれそ　つねならむ
うゐのおくやま　けふこえて
あさきゆめみし　ゑひもせす
色は匂へど　散りぬるを
我が世誰ぞ　常ならむ
有為の奥山　今日越えて
浅き夢見じ　酔ひもせず`,
  image: SampleImage,
  groupLink: 'https://example.com/',
  twitter: 'https://twitter.com/Twitter/',
  instagram: 'https://www.instagram.com/instagram/',
};
