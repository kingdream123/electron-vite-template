import {join} from 'path'
import {app} from 'electron'
import RealTimeEntity from './models/RealTimeEntity'
import {ConnectionOptions} from 'typeorm'


const DB_PATH = join(app.getAppPath(), 'db')

const ORMConfig = {
  type: 'sqlite',
  driver: 'sqlite',
  synchronize: false,
  logging: process.env.NODE_ENV === 'development' ? true : ['error', 'warn'],
  database: join(DB_PATH, 'my.db'),
  cache: true,
  timezone: 'Z',
  migrations: [],
  migrationsTableName: 'temp_migration_table',
  entities: [
    RealTimeEntity,
  ],
  cli: {
    migrationsDir: 'src/main/database/migration',
    subscribersDir: 'src/main/database/subscriber',
    entitiesDir: 'src/main/database/models',
  },
} as ConnectionOptions

export default ORMConfig
