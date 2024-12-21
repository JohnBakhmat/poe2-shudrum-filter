import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Gems');

// TODO: Spirit, Uncut and Skill gems should have a different display.
section.addBlock(new Block({
  type: ['Uncut Spirit Gem', 'Uncut Support Gem', 'Uncut Skill Gem'],
  text: THEME.COLOR_BLACK,
  border: THEME.COLOR_GEMS,
  background: THEME.COLOR_GEMS,
  font: 35,

  icon: new MinimapIcon(
    MinimapIcon.SIZE_BIG,
    MinimapIcon.COLOR_CYAN,
    MinimapIcon.SHAPE_CIRCLE,
  ),
  effect: new Effect(Effect.COLOR_CYAN),
  sound: new Sound(Sound.GEMS),

  continue: true,
}));

// TODO: A proper loop should be defined to remove progressively the gems.
section.addBlock(new Block({
  type: 'Uncut Skill Gem',
  visible: false,
  areaLevel: '>= 70',
  itemLevel: '<= 16',
  sound: new Sound(Sound.NONE),
  icon: new MinimapIcon(MinimapIcon.NONE),
}));

export default section;