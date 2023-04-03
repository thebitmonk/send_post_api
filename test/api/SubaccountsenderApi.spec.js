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
 * Swagger Codegen version: 3.0.41
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

          instance.senderRouterCount(xSubAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsCountStat);

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

          instance.senderRouterCreate(body, xSubAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSender);

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

          instance.senderRouterDelete(xSubAccountApiKey, senderId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDeleteResponse);

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

          instance.senderRouterGet(xSubAccountApiKey, senderId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSender);

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
          var opts = {};

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

          instance.senderRouterUpdate(body, xSubAccountApiKey, senderId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSender);

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
