module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // define schema with role here !

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
 password: {
            type: DataTypes.STRING,
            allowNull: false
        },
 role: {
            type: DataTypes.STRING,
            allowNull: false,
                   

        },
isactive: {
            type: DataTypes.STRING,
            defaultValue:"false",
        },
activationcode: {
            type: DataTypes.STRING,
            allowNull: false,
                   

        },

    });

    return User;
};
