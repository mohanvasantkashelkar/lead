import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  imports: [ MatTableModule , CommonModule, MatPaginatorModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class Table implements OnInit, AfterViewInit {
  
  @Input() source = new BehaviorSubject([]);
  @Input() columnConfig : { headerText : string, columnName : string, columnTemplate? :  any}[] | [] = []
  @Input() columns : string[] = []
  dataSource = new MatTableDataSource([])

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isLoading = false;

  ngOnInit(): void {
    this.source.subscribe(( sourceData )=>{
      this.isLoading = true;
      this.dataSource = new MatTableDataSource(sourceData);
      this.dataSource.paginator = this.paginator
      this.isLoading = false
    })
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
  }
}
