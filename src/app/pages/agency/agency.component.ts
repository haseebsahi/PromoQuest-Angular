import { Component, OnInit } from '@angular/core';
import { DataService } from '../../agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  public agencys;
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getAgency();
  }

  getAgency(){
    this._data.doGET().subscribe(
            data => { this.agencys = data},
            err => console.error(err),
            () => console.log('done loading Agencys')
        ); 
  }

}
