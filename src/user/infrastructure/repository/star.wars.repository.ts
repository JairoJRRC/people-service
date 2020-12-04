import axios from 'axios';
import { BaseException } from '../../../libs/exception/base.exception';
import HttpStatusCode from '../../../libs/common/http.status.code';
import { injectable } from 'inversify';
import { APP_STATUS_CODE } from '../services/util/app.status.code';
import { PeopleResponseDto } from '../../application/dto/people.response.dto';
import { DbGetPeopleRepository } from '../../domain/repository/db.get.people.repository';

@injectable()
export class StarWarsRepository implements DbGetPeopleRepository {
  private url: string = 'https://swapi.py4e.com/api/';

  public async get(id: number): Promise<PeopleResponseDto> {
    try {
      return axios.get(this.url + 'people/' + id).then(resp => {
        return resp.data;
      });
    } catch (error) {
      console.error(error);
      throw new BaseException(
        HttpStatusCode.BAD_REQUEST,
        'Hubo un error al retornar el registro',
        APP_STATUS_CODE.errorNotFound
      );
    }
  }
}
