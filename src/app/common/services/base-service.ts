import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
    private httpService : HttpClient = inject( HttpClient );

    get<T>( url : string  , options? : Parameters<typeof this.httpService.get>['1'] ){
      return this.httpService.get<T>( url )
    }
}
