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
 * Swagger Codegen version: 2.4.30
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
          var body = new SendPostApi.ModelsAccountTemplate();
          body.created = "0";
          body.html = "";
          body.id = "0";
          body.name = "";
          body.template = "";
          body.text = "";
          body.updated = "0";

          instance.accountTemplateRouterCreate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountTemplate);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
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

          instance.accountTemplateRouterDelete(xAccountApiKey, templateid, function(error, data, response) {
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
          var body = new SendPostApi.ModelsAccountTemplate();
          body.created = "0";
          body.html = "";
          body.id = "0";
          body.name = "";
          body.template = "";
          body.text = "";
          body.updated = "0";

          instance.accountTemplateRouterUpdate(xAccountApiKey, templateid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountTemplate);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
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
