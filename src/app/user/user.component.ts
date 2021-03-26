import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  name = 'toto';
  email = 'toto@esprit.tn';
  address = "rue d'usine Chotrana Ariana";
  hobbies = ['Music', 'Movies', 'Sports'];
  showHobbies: boolean = false;
  hobbiesButton: string = 'Afficher Hobbies';
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.showHobbies = !this.showHobbies;
    if (this.showHobbies) this.hobbiesButton = 'Masquer Hobbies';
    else this.hobbiesButton = 'Afficher Hobbies';
  }

  delete(i: number) {
    this.hobbies.splice(i, 1);
    console.log(this.hobbies);
  }
}
