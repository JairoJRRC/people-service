import { PeopleResponseDto } from '../../application/dto/people.response.dto';

export interface DbGetPeopleRepository {
  get(id: number): Promise<PeopleResponseDto>;
}