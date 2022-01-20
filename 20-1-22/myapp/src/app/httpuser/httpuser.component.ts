import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-httpuser',
  templateUrl: './httpuser.component.html',
  styleUrls: ['./httpuser.component.css'],
})
export class HttpuserComponent implements OnInit {
  data: any;

  constructor(private users: UserHttpService) {}

  ngOnInit(): void {
    this.users.getdata().subscribe((mysub) => {
      this.data = mysub;
    });
  }
}
