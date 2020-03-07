import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'siva'
    },
    {
      id: 2,
      name: 'Neha'
    },
    {
      id: 3,
      name: 'Ganu'
    }
  ];
}
