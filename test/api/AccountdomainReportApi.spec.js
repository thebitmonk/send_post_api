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
    instance = new SendPostApi.AccountdomainReportApi();
  });

  describe('(package)', function() {
    describe('AccountdomainReportApi', function() {
      describe('domainReportRouterReputation', function() {
        it('should call domainReportRouterReputation successfully', function(done) {
          // TODO: uncomment, update parameter values for domainReportRouterReputation call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.ip = "ip_example";
          opts.host = "host_example";

          instance.domainReportRouterReputation(xAccountApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDomainCheckResult);
            expect(data.dmarcPresent).to.be.a('boolean');
            expect(data.dmarcPresent).to.be(false);
            expect(data.domainAge).to.be.a(SendPostApi.ModelsDomainAge);
                  expect(data.domainAge.domainAgeFound).to.be.a('boolean');
              expect(data.domainAge.domainAgeFound).to.be(false);
              expect(data.domainAge.domainAgeInDays).to.be.a('number');
              expect(data.domainAge.domainAgeInDays).to.be(0);
              expect(data.domainAge.domainAgeInMonths).to.be.a('number');
              expect(data.domainAge.domainAgeInMonths).to.be(0);
              expect(data.domainAge.domainAgeInYears).to.be.a('number');
              expect(data.domainAge.domainAgeInYears).to.be(0);
              expect(data.domainAge.domainCreationDate).to.be.a('string');
              expect(data.domainAge.domainCreationDate).to.be("");
              expect(data.domainAge.domainRegistered).to.be.a('string');
              expect(data.domainAge.domainRegistered).to.be("");
              expect(data.domainAge.host).to.be.a('string');
              expect(data.domainAge.host).to.be("");
            expect(data.domainBlackList).to.be.a(SendPostApi.ModelsBlackListResult);
                  expect(data.domainBlackList.alexaTop100k).to.be.a('boolean');
              expect(data.domainBlackList.alexaTop100k).to.be(false);
              expect(data.domainBlackList.alexaTop10k).to.be.a('boolean');
              expect(data.domainBlackList.alexaTop10k).to.be(false);
              expect(data.domainBlackList.alexaTop250k).to.be.a('boolean');
              expect(data.domainBlackList.alexaTop250k).to.be(false);
              {
                let dataCtr = data.domainBlackList.blackLists;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsBlackListEngine);
                  expect(data.confidence).to.be.a('string');
                  expect(data.confidence).to.be("");
                  expect(data.detected).to.be.a('boolean');
                  expect(data.detected).to.be(false);
                  expect(data.elapsed).to.be.a('string');
                  expect(data.elapsed).to.be("");
                  expect(data.engine).to.be.a('string');
                  expect(data.engine).to.be("");
                  expect(data.reference).to.be.a('string');
                  expect(data.reference).to.be("");
  
                        }
              }
              expect(data.domainBlackList.domainLength).to.be.a('number');
              expect(data.domainBlackList.domainLength).to.be(0);
              expect(data.domainBlackList.host).to.be.a('string');
              expect(data.domainBlackList.host).to.be("");
              expect(data.domainBlackList.mostAbusedTld).to.be.a('boolean');
              expect(data.domainBlackList.mostAbusedTld).to.be(false);
            expect(data.domainSSL).to.be.a(SendPostApi.ModelsSSLInfo);
                  expect(data.domainSSL.certificate).to.be.a(SendPostApi.ModelsSSLCertificate);
                    expect(data.domainSSL.certificate.details).to.be.a(SendPostApi.ModelsCertificateDetails);
                      expect(data.domainSSL.certificate.details.extensions).to.be.a(SendPostApi.ModelsCertificateExtensions);
                        expect(data.domainSSL.certificate.details.extensions.authorityInfoAccess).to.be.a('string');
                    expect(data.domainSSL.certificate.details.extensions.authorityInfoAccess).to.be("");
                    expect(data.domainSSL.certificate.details.extensions.authorityKeyIdentifier).to.be.a('string');
                    expect(data.domainSSL.certificate.details.extensions.authorityKeyIdentifier).to.be("");
                    expect(data.domainSSL.certificate.details.extensions.basicConstraints).to.be.a('string');
                    expect(data.domainSSL.certificate.details.extensions.basicConstraints).to.be("");
                    expect(data.domainSSL.certificate.details.extensions.certificatePolicies).to.be.a('string');
                    expect(data.domainSSL.certificate.details.extensions.certificatePolicies).to.be("");
                    expect(data.domainSSL.certificate.details.extensions.crlDistributionPoints).to.be.a('string');
                    expect(data.domainSSL.certificate.details.extensions.crlDistributionPoints).to.be("");
                    expect(data.domainSSL.certificate.details.extensions.extendedKeyUsage).to.be.a('string');
                    expect(data.domainSSL.certificate.details.extensions.extendedKeyUsage).to.be("");
                    expect(data.domainSSL.certificate.details.extensions.keyUsage).to.be.a('string');
                    expect(data.domainSSL.certificate.details.extensions.keyUsage).to.be("");
                    expect(data.domainSSL.certificate.details.extensions.subjectKeyIdentifier).to.be.a('string');
                    expect(data.domainSSL.certificate.details.extensions.subjectKeyIdentifier).to.be("");
                  expect(data.domainSSL.certificate.details.issuer).to.be.a(SendPostApi.ModelsCertificateIssuer);
                        expect(data.domainSSL.certificate.details.issuer.commonName).to.be.a('string');
                    expect(data.domainSSL.certificate.details.issuer.commonName).to.be("");
                    expect(data.domainSSL.certificate.details.issuer.country).to.be.a('string');
                    expect(data.domainSSL.certificate.details.issuer.country).to.be("");
                    expect(data.domainSSL.certificate.details.issuer.organization).to.be.a('string');
                    expect(data.domainSSL.certificate.details.issuer.organization).to.be("");
                    expect(data.domainSSL.certificate.details.issuer.organizationUnit).to.be.a('string');
                    expect(data.domainSSL.certificate.details.issuer.organizationUnit).to.be("");
                  expect(data.domainSSL.certificate.details.signature).to.be.a(SendPostApi.ModelsCertificateSignature);
                        expect(data.domainSSL.certificate.details.signature.serial).to.be.a('string');
                    expect(data.domainSSL.certificate.details.signature.serial).to.be("");
                    expect(data.domainSSL.certificate.details.signature.serialHex).to.be.a('string');
                    expect(data.domainSSL.certificate.details.signature.serialHex).to.be("");
                    expect(data.domainSSL.certificate.details.signature.type).to.be.a('string');
                    expect(data.domainSSL.certificate.details.signature.type).to.be("");
                  expect(data.domainSSL.certificate.details.subject).to.be.a(SendPostApi.ModelsCertificateSubject);
                        expect(data.domainSSL.certificate.details.subject.alternativeNames).to.be.a('string');
                    expect(data.domainSSL.certificate.details.subject.alternativeNames).to.be("");
                    expect(data.domainSSL.certificate.details.subject.commonName).to.be.a('string');
                    expect(data.domainSSL.certificate.details.subject.commonName).to.be("");
                    expect(data.domainSSL.certificate.details.subject.name).to.be.a('string');
                    expect(data.domainSSL.certificate.details.subject.name).to.be("");
                  expect(data.domainSSL.certificate.details.validity).to.be.a(SendPostApi.ModelsCertificateValidity);
                        expect(data.domainSSL.certificate.details.validity.daysLeft).to.be.a('number');
                    expect(data.domainSSL.certificate.details.validity.daysLeft).to.be("0");
                    expect(data.domainSSL.certificate.details.validity.validFrom).to.be.a('string');
                    expect(data.domainSSL.certificate.details.validity.validFrom).to.be("");
                    expect(data.domainSSL.certificate.details.validity.validFromTimestamp).to.be.a('number');
                    expect(data.domainSSL.certificate.details.validity.validFromTimestamp).to.be("0");
                    expect(data.domainSSL.certificate.details.validity.validTo).to.be.a('string');
                    expect(data.domainSSL.certificate.details.validity.validTo).to.be("");
                    expect(data.domainSSL.certificate.details.validity.validToTimestamp).to.be.a('number');
                    expect(data.domainSSL.certificate.details.validity.validToTimestamp).to.be("0");
                expect(data.domainSSL.certificate.fingerprint).to.be.a('string');
                expect(data.domainSSL.certificate.fingerprint).to.be("");
                expect(data.domainSSL.certificate.found).to.be.a('boolean');
                expect(data.domainSSL.certificate.found).to.be(false);
                expect(data.domainSSL.certificate.nameMatch).to.be.a('boolean');
                expect(data.domainSSL.certificate.nameMatch).to.be(false);
                expect(data.domainSSL.certificate.validPeer).to.be.a('boolean');
                expect(data.domainSSL.certificate.validPeer).to.be(false);
            expect(data.spfPresent).to.be.a('boolean');
            expect(data.spfPresent).to.be(false);

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
