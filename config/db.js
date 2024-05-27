import dotenv from "dotenv"

const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});
