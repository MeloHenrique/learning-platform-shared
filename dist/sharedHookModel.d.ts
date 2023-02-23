export declare class SharedHookModel<T> {
    loading: boolean;
    error: boolean;
    data: T | undefined;
    constructor(loading: boolean, error: boolean, data?: T | undefined);
}
