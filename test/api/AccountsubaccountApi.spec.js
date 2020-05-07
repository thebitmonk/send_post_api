/*
 * SendPost API
 * SendPost API to send fast transactional emails to inbox
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
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
    instance = new SendPostApi.AccountsubaccountApi();
  });

  describe('(package)', function() {
    describe('AccountsubaccountApi', function() {
      describe('subAccountRouterCreate', function() {
        it('should call subAccountRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterCreate call
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsSubAccount();
          body.apiKey = "";
          body.created = "0";
          body.id = "0";
          body.name = "";
          body.type = new SendPostApi.ModelsSubAccountType();

          instance.subAccountRouterCreate(xAccountApiKey, body, function(error, data, response) {
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
      describe('subAccountRouterDelete', function() {
        it('should call subAccountRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterDelete call
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var subAccountId = 789;

          instance.subAccountRouterDelete(xAccountApiKey, subAccountId, function(error, data, response) {
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
      describe('subAccountRouterGet', function() {
        it('should call subAccountRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var subAccountId = 789;

          instance.subAccountRouterGet(xAccountApiKey, subAccountId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSubAccount);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.type).to.be.a(SendPostApi.ModelsSubAccountType);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountRouterGetAll', function() {
        it('should call subAccountRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.subAccountRouterGetAll(xAccountApiKey, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSubAccount);
              expect(data.apiKey).to.be.a('string');
              expect(data.apiKey).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.type).to.be.a(SendPostApi.ModelsSubAccountType);
      
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountRouterUpdate', function() {
        it('should call subAccountRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var subAccountId = 789;
          var body = new SendPostApi.ModelsSubAccount();
          body.apiKey = "";
          body.created = "0";
          body.id = "0";
          body.name = "";
          body.type = new SendPostApi.ModelsSubAccountType();

          instance.subAccountRouterUpdate(xAccountApiKey, subAccountId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSubAccount);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.type).to.be.a(SendPostApi.ModelsSubAccountType);
    
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
