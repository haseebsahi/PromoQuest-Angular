import { Component, OnInit } from '@angular/core';
import { DataService } from '../../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users;
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getuser();
  }

  getuser(){
    this._data.doGET().subscribe(
            data => { this.users = data},
            err => console.error(err),
            () => console.log('done loading Promos')
        ); 
  }

}
