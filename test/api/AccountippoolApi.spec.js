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
    instance = new SendPostApi.AccountippoolApi();
  });

  describe('(package)', function() {
    describe('AccountippoolApi', function() {
      describe('accountIPPoolRouterCount', function() {
        it('should call accountIPPoolRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterCount call and complete the assertions
          /*

          instance.accountIPPoolRouterCount(xAccountApiKey, function(error, data, response) {
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
      describe('accountIPPoolRouterCreate', function() {
        it('should call accountIPPoolRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterCreate call and complete the assertions
          /*

          instance.accountIPPoolRouterCreate(body, xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountIPPool);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIPPoolRouterDelete', function() {
        it('should call accountIPPoolRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterDelete call and complete the assertions
          /*

          instance.accountIPPoolRouterDelete(xAccountApiKey, ippoolid, function(error, data, response) {
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
      describe('accountIPPoolRouterGet', function() {
        it('should call accountIPPoolRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterGet call and complete the assertions
          /*

          instance.accountIPPoolRouterGet(xAccountApiKey, ippoolid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountIPPool);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIPPoolRouterGetAll', function() {
        it('should call accountIPPoolRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterGetAll call and complete the assertions
          /*
          var opts = {};

          instance.accountIPPoolRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsAccountIPPool);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIPPoolRouterUpdate', function() {
        it('should call accountIPPoolRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterUpdate call and complete the assertions
          /*

          instance.accountIPPoolRouterUpdate(body, xAccountApiKey, ippoolid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountIPPool);

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
