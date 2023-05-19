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
 * Swagger Codegen version: 2.4.32
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
    instance = new SendPostApi.SystemsuppressionApi();
  });

  describe('(package)', function() {
    describe('SystemsuppressionApi', function() {
      describe('systemSuppressionRouterCreateSuppressionsViaSendX', function() {
        it('should call systemSuppressionRouterCreateSuppressionsViaSendX successfully', function(done) {
          // TODO: uncomment, update parameter values for systemSuppressionRouterCreateSuppressionsViaSendX call and complete the assertions
          /*
          var xSystemApiKey = "xSystemApiKey_example";
          var subAccountId = 789;
          var body = new SendPostApi.ModelsRSuppression();
          body.hardBounce = [new SendPostApi.ModelsSuppressionEmail()];
          body.hardBounce[0].email = "";
          body.manual = [new SendPostApi.ModelsSuppressionEmail()];
          body.manual[0].email = "";
          body.spamComplaint = [new SendPostApi.ModelsSuppressionEmail()];
          body.spamComplaint[0].email = "";
          body.unsubscribe = [new SendPostApi.ModelsSuppressionEmail()];
          body.unsubscribe[0].email = "";

          instance.systemSuppressionRouterCreateSuppressionsViaSendX(xSystemApiKey, subAccountId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
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
