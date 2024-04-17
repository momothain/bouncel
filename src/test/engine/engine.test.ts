const Engine = require('./src/engine/engine.ts')

describe('Engine', () => {
    it('nextPos() calculates the next position correctly', () => {
      const engine = new Engine({ bounds: [0, 100, 0, 100] });
      const initialPos = [50, 50];
      const velocity = [5, 5];
      const expectedPos = [55, 55];
      expect(engine.nextPos(initialPos, velocity)).toEqual(expectedPos);
    });
  });
  