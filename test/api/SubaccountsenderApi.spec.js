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
    instance = new SendPostApi.SubaccountsenderApi();
  });

  describe('(package)', function() {
    describe('SubaccountsenderApi', function() {
      describe('senderRouterCount', function() {
        it('should call senderRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for senderRouterCount call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";

          instance.senderRouterCount(xSubAccountApiKey, function(error, data, response) {
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
      describe('senderRouterCreate', function() {
        it('should call senderRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for senderRouterCreate call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var body = new SendPostApi.ModelsESender();
          body.domain = "";
          body.fromEmail = "";
          body.name = "";
          body.replyToEmail = "";

          instance.senderRouterCreate(xSubAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSender);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.domain).to.be.a('string');
            expect(data.domain).to.be("");
            expect(data.fromEmail).to.be.a('string');
            expect(data.fromEmail).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.replyToEmail).to.be.a('string');
            expect(data.replyToEmail).to.be("");
            expect(data.verified).to.be.a('boolean');
            expect(data.verified).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('senderRouterDelete', function() {
        it('should call senderRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for senderRouterDelete call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var senderId = 789;

          instance.senderRouterDelete(xSubAccountApiKey, senderId, function(error, data, response) {
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
      describe('senderRouterGet', function() {
        it('should call senderRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for senderRouterGet call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var senderId = 789;

          instance.senderRouterGet(xSubAccountApiKey, senderId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSender);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.domain).to.be.a('string');
            expect(data.domain).to.be("");
            expect(data.fromEmail).to.be.a('string');
            expect(data.fromEmail).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.replyToEmail).to.be.a('string');
            expect(data.replyToEmail).to.be("");
            expect(data.verified).to.be.a('boolean');
            expect(data.verified).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('senderRouterGetAll', function() {
        it('should call senderRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for senderRouterGetAll call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.senderRouterGetAll(xSubAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSender);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.domain).to.be.a('string');
              expect(data.domain).to.be("");
              expect(data.fromEmail).to.be.a('string');
              expect(data.fromEmail).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.replyToEmail).to.be.a('string');
              expect(data.replyToEmail).to.be("");
              expect(data.verified).to.be.a('boolean');
              expect(data.verified).to.be(false);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('senderRouterUpdate', function() {
        it('should call senderRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for senderRouterUpdate call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var senderId = 789;
          var body = new SendPostApi.ModelsESender();
          body.domain = "";
          body.fromEmail = "";
          body.name = "";
          body.replyToEmail = "";

          instance.senderRouterUpdate(xSubAccountApiKey, senderId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSender);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.domain).to.be.a('string');
            expect(data.domain).to.be("");
            expect(data.fromEmail).to.be.a('string');
            expect(data.fromEmail).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.replyToEmail).to.be.a('string');
            expect(data.replyToEmail).to.be("");
            expect(data.verified).to.be.a('boolean');
            expect(data.verified).to.be(false);

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
