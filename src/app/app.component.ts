import { Component } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MessageComponent } from './message/message.component';
import { Assignment2Component } from './assignment2/assignment2.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ServersComponent, MessageComponent, Assignment2Component],
})
export class AppComponent {}
