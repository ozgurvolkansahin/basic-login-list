import { Observable } from 'rxjs';
import { ApiResult } from '../interface/apiResult';
import { UserPreview } from '../interface/userPreview';

export abstract class DashboardData {

    abstract userPreviewList(limit: number): Observable<ApiResult<UserPreview[]>>;

}
