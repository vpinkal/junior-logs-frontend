import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-age-debtors',
  templateUrl: './age-debtors.component.html',
  styleUrls: ['./age-debtors.component.scss']
})
export class AgeDebtorsComponent implements OnInit {

  filterChild: FormControl = new FormControl('2');
  filterChildOptions: Observable<string[]>;
  filterPayee: FormControl = new FormControl('2');
  filterPayeeOptions: Observable<string[]>;
  childOptions: string[] = ['1', '2', '3']
  payeeOptions: string[] = ['1', '2', '3']
  filterCheck: Boolean = false;

  constructor() { }

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

}
