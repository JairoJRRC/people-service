import { PeopleResponseDto } from "../../application/dto/people.response.dto";
import { People } from "../entities/people";

export interface DbCreatePeopleRepository {
    create(people: People): Promise<PeopleResponseDto>;
}