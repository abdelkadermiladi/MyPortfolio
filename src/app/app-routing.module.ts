import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'education', component: EducationComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
