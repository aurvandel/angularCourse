import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNums: number[] = [];
  evenNums: number[] = [];

  onIntervalFired(firedNum: number) {
    if (firedNum % 2 === 0) {
      this.evenNums.push(firedNum);
    } else {
      this.oddNums.push(firedNum);
    }
  }
}
