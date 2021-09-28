exports.users = (sequelize,Sequelize) => {
  const Users = sequelize.define('users',{
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,          
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,          
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,          
      },
      dob: {
        type: Sequelize.STRING,
        allowNull: false,          
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,          
      }
  });
  return Users;
};

exports.blogs = (sequelize,Sequelize) => {
    const blogs = sequelize.define('blogs',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true,          
        },
        publised_date: {
          type: Sequelize.STRING,
          allowNull: false,          
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,          
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,          
        },
        start_date: {
          type: Sequelize.STRING,
          allowNull: false,          
        },
        end_date: {
          type: Sequelize.STRING,
          allowNull: false,          
        },
        recurrence: {
          type: Sequelize.TEXT,
          allowNull: false,          
        }
    });
    return blogs;
  }