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
 * Swagger Codegen version: 2.4.15
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
    instance = new SendPostApi.AuthApi();
  });

  describe('(package)', function() {
    describe('AuthApi', function() {
      describe('authRouterCreate', function() {
        it('should call authRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for authRouterCreate call and complete the assertions
          /*
          var body = new SendPostApi.ModelsEAccount();
          body.email = "";
          body.signupMode = "";
          body.token = "";
          body.uid = "";
          var xToken = "xToken_example";

          instance.authRouterCreate(body, xToken, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccount);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authRouterGetAuthInfo', function() {
        it('should call authRouterGetAuthInfo successfully', function(done) {
          // TODO: uncomment, update parameter values for authRouterGetAuthInfo call and complete the assertions
          /*
          var body = new SendPostApi.ModelsEAccount();
          body.email = "";
          body.signupMode = "";
          body.token = "";
          body.uid = "";
          var xToken = "xToken_example";

          instance.authRouterGetAuthInfo(body, xToken, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAuthInfo);
            {
              let dataCtr = data.accounts;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsAccount);
                expect(data.apiKey).to.be.a('string');
                expect(data.apiKey).to.be("");
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.url).to.be.a('string');
                expect(data.url).to.be("");

                      }
            }
            expect(data.member).to.be.a(SendPostApi.ModelsMember);
                  expect(data.member.email).to.be.a('string');
              expect(data.member.email).to.be("");
              expect(data.member.id).to.be.a('number');
              expect(data.member.id).to.be("0");
              expect(data.member.isForbidden).to.be.a('boolean');
              expect(data.member.isForbidden).to.be(false);
              expect(data.member.isVerified).to.be.a('boolean');
              expect(data.member.isVerified).to.be(false);
              expect(data.member.created).to.be.a('number');
              expect(data.member.created).to.be("0");

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
