import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './app/map/map.component';
import { HomeComponent } from './app/home/home.component';
import { FaqComponent } from './app/faq/faq.component';
import { BlogComponent } from './app/blog/blog.component';
import { DestinyComponent } from './app/destiny/destiny.component';
import { SlideComponent } from './app/slide/slide.component';
import { AccountManagerComponent } from './app/account-manager/account-manager.component';
import { ContentComponent } from './app/content/content.component';
import { PanelUserComponent } from './app/panel-user/panel-user.component';
import { EventsComponent } from './app/events/events.component';

export const routes: Routes = [
  { path: 'user', component: PanelUserComponent},
  { path: 'account', component: AccountManagerComponent},
  { path: 'map', component: MapComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'content', component: ContentComponent},
  { path: 'home', component: SlideComponent},
  { path: 'events', component: EventsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
