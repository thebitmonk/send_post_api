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
    instance = new SendPostApi.AccountmailReportApi();
  });

  describe('(package)', function() {
    describe('AccountmailReportApi', function() {
      describe('mailReportRouterMailReport', function() {
        it('should call mailReportRouterMailReport successfully', function(done) {
          // TODO: uncomment, update parameter values for mailReportRouterMailReport call and complete the assertions
          /*

          instance.mailReportRouterMailReport(body, xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsMailReportResult);

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

          instance.mailReportRouterMailReportProviders(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsProviderResult);

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
