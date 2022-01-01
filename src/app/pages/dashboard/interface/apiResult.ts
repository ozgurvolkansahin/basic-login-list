export interface ApiResult<T> {
    data: T;
    limit: number;
    total: number;
    page: number
}
