import { BaseException } from "../../../libs/exception/base.exception";
import HttpStatusCode from "../../../libs/common/http.status.code";
import { injectable } from "inversify";
import { APP_STATUS_CODE } from "../services/util/app.status.code";
import * as AWS from "aws-sdk";
import { v4 as uuidv4 } from 'uuid';
import { People } from "../../domain/entities/people";
import { DbCreatePeopleRepository } from "../../domain/repository/db.create.people.repository";
AWS.config.update({ region: "us-east-1" });
let ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

@injectable()
export class DynamoRepository implements DbCreatePeopleRepository {

  public async create(data: People): Promise<any> {
    
    try {
      let params = {
        TableName: "people-table-test",
        Item: {
          'id' : {S: uuidv4() },
          'nombre': {S: data.nombre},
          'altura': {S: data.altura},
          'masa': {S: data.masa},
          'color': {S: data.color},
          'colorPiel': {S: data.colorPiel},
          'colorOjos': {S: data.colorOjos},
          'nacimiento': {S: data.nacimiento},
          'genero': {S: data.genero},
          'planeta': {S: data.planeta},
          'pelicula': {S: data.pelicula.toString()},
          'especies': {S: data.especies.toString()},
          'vehiculos': {S: data.vehiculos.toString()},
          'naves': {S: data.naves.toString()},
          'fechaCreacion': {S: data.fechaCreacion},
          'fechaActualizacion': {S: data.fechaActualizacion},
          'url': {S: data.url}
        }
      };

      ddb.putItem(params, function (err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
        }
      });

      return data;
    } catch (error) {
      console.error(error);
      throw new BaseException(
        HttpStatusCode.BAD_REQUEST,
        "Hubo un error al crear el registro",
        APP_STATUS_CODE.errorNotFound
      );
    }
  }
}
