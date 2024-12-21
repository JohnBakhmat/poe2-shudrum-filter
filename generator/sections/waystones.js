import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import Effect from '../entities/effect.js';
import Sound from '../entities/sound.js';
import { MINIMUM_AREA_LEVEL, THEME } from '../configuration.js';

const section = new Section('Waystones');

section.setCommon({
  class: 'Waystone',
});

section.addBlock(new Block({
  comment: 'Common',
  background: THEME.COLOR_WAYSTONES,
  border: THEME.COLOR_WAYSTONES,
  text: THEME.COLOR_WHITE,
  sound: new Sound(Sound.WAYSTONE),
  effect: new Effect(Effect.COLOR_WHITE),
  continue: true,
}));

for (let waystoneTier = 1; waystoneTier <= 20; waystoneTier++) {
  section.addBlock(new Block({
    areaLevel: `== ${MINIMUM_AREA_LEVEL + waystoneTier}`,
    waystoneTier: `>= ${waystoneTier}`,
    font: 45,
    icon: new MinimapIcon(
      MinimapIcon.SIZE_BIG,
      MinimapIcon.COLOR_WHITE,
      MinimapIcon.SHAPE_SQUARE,
    ),
  }));

  if (waystoneTier >= 2) {
    section.addBlock(new Block({
      areaLevel: `== ${MINIMUM_AREA_LEVEL + waystoneTier}`,
      waystoneTier: `< ${waystoneTier}`,
      font: 30,
      effect: new Effect(Effect.COLOR_WHITE, Effect.TEMPORARY),
      icon: new MinimapIcon(
        MinimapIcon.SIZE_MEDIUM,
        MinimapIcon.COLOR_WHITE,
        MinimapIcon.SHAPE_SQUARE,
      ),
      continue: true,
    }));
  }

  if (waystoneTier >= 5) {
    section.addBlock(new Block({
      visible: false,
      areaLevel: `== ${MINIMUM_AREA_LEVEL + waystoneTier}`,
      waystoneTier: `<= ${waystoneTier - 4}`,
      sound: new Sound(Sound.DISABLE),
      icon: new MinimapIcon(MinimapIcon.DISABLE),
    }));
  }
}

section.addBlock(new Block({
  comment: 'Tablets',
  type: [
    'Simulacrum',
    'Tablet',
    'Breachstone',
    'Cowardly Fate',
    'Deadly Fate',
    'Victorious Fate',
    'Expedition Logbook',
    'Test of',
  ],
  text: THEME.COLOR_WHITE,
  border: THEME.COLOR_TABLETS,
  background: THEME.COLOR_TABLETS,
  sound: new Sound(Sound.IMPORTANCE_2),
  effect: new Effect(Effect.COLOR_PURPLE),
  font: 45,
}));

export default section;