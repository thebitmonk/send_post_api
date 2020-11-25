/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    instance = new SendPostApi.AccountwebhookApi();
  });

  describe('(package)', function() {
    describe('AccountwebhookApi', function() {
      describe('accountWebhookRouterCount', function() {
        it('should call accountWebhookRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for accountWebhookRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.accountWebhookRouterCount(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsCountStat);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountWebhookRouterCreate', function() {
        it('should call accountWebhookRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountWebhookRouterCreate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsEWebhook();
          body.clicked = false;
          body.delivered = false;
          body.dropped = false;
          body.enabled = false;
          body.hardBounced = false;
          body.opened = false;
          body.processed = false;
          body.softBounced = false;
          body.spam = false;
          body.unsubscribed = false;
          body.url = "";

          instance.accountWebhookRouterCreate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountWebhook);
            expect(data.clicked).to.be.a('boolean');
            expect(data.clicked).to.be(false);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.delivered).to.be.a('boolean');
            expect(data.delivered).to.be(false);
            expect(data.dropped).to.be.a('boolean');
            expect(data.dropped).to.be(false);
            expect(data.enabled).to.be.a('boolean');
            expect(data.enabled).to.be(false);
            expect(data.hardBounced).to.be.a('boolean');
            expect(data.hardBounced).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.opened).to.be.a('boolean');
            expect(data.opened).to.be(false);
            expect(data.processed).to.be.a('boolean');
            expect(data.processed).to.be(false);
            expect(data.softBounced).to.be.a('boolean');
            expect(data.softBounced).to.be(false);
            expect(data.spam).to.be.a('boolean');
            expect(data.spam).to.be(false);
            expect(data.unsubscribed).to.be.a('boolean');
            expect(data.unsubscribed).to.be(false);
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountWebhookRouterDelete', function() {
        it('should call accountWebhookRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for accountWebhookRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var webhookId = 789;

          instance.accountWebhookRouterDelete(xAccountApiKey, webhookId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDeleteResponse);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountWebhookRouterGet', function() {
        it('should call accountWebhookRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for accountWebhookRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var webhookId = 789;

          instance.accountWebhookRouterGet(xAccountApiKey, webhookId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountWebhook);
            expect(data.clicked).to.be.a('boolean');
            expect(data.clicked).to.be(false);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.delivered).to.be.a('boolean');
            expect(data.delivered).to.be(false);
            expect(data.dropped).to.be.a('boolean');
            expect(data.dropped).to.be(false);
            expect(data.enabled).to.be.a('boolean');
            expect(data.enabled).to.be(false);
            expect(data.hardBounced).to.be.a('boolean');
            expect(data.hardBounced).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.opened).to.be.a('boolean');
            expect(data.opened).to.be(false);
            expect(data.processed).to.be.a('boolean');
            expect(data.processed).to.be(false);
            expect(data.softBounced).to.be.a('boolean');
            expect(data.softBounced).to.be(false);
            expect(data.spam).to.be.a('boolean');
            expect(data.spam).to.be(false);
            expect(data.unsubscribed).to.be.a('boolean');
            expect(data.unsubscribed).to.be(false);
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountWebhookRouterGetAll', function() {
        it('should call accountWebhookRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for accountWebhookRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.accountWebhookRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsAccountWebhook);
              expect(data.clicked).to.be.a('boolean');
              expect(data.clicked).to.be(false);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.delivered).to.be.a('boolean');
              expect(data.delivered).to.be(false);
              expect(data.dropped).to.be.a('boolean');
              expect(data.dropped).to.be(false);
              expect(data.enabled).to.be.a('boolean');
              expect(data.enabled).to.be(false);
              expect(data.hardBounced).to.be.a('boolean');
              expect(data.hardBounced).to.be(false);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.opened).to.be.a('boolean');
              expect(data.opened).to.be(false);
              expect(data.processed).to.be.a('boolean');
              expect(data.processed).to.be(false);
              expect(data.softBounced).to.be.a('boolean');
              expect(data.softBounced).to.be(false);
              expect(data.spam).to.be.a('boolean');
              expect(data.spam).to.be(false);
              expect(data.unsubscribed).to.be.a('boolean');
              expect(data.unsubscribed).to.be(false);
              expect(data.url).to.be.a('string');
              expect(data.url).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountWebhookRouterUpdate', function() {
        it('should call accountWebhookRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountWebhookRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var webhookId = 789;
          var body = new SendPostApi.ModelsEWebhook();
          body.clicked = false;
          body.delivered = false;
          body.dropped = false;
          body.enabled = false;
          body.hardBounced = false;
          body.opened = false;
          body.processed = false;
          body.softBounced = false;
          body.spam = false;
          body.unsubscribed = false;
          body.url = "";

          instance.accountWebhookRouterUpdate(xAccountApiKey, webhookId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountWebhook);
            expect(data.clicked).to.be.a('boolean');
            expect(data.clicked).to.be(false);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.delivered).to.be.a('boolean');
            expect(data.delivered).to.be(false);
            expect(data.dropped).to.be.a('boolean');
            expect(data.dropped).to.be(false);
            expect(data.enabled).to.be.a('boolean');
            expect(data.enabled).to.be(false);
            expect(data.hardBounced).to.be.a('boolean');
            expect(data.hardBounced).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.opened).to.be.a('boolean');
            expect(data.opened).to.be(false);
            expect(data.processed).to.be.a('boolean');
            expect(data.processed).to.be(false);
            expect(data.softBounced).to.be.a('boolean');
            expect(data.softBounced).to.be(false);
            expect(data.spam).to.be.a('boolean');
            expect(data.spam).to.be(false);
            expect(data.unsubscribed).to.be.a('boolean');
            expect(data.unsubscribed).to.be(false);
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

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
