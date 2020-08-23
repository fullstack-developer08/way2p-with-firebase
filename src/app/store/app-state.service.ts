import { Injectable } from "@angular/core"
import { Store } from "@ngrx/store"
import { AppState } from "./index"
import { take } from "rxjs/operators"
@Injectable(
    {
        providedIn: "root"
    }
)
export class AppStateService {

    constructor(public store: Store<AppState>) {
        
    }

    public getState() {
        let state: AppState;
        this.store.pipe(take(1)).subscribe((s) => state = s);
        return state;
    }
}