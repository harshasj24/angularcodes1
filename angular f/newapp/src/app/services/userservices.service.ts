import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserservicesService {
  users: any;
  getdata() {
    return (this.users = [
      { name: 'harsha', department: 'dev', id: 100 },
      { name: 'praveen', department: 'hr', id: 200 },
      { name: 'srinivas', department: 'ui designer', id: 300 },
      { name: 'naveen', department: 'backend', id: 400 },
      { name: 'mahesh', department: 'frontend', id: 500 },
    ]);
  }

  constructor() {}
}
