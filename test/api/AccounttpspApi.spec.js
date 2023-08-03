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
    instance = new SendPostApi.AccounttpspApi();
  });

  describe('(package)', function() {
    describe('AccounttpspApi', function() {
      describe('tPSPRouterCount', function() {
        it('should call tPSPRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for tPSPRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.search = "search_example";

          instance.tPSPRouterCount(xAccountApiKey, opts, function(error, data, response) {
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
      describe('tPSPRouterDelete', function() {
        it('should call tPSPRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tPSPRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var tpspId = 789;

          instance.tPSPRouterDelete(xAccountApiKey, tpspId, function(error, data, response) {
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
      describe('tPSPRouterGet', function() {
        it('should call tPSPRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tPSPRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var tpspId = 789;

          instance.tPSPRouterGet(xAccountApiKey, tpspId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsThirdPartySendingProvider);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.domain).to.be.a('string');
            expect(data.domain).to.be("");
            expect(data.endpoint).to.be.a('string');
            expect(data.endpoint).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.oauthToken).to.be.a('string');
            expect(data.oauthToken).to.be("");
            expect(data.port).to.be.a('number');
            expect(data.port).to.be("0");
            expect(data.ratePerHour).to.be.a('number');
            expect(data.ratePerHour).to.be("0");
            expect(data.retryTime).to.be.a('number');
            expect(data.retryTime).to.be("0");
            expect(data.secret).to.be.a('string');
            expect(data.secret).to.be("");
            expect(data.type).to.be.a(SendPostApi.ModelsThirdPartySendingProviderType);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tPSPRouterGetAll', function() {
        it('should call tPSPRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for tPSPRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.tPSPRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsThirdPartySendingProvider);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.domain).to.be.a('string');
              expect(data.domain).to.be("");
              expect(data.endpoint).to.be.a('string');
              expect(data.endpoint).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.key).to.be.a('string');
              expect(data.key).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.oauthToken).to.be.a('string');
              expect(data.oauthToken).to.be("");
              expect(data.port).to.be.a('number');
              expect(data.port).to.be("0");
              expect(data.ratePerHour).to.be.a('number');
              expect(data.ratePerHour).to.be("0");
              expect(data.retryTime).to.be.a('number');
              expect(data.retryTime).to.be("0");
              expect(data.secret).to.be.a('string');
              expect(data.secret).to.be("");
              expect(data.type).to.be.a(SendPostApi.ModelsThirdPartySendingProviderType);
      
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tPSPRouterInsert', function() {
        it('should call tPSPRouterInsert successfully', function(done) {
          // TODO: uncomment, update parameter values for tPSPRouterInsert call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsEThirdPartySendingProvider();
          body.domain = "";
          body.endpoint = "";
          body.key = "";
          body.name = "";
          body.oauthToken = "";
          body.port = "0";
          body.retryTime = "0";
          body.secret = "";
          body.type = new SendPostApi.ModelsThirdPartySendingProviderType();

          instance.tPSPRouterInsert(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsThirdPartySendingProvider);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.domain).to.be.a('string');
            expect(data.domain).to.be("");
            expect(data.endpoint).to.be.a('string');
            expect(data.endpoint).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.oauthToken).to.be.a('string');
            expect(data.oauthToken).to.be("");
            expect(data.port).to.be.a('number');
            expect(data.port).to.be("0");
            expect(data.ratePerHour).to.be.a('number');
            expect(data.ratePerHour).to.be("0");
            expect(data.retryTime).to.be.a('number');
            expect(data.retryTime).to.be("0");
            expect(data.secret).to.be.a('string');
            expect(data.secret).to.be("");
            expect(data.type).to.be.a(SendPostApi.ModelsThirdPartySendingProviderType);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tPSPRouterUpdate', function() {
        it('should call tPSPRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for tPSPRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var tpspId = 789;
          var body = new SendPostApi.EUpdateTPSP();

          instance.tPSPRouterUpdate(xAccountApiKey, tpspId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsThirdPartySendingProvider);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.domain).to.be.a('string');
            expect(data.domain).to.be("");
            expect(data.endpoint).to.be.a('string');
            expect(data.endpoint).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.oauthToken).to.be.a('string');
            expect(data.oauthToken).to.be("");
            expect(data.port).to.be.a('number');
            expect(data.port).to.be("0");
            expect(data.ratePerHour).to.be.a('number');
            expect(data.ratePerHour).to.be("0");
            expect(data.retryTime).to.be.a('number');
            expect(data.retryTime).to.be("0");
            expect(data.secret).to.be.a('string');
            expect(data.secret).to.be("");
            expect(data.type).to.be.a(SendPostApi.ModelsThirdPartySendingProviderType);
    
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
