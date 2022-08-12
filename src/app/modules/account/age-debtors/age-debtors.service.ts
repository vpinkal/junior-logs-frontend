import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, tap } from "rxjs";
import { AgeDebtor } from "./age-debtors.types";

@Injectable({
    providedIn: 'root'
})
export class AgeDebtorsService
{
    private _ageDebtors: ReplaySubject<AgeDebtor[]> = new ReplaySubject<AgeDebtor[]>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for messages
     */
    get ageDebtors$(): Observable<AgeDebtor[]>
    {
        return this._ageDebtors.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all messages
     */
    getAll(): Observable<AgeDebtor[]>
    {
        return this._httpClient.get<AgeDebtor[]>('api/apps/finance-account/age-debtors').pipe(
            tap((ageDebtors) => {
                this._ageDebtors.next(ageDebtors);
            })
        );
    }
}
