import { validate } from 'class-validator';
import { injectable } from 'inversify';
import HttpStatusCode from '../../../libs/common/http.status.code';
import { BaseException } from '../../../libs/exception/base.exception';
import { APP_STATUS_CODE } from '../services/util/app.status.code';

@injectable()
export class ValidationRequest {

    public async validate(request: any) {
        const errors = await validate(request);
        if (errors.length) {
            const result: object[] = await this.validateEntity(errors);
            throw new BaseException(
                HttpStatusCode.BAD_REQUEST,
                'Se encontraron errores de validación.',
                APP_STATUS_CODE.errorBadParams,
                result
            );
        }
    }

    private async validateEntity(errors: object[]) {
        let result: object[] = [];
        for (let error of errors) {
            let descriptionError = '';
            const MIN_KEY = 1;
            const errorKeys = Object.keys(error['constraints']);
            const lastString = errorKeys.length > MIN_KEY ? '\\n' : '';
            for (let errorKey of errorKeys) {
                descriptionError += error['constraints'][errorKey] + lastString;
            }
            result.push({
                'field': error['property'],
                'message': descriptionError
            });
        }
        return result;
    }
}