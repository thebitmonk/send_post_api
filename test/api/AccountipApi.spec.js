/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    instance = new SendPostApi.AccountipApi();
  });

  describe('(package)', function() {
    describe('AccountipApi', function() {
      describe('iPRouterAllocateIP', function() {
        it('should call iPRouterAllocateIP successfully', function(done) {
          // TODO: uncomment, update parameter values for iPRouterAllocateIP call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.iPRouterAllocateIP(xAccountApiKey, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsIP);
              expect(data.aolSettings).to.be.a('string');
              expect(data.aolSettings).to.be("");
              expect(data.autoWarmupEnabled).to.be.a('boolean');
              expect(data.autoWarmupEnabled).to.be(false);
              expect(data.autoWarmupStage).to.be.a('number');
              expect(data.autoWarmupStage).to.be("0");
              expect(data.comcastSettings).to.be.a('string');
              expect(data.comcastSettings).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.defaultSettings).to.be.a('string');
              expect(data.defaultSettings).to.be("");
              expect(data.gmailSettings).to.be.a('string');
              expect(data.gmailSettings).to.be("");
              expect(data.gmxSettings).to.be.a('string');
              expect(data.gmxSettings).to.be("");
              expect(data.icloudSettings).to.be.a('string');
              expect(data.icloudSettings).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.mailruSettings).to.be.a('string');
              expect(data.mailruSettings).to.be("");
              expect(data.microsoftSettings).to.be.a('string');
              expect(data.microsoftSettings).to.be("");
              expect(data.publicIP).to.be.a('string');
              expect(data.publicIP).to.be("");
              expect(data.qqSettings).to.be.a('string');
              expect(data.qqSettings).to.be("");
              expect(data.reverseDNSHostname).to.be.a('string');
              expect(data.reverseDNSHostname).to.be("");
              expect(data.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                    expect(data.systemDomain.created).to.be.a('number');
                expect(data.systemDomain.created).to.be("0");
                expect(data.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                      expect(data.systemDomain.dkim.host).to.be.a('string');
                  expect(data.systemDomain.dkim.host).to.be("");
                  expect(data.systemDomain.dkim.textValue).to.be.a('string');
                  expect(data.systemDomain.dkim.textValue).to.be("");
                  expect(data.systemDomain.dkim.type).to.be.a('string');
                  expect(data.systemDomain.dkim.type).to.be("");
                expect(data.systemDomain.dkimConfig).to.be.a('string');
                expect(data.systemDomain.dkimConfig).to.be("");
                expect(data.systemDomain.dkimVerified).to.be.a('boolean');
                expect(data.systemDomain.dkimVerified).to.be(false);
                expect(data.systemDomain.id).to.be.a('number');
                expect(data.systemDomain.id).to.be("0");
                expect(data.systemDomain.mailboxVerified).to.be.a('boolean');
                expect(data.systemDomain.mailboxVerified).to.be(false);
                expect(data.systemDomain.name).to.be.a('string');
                expect(data.systemDomain.name).to.be("");
                expect(data.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                      expect(data.systemDomain.spf.host).to.be.a('string');
                  expect(data.systemDomain.spf.host).to.be("");
                  expect(data.systemDomain.spf.textValue).to.be.a('string');
                  expect(data.systemDomain.spf.textValue).to.be("");
                  expect(data.systemDomain.spf.type).to.be.a('string');
                  expect(data.systemDomain.spf.type).to.be("");
                expect(data.systemDomain.spfVerified).to.be.a('boolean');
                expect(data.systemDomain.spfVerified).to.be(false);
                expect(data.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                      expect(data.systemDomain.track.host).to.be.a('string');
                  expect(data.systemDomain.track.host).to.be("");
                  expect(data.systemDomain.track.textValue).to.be.a('string');
                  expect(data.systemDomain.track.textValue).to.be("");
                  expect(data.systemDomain.track.type).to.be.a('string');
                  expect(data.systemDomain.track.type).to.be("");
                expect(data.systemDomain.trackVerified).to.be.a('boolean');
                expect(data.systemDomain.trackVerified).to.be(false);
              expect(data.type).to.be.a(SendPostApi.ModelsIPType);
                  expect(data.yahooSettings).to.be.a('string');
              expect(data.yahooSettings).to.be("");
              expect(data.yandexSettings).to.be.a('string');
              expect(data.yandexSettings).to.be("");
              expect(data.zohoSettings).to.be.a('string');
              expect(data.zohoSettings).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('iPRouterCount', function() {
        it('should call iPRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for iPRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.search = "search_example";

          instance.iPRouterCount(xAccountApiKey, opts, function(error, data, response) {
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
      describe('iPRouterDelete', function() {
        it('should call iPRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for iPRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;

          instance.iPRouterDelete(xAccountApiKey, ipid, function(error, data, response) {
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
      describe('iPRouterGet', function() {
        it('should call iPRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for iPRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;

          instance.iPRouterGet(xAccountApiKey, ipid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsIP);
            expect(data.aolSettings).to.be.a('string');
            expect(data.aolSettings).to.be("");
            expect(data.autoWarmupEnabled).to.be.a('boolean');
            expect(data.autoWarmupEnabled).to.be(false);
            expect(data.autoWarmupStage).to.be.a('number');
            expect(data.autoWarmupStage).to.be("0");
            expect(data.comcastSettings).to.be.a('string');
            expect(data.comcastSettings).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.defaultSettings).to.be.a('string');
            expect(data.defaultSettings).to.be("");
            expect(data.gmailSettings).to.be.a('string');
            expect(data.gmailSettings).to.be("");
            expect(data.gmxSettings).to.be.a('string');
            expect(data.gmxSettings).to.be("");
            expect(data.icloudSettings).to.be.a('string');
            expect(data.icloudSettings).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.mailruSettings).to.be.a('string');
            expect(data.mailruSettings).to.be("");
            expect(data.microsoftSettings).to.be.a('string');
            expect(data.microsoftSettings).to.be("");
            expect(data.publicIP).to.be.a('string');
            expect(data.publicIP).to.be("");
            expect(data.qqSettings).to.be.a('string');
            expect(data.qqSettings).to.be("");
            expect(data.reverseDNSHostname).to.be.a('string');
            expect(data.reverseDNSHostname).to.be("");
            expect(data.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                  expect(data.systemDomain.created).to.be.a('number');
              expect(data.systemDomain.created).to.be("0");
              expect(data.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                    expect(data.systemDomain.dkim.host).to.be.a('string');
                expect(data.systemDomain.dkim.host).to.be("");
                expect(data.systemDomain.dkim.textValue).to.be.a('string');
                expect(data.systemDomain.dkim.textValue).to.be("");
                expect(data.systemDomain.dkim.type).to.be.a('string');
                expect(data.systemDomain.dkim.type).to.be("");
              expect(data.systemDomain.dkimConfig).to.be.a('string');
              expect(data.systemDomain.dkimConfig).to.be("");
              expect(data.systemDomain.dkimVerified).to.be.a('boolean');
              expect(data.systemDomain.dkimVerified).to.be(false);
              expect(data.systemDomain.id).to.be.a('number');
              expect(data.systemDomain.id).to.be("0");
              expect(data.systemDomain.mailboxVerified).to.be.a('boolean');
              expect(data.systemDomain.mailboxVerified).to.be(false);
              expect(data.systemDomain.name).to.be.a('string');
              expect(data.systemDomain.name).to.be("");
              expect(data.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                    expect(data.systemDomain.spf.host).to.be.a('string');
                expect(data.systemDomain.spf.host).to.be("");
                expect(data.systemDomain.spf.textValue).to.be.a('string');
                expect(data.systemDomain.spf.textValue).to.be("");
                expect(data.systemDomain.spf.type).to.be.a('string');
                expect(data.systemDomain.spf.type).to.be("");
              expect(data.systemDomain.spfVerified).to.be.a('boolean');
              expect(data.systemDomain.spfVerified).to.be(false);
              expect(data.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                    expect(data.systemDomain.track.host).to.be.a('string');
                expect(data.systemDomain.track.host).to.be("");
                expect(data.systemDomain.track.textValue).to.be.a('string');
                expect(data.systemDomain.track.textValue).to.be("");
                expect(data.systemDomain.track.type).to.be.a('string');
                expect(data.systemDomain.track.type).to.be("");
              expect(data.systemDomain.trackVerified).to.be.a('boolean');
              expect(data.systemDomain.trackVerified).to.be(false);
            expect(data.type).to.be.a(SendPostApi.ModelsIPType);
                expect(data.yahooSettings).to.be.a('string');
            expect(data.yahooSettings).to.be("");
            expect(data.yandexSettings).to.be.a('string');
            expect(data.yandexSettings).to.be("");
            expect(data.zohoSettings).to.be.a('string');
            expect(data.zohoSettings).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('iPRouterGetAll', function() {
        it('should call iPRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for iPRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.iPRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsIP);
              expect(data.aolSettings).to.be.a('string');
              expect(data.aolSettings).to.be("");
              expect(data.autoWarmupEnabled).to.be.a('boolean');
              expect(data.autoWarmupEnabled).to.be(false);
              expect(data.autoWarmupStage).to.be.a('number');
              expect(data.autoWarmupStage).to.be("0");
              expect(data.comcastSettings).to.be.a('string');
              expect(data.comcastSettings).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.defaultSettings).to.be.a('string');
              expect(data.defaultSettings).to.be("");
              expect(data.gmailSettings).to.be.a('string');
              expect(data.gmailSettings).to.be("");
              expect(data.gmxSettings).to.be.a('string');
              expect(data.gmxSettings).to.be("");
              expect(data.icloudSettings).to.be.a('string');
              expect(data.icloudSettings).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.mailruSettings).to.be.a('string');
              expect(data.mailruSettings).to.be("");
              expect(data.microsoftSettings).to.be.a('string');
              expect(data.microsoftSettings).to.be("");
              expect(data.publicIP).to.be.a('string');
              expect(data.publicIP).to.be("");
              expect(data.qqSettings).to.be.a('string');
              expect(data.qqSettings).to.be("");
              expect(data.reverseDNSHostname).to.be.a('string');
              expect(data.reverseDNSHostname).to.be("");
              expect(data.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                    expect(data.systemDomain.created).to.be.a('number');
                expect(data.systemDomain.created).to.be("0");
                expect(data.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                      expect(data.systemDomain.dkim.host).to.be.a('string');
                  expect(data.systemDomain.dkim.host).to.be("");
                  expect(data.systemDomain.dkim.textValue).to.be.a('string');
                  expect(data.systemDomain.dkim.textValue).to.be("");
                  expect(data.systemDomain.dkim.type).to.be.a('string');
                  expect(data.systemDomain.dkim.type).to.be("");
                expect(data.systemDomain.dkimConfig).to.be.a('string');
                expect(data.systemDomain.dkimConfig).to.be("");
                expect(data.systemDomain.dkimVerified).to.be.a('boolean');
                expect(data.systemDomain.dkimVerified).to.be(false);
                expect(data.systemDomain.id).to.be.a('number');
                expect(data.systemDomain.id).to.be("0");
                expect(data.systemDomain.mailboxVerified).to.be.a('boolean');
                expect(data.systemDomain.mailboxVerified).to.be(false);
                expect(data.systemDomain.name).to.be.a('string');
                expect(data.systemDomain.name).to.be("");
                expect(data.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                      expect(data.systemDomain.spf.host).to.be.a('string');
                  expect(data.systemDomain.spf.host).to.be("");
                  expect(data.systemDomain.spf.textValue).to.be.a('string');
                  expect(data.systemDomain.spf.textValue).to.be("");
                  expect(data.systemDomain.spf.type).to.be.a('string');
                  expect(data.systemDomain.spf.type).to.be("");
                expect(data.systemDomain.spfVerified).to.be.a('boolean');
                expect(data.systemDomain.spfVerified).to.be(false);
                expect(data.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                      expect(data.systemDomain.track.host).to.be.a('string');
                  expect(data.systemDomain.track.host).to.be("");
                  expect(data.systemDomain.track.textValue).to.be.a('string');
                  expect(data.systemDomain.track.textValue).to.be("");
                  expect(data.systemDomain.track.type).to.be.a('string');
                  expect(data.systemDomain.track.type).to.be("");
                expect(data.systemDomain.trackVerified).to.be.a('boolean');
                expect(data.systemDomain.trackVerified).to.be(false);
              expect(data.type).to.be.a(SendPostApi.ModelsIPType);
                  expect(data.yahooSettings).to.be.a('string');
              expect(data.yahooSettings).to.be("");
              expect(data.yandexSettings).to.be.a('string');
              expect(data.yandexSettings).to.be("");
              expect(data.zohoSettings).to.be.a('string');
              expect(data.zohoSettings).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('iPRouterUpdate', function() {
        it('should call iPRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for iPRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var body = new SendPostApi.ModelsIIP();
          body.backOffConfiguration = new SendPostApi.ModelsBackOffConfiguration();
          body.backOffConfiguration.concurrentConnections = "0";
          body.backOffConfiguration.concurrentConnectionsType = new SendPostApi.ModelsBackOffDecreaseType();
          body.backOffConfiguration.sendPerDay = "0";
          body.backOffConfiguration.sendPerDayType = new SendPostApi.ModelsBackOffDecreaseType();
          body.backOffConfiguration.sendPerHour = "0";
          body.backOffConfiguration.sendPerHourType = new SendPostApi.ModelsBackOffDecreaseType();
          body.backOffConfiguration.sendPerMinute = "0";
          body.backOffConfiguration.sendPerMinuteType = new SendPostApi.ModelsBackOffDecreaseType();
          body.backOffTrigger = new SendPostApi.ModelsBackOffTrigger();
          body.backOffTrigger.deferralPercentage = "0";
          body.backOffTrigger.durationInMinutes = "0";
          body.backOffTrigger.hardBouncePercentage = "0";
          body.backOffTrigger.minimumAttempts = "0";
          body.maxConcurrentConnections = "0";
          body.maxSendPerDay = "0";
          body.maxSendPerHour = "0";
          body.maxSendPerMinute = "0";
          body.name = "";

          instance.iPRouterUpdate(xAccountApiKey, ipid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsIP);
            expect(data.aolSettings).to.be.a('string');
            expect(data.aolSettings).to.be("");
            expect(data.autoWarmupEnabled).to.be.a('boolean');
            expect(data.autoWarmupEnabled).to.be(false);
            expect(data.autoWarmupStage).to.be.a('number');
            expect(data.autoWarmupStage).to.be("0");
            expect(data.comcastSettings).to.be.a('string');
            expect(data.comcastSettings).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.defaultSettings).to.be.a('string');
            expect(data.defaultSettings).to.be("");
            expect(data.gmailSettings).to.be.a('string');
            expect(data.gmailSettings).to.be("");
            expect(data.gmxSettings).to.be.a('string');
            expect(data.gmxSettings).to.be("");
            expect(data.icloudSettings).to.be.a('string');
            expect(data.icloudSettings).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.mailruSettings).to.be.a('string');
            expect(data.mailruSettings).to.be("");
            expect(data.microsoftSettings).to.be.a('string');
            expect(data.microsoftSettings).to.be("");
            expect(data.publicIP).to.be.a('string');
            expect(data.publicIP).to.be("");
            expect(data.qqSettings).to.be.a('string');
            expect(data.qqSettings).to.be("");
            expect(data.reverseDNSHostname).to.be.a('string');
            expect(data.reverseDNSHostname).to.be("");
            expect(data.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                  expect(data.systemDomain.created).to.be.a('number');
              expect(data.systemDomain.created).to.be("0");
              expect(data.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                    expect(data.systemDomain.dkim.host).to.be.a('string');
                expect(data.systemDomain.dkim.host).to.be("");
                expect(data.systemDomain.dkim.textValue).to.be.a('string');
                expect(data.systemDomain.dkim.textValue).to.be("");
                expect(data.systemDomain.dkim.type).to.be.a('string');
                expect(data.systemDomain.dkim.type).to.be("");
              expect(data.systemDomain.dkimConfig).to.be.a('string');
              expect(data.systemDomain.dkimConfig).to.be("");
              expect(data.systemDomain.dkimVerified).to.be.a('boolean');
              expect(data.systemDomain.dkimVerified).to.be(false);
              expect(data.systemDomain.id).to.be.a('number');
              expect(data.systemDomain.id).to.be("0");
              expect(data.systemDomain.mailboxVerified).to.be.a('boolean');
              expect(data.systemDomain.mailboxVerified).to.be(false);
              expect(data.systemDomain.name).to.be.a('string');
              expect(data.systemDomain.name).to.be("");
              expect(data.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                    expect(data.systemDomain.spf.host).to.be.a('string');
                expect(data.systemDomain.spf.host).to.be("");
                expect(data.systemDomain.spf.textValue).to.be.a('string');
                expect(data.systemDomain.spf.textValue).to.be("");
                expect(data.systemDomain.spf.type).to.be.a('string');
                expect(data.systemDomain.spf.type).to.be("");
              expect(data.systemDomain.spfVerified).to.be.a('boolean');
              expect(data.systemDomain.spfVerified).to.be(false);
              expect(data.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                    expect(data.systemDomain.track.host).to.be.a('string');
                expect(data.systemDomain.track.host).to.be("");
                expect(data.systemDomain.track.textValue).to.be.a('string');
                expect(data.systemDomain.track.textValue).to.be("");
                expect(data.systemDomain.track.type).to.be.a('string');
                expect(data.systemDomain.track.type).to.be("");
              expect(data.systemDomain.trackVerified).to.be.a('boolean');
              expect(data.systemDomain.trackVerified).to.be(false);
            expect(data.type).to.be.a(SendPostApi.ModelsIPType);
                expect(data.yahooSettings).to.be.a('string');
            expect(data.yahooSettings).to.be("");
            expect(data.yandexSettings).to.be.a('string');
            expect(data.yandexSettings).to.be("");
            expect(data.zohoSettings).to.be.a('string');
            expect(data.zohoSettings).to.be("");

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
