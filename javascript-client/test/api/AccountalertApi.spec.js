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
    instance = new SendPostApi.AccountalertApi();
  });

  describe('(package)', function() {
    describe('AccountalertApi', function() {
      describe('alertRouterCount', function() {
        it('should call alertRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for alertRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.search = "search_example";

          instance.alertRouterCount(xAccountApiKey, opts, function(error, data, response) {
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
      describe('alertRouterCreateAlert', function() {
        it('should call alertRouterCreateAlert successfully', function(done) {
          // TODO: uncomment, update parameter values for alertRouterCreateAlert call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsAlertRequest();
          body.active = false;
          body.emails = ;
          body.entityType = "";
          body.entityValue = "0";
          body.label = new SendPostApi.ModelsAlertLabel();
          body.member = "0";
          body.name = "";
          body.notificationType = new SendPostApi.ModelsNotificationType();
          body.parameter = "0";
          body.processedCountThreshold = "0";
          body.provider = "";
          body.slackUrl = "";
          body.threshold = "";

          instance.alertRouterCreateAlert(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAlertResponse);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('alertRouterDelete', function() {
        it('should call alertRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for alertRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var alertId = 789;

          instance.alertRouterDelete(xAccountApiKey, alertId, function(error, data, response) {
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
      describe('alertRouterGetAll', function() {
        it('should call alertRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for alertRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.alertRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsDetailedAlert);
              expect(data.active).to.be.a('boolean');
              expect(data.active).to.be(false);
              expect(data.entityType).to.be.a('string');
              expect(data.entityType).to.be("");
              expect(data.entityValue).to.be.a('string');
              expect(data.entityValue).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.label).to.be.a(SendPostApi.ModelsAlertLabel);
                  expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.parameter).to.be.a('number');
              expect(data.parameter).to.be("0");
              expect(data.provider).to.be.a('string');
              expect(data.provider).to.be("");
              expect(data.threshold).to.be.a('string');
              expect(data.threshold).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('alertRouterUpdate', function() {
        it('should call alertRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for alertRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var alertId = 789;
          var body = new SendPostApi.ModelsEAlert();
          body.active = "";

          instance.alertRouterUpdate(xAccountApiKey, alertId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.Alert);

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