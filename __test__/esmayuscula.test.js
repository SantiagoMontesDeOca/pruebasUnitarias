const isUpperCase = require ('../utils/esmayuscula');


    test('es mayucula', () => {
        
        expect (isUpperCase('HELLO')).toBe(true);
        
    });

    test('es minuscula', () => {
        
        expect (isUpperCase('hello')).toBe(false);
        
    });