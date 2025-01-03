import { Section } from '../entities/filter/index.js';
import { Area, Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';
import { modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Currencies');

  //
  // Shards
  //

  const shard = {
    card: Card(Card.THEMES.CURRENCY, Card.TYPES.OUTLINE, Card.SIZES.MEDIUM),
    effects: {
      sound: Sound(Sound.TYPES.SIMPLE_SIGNAL),
      effect: Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
      icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CROSS),
    },
  };

  section.addBlock({
    class: 'Currency',
    type: 'Chance Shard',
    card: shard.card,
    ...modes.CurrenciesDisplayChanceShards[modeId]
      ? shard.effects
      : { visible: false },
  });

  section.addBlock({
    class: 'Currency',
    type: 'Shard',
    card: shard.card,
    visible: modes.CurrenciesDisplayShards[modeId],
  });

  //
  // Upgrade tier 2
  //

  section.addBlock({
    class: 'Currency',
    type: [
      'Arcanist\'s Etcher',
      'Armourer\'s Scrap',
      'Blacksmith\'s Whetstone',
      'Artificer\'s Orb',
    ],
    sound: Sound(Sound.TYPES.SIMPLE_SIGNAL),
    effect: Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
    icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CROSS),
  });

  //
  // Upgrade tier 1
  //

  section.addBlock({
    class: 'Currency',
    type: [
      'Lesser Jeweller\'s Orb',
      'Gemcutter\'s Prism',
      'Glassblower\'s Bauble',
    ],
    card: Card(Card.SIZES.MEDIUM, Card.THEMES.CURRENCY, Card.TYPES.IMPORTANT),
    effect: Effect(Effect.COLORS.YELLOW),
    sound: Sound(Sound.TYPES.IMPORTANCE_6),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CROSS),
  });

  //
  // Tier 3 currencies
  //

  const commonTier3Currency = {
    class: 'Currency',
    type: [
      'Orb of Transmutation',
      'Orb of Augmentation',
    ],
    card: Card(Card.THEMES.CURRENCY, Card.TYPES.IMPORTANT, Card.SIZES.MEDIUM),
  };

  if (modes.CurrenciesDisplayTier3[modeId]) {
    // Displayed
    section.addBlock({
      ...commonTier3Currency,
      sound: Sound(Sound.TYPES.IMPORTANCE_3),
      effect: Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
      icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CIRCLE),
    });
  } else {
    // Hidden only for Area > 65
    section.addBlock({
      ...commonTier3Currency,
      visible: false,
      area: Area.FROM_STARTING_AREA,
    });
  }

  //
  // Tier 2 currencies
  //

  section.addBlock({
    class: 'Currency',
    type: [
      'Regal Orb',
      'Chaos Orb',
      'Exalted Orb',
      'Vaal Orb',
    ],
    effect: Effect(Effect.COLORS.YELLOW),
    card: Card(Card.THEMES.CURRENCY, Card.TYPES.URGENT, Card.SIZES.BIG),
    sound: Sound(Sound.TYPES.IMPORTANCE_2),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.STAR),
  });

  //
  // Tier 1 currencies
  //

  section.addBlock({
    class: 'Currency',
    type: [
      'Orb of Chance',
      'Divine Orb',
      'Mirror',
      'Greater Jeweller\'s Orb',
      'Perfect Jeweller\'s Orb',
    ],
    card: Card(Card.THEMES.ALERT, Card.SIZES.BIG, Card.TYPES.URGENT),
    effect: Effect(Effect.COLORS.RED),
    sound: Sound(Sound.TYPES.IMPORTANCE_1),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.RED, MapIcon.SHAPES.STAR),
  });

  //
  // All remaining currencies
  // This is more of a "currency security", and should not happen
  //

  section.addBlock({
    class: 'Currency',
    card: Card(Card.THEMES.CURRENCY, Card.TYPES.IMPORTANT, Card.SIZES.MEDIUM),
    sound: Sound(Sound.TYPES.SIMPLE_SIGNAL),
    effect: Effect(Effect.COLORS.YELLOW),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.STAR),
  });

  return section;
};
