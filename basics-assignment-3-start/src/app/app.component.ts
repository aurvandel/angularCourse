import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .fifthelement {
      color: white
    }
  `]
})
export class AppComponent {
  buttonClicked = false;
  count = 0;
  iters = [];

  onButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
    this.count++;
    this.iters.push(this.count);
  }

  getBackground(i: number) {
    return i >= 5 ? 'blue' : 'white';
  }
}
