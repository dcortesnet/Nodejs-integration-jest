describe('Spies examples', () => {
    test('Count called with spy', () => {
      const math = {
        add: (a, b) => {
            return a + b;
          }
      }
  
      const spy = jest.spyOn(math, 'add'); // Creando un spy en add
  
      math.add(1, 1);
      math.add(10, 10);
      math.add(100, 100);
      
      expect(spy).toHaveBeenCalledTimes(3); // Verificar la cantidad de llamadas
      expect(spy).toHaveBeenCalledWith(1, 1); // Verificar la primera llamada
      expect(spy).toHaveBeenCalledWith(10, 10); // Verificar la segunda llamada
      expect(spy).toHaveBeenCalledWith(100, 100); // Verificar la tercera llamada
    });
  });