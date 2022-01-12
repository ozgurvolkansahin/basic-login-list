import { Observable } from 'rxjs';
import { ApiResult } from '../interface/apiResult';
import { UserPreview } from '../interface/userPreview';

export abstract class DashboardData {

    abstract userPreviewList(page: number, limit: number): Observable<ApiResult<UserPreview[]>>;
    abstract userPreviewListv2(page: number, limit: number): Observable<ApiResult<UserPreview[]>>;

}
