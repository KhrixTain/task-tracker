import { ErrorOptions } from "../types";

const errorFactory = function(opts: ErrorOptions) {
    return class BusinessError extends Error {
        constructor() {
            super();
            this.name = opts.name;
            this.message = opts.message;
        }
    }
}

export const ValidationError = errorFactory( {name: 'ValidationError', message: 'Validation Error'});