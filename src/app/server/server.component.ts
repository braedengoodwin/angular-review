import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-server',
  templateUrl: './server.component.html',
  imports: [],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
