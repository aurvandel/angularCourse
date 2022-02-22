import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalTriggered = new EventEmitter<number>();
  interval;
  lastNum = 0;

  constructor() { }

  ngOnInit(): void {

  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalTriggered.emit(this.lastNum + 1);
      this.lastNum++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }

}
