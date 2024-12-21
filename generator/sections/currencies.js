import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import Effect from '../entities/effect.js';
import Sound from '../entities/sound.js';
import { MINIMUM_AREA_LEVEL, THEME } from '../configuration.js';

const section = new Section('Currencies');

// Before we add the blocks for the scrolls of wisdom

section.addBlock(new Block({
  visible: false,
  comment: `We hide all the scrolls of wisdom starging level ${MINIMUM_AREA_LEVEL}`,
  type: 'Scroll of Wisdom',
  areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
}));

section.addBlock(new Block({
  type: 'Scroll of Wisdom',
}));

// Then we add the other currencies

section.setCommon({
  class: 'Currency',
});

section.addBlock(new Block({
  comment: 'Common',
  background: THEME.COLOR_CURRENCY,
  text: THEME.COLOR_BLACK,
  font: 30,
  sound: new Sound(Sound.IMPORTANCE_4),
  effect: new Effect(Effect.COLOR_YELLOW),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_BIG,
    MinimapIcon.COLOR_YELLOW,
    MinimapIcon.SHAPE_STAR,
  ),
  continue: true,
}));

section.addBlock(new Block({
  comment: 'Shard',
  type: 'Shard',
  background: THEME.DEFAULT_BACKGROUND,
  border: THEME.COLOR_CURRENCY,
  text: THEME.COLOR_CURRENCY,
  font: 30,
  sound: new Sound(Sound.IMPORTANCE_8),
  effect: new Effect(Effect.COLOR_YELLOW, Effect.TEMPORARY),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_SMALL,
    MinimapIcon.COLOR_YELLOW,
    MinimapIcon.SHAPE_CROSS,
  ),
}));

section.addBlock(new Block({
  comment: 'Equipment upgrade',
  type: [
    'Arcanist\'s Etcher',
    'Armourer\'s Scrap',
    'Blacksmith\'s Whetstone',
    'Artificer\'s Orb',
  ],
  font: 30,
  sound: new Sound(Sound.IMPORTANCE_7),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_SMALL,
    MinimapIcon.COLOR_YELLOW,
    MinimapIcon.SHAPE_CIRCLE,
  ),
}));

section.addBlock(new Block({
  comment: 'Gem\'s and Flask\'s upgrades',
  type: [
    'Lesser Jeweller\'s Orb',
    'Gemcutter\'s Prism',
    'Glassblower\'s Bauble',
  ],
  font: 35,
  sound: new Sound(Sound.IMPORTANCE_6),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_BIG,
    MinimapIcon.COLOR_YELLOW,
    MinimapIcon.SHAPE_CROSS,
  ),
}));

section.addBlock(new Block({
  comment: 'Tier 2',
  type: [
    'Orb of Transmutation',
    'Orb of Augmentation',
  ],
  font: 30,
  sound: new Sound(Sound.IMPORTANCE_3),
  effect: new Effect(Effect.COLOR_YELLOW, Effect.TEMPORARY),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_SMALL,
    MinimapIcon.COLOR_YELLOW,
    MinimapIcon.SHAPE_CIRCLE,
  ),
}));

section.addBlock(new Block({
  comment: 'Tier 1',
  type: [
    'Regal Orb',
    'Chaos Orb',
    'Exalted Orb',
    'Vaal Orb',
  ],
  font: 45,
  sound: new Sound(Sound.IMPORTANCE_2),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_BIG,
    MinimapIcon.COLOR_YELLOW,
    MinimapIcon.SHAPE_STAR,
  ),
}));

section.addBlock(new Block({
  comment: 'Tier 0',
  type: [
    'Divine Orb',
    'Mirror',
    'Greater Jeweller\'s Orb',
    'Perfect Jeweller\'s Orb',
  ],
  font: 45,
  background: THEME.COLOR_ALERT,
  text: THEME.COLOR_WHITE,
  border: THEME.COLOR_WHITE,
  effect: new Effect(Effect.COLOR_RED),
  sound: new Sound(Sound.IMPORTANCE_1),
  icon: new MinimapIcon(
    MinimapIcon.SIZE_BIG,
    MinimapIcon.COLOR_RED,
    MinimapIcon.SHAPE_STAR,
  ),
}));

export default section;