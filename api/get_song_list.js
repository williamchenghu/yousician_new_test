const template = require('../__mock__/songList.json');

module.exports = {
  path: '/api/songlist/',
  method: 'GET',
  cache: false,
  template: template
};
