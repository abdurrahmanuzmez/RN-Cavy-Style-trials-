export default function(spec) {

  spec.describe('Searching', function() {

    spec.it('works', async function() {
      await spec.exists('LoginScreen');
      await spec.fillIn('LoginScreen.EmailInput', 'cavy@example.com');
    });
  });
}
