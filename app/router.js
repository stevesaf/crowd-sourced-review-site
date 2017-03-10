import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('selectionpage', {path: '/selectionpage/:selection_id'});
  this.route('happyhour');
  this.route('activity');
  this.route('restaurant');
  this.route('nerds');
  this.route('happypath');
});

export default Router;
