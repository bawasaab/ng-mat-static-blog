import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  breakpoint!: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }
}
