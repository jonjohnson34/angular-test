import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./pages/about.component";
import {BlogsComponent} from "./pages/blogs.component";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./post.service";
const appRoutes: Routes = [
  {path: 'index', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blogs', component: BlogsComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
