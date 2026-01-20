// app/components/name-form.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NameFormComponent extends Component {
  @tracked name = '';

  @action
  updateName(event) {
    this.name = event.target.value;
  }
}
