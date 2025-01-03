import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon } from '../entities/generators/index.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Runes');

  const common = {
    type: 'Rune',
    card: Card(Card.THEMES.RUNES, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
    areaLevel: `>= ${global.startingAreaLevel}`,
  };

  if (modes.RunesDisplayBasic[modeId]) {
    section.addBlock({
      ...common,
      effect: Effect(Effect.COLORS.CYAN, Effect.TEMPORARY),
      icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.CYAN, MapIcon.SHAPES.CIRCLE),
    });
  } else {
    section.addBlock({
      ...common,
      areaLevel: `>= ${global.startingAreaLevel}`,
      visible: false,
    });
  }

  section.addBlock({
    ...common,
    areaLevel: `< ${global.startingAreaLevel}`,
  });

  return section;
};
