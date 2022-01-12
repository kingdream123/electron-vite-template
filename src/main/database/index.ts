import 'reflect-metadata' // Required by TypoORM.
import dbConnection, {initOptionModel} from './dbConnection'


const { ConnectionInit, ConnectionDestroy } = dbConnection()
export default {
  Setup() {
    ConnectionInit({doMigrations: false, undoMigrations: false} as initOptionModel).then(() => {
      console.log('数据库初始化完成')
    })
  },
  Destroy() {
    ConnectionDestroy().then(() => {
      console.log('数据库关闭')
    })
  },
}
