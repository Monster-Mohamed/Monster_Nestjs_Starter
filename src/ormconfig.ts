import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'booky',
  password: '123',
  database: 'booky',
  synchronize: false,
  entities: [], // Put HERE all the Entities
  migrations: [CreateTasks1679299243114], // Put HERE all the migrations you export it from it's file
};

export default ormConfig;
