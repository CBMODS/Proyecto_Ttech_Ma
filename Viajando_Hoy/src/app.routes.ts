import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './app/map/map.component';
import { HomeComponent } from './app/home/home.component';
import { FaqComponent } from './app/faq/faq.component';
import { BlogComponent } from './app/blog/blog.component';
import { DestinyComponent } from './app/destiny/destiny.component';
import { SlideComponent } from './app/slide/slide.component';
import { AccountManagerComponent } from './app/account-manager/account-manager.component';
import { ContentComponent } from './app/content/content.component';

export const routes: Routes = [
  
  { path: 'account', component: AccountManagerComponent},
  { path: 'map', component: MapComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'destiny', component: DestinyComponent},
  { path: 'content', component: ContentComponent},
  { path: 'home', component: SlideComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
