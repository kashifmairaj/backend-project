class apiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        Error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = false;
        this.errors = errors

        if(stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
            
        }
    }
}

export {apiError}