/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendPostApi.TrackApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TrackApi', function() {
    describe('trackRouterTrackEmailOpen', function() {
      it('should call trackRouterTrackEmailOpen successfully', function(done) {
        //uncomment below and update the code to test trackRouterTrackEmailOpen
        //instance.trackRouterTrackEmailOpen(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackRouterTrackLinkClick', function() {
      it('should call trackRouterTrackLinkClick successfully', function(done) {
        //uncomment below and update the code to test trackRouterTrackLinkClick
        //instance.trackRouterTrackLinkClick(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackRouterTrackTPSPEmailOpen', function() {
      it('should call trackRouterTrackTPSPEmailOpen successfully', function(done) {
        //uncomment below and update the code to test trackRouterTrackTPSPEmailOpen
        //instance.trackRouterTrackTPSPEmailOpen(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackRouterTrackTPSPLinkClick', function() {
      it('should call trackRouterTrackTPSPLinkClick successfully', function(done) {
        //uncomment below and update the code to test trackRouterTrackTPSPLinkClick
        //instance.trackRouterTrackTPSPLinkClick(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackRouterTrackUnsubscribe', function() {
      it('should call trackRouterTrackUnsubscribe successfully', function(done) {
        //uncomment below and update the code to test trackRouterTrackUnsubscribe
        //instance.trackRouterTrackUnsubscribe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackRouterTrackWelcomeLinkClick', function() {
      it('should call trackRouterTrackWelcomeLinkClick successfully', function(done) {
        //uncomment below and update the code to test trackRouterTrackWelcomeLinkClick
        //instance.trackRouterTrackWelcomeLinkClick(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
