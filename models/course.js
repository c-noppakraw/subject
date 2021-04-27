'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id_course: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
      unique: true
    },
    course_name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    course_description: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Course.associate = (models) => {
    Course.belongsTo(models.Teacher, { foreignKey: 'teacher_id', as: 'Teacher' });
  };
  return Course;
};