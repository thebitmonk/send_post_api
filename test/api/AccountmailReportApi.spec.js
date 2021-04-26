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
 * Swagger Codegen version: 2.4.19
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
    instance = new SendPostApi.AccountmailReportApi();
  });

  describe('(package)', function() {
    describe('AccountmailReportApi', function() {
      describe('mailReportRouterMailReport', function() {
        it('should call mailReportRouterMailReport successfully', function(done) {
          // TODO: uncomment, update parameter values for mailReportRouterMailReport call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsCreateMailReport();
          body.email = "";
          body.providers = [""];

          instance.mailReportRouterMailReport(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsMailReportResult);
            expect(data.body).to.be.a('string');
            expect(data.body).to.be("");
            expect(data.header).to.be.a('string');
            expect(data.header).to.be("");
            expect(data.seedList).to.be.a(Object);
            expect(data.seedList).to.be();
            expect(data.testId).to.be.a('number');
            expect(data.testId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('mailReportRouterMailReportGetSingleReport', function() {
        it('should call mailReportRouterMailReportGetSingleReport successfully', function(done) {
          // TODO: uncomment, update parameter values for mailReportRouterMailReportGetSingleReport call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var reportId = 789;

          instance.mailReportRouterMailReportGetSingleReport(xAccountApiKey, reportId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ApiGlockappsMailReport);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('mailReportRouterMailReportProviders', function() {
        it('should call mailReportRouterMailReportProviders successfully', function(done) {
          // TODO: uncomment, update parameter values for mailReportRouterMailReportProviders call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.mailReportRouterMailReportProviders(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsProviderResult);
            {
              let dataCtr = data.providers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsReportProvider);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
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
