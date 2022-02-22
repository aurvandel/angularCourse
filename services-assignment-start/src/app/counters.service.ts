import { Injectable } from "@angular/core";

@Injectable()
export class CountersService {
    activeToInactive: number = 0;
    inactiveToActive: number = 0;

    ActiveToInactive() {
        this.activeToInactive++;
        console.log(this.activeToInactive);
    }

    InactiveToActive() {
        this.inactiveToActive++;
        console.log(this.inactiveToActive);
    }
}