import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api-service.service';
import { DashboardData } from '../data/dashboard.data';
import { ApiResult } from '../interface/apiResult';
import { UserPreview } from '../interface/userPreview';

@Injectable()
export class DashboardService extends DashboardData {
    constructor(private http: HttpClient,
                private apiService: ApiService) {
        super();
    }
    dummyApiLink = 'https://dummyapi.io/';

    userPreviewList(limit: number): Observable<ApiResult<UserPreview[]>> {
        return this.http.get<ApiResult<UserPreview[]>>(`${this.dummyApiLink}data/v1/user?limit=${limit}`);
    }

    userPreviewListv2(page: number, limit: number): Observable<ApiResult<UserPreview[]>> {
        return this.apiService.get<UserPreview[]>(`data/v1/user?page=${page}&limit=${limit}`);
    }
}
