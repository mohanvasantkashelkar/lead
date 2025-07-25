import {  Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LoanService } from '../services/loan-service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CategoryList, Loan } from '../models/category';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { Table } from '../../../common/components/table/table';

@Component({
  selector: 'app-loan-dashboard',
  imports: [
    MatGridListModule,
    MatIconModule,
    Table
],
  templateUrl: './loan-dashboard.html',
  styleUrl: './loan-dashboard.scss'
})
export class LoanDashboard implements OnInit, OnDestroy {
    loanService = inject( LoanService )

    loanCategories : CategoryList = { categories : [] }
    loanDataSource! : MatTableDataSource<Loan[]>;
    loans = new BehaviorSubject<any>([]);
    loanCategorySubscription! : Subscription
    loanServiceSubscription! : Subscription 
    columnConfig : { headerText : string, columnName : string }[]= [
      {
          headerText : 'Account Name',
          columnName : 'accountName'
      },
      {
        headerText : 'Account Number',
        columnName : 'accountNumber'
      },
      {
        headerText : 'Currency Code',
        columnName : 'currencyCode'
      },
      {
        headerText : 'Iban',
        columnName : 'iban'
      }
    ]

    columns = [ 'accountName' , 'accountNumber', 'currencyCode', 'iban' ]

    categoryIcons : Record<string, string> = {
      'personal' : 'account_balance_wallet',
      'gold' : 'account_balance',
      'home' : 'home',
      'car' : 'directions_car'
    }

    ngOnInit(): void {     
        this.getCategories();
        this.getLoans();
    }

    /* fetch loan categories */
    getCategories(){
      this.loanServiceSubscription = this.loanService.getCategories().subscribe(( categories )=>{
        this.loanCategories = categories
      });
    }

    /* fetch loans */
    getLoans(){
      this.loanCategorySubscription = this.loanService.getLoans().subscribe(( loans : any )=>{
        this.loans.next( loans );
      });
    }

    ngOnDestroy(): void {
        this.loanCategorySubscription && this.loanCategorySubscription.unsubscribe()
        this.loanServiceSubscription && this.loanServiceSubscription.unsubscribe()
    }
} 
