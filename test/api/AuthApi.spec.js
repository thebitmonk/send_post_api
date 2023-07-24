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
          body.jwtToken = "";
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
            expect(data.alertSlackEndpoint).to.be.a('string');
            expect(data.alertSlackEndpoint).to.be("");
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.brandColor).to.be.a('string');
            expect(data.brandColor).to.be("");
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
            expect(data.isAdmin).to.be.a('boolean');
            expect(data.isAdmin).to.be(false);
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
            expect(data.stripeSubscriptionItemId).to.be.a('string');
            expect(data.stripeSubscriptionItemId).to.be("");
            expect(data.stripeUsagePriceId).to.be.a('string');
            expect(data.stripeUsagePriceId).to.be("");
            expect(data.switchingSendpostDescription).to.be.a('string');
            expect(data.switchingSendpostDescription).to.be("");

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
          body.jwtToken = "";
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
                expect(data.alertSlackEndpoint).to.be.a('string');
                expect(data.alertSlackEndpoint).to.be("");
                expect(data.apiKey).to.be.a('string');
                expect(data.apiKey).to.be("");
                expect(data.brandColor).to.be.a('string');
                expect(data.brandColor).to.be("");
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
                expect(data.isAdmin).to.be.a('boolean');
                expect(data.isAdmin).to.be(false);
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
                expect(data.stripeSubscriptionItemId).to.be.a('string');
                expect(data.stripeSubscriptionItemId).to.be("");
                expect(data.stripeUsagePriceId).to.be.a('string');
                expect(data.stripeUsagePriceId).to.be("");
                expect(data.switchingSendpostDescription).to.be.a('string');
                expect(data.switchingSendpostDescription).to.be("");

                      }
            }
            expect(data.member).to.be.a(SendPostApi.ModelsMember);
                  expect(data.member.companyName).to.be.a('string');
              expect(data.member.companyName).to.be("");
              expect(data.member.created).to.be.a('number');
              expect(data.member.created).to.be("0");
              expect(data.member.email).to.be.a('string');
              expect(data.member.email).to.be("");
              expect(data.member.id).to.be.a('number');
              expect(data.member.id).to.be("0");
              expect(data.member.isForbidden).to.be.a('boolean');
              expect(data.member.isForbidden).to.be(false);
              expect(data.member.isVerified).to.be.a('boolean');
              expect(data.member.isVerified).to.be(false);
              expect(data.member.name).to.be.a('string');
              expect(data.member.name).to.be("");
              expect(data.member.onboardQAnswered).to.be.a('boolean');
              expect(data.member.onboardQAnswered).to.be(false);
              expect(data.member.phoneNumber).to.be.a('string');
              expect(data.member.phoneNumber).to.be("");
              expect(data.member.url).to.be.a('string');
              expect(data.member.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authRouterUpdateAuthInfo', function() {
        it('should call authRouterUpdateAuthInfo successfully', function(done) {
          // TODO: uncomment, update parameter values for authRouterUpdateAuthInfo call and complete the assertions
          /*
          var body = new SendPostApi.ModelsEAccountMember();
          body.companyName = "";
          body.currentEmailServiceProvider = "";
          body.hexColor = "";
          body.industry = "";
          body.logoURL = "";
          body.name = "";
          body.onboardCFinished = false;
          body.onboardQAnswered = false;
          body.phoneNumber = "";
          body.sendingVolumePerMonth = "";
          body.switchingSendpostDescription = "";
          body.uid = "";
          body.verifyEmail = false;
          var xToken = "xToken_example";

          instance.authRouterUpdateAuthInfo(body, xToken, function(error, data, response) {
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
                expect(data.alertSlackEndpoint).to.be.a('string');
                expect(data.alertSlackEndpoint).to.be("");
                expect(data.apiKey).to.be.a('string');
                expect(data.apiKey).to.be("");
                expect(data.brandColor).to.be.a('string');
                expect(data.brandColor).to.be("");
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
                expect(data.isAdmin).to.be.a('boolean');
                expect(data.isAdmin).to.be(false);
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
                expect(data.stripeSubscriptionItemId).to.be.a('string');
                expect(data.stripeSubscriptionItemId).to.be("");
                expect(data.stripeUsagePriceId).to.be.a('string');
                expect(data.stripeUsagePriceId).to.be("");
                expect(data.switchingSendpostDescription).to.be.a('string');
                expect(data.switchingSendpostDescription).to.be("");

                      }
            }
            expect(data.member).to.be.a(SendPostApi.ModelsMember);
                  expect(data.member.companyName).to.be.a('string');
              expect(data.member.companyName).to.be("");
              expect(data.member.created).to.be.a('number');
              expect(data.member.created).to.be("0");
              expect(data.member.email).to.be.a('string');
              expect(data.member.email).to.be("");
              expect(data.member.id).to.be.a('number');
              expect(data.member.id).to.be("0");
              expect(data.member.isForbidden).to.be.a('boolean');
              expect(data.member.isForbidden).to.be(false);
              expect(data.member.isVerified).to.be.a('boolean');
              expect(data.member.isVerified).to.be(false);
              expect(data.member.name).to.be.a('string');
              expect(data.member.name).to.be("");
              expect(data.member.onboardQAnswered).to.be.a('boolean');
              expect(data.member.onboardQAnswered).to.be(false);
              expect(data.member.phoneNumber).to.be.a('string');
              expect(data.member.phoneNumber).to.be("");
              expect(data.member.url).to.be.a('string');
              expect(data.member.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authRouterUpdateLogo', function() {
        it('should call authRouterUpdateLogo successfully', function(done) {
          // TODO: uncomment, update parameter values for authRouterUpdateLogo call
          /*
          var uid = "uid_example";
          var xToken = "xToken_example";
          var opts = {};
          opts.logo = "/path/to/file.txt";

          instance.authRouterUpdateLogo(uid, xToken, opts, function(error, data, response) {
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
