import { inject, Injectable } from '@angular/core';
import { BaseService } from '../../../common/services/base-service';
import { API_CONSTANTS } from '../../../common/api-constant';
import { Observable } from 'rxjs';
import { CategoryList, Loan } from '../models/category';



@Injectable({
  providedIn: 'root'
})
export class LoanService {
    baseService = inject(BaseService);


    getCategories() : Observable<CategoryList>{
      return this.baseService.get( API_CONSTANTS.loanCategories )
    }

    getLoans() : Observable<Loan[]>{
      return this.baseService.get( API_CONSTANTS.loans )
    }
}
