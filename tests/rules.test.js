const { calcularAtaque, calcularExp, calcularIdade } = require('../src/domain/knights/rules');

describe('calcularAtaque', () => {
  test('should calculate attack correctly', () => {
    
    expect(calcularAtaque({ idade: 18, atributo: 'strength', weapons: [{ mod: 3, equipped:true }], atributos:{"strength": 15} })).toBe(14);
    expect(calcularAtaque({ idade: 25, atributo: 'dexterity', weapons: [{ mod: 2, equipped:false }], atributos:{"dexterity": 15} })).toBe(11);
    
  });
});

describe('calcularExp', () => {
  test('should calculate experience correctly', () => {
    
    expect(calcularExp({ idade: '2020-03-11' })).toBe(0);
    expect(calcularExp({ idade: '1992-03-11' })).toBe(2210);
    
  });
});

describe('calcularIdade', () => {
  test('should calculate age correctly', () => {
    
    expect(calcularIdade('1992-03-11')).toBe(32);
    
  });
});
