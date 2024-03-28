import {join } from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'
import { Profile } from '../../entities/profile.entity'

export const config: DataSourceOptions = {
  type: "postgres",
  username: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  logging: false,
  entities:[join(__dirname, "../../", "entities", "*.entity.ts")],
  migrations: [],
  migrationsTableName: 'my_migrations',
  synchronize: true
}

const datasource = new DataSource(config)
datasource.initialize();
export default datasource
