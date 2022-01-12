import {Container} from 'typedi'
import RealTimeService from './services/RealTimeService'


export default function dbServices() {
  const realTimeService = Container.get(RealTimeService)
  return {
    realTimeService,
  }
}
