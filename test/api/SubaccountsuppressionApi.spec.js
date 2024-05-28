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
 * Swagger Codegen version: 2.4.41
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
    instance = new SendPostApi.SubaccountsuppressionApi();
  });

  describe('(package)', function() {
    describe('SubaccountsuppressionApi', function() {
      describe('suppressionRouterCount', function() {
        it('should call suppressionRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for suppressionRouterCount call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.suppressionRouterCount(xSubAccountApiKey, opts, function(error, data, response) {
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
      describe('suppressionRouterCreateSuppressions', function() {
        it('should call suppressionRouterCreateSuppressions successfully', function(done) {
          // TODO: uncomment, update parameter values for suppressionRouterCreateSuppressions call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var body = new SendPostApi.ModelsRSuppression();
          body.hardBounce = [new SendPostApi.ModelsSuppressionEmail()];
          body.hardBounce[0].email = "";
          body.manual = [new SendPostApi.ModelsSuppressionEmail()];
          body.manual[0].email = "";
          body.spamComplaint = [new SendPostApi.ModelsSuppressionEmail()];
          body.spamComplaint[0].email = "";
          body.unsubscribe = [new SendPostApi.ModelsSuppressionEmail()];
          body.unsubscribe[0].email = "";

          instance.suppressionRouterCreateSuppressions(xSubAccountApiKey, body, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSuppression);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.email).to.be.a('string');
              expect(data.email).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.reason).to.be.a(SendPostApi.ModelsSuppressionReason);
                  expect(data.smtpError).to.be.a('string');
              expect(data.smtpError).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('suppressionRouterCreateSuppressionsBulk', function() {
        it('should call suppressionRouterCreateSuppressionsBulk successfully', function(done) {
          // TODO: uncomment, update parameter values for suppressionRouterCreateSuppressionsBulk call
          /*
          var fileinput = "/path/to/file.txt";
          var xSubAccountApiKey = "xSubAccountApiKey_example";

          instance.suppressionRouterCreateSuppressionsBulk(fileinput, xSubAccountApiKey, function(error, data, response) {
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
      describe('suppressionRouterCreateSuppressionsInSuppressionFilter', function() {
        it('should call suppressionRouterCreateSuppressionsInSuppressionFilter successfully', function(done) {
          // TODO: uncomment, update parameter values for suppressionRouterCreateSuppressionsInSuppressionFilter call
          /*
          var body = [new SendPostApi.ModelsSuppression()];
          body[0].created = "0";
          body[0].email = "";
          body[0].id = "0";
          body[0].reason = new SendPostApi.ModelsSuppressionReason();
          body[0].smtpError = "";

          instance.suppressionRouterCreateSuppressionsInSuppressionFilter(body, function(error, data, response) {
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
      describe('suppressionRouterDeleteSuppression', function() {
        it('should call suppressionRouterDeleteSuppression successfully', function(done) {
          // TODO: uncomment, update parameter values for suppressionRouterDeleteSuppression call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var body = new SendPostApi.ModelsRDSuppression();
          body.suppressions = [new SendPostApi.ModelsSuppressionEmail()];
          body.suppressions[0].email = "";

          instance.suppressionRouterDeleteSuppression(xSubAccountApiKey, body, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsDeleteResponse);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.message).to.be.a('string');
              expect(data.message).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('suppressionRouterDeleteSuppressionsInSuppressionFilter', function() {
        it('should call suppressionRouterDeleteSuppressionsInSuppressionFilter successfully', function(done) {
          // TODO: uncomment, update parameter values for suppressionRouterDeleteSuppressionsInSuppressionFilter call
          /*
          var body = [new SendPostApi.ModelsSuppression()];
          body[0].created = "0";
          body[0].email = "";
          body[0].id = "0";
          body[0].reason = new SendPostApi.ModelsSuppressionReason();
          body[0].smtpError = "";

          instance.suppressionRouterDeleteSuppressionsInSuppressionFilter(body, function(error, data, response) {
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
      describe('suppressionRouterExportAllSuppressions', function() {
        it('should call suppressionRouterExportAllSuppressions successfully', function(done) {
          // TODO: uncomment, update parameter values for suppressionRouterExportAllSuppressions call
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.email = "email_example";

          instance.suppressionRouterExportAllSuppressions(xSubAccountApiKey, opts, function(error, data, response) {
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
      describe('suppressionRouterGetAllSuppressions', function() {
        it('should call suppressionRouterGetAllSuppressions successfully', function(done) {
          // TODO: uncomment, update parameter values for suppressionRouterGetAllSuppressions call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";
          opts.from = "from_example";
          opts.to = "to_example";

          instance.suppressionRouterGetAllSuppressions(xSubAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSuppression);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.email).to.be.a('string');
              expect(data.email).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.reason).to.be.a(SendPostApi.ModelsSuppressionReason);
                  expect(data.smtpError).to.be.a('string');
              expect(data.smtpError).to.be("");
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
