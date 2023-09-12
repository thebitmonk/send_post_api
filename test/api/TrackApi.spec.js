/*
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
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

  describe('(package)', function() {
    describe('TrackApi', function() {
      describe('trackRouterTrackEmailOpen', function() {
        it('should call trackRouterTrackEmailOpen successfully', function(done) {
          // TODO: uncomment, update parameter values for trackRouterTrackEmailOpen call
          /*
          var ipId = 789;
          var accountId = 789;
          var subAccountId = 789;
          var messageId = "messageId_example";
          var emailType = "emailType_example";

          instance.trackRouterTrackEmailOpen(ipId, accountId, subAccountId, messageId, emailType, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('trackRouterTrackLinkClick', function() {
        it('should call trackRouterTrackLinkClick successfully', function(done) {
          // TODO: uncomment, update parameter values for trackRouterTrackLinkClick call
          /*
          var ipId = 789;
          var accountId = 789;
          var subAccountId = 789;
          var messageId = "messageId_example";
          var emailType = "emailType_example";
          var redirecturl = "redirecturl_example";

          instance.trackRouterTrackLinkClick(ipId, accountId, subAccountId, messageId, emailType, redirecturl, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('trackRouterTrackTPSPEmailOpen', function() {
        it('should call trackRouterTrackTPSPEmailOpen successfully', function(done) {
          // TODO: uncomment, update parameter values for trackRouterTrackTPSPEmailOpen call
          /*
          var tpspId = 789;
          var accountId = 789;
          var subAccountId = 789;
          var messageId = "messageId_example";
          var emailType = "emailType_example";

          instance.trackRouterTrackTPSPEmailOpen(tpspId, accountId, subAccountId, messageId, emailType, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('trackRouterTrackTPSPLinkClick', function() {
        it('should call trackRouterTrackTPSPLinkClick successfully', function(done) {
          // TODO: uncomment, update parameter values for trackRouterTrackTPSPLinkClick call
          /*
          var tpspId = 789;
          var accountId = 789;
          var subAccountId = 789;
          var messageId = "messageId_example";
          var emailType = "emailType_example";
          var redirecturl = "redirecturl_example";

          instance.trackRouterTrackTPSPLinkClick(tpspId, accountId, subAccountId, messageId, emailType, redirecturl, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('trackRouterTrackUnsubscribe', function() {
        it('should call trackRouterTrackUnsubscribe successfully', function(done) {
          // TODO: uncomment, update parameter values for trackRouterTrackUnsubscribe call
          /*
          var ipId = 789;
          var accountId = 789;
          var subAccountId = 789;
          var messageId = "messageId_example";
          var emailType = "emailType_example";

          instance.trackRouterTrackUnsubscribe(ipId, accountId, subAccountId, messageId, emailType, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('trackRouterTrackWelcomeLinkClick', function() {
        it('should call trackRouterTrackWelcomeLinkClick successfully', function(done) {
          // TODO: uncomment, update parameter values for trackRouterTrackWelcomeLinkClick call
          /*
          var redirecturl = "redirecturl_example";

          instance.trackRouterTrackWelcomeLinkClick(redirecturl, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
