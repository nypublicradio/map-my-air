import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import config from 'map-my-air/config/environment';

const {
  host
} = config;

export default Ember.Mixin.create({
  uploader: EmberUploader.Uploader.create({
    url: `${host}/gpxroute`
  })
})
