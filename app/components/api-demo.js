import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApiDemoComponent extends Component {
  @tracked isLoading = false;
  @tracked data = null;

  @action
  async loadData() {
    this.isLoading = true;
    this.data = null;

    try {
      await new Promise((r) => setTimeout(r, 1000));
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      this.data = await resp.json();
    } catch (e) {
      alert('Không load được dữ liệu');
    } finally {
      this.isLoading = false;
    }
  }
}
