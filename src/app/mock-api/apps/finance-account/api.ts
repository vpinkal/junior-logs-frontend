import { Injectable } from "@angular/core";
import { FuseMockApiService } from "@fuse/lib/mock-api";
import { cloneDeep } from "lodash";
import { ageDebtors as ageDebtorsData} from 'app/mock-api/apps/finance-account/data';

@Injectable({
    providedIn: 'root'
})
export class FinanceAccountMockApi
{
    private _ageDebtors: any[] = ageDebtorsData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Tags - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/finance-account/age-debtors')
            .reply(() => [
                200,
                cloneDeep(this._ageDebtors)
            ]);
    }
}
