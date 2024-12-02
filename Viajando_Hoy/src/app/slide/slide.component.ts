import { Component } from '@angular/core';

import { MapComponent } from '../map/map.component';
import { HomeComponent } from '../home/home.component';
import { FaqComponent } from '../faq/faq.component';
import { BlogComponent } from '../blog/blog.component';
import { DestinyComponent } from '../destiny/destiny.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    HomeComponent,
    MapComponent,
    FaqComponent,
    BlogComponent,
    ContentComponent,
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {

}
