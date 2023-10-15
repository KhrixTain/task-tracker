import { ErrorOptions } from "../types";

const createErrorFactory = function(opts: ErrorOptions) {
    return class BusinessError extends Error {
        constructor() {
            super();
            this.name = opts.name;
            this.message = opts.message
        }
    }
}