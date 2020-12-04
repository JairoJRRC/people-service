import { ResourceManager } from '../libs/resources/resources.manager';
import { TYPES } from './types';
import { Container } from 'inversify';
import { PeopleDomainService } from '../user/domain/service/people.domain.service';
import { StarWarsRepository } from '../user/infrastructure/repository/star.wars.repository';
import { CreatePeopleService } from '../user/application/services/create.people.service';
import { GetPeopleService } from '../user/application/services/get.people.service';
import { ValidationRequest } from '../user/infrastructure/validations/validation.request';
import { DbGetPeopleRepository } from '../user/domain/repository/db.get.people.repository';

const container = new Container();

container
  .bind<ResourceManager>(TYPES.ResourceManager)
  .to(ResourceManager)
  .inSingletonScope();
container
  .bind<ValidationRequest>(TYPES.Validation.ValidationRequest)
  .to(ValidationRequest)
  .inSingletonScope();

container
  .bind<CreatePeopleService>(TYPES.Services.CreatePeopleService)
  .to(CreatePeopleService)
  .inSingletonScope();

container
  .bind<GetPeopleService>(TYPES.Services.GetPeopleService)
  .to(GetPeopleService)
  .inSingletonScope();

container
  .bind<PeopleDomainService>(TYPES.Domain.PeopleDomain)
  .to(PeopleDomainService)
  .inSingletonScope();

container
  .bind<DbGetPeopleRepository>(TYPES.Repositories.PeopleRepository)
  .to(StarWarsRepository)
  .inSingletonScope();

export { container };
