class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    addError(code, description = 'Unknown error') {
        this.errors.set(code, description);
    }

    translate(code) {
        return this.errors.get(code);
    }    
}

export default ErrorRepository