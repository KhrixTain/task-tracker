import { ValidationError } from "..";
import { ErrorOptions } from "../../types";

const validationErrorFactory = function(opts: ErrorOptions) {
    return class BusinessError extends ValidationError {
        constructor() {
            super();
            this.name = opts.name;
            this.message = opts.message;
        }
    }
}

export const IsUndefinedValue = validationErrorFactory({name: 'IsUndefinedValue', message: 'Value is "undefined"'});
export const IsNotNullValue = validationErrorFactory({name: 'IsNotNullValue', message: 'Value is not NULL'});
export const IsNotNumberValue = validationErrorFactory({name: 'IsNotNumberValue', message: 'Value is zero'});
export const IsZeroValue = validationErrorFactory({name: 'IsZeroValue', message: 'Value is not a number'});
export const IsNegativeValue = validationErrorFactory({name: 'IsNegativeValue', message: 'Value is negative value'});
export const IsPositiveValue = validationErrorFactory({name: 'IsPositiveValue', message: 'Value is positive value'});
export const IsNotIntegerNumberValue = validationErrorFactory({name: 'IsNotIntegerNumberValue', message: 'Value is not a integer number'});
export const IsNotFloatNumberValue = validationErrorFactory({name: 'IsNotFloatNumberValue', message: 'Value is not a float number'});
export const IsNotStringValue = validationErrorFactory({name: 'IsNotStringValue', message: 'Value is not a string'});
export const IsEmptyStringValue = validationErrorFactory({name: 'IsEmptyStringValue', message: 'Value is a empty string'});
export const IsNotBooleanValue = validationErrorFactory({name: 'IsNotBooleanValue', message: 'Value is not a boolean value'});
