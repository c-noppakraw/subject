'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    id_teacher: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
      unique: true
    },
    first_name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    age: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Teacher.associate = (models) => {
    Teacher.hasMany(models.Course, {
      foreignKey: {
        field: 'teacher_id',
        allowNull: false
      },
      as: 'Course'
    });
  };
  return Teacher;
};