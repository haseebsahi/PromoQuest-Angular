import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {
  public promos;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getpromo();
  }

  getpromo(){
    this._data.doGET().subscribe(
        data => { this.promos = data},
        err => console.error(err),
        () => console.log('done loading Promos')
    );
  }
}
