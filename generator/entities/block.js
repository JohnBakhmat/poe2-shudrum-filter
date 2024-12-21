import { pascalCase } from 'change-case';

export default class Bloc {
  #attributes;

  constructor(attributes) {
    this.#attributes = attributes || {};
  }

  get class() {
    if (!this.#attributes.class) return [];

    return Array.isArray(this.#attributes.class)
      ? this.#attributes.class
      : [this.#attributes.class];
  }

  get type() {
    if (!this.#attributes.type) return [];

    return Array.isArray(this.#attributes.type)
      ? this.#attributes.type
      : [this.#attributes.type];
  }

  get continue() {
    if (!this.#attributes.continue) return false;
    return Boolean(this.#attributes.continue);
  }

  addAttributes(attributes) {
    this.#attributes = { ...this.#attributes, ...attributes };
  }

  generate() {
    const attributes = { ...this.#attributes };

    let visible = true;
    if (Object.keys(attributes).includes('visible')) {
      visible = Boolean(attributes.visible);
      delete attributes.visible;
    }

    let comment = null;
    if (Object.keys(attributes).includes('comment')) {
      comment = attributes.comment;
      delete attributes.comment;
    }

    const rows = Object.entries(attributes).map(([key, value]) => {
      // Simple passthroughs
      if ([
        'areaLevel',
        'itemLevel',
        'stackSize',
        'rarity',
        'quality',
        'waystoneTier',
        'sockets',
      ].includes(key)) {
        return `${pascalCase(key)} ${value}`;
      }

      // Computed
      switch (key) {
        // Conditions
        case 'class':
          return `Class ${this.class.map((currentClass) => `"${currentClass}"`).join(' ')}`;
        case 'type':
          return `BaseType ${this.type.map((baseType) => `"${baseType}"`).join(' ')}`;

        // Actions
        case 'font':
          return `SetFontSize ${Math.max(20, Math.min(value, 45))}`;
        case 'text':
          return `SetTextColor ${value}`;
        case 'border':
          return `SetBorderColor ${value}`;
        case 'background':
          return `SetBackgroundColor ${value}`;
        case 'icon':
        case 'effect':
        case 'sound':
          return `${value}`;

        // Special
        case 'continue':
          return value ? 'Continue' : null;

        default:
          throw new Error(`Unknown key: "${key}"`);
      }
    })
      .filter(Boolean)
      .map((row) => `  ${row}`);

    return [
      comment && `# ${comment}`,
      visible ? 'Show' : 'Hide',
      ...rows,
    ].filter(Boolean);
  }
}