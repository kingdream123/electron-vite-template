import {Service} from 'typedi'
import {InjectRepository} from 'typeorm-typedi-extensions'
import RealTimeEntity from '../models/RealTimeEntity'
import {Repository} from 'typeorm'


@Service()
export default class RealTimeService {
  constructor(
    @InjectRepository(RealTimeEntity)
    private realTimeRepository: Repository<RealTimeEntity>,
  ) {}

  public async create(data: RealTimeModel): Promise<RealTimeModel | undefined> {
    return (await this.realTimeRepository.save(data)) as RealTimeEntity | undefined
  }

  public async getAll(): Promise<RealTimeModel[] | undefined> {
    return (await this.realTimeRepository.find()) as RealTimeEntity[] | undefined
  }
}
