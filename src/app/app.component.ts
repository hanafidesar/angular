import { Component } from '@angular/core';
import { EditServiceService } from './services/main-service/edit-service.service'
import { DataGeneralService } from './services/main-service/data-general.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EditServiceService,DataGeneralService]
})
export class AppComponent {
  titles = 'app works!';
}
