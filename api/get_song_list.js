const template = require('./__mock__/songList.json');

module.exports = {
  path: '/api/songlist/',
  delay: 2000,
  method: 'GET',
  cache: false,
  //status: 400
  template: template
};
