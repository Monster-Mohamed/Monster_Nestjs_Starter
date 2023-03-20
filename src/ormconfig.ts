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
  migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
};

export default ormConfig;
