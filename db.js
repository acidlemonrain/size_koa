const { Sequelize ,DataTypes} = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
 const sequelize = new Sequelize('blog', 'lemon', '992273994', {
  host: 'localhost',
  dialect: 'postgres'
});



(async function name(params) { 
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log("The table for the User model was just (re)created!");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()


module.exports.db = sequelize