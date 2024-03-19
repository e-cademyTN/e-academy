module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define('teacher', {
        // define schema here !
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    return Teacher;
};
