import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-manager',
  imports: [
    FormsModule,
    CommonModule,
    ],
  standalone: true,
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent {

  alertM(){
    alert("hola");
  }

}
