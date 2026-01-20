import { module, test } from 'qunit';
import { setupRenderingTest } from 'octane-ts-spa/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | name-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NameForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <NameForm>
        template block text
      </NameForm>
    `);

    assert.dom().hasText('template block text');
  });
});
