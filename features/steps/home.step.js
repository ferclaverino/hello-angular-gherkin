var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

    this.Given(/^Estoy en "([^"]*)"$/, function(arg1, callback) {
        browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/' + arg1);
        callback();
    });

    this.Then(/^El título es "([^"]*)"$/, function(arg1, callback) {
        expect(browser.getTitle()).to.eventually.equal(arg1).and.notify(callback);
    });

    this.When(/^Yo busco "([^"]*)"$/, function(arg1, callback) {
        element(by.model('query')).sendKeys(arg1);
        callback();
    });

    this.Then(/^Veo "([^"]*)" resultados$/, function(arg1, callback) {
        var rows = element.all(by.repeater('phone in phones'));
        expect(rows.count()).to.eventually.equal(parseInt(arg1)).and.notify(callback);
    });
}
