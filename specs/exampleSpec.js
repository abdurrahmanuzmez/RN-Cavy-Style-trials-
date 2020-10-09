export default function(spec) {

  spec.describe('Searching', function() {

    spec.it('works', async function() {
      await spec.fillIn('SearchBar.EmailInput', 'cavy@example.com');
    });
  });
}
