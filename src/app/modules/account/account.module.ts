import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { Route, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { AgeDebtorsComponent } from './age-debtors/age-debtors.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const accountRoutes: Route[] = [
  {
      path     : '',
      component: AccountComponent,
      children: [
        {
          path: '', 
          pathMatch : 'full',
          redirectTo: 'age-debtors'
        },
        {
          path: 'transaction-list',
          component: AgeDebtorsComponent
        },
        {
          path: 'invoices',
          component: AgeDebtorsComponent
        },
        {
          path: 'payments',
          component: AgeDebtorsComponent
        },
        {
          path: 'credit-notes',
          component: AgeDebtorsComponent
        },
        {
          path: 'bond-payments',
          component: AgeDebtorsComponent
        },
        {
          path: 'age-debtors',
          component: AgeDebtorsComponent
        }
      ]
  }
];

@NgModule({
  declarations: [
    AccountComponent,
    AgeDebtorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule.forChild(accountRoutes)
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class AccountModule { }
