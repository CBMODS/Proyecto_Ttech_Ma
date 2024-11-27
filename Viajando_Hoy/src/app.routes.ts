import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './app/map/map.component';
import { HomeComponent } from './app/home/home.component';
import { FaqComponent } from './app/faq/faq.component';
import { BlogComponent } from './app/blog/blog.component';
import { DestinyComponent } from './app/destiny/destiny.component';
import { SlideComponent } from './app/slide/slide.component';

export const routes: Routes = [
  
  { path: 'map_page', component: MapComponent },
  { path: 'home_page', component: HomeComponent },
  { path: 'faq_page', component: FaqComponent},
  { path: 'blog_page', component: BlogComponent},
  { path: 'destiny_page', component: DestinyComponent},
  { path: 'slide_page', component: SlideComponent},
  { path: '', redirectTo: '/slide_page', pathMatch: 'full' },
];
