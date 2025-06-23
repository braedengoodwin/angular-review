import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrl: './assignment2.component.css',
  imports: [FormsModule],
})
export class Assignment2Component {
  username: string = '';
  btnDisabled: boolean = true

  onResetName() {
    this.username = ''
    }

}
