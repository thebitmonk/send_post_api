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
 * Swagger Codegen version: 2.4.31
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
    instance = new SendPostApi.AccountpaymentApi();
  });

  describe('(package)', function() {
    describe('AccountpaymentApi', function() {
      describe('paymentRouterApplyCouponToStripeCustomer', function() {
        it('should call paymentRouterApplyCouponToStripeCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentRouterApplyCouponToStripeCustomer call
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsCouponOptions();
          body.couponCode = "";

          instance.paymentRouterApplyCouponToStripeCustomer(xAccountApiKey, body, function(error, data, response) {
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
      describe('paymentRouterCreateCustomerPortal', function() {
        it('should call paymentRouterCreateCustomerPortal successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentRouterCreateCustomerPortal call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.paymentRouterCreateCustomerPortal(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsBillingPortalSession);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.customer).to.be.a('string');
            expect(data.customer).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.livemode).to.be.a('boolean');
            expect(data.livemode).to.be(false);
            expect(data._object).to.be.a('string');
            expect(data._object).to.be("");
            expect(data.returnUrl).to.be.a('string');
            expect(data.returnUrl).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterCreatePaymentSubscription', function() {
        it('should call paymentRouterCreatePaymentSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentRouterCreatePaymentSubscription call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsPaymentOptions();
          body.customerId = "";
          body.ipCount = "0";
          body.paymentMethodId = "";
          body.priceId = "";

          instance.paymentRouterCreatePaymentSubscription(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsPaymentStatus);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterHandlePaymentWebhook', function() {
        it('should call paymentRouterHandlePaymentWebhook successfully', function(done) {
          // TODO: uncomment paymentRouterHandlePaymentWebhook call
          /*

          instance.paymentRouterHandlePaymentWebhook(function(error, data, response) {
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
