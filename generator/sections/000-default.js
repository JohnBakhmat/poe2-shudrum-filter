import Section from '../entities/section.js';
import Block from '../entities/block.js';
import { COLORS } from '../configuration.js';

export default () => {
  const section = new Section('Default');

  section.addBlock(new Block({
    background: COLORS.DEFAULT_BACKGROUND,
    continue: true,
  }));

  return section;
};
