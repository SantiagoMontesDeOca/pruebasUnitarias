const isUpperCase = require('../utils/esmayuscula');

describe('mayusculas', () => {
    test.each`
      firstValue   |  expectedResult    
      ${"h"}       |  ${false}        
      ${"HELOO"}   |  ${true}       
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });