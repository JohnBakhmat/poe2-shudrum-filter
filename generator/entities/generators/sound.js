export default function Sound(...args) {
  let sound = Sound.TYPES.IMPORTANCE_3;
  let disable = false;

  args.forEach((value) => {
    if (Object.values(Sound.TYPES).includes(value)) {
      sound = value;
    } else if (value === Sound.NONE) {
      disable = true;
    } else {
      throw new Error(`Invalid Sound argument: ${value}`);
    }
  });

  const instance = {
    toString() {
      if (disable) {
        return 'PlayAlertSound None';
      }
      return `PlayAlertSound ${sound} 300`;
    },
  };

  return instance;
}

Sound.TYPES = {
  IMPORTANCE_1: 1,
  IMPORTANCE_2: 5,
  IMPORTANCE_3: 2,
  IMPORTANCE_4: 4,
  IMPORTANCE_5: 13,
  IMPORTANCE_6: 10,
  IMPORTANCE_7: 3,
  IMPORTANCE_8: 16,

  VIBRANT_1: 7,
  VIBRANT_2: 8,
  VIBRANT_3: 9,
  VIBRANT_4: 14,
  VIBRANT_5: 15,

  WAYSTONE: 11,
  UNIQUE: 6,
  GEMS: 12,
};

Sound.NONE = 'NONE';