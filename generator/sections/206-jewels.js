import Section from '../entities/filter-components/section.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

export default () => {
  const section = new Section('Jewels');

  section.addBlock({
    class: 'Jewel',
    rarity: '<= Rare',
    card: new Card(Card.THEMES.JEWELS, Card.SIZES.BIG, Card.TYPES.OUTLINE),
    icon: new MapIcon(
      MapIcon.SIZES.MEDIUM,
      MapIcon.COLORS.GREEN,
      MapIcon.SHAPES.PENTAGON,
    ),
    effect: new Effect(Effect.COLORS.GREEN, Effect.TEMPORARY),
  });

  return section;
};
