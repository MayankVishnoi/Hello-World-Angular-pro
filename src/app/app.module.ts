import { HomeService } from './services/home.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostService } from './services/post.service';
import { SummaryPipe } from './summary.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './course.service';
import { CourseComponent } from './course/course.component';
import { IslikedComponent } from './isliked/isliked.component';
import { CourseformComponent } from './courseform/courseform.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ApiexComponent } from './apiex/apiex.component';
import { MoshgitComponent } from './moshgit/moshgit.component';
import { MoshgitService } from './services/moshgit.service';
import { AppGithubProfileComponent } from './app-github-profile/app-github-profile.component';
import { ArchivesComponent } from './archives/archives.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    IslikedComponent,
    CourseformComponent,
    SignupFormComponent,
    PasswordChangeComponent,
    ApiexComponent,
    MoshgitComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    AppGithubProfileComponent,
    ArchivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'archive/:year/:month',component: ArchivesComponent},
      {path:'followers/:id/:username',component: AppGithubProfileComponent},
      {path:'followers',component: MoshgitComponent},
      {path:'home',component: HomeComponent},
      {path:'posts',component: ApiexComponent},
      {path:'**',component: NotFoundComponent}

      
    ])
  ],
  providers: [
    CourseService,
    PostService,
    MoshgitService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
