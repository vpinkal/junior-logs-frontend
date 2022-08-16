import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AgeDebtorsService } from './age-debtors.service';
import { Subject, takeUntil } from 'rxjs';
import { AgeDebtor } from './age-debtors.types';

@Component({
  selector: 'app-age-debtors',
  templateUrl: './age-debtors.component.html',
  styleUrls: ['./age-debtors.component.scss']
})
export class AgeDebtorsComponent implements OnInit {

  filterChild: FormControl = new FormControl('');
  filterChildOptions: Observable<string[]>;
  filterPayee: FormControl = new FormControl('');
  filterPayeeOptions: Observable<string[]>;
  childOptions: string[] = ['1', '2', '3']
  payeeOptions: string[] = ['1', '2', '3']
  filterCheck: Boolean = false;
  filterAccounts: Boolean = false;
  filterRecords: Boolean = false;
  filterMonthly: Boolean = false;
  filterWeekly: Boolean = false;

  displayedColumns: string[] = ['payee', 'child', 'week3', 'week2', 'week1', 'current', 'pendingAmount', 'overPayment', 'pendingCreditNote', 'totalPendingAmount'];
  dataSource: MatTableDataSource<AgeDebtor>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(private _ageDebtorsService: AgeDebtorsService) {
    this._ageDebtorsService.ageDebtors$
    .subscribe((messages: AgeDebtor[]) => {

        // Load the messages
        this.dataSource = new MatTableDataSource(messages);
    });
   }

  ngOnInit(): void {
    this.filterChildOptions = this.filterChild.valueChanges.pipe(
      startWith(''),
      map(value => this.filterChildFun(value || '')),
    );
    this.filterPayeeOptions = this.filterPayee.valueChanges.pipe(
      startWith(''),
      map(value => this.filterPayeeFun(value || '')),
    );
  }

  filterChildFun(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.childOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  filterPayeeFun(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.payeeOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }

}
