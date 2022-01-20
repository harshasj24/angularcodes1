import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  values: any;
  constructor(private user: UserservicesService) {
    this.values = this.user.getdata();
  }

  ngOnInit(): void {}
}
