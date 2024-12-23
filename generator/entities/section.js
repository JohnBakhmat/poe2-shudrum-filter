import Block from './block.js';

export default class Section {
  #name;
  #blocks;

  constructor(name) {
    this.#name = name;
    this.#blocks = [];
  }

  get name() {
    return this.#name;
  }

  getClosure(type) {
    const valueList = this.#blocks.reduce((prev, block) => {
      if (!block[type] || !block.continue) return prev;

      const values = [...prev];
      block[type].forEach((type) => {
        if (values.includes(type)) return;
        values.push(type);
      });

      return values;
    }, []);

    return valueList.length > 0
      ? new Block({
        comment: 'Autogenerated section closure',
        ...valueList.length > 0 && { [type]: valueList },
      })
      : null;
  }

  generateBlocks() {
    const blocks = this.#blocks.reduce((prev, block) => {
      return [
        ...prev,
        '',
        ...block.generate(),
      ];
    }, []);

    const typeClosure = this.getClosure('type');
    if (typeClosure) blocks.push('', ...typeClosure.generate());

    const classClosure = this.getClosure('class');
    if (classClosure) blocks.push('', ...classClosure.generate());

    return blocks;
  }

  addBlock(bloc) {
    this.#blocks.push(bloc);
  }
}
