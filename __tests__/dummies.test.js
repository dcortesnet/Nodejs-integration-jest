describe('Dummies examples', () => {
    test('sendMessage with dummies', () => {
  
      function sendMessage(message, user, format) {
        // ... implementación
        console.log(`Sending message to ${user}: ${message} (Format: ${format})`);
        return { status: 200, message: 'SendMessage Success' };
      }
  
      const dummyUser = 'John Doe';
      const dummyFormat = 'text';
  
      // Llamada a la función usando los dummies
      expect(sendMessage('Hello, World!', dummyUser, dummyFormat)).toEqual({
        status: 200,
        message: 'SendMessage Success',
      });
    });
  });