import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  artists = []
  newArtist = {
    id : '',
    name : '',
    description: ''
  }

  constructor(private adminservice: AdminService) { }
​​
  ngOnInit() {
    this.adminservice.getArtists().subscribe((data: any) => {
      console.log(data)
      this.artists = data
    })
  }
  
  deleteArtist(id) {
    this.adminservice.deleteArtist(id).subscribe( (data) => {
      console.log(data)
    })
  }
 
  create() {
    this.adminservice.createArtist(this.newArtist).subscribe( (data) => {
      console.log(data)
    })
  }
 
  update() {
    this.adminservice.updateArtist(this.newArtist).subscribe( (data) => {
      console.log(data)
    })
  }

}