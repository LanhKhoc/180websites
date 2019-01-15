const ejs = require('ejs');

const renderView = (path, data) => {
  const PRE_PATH = "src/app/views";
  
  return new Promise((resolve, reject) => {
    ejs.renderFile(PRE_PATH + path, data, (error, content) => {
      if(error) reject(error);
      else resolve(content);
    })
  });
}

module.exports = {
  renderView
}