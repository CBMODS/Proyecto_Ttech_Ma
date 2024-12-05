import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-panel-user',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './panel-user.component.html',
  styleUrl: './panel-user.component.css'
})
export class PanelUserComponent {

}
