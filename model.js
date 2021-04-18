const { Sequelize ,DataTypes} = require('sequelize');
const {db} = require('./db')
const User = db.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
});  
const Blog = db.define('Blog',{
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
    },
    title:{
        type:DataTypes.STRING,
    },
    content:{
        type:DataTypes.TEXT
    }
})

 
    
   


module.exports.User = User
module.exports.Blog = Blog