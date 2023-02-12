import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HEROES } from '../hero';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent {
    canEdit = false;
    message = 'I am read only!';

    heroes = HEROES;
    master = 'Crisis';
   
    onEditClick() {
      this.canEdit = !this.canEdit;
      if (this.canEdit) {
        this.message = "I'm writeable!";
      } else {
        this.message = "I'm read only!";
      }
    }

    updateName(re: any) {
        this.master = re;
    }
}