import { inject, injectable } from 'inversify';
import { TYPES } from '../../../ioc/types';
import { StarWarsRepository } from '../../infrastructure/repository/star.wars.repository';
import { DynamoRepository } from '../../infrastructure/repository/dynamo.repository';
import { PeopleResponseDto } from '../../application/dto/people.response.dto';
import { People } from '../entities/people';
import { DbGetPeopleRepository } from '../repository/db.get.people.repository';
import { DbCreatePeopleRepository } from '../repository/db.create.people.repository';

@injectable()
export class PeopleDomainService {
  protected starWarsInfrastructure: any;
  protected DynamoInfrastructure: any;

  constructor(
    @inject(TYPES.Repositories.PeopleRepository)
    private starWarsRepository: DbGetPeopleRepository,
    @inject(TYPES.Repositories.PeopleRepository)
    private dynamoRepository: DbCreatePeopleRepository
  ) {
    this.starWarsInfrastructure = new StarWarsRepository();
    this.DynamoInfrastructure = new DynamoRepository();
  }

  public async getPeopleDomain(id: number): Promise<PeopleResponseDto> {
    let people: PeopleResponseDto;
    people = await this.starWarsInfrastructure.get(id);

    return people;
  }

  public async setPeopleDomain(peopleData: People): Promise<PeopleResponseDto> {
    return await this.DynamoInfrastructure.create(peopleData);
  }
}