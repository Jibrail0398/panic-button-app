import { Component } from '@angular/core';
import { NetworkService } from 'src/app/service/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private networkService:NetworkService
  ) {
    this.networkService.listenNetworkChanges()
  }
}
