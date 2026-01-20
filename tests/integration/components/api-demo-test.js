import { module, test } from 'qunit';
import { setupRenderingTest } from 'octane-ts-spa/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | api-demo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ApiDemo />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ApiDemo>
        template block text
      </ApiDemo>
    `);

    assert.dom().hasText('template block text');
  });
});
