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
 * Swagger Codegen version: 2.4.27
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
    instance = new SendPostApi.AccountmemberApi();
  });

  describe('(package)', function() {
    describe('AccountmemberApi', function() {
      describe('memberRouterDelete', function() {
        it('should call memberRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for memberRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var memberId = 789;

          instance.memberRouterDelete(xAccountApiKey, memberId, function(error, data, response) {
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
      describe('memberRouterGet', function() {
        it('should call memberRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for memberRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var memberId = 789;

          instance.memberRouterGet(xAccountApiKey, memberId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsMember);
            expect(data.companyName).to.be.a('string');
            expect(data.companyName).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.isForbidden).to.be.a('boolean');
            expect(data.isForbidden).to.be(false);
            expect(data.isVerified).to.be.a('boolean');
            expect(data.isVerified).to.be(false);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.onboardQAnswered).to.be.a('boolean');
            expect(data.onboardQAnswered).to.be(false);
            expect(data.phoneNumber).to.be.a('string');
            expect(data.phoneNumber).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('memberRouterGetAll', function() {
        it('should call memberRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for memberRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.memberRouterGetAll(xAccountApiKey, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsMember);
              expect(data.companyName).to.be.a('string');
              expect(data.companyName).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.email).to.be.a('string');
              expect(data.email).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.isForbidden).to.be.a('boolean');
              expect(data.isForbidden).to.be(false);
              expect(data.isVerified).to.be.a('boolean');
              expect(data.isVerified).to.be(false);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.onboardQAnswered).to.be.a('boolean');
              expect(data.onboardQAnswered).to.be(false);
              expect(data.phoneNumber).to.be.a('string');
              expect(data.phoneNumber).to.be("");
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
      describe('memberRouterUpdate', function() {
        it('should call memberRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for memberRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var memberId = 789;
          var body = new SendPostApi.ModelsEMember();
          body.name = "";
          body.url = "";

          instance.memberRouterUpdate(xAccountApiKey, memberId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsMember);
            expect(data.companyName).to.be.a('string');
            expect(data.companyName).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.isForbidden).to.be.a('boolean');
            expect(data.isForbidden).to.be(false);
            expect(data.isVerified).to.be.a('boolean');
            expect(data.isVerified).to.be(false);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.onboardQAnswered).to.be.a('boolean');
            expect(data.onboardQAnswered).to.be(false);
            expect(data.phoneNumber).to.be.a('string');
            expect(data.phoneNumber).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('memberRouterVerifyByEmailRequest', function() {
        it('should call memberRouterVerifyByEmailRequest successfully', function(done) {
          // TODO: uncomment, update parameter values for memberRouterVerifyByEmailRequest call
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var memberId = 789;
          var body = new SendPostApi.ModelsVerifyByMemberTokenRequest();
          body.email = "";

          instance.memberRouterVerifyByEmailRequest(xAccountApiKey, memberId, body, function(error, data, response) {
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
