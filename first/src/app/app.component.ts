import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopComponent } from './pop/pop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openpop() {
    this.dialog.open(PopComponent,{width:'80%',height:'70%'});
  }
}
