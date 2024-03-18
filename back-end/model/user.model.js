module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // define schema with role here !
    });

    return User;
};
