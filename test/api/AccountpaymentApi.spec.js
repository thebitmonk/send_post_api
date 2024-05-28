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
            expect(data.clientSecret).to.be.a('string');
            expect(data.clientSecret).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.redirectUrl).to.be.a('string');
            expect(data.redirectUrl).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetAllCountries', function() {
        it('should call paymentRouterGetAllCountries successfully', function(done) {
          // TODO: uncomment paymentRouterGetAllCountries call and complete the assertions
          /*

          instance.paymentRouterGetAllCountries(function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsCountry);
              expect(data.code).to.be.a('string');
              expect(data.code).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetCouponCodes', function() {
        it('should call paymentRouterGetCouponCodes successfully', function(done) {
          // TODO: uncomment paymentRouterGetCouponCodes call and complete the assertions
          /*

          instance.paymentRouterGetCouponCodes(function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsCoupon);
              expect(data.code).to.be.a('string');
              expect(data.code).to.be("");
              expect(data.percentage).to.be.a('number');
              expect(data.percentage).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetPricingPlans', function() {
        it('should call paymentRouterGetPricingPlans successfully', function(done) {
          // TODO: uncomment paymentRouterGetPricingPlans call and complete the assertions
          /*

          instance.paymentRouterGetPricingPlans(function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsPricing);
              expect(data.baseLimit).to.be.a('number');
              expect(data.baseLimit).to.be("0");
              expect(data.basePrice).to.be.a('number');
              expect(data.basePrice).to.be(0.0);
              expect(data.basePriceId).to.be.a('string');
              expect(data.basePriceId).to.be("");
              expect(data.overageLimit).to.be.a('number');
              expect(data.overageLimit).to.be("0");
              expect(data.overagePrice).to.be.a('number');
              expect(data.overagePrice).to.be(0.0);
              expect(data.planName).to.be.a('string');
              expect(data.planName).to.be("");
              expect(data.subscriptionProductId).to.be.a('string');
              expect(data.subscriptionProductId).to.be("");
              expect(data.usagePriceId).to.be.a('string');
              expect(data.usagePriceId).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetTaxRateByAddress', function() {
        it('should call paymentRouterGetTaxRateByAddress successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentRouterGetTaxRateByAddress call and complete the assertions
          /*
          var body = new SendPostApi.ModelsPaymentAddress();
          body.city = "";
          body.country = "";
          body.line1 = "";
          body.line2 = "";
          body.postalCode = "";
          body.state = "";

          instance.paymentRouterGetTaxRateByAddress(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsTaxDetails);
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data.percentageDecimal).to.be.a('string');
            expect(data.percentageDecimal).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.taxType).to.be.a('string');
            expect(data.taxType).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetTaxRateByIP', function() {
        it('should call paymentRouterGetTaxRateByIP successfully', function(done) {
          // TODO: uncomment paymentRouterGetTaxRateByIP call and complete the assertions
          /*

          instance.paymentRouterGetTaxRateByIP(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsTaxDetails);
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data.percentageDecimal).to.be.a('string');
            expect(data.percentageDecimal).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.taxType).to.be.a('string');
            expect(data.taxType).to.be("");

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
