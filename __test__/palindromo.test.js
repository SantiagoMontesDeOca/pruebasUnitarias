const isUpperCase = require ('../utils/palindromo');

    test('palindromo amor', () => {
            
        expect (isUpperCase('amor')).toBe('roma');

    });

    test('palindromo san', () => {
        
        expect (isUpperCase('san')).toBe('nas');
    
    });