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
 * Swagger Codegen version: 2.4.20
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
    instance = new SendPostApi.AccountsmtpstatApi();
  });

  describe('(package)', function() {
    describe('AccountsmtpstatApi', function() {
      describe('sMTPStatRouterGetAllAggregateIPProviderSMTPStats', function() {
        it('should call sMTPStatRouterGetAllAggregateIPProviderSMTPStats successfully', function(done) {
          // TODO: uncomment, update parameter values for sMTPStatRouterGetAllAggregateIPProviderSMTPStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var provider = "provider_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.sMTPStatRouterGetAllAggregateIPProviderSMTPStats(xAccountApiKey, ipid, provider, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSMTPStat);
              expect(data.count).to.be.a('number');
              expect(data.count).to.be("0");
              expect(data.smtpCode).to.be.a('number');
              expect(data.smtpCode).to.be("0");
              expect(data.smtpDescription).to.be.a('string');
              expect(data.smtpDescription).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sMTPStatRouterGetAllAggregateIPSMTPStats', function() {
        it('should call sMTPStatRouterGetAllAggregateIPSMTPStats successfully', function(done) {
          // TODO: uncomment, update parameter values for sMTPStatRouterGetAllAggregateIPSMTPStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.provider = "provider_example";

          instance.sMTPStatRouterGetAllAggregateIPSMTPStats(xAccountApiKey, ipid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSMTPStat);
              expect(data.count).to.be.a('number');
              expect(data.count).to.be("0");
              expect(data.smtpCode).to.be.a('number');
              expect(data.smtpCode).to.be("0");
              expect(data.smtpDescription).to.be.a('string');
              expect(data.smtpDescription).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount', function() {
        it('should call sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.provider = "provider_example";

          instance.sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount(xAccountApiKey, ipid, sid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSMTPStat);
              expect(data.count).to.be.a('number');
              expect(data.count).to.be("0");
              expect(data.smtpCode).to.be.a('number');
              expect(data.smtpCode).to.be("0");
              expect(data.smtpDescription).to.be.a('string');
              expect(data.smtpDescription).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats', function() {
        it('should call sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats successfully', function(done) {
          // TODO: uncomment, update parameter values for sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var sid = 789;
          var provider = "provider_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats(xAccountApiKey, sid, provider, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSMTPStat);
              expect(data.count).to.be.a('number');
              expect(data.count).to.be("0");
              expect(data.smtpCode).to.be.a('number');
              expect(data.smtpCode).to.be("0");
              expect(data.smtpDescription).to.be.a('string');
              expect(data.smtpDescription).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sMTPStatRouterGetAllAggregateSubAccountSMTPStats', function() {
        it('should call sMTPStatRouterGetAllAggregateSubAccountSMTPStats successfully', function(done) {
          // TODO: uncomment, update parameter values for sMTPStatRouterGetAllAggregateSubAccountSMTPStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.provider = "provider_example";

          instance.sMTPStatRouterGetAllAggregateSubAccountSMTPStats(xAccountApiKey, sid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSMTPStat);
              expect(data.count).to.be.a('number');
              expect(data.count).to.be("0");
              expect(data.smtpCode).to.be.a('number');
              expect(data.smtpCode).to.be("0");
              expect(data.smtpDescription).to.be.a('string');
              expect(data.smtpDescription).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP', function() {
        it('should call sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP successfully', function(done) {
          // TODO: uncomment, update parameter values for sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var sid = 789;
          var ipid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.provider = "provider_example";

          instance.sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP(xAccountApiKey, sid, ipid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSMTPStat);
              expect(data.count).to.be.a('number');
              expect(data.count).to.be("0");
              expect(data.smtpCode).to.be.a('number');
              expect(data.smtpCode).to.be("0");
              expect(data.smtpDescription).to.be.a('string');
              expect(data.smtpDescription).to.be("");
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
