import { NgForOf, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { timestamp } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css',
  imports: [NgIf, NgForOf, NgStyle],
})
export class Assignment3Component {
  displayParagraph = false;
  buttonClickLogs = [];
  timestamp = new Date().toLocaleString();
  clicktracker = 1;

  onDisplayParagraph() {
    this.buttonClickLogs.push(
      `The button was clicked at ${this.buttonClickLogs.length} ` +
        this.timestamp
    );

    console.log(this.buttonClickLogs);
    if (this.displayParagraph) {
      this.displayParagraph = false;
    } else this.displayParagraph = true;
  }
}
