import { Component, OnInit } from '@angular/core';
import { EditServiceService } from '../../services/main-service/edit-service.service'
import { Observable } from 'rxjs/Observable';
//import { obs } from '../../services/main-service/model-obs'
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})

export class EditFormComponent implements OnInit {
  custumer={}
  array;
 // obs_this:Observable<obs>;
  subscription: Subscription;
  constructor(private editServiceService : EditServiceService) { }
  ngOnInit() {
    console.log("1")
    // data from edit-service.service
	  //this.custumer = this._EditServiceService.getDataCostumer();
    this.subscription = this.editServiceService.getDataCostumer()
    .subscribe(
      success => {
        this.custumer = success
                  this.testSubscribe(success.response[0].first_name)
                  if (success.response[0].first_name === "John") {
                    
                  }
                  
                  console.log('running  ...')
                 },
      error   => { 
        let msg = `Error na dina Code ${error.status} , url error na dina ${error.url}` 
                console.error(msg)},
      () => { console.log('complate ...')}
    )
    console.log("3")
    //this.obs_this = this.editServiceService.getDataCostumer_Obs();
    //console.log(this.obs_this);
  }
  testSubscribe(vOne){
    console.log("ini pakai fungsi ")
    console.log("urutan pertama = " + vOne)
  }
  deleted(id,name){
    alert('id =' + id +' | '+'name =' + name)
  }

}
