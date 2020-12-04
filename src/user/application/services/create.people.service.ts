import { injectable, inject } from 'inversify';
import { TYPES } from '../../../ioc/types';
import { ResultDto } from '../../../libs/dto/result.dto';
import { PeopleDomainService } from '../../domain/service/people.domain.service';
import { ValidationRequest } from '../../infrastructure/validations/validation.request';
import { ResponseDto } from '../../../libs/dto/response.dto';
import { PeopleRequestValidation } from '../../infrastructure/validations/people.request.validation';
import { PeopleRequestDto } from '../dto/people.request.dto';
import { People } from '../../domain/entities/people';

@injectable()
export class CreatePeopleService {
    
  protected peopleServiceDomain: any;

  constructor(
    @inject(TYPES.Validation.ValidationRequest)
    private validationRequest: ValidationRequest,
    @inject(TYPES.Domain.PeopleDomain)
    private peopleService: PeopleDomainService
  ) {
    this.peopleServiceDomain = peopleService;
  }

  public async execute(data: PeopleRequestDto): Promise<ResponseDto>{

    const people: People = await this.validate(data);
    const response = await this.peopleServiceDomain.setPeopleDomain(people);

    return new ResultDto(response);
  }

  public async validate(data: PeopleRequestDto) {
    const validateInput: PeopleRequestValidation = new PeopleRequestValidation(
        data.name,
        data.height,
        data.mass,
        data.hair_color,
        data.skin_color,
        data.eye_color,
        data.birth_year,
        data.gender,
        data.homeworld,
        data.films,
        data.species,
        data.vehicles,
        data.starships,
        data.created,
        data.edited,
        data.url
      );
  
    await this.validationRequest.validate(validateInput);
    
    return new People(
        data.name,
        data.height,
        data.mass,
        data.hair_color,
        data.skin_color,
        data.eye_color,
        data.birth_year,
        data.gender,
        data.homeworld,
        data.films,
        data.species,
        data.vehicles,
        data.starships,
        data.created,
        data.edited,
        data.url
    )
  }
}