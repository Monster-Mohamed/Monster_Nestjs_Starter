import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

// configure the database
// more info: https://www.udemy.com/course/nestjs-building-real-project-api-from-scratch/learn/lecture/26416398#notes
const ormConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your_username",
  password: "123",
  database: "your_database_name",
  // to just create a database by migrations for the security
  // more info: https://www.udemy.com/course/nestjs-building-real-project-api-from-scratch/learn/lecture/26416644#notes
  synchronize: false,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/database/migrations/**/*{.ts,.js}"],
};

export default ormConfig;
