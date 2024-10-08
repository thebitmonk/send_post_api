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
 * Swagger Codegen version: 2.4.43
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
    instance = new SendPostApi.AccounttemplateApi();
  });

  describe('(package)', function() {
    describe('AccounttemplateApi', function() {
      describe('accountTemplateRouterCopy', function() {
        it('should call accountTemplateRouterCopy successfully', function(done) {
          // TODO: uncomment, update parameter values for accountTemplateRouterCopy call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var templateid = 789;

          instance.accountTemplateRouterCopy(xAccountApiKey, templateid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountTemplate);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.createdBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.createdBy.companyName).to.be.a('string');
              expect(data.createdBy.companyName).to.be("");
              expect(data.createdBy.created).to.be.a('number');
              expect(data.createdBy.created).to.be("0");
              expect(data.createdBy.email).to.be.a('string');
              expect(data.createdBy.email).to.be("");
              expect(data.createdBy.id).to.be.a('number');
              expect(data.createdBy.id).to.be("0");
              expect(data.createdBy.isForbidden).to.be.a('boolean');
              expect(data.createdBy.isForbidden).to.be(false);
              expect(data.createdBy.isVerified).to.be.a('boolean');
              expect(data.createdBy.isVerified).to.be(false);
              expect(data.createdBy.name).to.be.a('string');
              expect(data.createdBy.name).to.be("");
              expect(data.createdBy.onboardQAnswered).to.be.a('boolean');
              expect(data.createdBy.onboardQAnswered).to.be(false);
              expect(data.createdBy.phoneNumber).to.be.a('string');
              expect(data.createdBy.phoneNumber).to.be("");
              expect(data.createdBy.url).to.be.a('string');
              expect(data.createdBy.url).to.be("");
            expect(data.html).to.be.a('string');
            expect(data.html).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.template).to.be.a('string');
            expect(data.template).to.be("");
            expect(data.text).to.be.a('string');
            expect(data.text).to.be("");
            expect(data.updated).to.be.a('number');
            expect(data.updated).to.be("0");
            expect(data.updatedBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.updatedBy.companyName).to.be.a('string');
              expect(data.updatedBy.companyName).to.be("");
              expect(data.updatedBy.created).to.be.a('number');
              expect(data.updatedBy.created).to.be("0");
              expect(data.updatedBy.email).to.be.a('string');
              expect(data.updatedBy.email).to.be("");
              expect(data.updatedBy.id).to.be.a('number');
              expect(data.updatedBy.id).to.be("0");
              expect(data.updatedBy.isForbidden).to.be.a('boolean');
              expect(data.updatedBy.isForbidden).to.be(false);
              expect(data.updatedBy.isVerified).to.be.a('boolean');
              expect(data.updatedBy.isVerified).to.be(false);
              expect(data.updatedBy.name).to.be.a('string');
              expect(data.updatedBy.name).to.be("");
              expect(data.updatedBy.onboardQAnswered).to.be.a('boolean');
              expect(data.updatedBy.onboardQAnswered).to.be(false);
              expect(data.updatedBy.phoneNumber).to.be.a('string');
              expect(data.updatedBy.phoneNumber).to.be("");
              expect(data.updatedBy.url).to.be.a('string');
              expect(data.updatedBy.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountTemplateRouterCount', function() {
        it('should call accountTemplateRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for accountTemplateRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.search = "search_example";

          instance.accountTemplateRouterCount(xAccountApiKey, opts, function(error, data, response) {
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
      describe('accountTemplateRouterCreate', function() {
        it('should call accountTemplateRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountTemplateRouterCreate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsEAccountTemplate();
          body.html = "";
          body.memberId = "0";
          body.name = "";
          body.template = "";
          body.text = "";

          instance.accountTemplateRouterCreate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountTemplate);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.createdBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.createdBy.companyName).to.be.a('string');
              expect(data.createdBy.companyName).to.be("");
              expect(data.createdBy.created).to.be.a('number');
              expect(data.createdBy.created).to.be("0");
              expect(data.createdBy.email).to.be.a('string');
              expect(data.createdBy.email).to.be("");
              expect(data.createdBy.id).to.be.a('number');
              expect(data.createdBy.id).to.be("0");
              expect(data.createdBy.isForbidden).to.be.a('boolean');
              expect(data.createdBy.isForbidden).to.be(false);
              expect(data.createdBy.isVerified).to.be.a('boolean');
              expect(data.createdBy.isVerified).to.be(false);
              expect(data.createdBy.name).to.be.a('string');
              expect(data.createdBy.name).to.be("");
              expect(data.createdBy.onboardQAnswered).to.be.a('boolean');
              expect(data.createdBy.onboardQAnswered).to.be(false);
              expect(data.createdBy.phoneNumber).to.be.a('string');
              expect(data.createdBy.phoneNumber).to.be("");
              expect(data.createdBy.url).to.be.a('string');
              expect(data.createdBy.url).to.be("");
            expect(data.html).to.be.a('string');
            expect(data.html).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.template).to.be.a('string');
            expect(data.template).to.be("");
            expect(data.text).to.be.a('string');
            expect(data.text).to.be("");
            expect(data.updated).to.be.a('number');
            expect(data.updated).to.be("0");
            expect(data.updatedBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.updatedBy.companyName).to.be.a('string');
              expect(data.updatedBy.companyName).to.be("");
              expect(data.updatedBy.created).to.be.a('number');
              expect(data.updatedBy.created).to.be("0");
              expect(data.updatedBy.email).to.be.a('string');
              expect(data.updatedBy.email).to.be("");
              expect(data.updatedBy.id).to.be.a('number');
              expect(data.updatedBy.id).to.be("0");
              expect(data.updatedBy.isForbidden).to.be.a('boolean');
              expect(data.updatedBy.isForbidden).to.be(false);
              expect(data.updatedBy.isVerified).to.be.a('boolean');
              expect(data.updatedBy.isVerified).to.be(false);
              expect(data.updatedBy.name).to.be.a('string');
              expect(data.updatedBy.name).to.be("");
              expect(data.updatedBy.onboardQAnswered).to.be.a('boolean');
              expect(data.updatedBy.onboardQAnswered).to.be(false);
              expect(data.updatedBy.phoneNumber).to.be.a('string');
              expect(data.updatedBy.phoneNumber).to.be("");
              expect(data.updatedBy.url).to.be.a('string');
              expect(data.updatedBy.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountTemplateRouterDelete', function() {
        it('should call accountTemplateRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for accountTemplateRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var templateid = 789;
          var body = new SendPostApi.ModelsEMember();
          body.id = "0";

          instance.accountTemplateRouterDelete(xAccountApiKey, templateid, body, function(error, data, response) {
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
      describe('accountTemplateRouterGet', function() {
        it('should call accountTemplateRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for accountTemplateRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var templateid = 789;

          instance.accountTemplateRouterGet(xAccountApiKey, templateid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountTemplate);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.createdBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.createdBy.companyName).to.be.a('string');
              expect(data.createdBy.companyName).to.be("");
              expect(data.createdBy.created).to.be.a('number');
              expect(data.createdBy.created).to.be("0");
              expect(data.createdBy.email).to.be.a('string');
              expect(data.createdBy.email).to.be("");
              expect(data.createdBy.id).to.be.a('number');
              expect(data.createdBy.id).to.be("0");
              expect(data.createdBy.isForbidden).to.be.a('boolean');
              expect(data.createdBy.isForbidden).to.be(false);
              expect(data.createdBy.isVerified).to.be.a('boolean');
              expect(data.createdBy.isVerified).to.be(false);
              expect(data.createdBy.name).to.be.a('string');
              expect(data.createdBy.name).to.be("");
              expect(data.createdBy.onboardQAnswered).to.be.a('boolean');
              expect(data.createdBy.onboardQAnswered).to.be(false);
              expect(data.createdBy.phoneNumber).to.be.a('string');
              expect(data.createdBy.phoneNumber).to.be("");
              expect(data.createdBy.url).to.be.a('string');
              expect(data.createdBy.url).to.be("");
            expect(data.html).to.be.a('string');
            expect(data.html).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.template).to.be.a('string');
            expect(data.template).to.be("");
            expect(data.text).to.be.a('string');
            expect(data.text).to.be("");
            expect(data.updated).to.be.a('number');
            expect(data.updated).to.be("0");
            expect(data.updatedBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.updatedBy.companyName).to.be.a('string');
              expect(data.updatedBy.companyName).to.be("");
              expect(data.updatedBy.created).to.be.a('number');
              expect(data.updatedBy.created).to.be("0");
              expect(data.updatedBy.email).to.be.a('string');
              expect(data.updatedBy.email).to.be("");
              expect(data.updatedBy.id).to.be.a('number');
              expect(data.updatedBy.id).to.be("0");
              expect(data.updatedBy.isForbidden).to.be.a('boolean');
              expect(data.updatedBy.isForbidden).to.be(false);
              expect(data.updatedBy.isVerified).to.be.a('boolean');
              expect(data.updatedBy.isVerified).to.be(false);
              expect(data.updatedBy.name).to.be.a('string');
              expect(data.updatedBy.name).to.be("");
              expect(data.updatedBy.onboardQAnswered).to.be.a('boolean');
              expect(data.updatedBy.onboardQAnswered).to.be(false);
              expect(data.updatedBy.phoneNumber).to.be.a('string');
              expect(data.updatedBy.phoneNumber).to.be("");
              expect(data.updatedBy.url).to.be.a('string');
              expect(data.updatedBy.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountTemplateRouterGetAll', function() {
        it('should call accountTemplateRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for accountTemplateRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.accountTemplateRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsAccountTemplate);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.createdBy).to.be.a(SendPostApi.ModelsMember);
                    expect(data.createdBy.companyName).to.be.a('string');
                expect(data.createdBy.companyName).to.be("");
                expect(data.createdBy.created).to.be.a('number');
                expect(data.createdBy.created).to.be("0");
                expect(data.createdBy.email).to.be.a('string');
                expect(data.createdBy.email).to.be("");
                expect(data.createdBy.id).to.be.a('number');
                expect(data.createdBy.id).to.be("0");
                expect(data.createdBy.isForbidden).to.be.a('boolean');
                expect(data.createdBy.isForbidden).to.be(false);
                expect(data.createdBy.isVerified).to.be.a('boolean');
                expect(data.createdBy.isVerified).to.be(false);
                expect(data.createdBy.name).to.be.a('string');
                expect(data.createdBy.name).to.be("");
                expect(data.createdBy.onboardQAnswered).to.be.a('boolean');
                expect(data.createdBy.onboardQAnswered).to.be(false);
                expect(data.createdBy.phoneNumber).to.be.a('string');
                expect(data.createdBy.phoneNumber).to.be("");
                expect(data.createdBy.url).to.be.a('string');
                expect(data.createdBy.url).to.be("");
              expect(data.html).to.be.a('string');
              expect(data.html).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.template).to.be.a('string');
              expect(data.template).to.be("");
              expect(data.text).to.be.a('string');
              expect(data.text).to.be("");
              expect(data.updated).to.be.a('number');
              expect(data.updated).to.be("0");
              expect(data.updatedBy).to.be.a(SendPostApi.ModelsMember);
                    expect(data.updatedBy.companyName).to.be.a('string');
                expect(data.updatedBy.companyName).to.be("");
                expect(data.updatedBy.created).to.be.a('number');
                expect(data.updatedBy.created).to.be("0");
                expect(data.updatedBy.email).to.be.a('string');
                expect(data.updatedBy.email).to.be("");
                expect(data.updatedBy.id).to.be.a('number');
                expect(data.updatedBy.id).to.be("0");
                expect(data.updatedBy.isForbidden).to.be.a('boolean');
                expect(data.updatedBy.isForbidden).to.be(false);
                expect(data.updatedBy.isVerified).to.be.a('boolean');
                expect(data.updatedBy.isVerified).to.be(false);
                expect(data.updatedBy.name).to.be.a('string');
                expect(data.updatedBy.name).to.be("");
                expect(data.updatedBy.onboardQAnswered).to.be.a('boolean');
                expect(data.updatedBy.onboardQAnswered).to.be(false);
                expect(data.updatedBy.phoneNumber).to.be.a('string');
                expect(data.updatedBy.phoneNumber).to.be("");
                expect(data.updatedBy.url).to.be.a('string');
                expect(data.updatedBy.url).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountTemplateRouterUpdate', function() {
        it('should call accountTemplateRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountTemplateRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var templateid = 789;
          var body = new SendPostApi.ModelsEAccountTemplate();
          body.html = "";
          body.memberId = "0";
          body.name = "";
          body.template = "";
          body.text = "";

          instance.accountTemplateRouterUpdate(xAccountApiKey, templateid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountTemplate);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.createdBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.createdBy.companyName).to.be.a('string');
              expect(data.createdBy.companyName).to.be("");
              expect(data.createdBy.created).to.be.a('number');
              expect(data.createdBy.created).to.be("0");
              expect(data.createdBy.email).to.be.a('string');
              expect(data.createdBy.email).to.be("");
              expect(data.createdBy.id).to.be.a('number');
              expect(data.createdBy.id).to.be("0");
              expect(data.createdBy.isForbidden).to.be.a('boolean');
              expect(data.createdBy.isForbidden).to.be(false);
              expect(data.createdBy.isVerified).to.be.a('boolean');
              expect(data.createdBy.isVerified).to.be(false);
              expect(data.createdBy.name).to.be.a('string');
              expect(data.createdBy.name).to.be("");
              expect(data.createdBy.onboardQAnswered).to.be.a('boolean');
              expect(data.createdBy.onboardQAnswered).to.be(false);
              expect(data.createdBy.phoneNumber).to.be.a('string');
              expect(data.createdBy.phoneNumber).to.be("");
              expect(data.createdBy.url).to.be.a('string');
              expect(data.createdBy.url).to.be("");
            expect(data.html).to.be.a('string');
            expect(data.html).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.template).to.be.a('string');
            expect(data.template).to.be("");
            expect(data.text).to.be.a('string');
            expect(data.text).to.be("");
            expect(data.updated).to.be.a('number');
            expect(data.updated).to.be("0");
            expect(data.updatedBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.updatedBy.companyName).to.be.a('string');
              expect(data.updatedBy.companyName).to.be("");
              expect(data.updatedBy.created).to.be.a('number');
              expect(data.updatedBy.created).to.be("0");
              expect(data.updatedBy.email).to.be.a('string');
              expect(data.updatedBy.email).to.be("");
              expect(data.updatedBy.id).to.be.a('number');
              expect(data.updatedBy.id).to.be("0");
              expect(data.updatedBy.isForbidden).to.be.a('boolean');
              expect(data.updatedBy.isForbidden).to.be(false);
              expect(data.updatedBy.isVerified).to.be.a('boolean');
              expect(data.updatedBy.isVerified).to.be(false);
              expect(data.updatedBy.name).to.be.a('string');
              expect(data.updatedBy.name).to.be("");
              expect(data.updatedBy.onboardQAnswered).to.be.a('boolean');
              expect(data.updatedBy.onboardQAnswered).to.be(false);
              expect(data.updatedBy.phoneNumber).to.be.a('string');
              expect(data.updatedBy.phoneNumber).to.be("");
              expect(data.updatedBy.url).to.be.a('string');
              expect(data.updatedBy.url).to.be("");

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
