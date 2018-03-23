const sinon = require('sinon');

exports.mock = (model, method, response) => {
  sinon.mock(model)
    .expects(method)
    .resolves(response);
};

exports.mockThrow = (model, method) => {
  sinon.mock(model)
    .expects(method)
    .throws();
};

exports.mockPrototype = (model, method, response) => {
  sinon.mock(model.prototype, method)
    .expects(method)
    .resolves(response);
};

exports.mockPrototypeThrow = (model, method) => {
  sinon.mock(model.prototype, method)
    .expects(method)
    .throws();
};
