import EmberRouter from '@ember/routing/router';
import config from 'octane-ts-spa/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('form');
  this.route('api');
});
