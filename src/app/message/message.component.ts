import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-message',
  templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
  imports: [],
})
export class MessageComponent {
  warning: string = 'This is a warning message!';
  success: string = 'This is a success message!';
}
