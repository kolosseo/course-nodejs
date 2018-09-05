var environments = {};

environments.production = {
  'port': 80,
  'envName': 'production'
};

environments.staging = {
  'port': 3000,
  'envName': 'staging'
};

var passedEnv = typeof(process.env.NODE_ENV) === 'string' ?
  process.env.NODE_ENV.toLowerCase() :
  '';

var currentEnv = typeof(environments[passedEnv]) === 'object' ?
  environments[passedEnv] :
  environments.staging;

module.exports = currentEnv;
