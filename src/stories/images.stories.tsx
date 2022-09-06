import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from 'next/image';
import background_lines from '../../../public/background_lines.png';
import flip_clock from '../../../public/flip_clock.png';
import kougakusai_banner from '../../../public/kougakusai_banner.png';
import kougakusai_title from '../../../public/kougakusai_title.png';
import rhino_happi from '../../../public/rhino_happi.png';
import rhino_machine from '../../../public/rhino_machine.png';
import rhino_soldering from '../../../public/rhino_soldering.png';

export default {
  title: 'Public/Images',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => {
  const { alt, ...rest } = args;
  return <Image alt={alt} {...rest} />;
};

export const BackgroundLines = Template.bind({});
BackgroundLines.args = {
  src: background_lines,
  alt: 'background_lines',
  layout: 'fill',
};

export const FlipClock = Template.bind({});
FlipClock.args = {
  src: flip_clock,
  alt: 'flip_clock',
  width: '70',
  height: '120',
};

export const KougakusaiBanner = Template.bind({});
KougakusaiBanner.args = {
  src: kougakusai_banner,
  alt: 'kougakusai_banner',
  width: '370',
  height: '150',
};

export const KougakusaiTitle = Template.bind({});
KougakusaiTitle.args = {
  src: kougakusai_title,
  alt: 'kougakusai_title',
  width: '300',
  height: '170',
};

export const RhinoHappi = Template.bind({});
RhinoHappi.args = {
  src: rhino_happi,
  alt: 'rhino_happi',
  width: '106',
  height: '106',
};

export const RhinoMachine = Template.bind({});
RhinoMachine.args = {
  src: rhino_machine,
  alt: 'rhino_machine',
  width: '400',
  height: '210',
};

export const RhinoSoldering = Template.bind({});
RhinoSoldering.args = {
  src: rhino_soldering,
  alt: 'rhino_soldering',
  width: '40',
  height: '40',
};
