import { injectable, inject } from 'inversify';
import { TYPES } from '../../../ioc/types';
import { ResultDto } from '../../../libs/dto/result.dto';
import { PeopleDomainService } from '../../domain/service/people.domain.service';
import { ResponseDto } from '../../../libs/dto/response.dto';

@injectable()
export class GetPeopleService {
    
  peopleService: any;

  constructor(
    @inject(TYPES.Domain.PeopleDomain)
    private peopleServiceDomain: PeopleDomainService
  ) {
    this.peopleService = peopleServiceDomain
  }

  public async execute(id: any): Promise<ResponseDto>{
    const data = await this.peopleService.getPeopleDomain(id);
    return new ResultDto(data);
  }
}