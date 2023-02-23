export class SharedHookModel<T>{
    loading: boolean;
    error: boolean;
    data: T | undefined;


    constructor(loading: boolean, error: boolean, data: T | undefined = undefined) {
        this.loading = loading;
        this.error = error;
        this.data = data;
    }
}