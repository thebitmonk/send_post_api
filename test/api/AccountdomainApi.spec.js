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
 * Swagger Codegen version: 2.4.39
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
    instance = new SendPostApi.AccountdomainApi();
  });

  describe('(package)', function() {
    describe('AccountdomainApi', function() {
      describe('accountDomainRouterCount', function() {
        it('should call accountDomainRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for accountDomainRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.search = "search_example";

          instance.accountDomainRouterCount(xAccountApiKey, opts, function(error, data, response) {
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
      describe('accountDomainRouterGet', function() {
        it('should call accountDomainRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for accountDomainRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var domainId = 789;

          instance.accountDomainRouterGet(xAccountApiKey, domainId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountDomain);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.createdBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.createdBy.companyName).to.be.a('string');
              expect(data.createdBy.companyName).to.be("");
              expect(data.createdBy.created).to.be.a('number');
              expect(data.createdBy.created).to.be("0");
              expect(data.createdBy.email).to.be.a('string');
              expect(data.createdBy.email).to.be("");
              expect(data.createdBy.id).to.be.a('number');
              expect(data.createdBy.id).to.be("0");
              expect(data.createdBy.isForbidden).to.be.a('boolean');
              expect(data.createdBy.isForbidden).to.be(false);
              expect(data.createdBy.isVerified).to.be.a('boolean');
              expect(data.createdBy.isVerified).to.be(false);
              expect(data.createdBy.name).to.be.a('string');
              expect(data.createdBy.name).to.be("");
              expect(data.createdBy.onboardQAnswered).to.be.a('boolean');
              expect(data.createdBy.onboardQAnswered).to.be(false);
              expect(data.createdBy.phoneNumber).to.be.a('string');
              expect(data.createdBy.phoneNumber).to.be("");
              expect(data.createdBy.url).to.be.a('string');
              expect(data.createdBy.url).to.be("");
            expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dkim.host).to.be.a('string');
              expect(data.dkim.host).to.be("");
              expect(data.dkim.textValue).to.be.a('string');
              expect(data.dkim.textValue).to.be("");
              expect(data.dkim.type).to.be.a('string');
              expect(data.dkim.type).to.be("");
            expect(data.dkimConfig).to.be.a('string');
            expect(data.dkimConfig).to.be("");
            expect(data.dkimVerified).to.be.a('boolean');
            expect(data.dkimVerified).to.be(false);
            expect(data.dmarc).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dmarc.host).to.be.a('string');
              expect(data.dmarc.host).to.be("");
              expect(data.dmarc.textValue).to.be.a('string');
              expect(data.dmarc.textValue).to.be("");
              expect(data.dmarc.type).to.be.a('string');
              expect(data.dmarc.type).to.be("");
            expect(data.dmarcVerified).to.be.a('boolean');
            expect(data.dmarcVerified).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.returnPath).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.returnPath.host).to.be.a('string');
              expect(data.returnPath.host).to.be("");
              expect(data.returnPath.textValue).to.be.a('string');
              expect(data.returnPath.textValue).to.be("");
              expect(data.returnPath.type).to.be.a('string');
              expect(data.returnPath.type).to.be("");
            expect(data.returnPathVerified).to.be.a('boolean');
            expect(data.returnPathVerified).to.be(false);
            expect(data.subAccount).to.be.a(SendPostApi.ModelsSubAccount);
                  expect(data.subAccount.apiKey).to.be.a('string');
              expect(data.subAccount.apiKey).to.be("");
              expect(data.subAccount.created).to.be.a('number');
              expect(data.subAccount.created).to.be("0");
              expect(data.subAccount.createdBy).to.be.a(SendPostApi.ModelsMember);
                    expect(data.subAccount.createdBy.companyName).to.be.a('string');
                expect(data.subAccount.createdBy.companyName).to.be("");
                expect(data.subAccount.createdBy.created).to.be.a('number');
                expect(data.subAccount.createdBy.created).to.be("0");
                expect(data.subAccount.createdBy.email).to.be.a('string');
                expect(data.subAccount.createdBy.email).to.be("");
                expect(data.subAccount.createdBy.id).to.be.a('number');
                expect(data.subAccount.createdBy.id).to.be("0");
                expect(data.subAccount.createdBy.isForbidden).to.be.a('boolean');
                expect(data.subAccount.createdBy.isForbidden).to.be(false);
                expect(data.subAccount.createdBy.isVerified).to.be.a('boolean');
                expect(data.subAccount.createdBy.isVerified).to.be(false);
                expect(data.subAccount.createdBy.name).to.be.a('string');
                expect(data.subAccount.createdBy.name).to.be("");
                expect(data.subAccount.createdBy.onboardQAnswered).to.be.a('boolean');
                expect(data.subAccount.createdBy.onboardQAnswered).to.be(false);
                expect(data.subAccount.createdBy.phoneNumber).to.be.a('string');
                expect(data.subAccount.createdBy.phoneNumber).to.be("");
                expect(data.subAccount.createdBy.url).to.be.a('string');
                expect(data.subAccount.createdBy.url).to.be("");
              expect(data.subAccount.id).to.be.a('number');
              expect(data.subAccount.id).to.be("0");
              {
                let dataCtr = data.subAccount.labels;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsLabel);
                  expect(data.color).to.be.a('string');
                  expect(data.color).to.be("");
                  expect(data.created).to.be.a('number');
                  expect(data.created).to.be("0");
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.type).to.be.a('number');
                  expect(data.type).to.be("0");
  
                        }
              }
              expect(data.subAccount.name).to.be.a('string');
              expect(data.subAccount.name).to.be("");
              {
                let dataCtr = data.subAccount.smtpAuths;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsSMTPAuth);
                  expect(data.created).to.be.a('number');
                  expect(data.created).to.be("0");
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.password).to.be.a('string');
                  expect(data.password).to.be("");
                  expect(data.updated).to.be.a('number');
                  expect(data.updated).to.be("0");
                  expect(data.username).to.be.a('string');
                  expect(data.username).to.be("");
  
                        }
              }
              expect(data.subAccount.type).to.be.a(SendPostApi.ModelsSubAccountType);
                  expect(data.subAccount.updatedBy).to.be.a(SendPostApi.ModelsMember);
                    expect(data.subAccount.updatedBy.companyName).to.be.a('string');
                expect(data.subAccount.updatedBy.companyName).to.be("");
                expect(data.subAccount.updatedBy.created).to.be.a('number');
                expect(data.subAccount.updatedBy.created).to.be("0");
                expect(data.subAccount.updatedBy.email).to.be.a('string');
                expect(data.subAccount.updatedBy.email).to.be("");
                expect(data.subAccount.updatedBy.id).to.be.a('number');
                expect(data.subAccount.updatedBy.id).to.be("0");
                expect(data.subAccount.updatedBy.isForbidden).to.be.a('boolean');
                expect(data.subAccount.updatedBy.isForbidden).to.be(false);
                expect(data.subAccount.updatedBy.isVerified).to.be.a('boolean');
                expect(data.subAccount.updatedBy.isVerified).to.be(false);
                expect(data.subAccount.updatedBy.name).to.be.a('string');
                expect(data.subAccount.updatedBy.name).to.be("");
                expect(data.subAccount.updatedBy.onboardQAnswered).to.be.a('boolean');
                expect(data.subAccount.updatedBy.onboardQAnswered).to.be(false);
                expect(data.subAccount.updatedBy.phoneNumber).to.be.a('string');
                expect(data.subAccount.updatedBy.phoneNumber).to.be("");
                expect(data.subAccount.updatedBy.url).to.be.a('string');
                expect(data.subAccount.updatedBy.url).to.be("");
            expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.track.host).to.be.a('string');
              expect(data.track.host).to.be("");
              expect(data.track.textValue).to.be.a('string');
              expect(data.track.textValue).to.be("");
              expect(data.track.type).to.be.a('string');
              expect(data.track.type).to.be("");
            expect(data.trackVerified).to.be.a('boolean');
            expect(data.trackVerified).to.be(false);
            expect(data.updatedBy).to.be.a(SendPostApi.ModelsMember);
                  expect(data.updatedBy.companyName).to.be.a('string');
              expect(data.updatedBy.companyName).to.be("");
              expect(data.updatedBy.created).to.be.a('number');
              expect(data.updatedBy.created).to.be("0");
              expect(data.updatedBy.email).to.be.a('string');
              expect(data.updatedBy.email).to.be("");
              expect(data.updatedBy.id).to.be.a('number');
              expect(data.updatedBy.id).to.be("0");
              expect(data.updatedBy.isForbidden).to.be.a('boolean');
              expect(data.updatedBy.isForbidden).to.be(false);
              expect(data.updatedBy.isVerified).to.be.a('boolean');
              expect(data.updatedBy.isVerified).to.be(false);
              expect(data.updatedBy.name).to.be.a('string');
              expect(data.updatedBy.name).to.be("");
              expect(data.updatedBy.onboardQAnswered).to.be.a('boolean');
              expect(data.updatedBy.onboardQAnswered).to.be(false);
              expect(data.updatedBy.phoneNumber).to.be.a('string');
              expect(data.updatedBy.phoneNumber).to.be("");
              expect(data.updatedBy.url).to.be.a('string');
              expect(data.updatedBy.url).to.be("");
            expect(data.verified).to.be.a('boolean');
            expect(data.verified).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountDomainRouterGetAll', function() {
        it('should call accountDomainRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for accountDomainRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.accountDomainRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsAccountDomain);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.createdBy).to.be.a(SendPostApi.ModelsMember);
                    expect(data.createdBy.companyName).to.be.a('string');
                expect(data.createdBy.companyName).to.be("");
                expect(data.createdBy.created).to.be.a('number');
                expect(data.createdBy.created).to.be("0");
                expect(data.createdBy.email).to.be.a('string');
                expect(data.createdBy.email).to.be("");
                expect(data.createdBy.id).to.be.a('number');
                expect(data.createdBy.id).to.be("0");
                expect(data.createdBy.isForbidden).to.be.a('boolean');
                expect(data.createdBy.isForbidden).to.be(false);
                expect(data.createdBy.isVerified).to.be.a('boolean');
                expect(data.createdBy.isVerified).to.be(false);
                expect(data.createdBy.name).to.be.a('string');
                expect(data.createdBy.name).to.be("");
                expect(data.createdBy.onboardQAnswered).to.be.a('boolean');
                expect(data.createdBy.onboardQAnswered).to.be(false);
                expect(data.createdBy.phoneNumber).to.be.a('string');
                expect(data.createdBy.phoneNumber).to.be("");
                expect(data.createdBy.url).to.be.a('string');
                expect(data.createdBy.url).to.be("");
              expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.dkim.host).to.be.a('string');
                expect(data.dkim.host).to.be("");
                expect(data.dkim.textValue).to.be.a('string');
                expect(data.dkim.textValue).to.be("");
                expect(data.dkim.type).to.be.a('string');
                expect(data.dkim.type).to.be("");
              expect(data.dkimConfig).to.be.a('string');
              expect(data.dkimConfig).to.be("");
              expect(data.dkimVerified).to.be.a('boolean');
              expect(data.dkimVerified).to.be(false);
              expect(data.dmarc).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.dmarc.host).to.be.a('string');
                expect(data.dmarc.host).to.be("");
                expect(data.dmarc.textValue).to.be.a('string');
                expect(data.dmarc.textValue).to.be("");
                expect(data.dmarc.type).to.be.a('string');
                expect(data.dmarc.type).to.be("");
              expect(data.dmarcVerified).to.be.a('boolean');
              expect(data.dmarcVerified).to.be(false);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.returnPath).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.returnPath.host).to.be.a('string');
                expect(data.returnPath.host).to.be("");
                expect(data.returnPath.textValue).to.be.a('string');
                expect(data.returnPath.textValue).to.be("");
                expect(data.returnPath.type).to.be.a('string');
                expect(data.returnPath.type).to.be("");
              expect(data.returnPathVerified).to.be.a('boolean');
              expect(data.returnPathVerified).to.be(false);
              expect(data.subAccount).to.be.a(SendPostApi.ModelsSubAccount);
                    expect(data.subAccount.apiKey).to.be.a('string');
                expect(data.subAccount.apiKey).to.be("");
                expect(data.subAccount.created).to.be.a('number');
                expect(data.subAccount.created).to.be("0");
                expect(data.subAccount.createdBy).to.be.a(SendPostApi.ModelsMember);
                      expect(data.subAccount.createdBy.companyName).to.be.a('string');
                  expect(data.subAccount.createdBy.companyName).to.be("");
                  expect(data.subAccount.createdBy.created).to.be.a('number');
                  expect(data.subAccount.createdBy.created).to.be("0");
                  expect(data.subAccount.createdBy.email).to.be.a('string');
                  expect(data.subAccount.createdBy.email).to.be("");
                  expect(data.subAccount.createdBy.id).to.be.a('number');
                  expect(data.subAccount.createdBy.id).to.be("0");
                  expect(data.subAccount.createdBy.isForbidden).to.be.a('boolean');
                  expect(data.subAccount.createdBy.isForbidden).to.be(false);
                  expect(data.subAccount.createdBy.isVerified).to.be.a('boolean');
                  expect(data.subAccount.createdBy.isVerified).to.be(false);
                  expect(data.subAccount.createdBy.name).to.be.a('string');
                  expect(data.subAccount.createdBy.name).to.be("");
                  expect(data.subAccount.createdBy.onboardQAnswered).to.be.a('boolean');
                  expect(data.subAccount.createdBy.onboardQAnswered).to.be(false);
                  expect(data.subAccount.createdBy.phoneNumber).to.be.a('string');
                  expect(data.subAccount.createdBy.phoneNumber).to.be("");
                  expect(data.subAccount.createdBy.url).to.be.a('string');
                  expect(data.subAccount.createdBy.url).to.be("");
                expect(data.subAccount.id).to.be.a('number');
                expect(data.subAccount.id).to.be("0");
                {
                  let dataCtr = data.subAccount.labels;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsLabel);
                    expect(data.color).to.be.a('string');
                    expect(data.color).to.be("");
                    expect(data.created).to.be.a('number');
                    expect(data.created).to.be("0");
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('number');
                    expect(data.type).to.be("0");
    
                          }
                }
                expect(data.subAccount.name).to.be.a('string');
                expect(data.subAccount.name).to.be("");
                {
                  let dataCtr = data.subAccount.smtpAuths;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsSMTPAuth);
                    expect(data.created).to.be.a('number');
                    expect(data.created).to.be("0");
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.password).to.be.a('string');
                    expect(data.password).to.be("");
                    expect(data.updated).to.be.a('number');
                    expect(data.updated).to.be("0");
                    expect(data.username).to.be.a('string');
                    expect(data.username).to.be("");
    
                          }
                }
                expect(data.subAccount.type).to.be.a(SendPostApi.ModelsSubAccountType);
                    expect(data.subAccount.updatedBy).to.be.a(SendPostApi.ModelsMember);
                      expect(data.subAccount.updatedBy.companyName).to.be.a('string');
                  expect(data.subAccount.updatedBy.companyName).to.be("");
                  expect(data.subAccount.updatedBy.created).to.be.a('number');
                  expect(data.subAccount.updatedBy.created).to.be("0");
                  expect(data.subAccount.updatedBy.email).to.be.a('string');
                  expect(data.subAccount.updatedBy.email).to.be("");
                  expect(data.subAccount.updatedBy.id).to.be.a('number');
                  expect(data.subAccount.updatedBy.id).to.be("0");
                  expect(data.subAccount.updatedBy.isForbidden).to.be.a('boolean');
                  expect(data.subAccount.updatedBy.isForbidden).to.be(false);
                  expect(data.subAccount.updatedBy.isVerified).to.be.a('boolean');
                  expect(data.subAccount.updatedBy.isVerified).to.be(false);
                  expect(data.subAccount.updatedBy.name).to.be.a('string');
                  expect(data.subAccount.updatedBy.name).to.be("");
                  expect(data.subAccount.updatedBy.onboardQAnswered).to.be.a('boolean');
                  expect(data.subAccount.updatedBy.onboardQAnswered).to.be(false);
                  expect(data.subAccount.updatedBy.phoneNumber).to.be.a('string');
                  expect(data.subAccount.updatedBy.phoneNumber).to.be("");
                  expect(data.subAccount.updatedBy.url).to.be.a('string');
                  expect(data.subAccount.updatedBy.url).to.be("");
              expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.track.host).to.be.a('string');
                expect(data.track.host).to.be("");
                expect(data.track.textValue).to.be.a('string');
                expect(data.track.textValue).to.be("");
                expect(data.track.type).to.be.a('string');
                expect(data.track.type).to.be("");
              expect(data.trackVerified).to.be.a('boolean');
              expect(data.trackVerified).to.be(false);
              expect(data.updatedBy).to.be.a(SendPostApi.ModelsMember);
                    expect(data.updatedBy.companyName).to.be.a('string');
                expect(data.updatedBy.companyName).to.be("");
                expect(data.updatedBy.created).to.be.a('number');
                expect(data.updatedBy.created).to.be("0");
                expect(data.updatedBy.email).to.be.a('string');
                expect(data.updatedBy.email).to.be("");
                expect(data.updatedBy.id).to.be.a('number');
                expect(data.updatedBy.id).to.be("0");
                expect(data.updatedBy.isForbidden).to.be.a('boolean');
                expect(data.updatedBy.isForbidden).to.be(false);
                expect(data.updatedBy.isVerified).to.be.a('boolean');
                expect(data.updatedBy.isVerified).to.be(false);
                expect(data.updatedBy.name).to.be.a('string');
                expect(data.updatedBy.name).to.be("");
                expect(data.updatedBy.onboardQAnswered).to.be.a('boolean');
                expect(data.updatedBy.onboardQAnswered).to.be(false);
                expect(data.updatedBy.phoneNumber).to.be.a('string');
                expect(data.updatedBy.phoneNumber).to.be("");
                expect(data.updatedBy.url).to.be.a('string');
                expect(data.updatedBy.url).to.be("");
              expect(data.verified).to.be.a('boolean');
              expect(data.verified).to.be(false);
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
