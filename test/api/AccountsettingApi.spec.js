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
    instance = new SendPostApi.AccountsettingApi();
  });

  describe('(package)', function() {
    describe('AccountsettingApi', function() {
      describe('accountSettingRouterUpdate', function() {
        it('should call accountSettingRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountSettingRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsEAccountSetting();
          body.companyName = "";
          body.logoURL = "";

          instance.accountSettingRouterUpdate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccount);
            expect(data.alertSlackEndpoint).to.be.a('string');
            expect(data.alertSlackEndpoint).to.be("");
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.companyName).to.be.a('string');
            expect(data.companyName).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.currentEmailServiceProvider).to.be.a('string');
            expect(data.currentEmailServiceProvider).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.incidentSlackEndpoint).to.be.a('string');
            expect(data.incidentSlackEndpoint).to.be("");
            expect(data.industry).to.be.a('string');
            expect(data.industry).to.be("");
            expect(data.isCanceled).to.be.a('boolean');
            expect(data.isCanceled).to.be(false);
            expect(data.isLastPaymentFailed).to.be.a('boolean');
            expect(data.isLastPaymentFailed).to.be(false);
            expect(data.isUpgraded).to.be.a('boolean');
            expect(data.isUpgraded).to.be(false);
            expect(data.lockThreshold).to.be.a('number');
            expect(data.lockThreshold).to.be("0");
            expect(data.locked).to.be.a('boolean');
            expect(data.locked).to.be(false);
            expect(data.logoURL).to.be.a('string');
            expect(data.logoURL).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.onboardCFinished).to.be.a('boolean');
            expect(data.onboardCFinished).to.be(false);
            expect(data.onboardQAnswered).to.be.a('boolean');
            expect(data.onboardQAnswered).to.be(false);
            expect(data.sendingVolumePerMonth).to.be.a('string');
            expect(data.sendingVolumePerMonth).to.be("");
            expect(data.slackToken).to.be.a('string');
            expect(data.slackToken).to.be("");
            expect(data.stripeBasePriceId).to.be.a('string');
            expect(data.stripeBasePriceId).to.be("");
            expect(data.stripeUsagePriceId).to.be.a('string');
            expect(data.stripeUsagePriceId).to.be("");

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
