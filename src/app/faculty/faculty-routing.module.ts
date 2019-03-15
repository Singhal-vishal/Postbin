import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { AboutComponent } from '../about/about/about.component';
import { AboutModule } from '../about/about.module';
import { InfrastructureComponent } from '../hod/hod-infrastucture/infrastructure/infrastructure.component';
import { HodInfrastuctureModule } from '../hod/hod-infrastucture/hod-infrastucture.module';
import { ConventionalModule } from '../conventional/conventional.module';
import { MydutiesModule } from '../myduties/myduties.module';
import { MydutiesComponent } from '../myduties/myduties/myduties.component';
import { ComplaintsComponent } from '../complaints/complaints/complaints.component';
import { ComplaintsModule } from '../complaints/complaints.module';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path: 'about',
        component: AboutComponent,
        loadChildren: () => AboutModule
      },
      {
        path: 'infrastructure',
        component: InfrastructureComponent,
        loadChildren: () => HodInfrastuctureModule
      },
      {
        path : 'attendance',
        component: AttendanceComponent
      },
      {
        path : 'navigation',
        component : NavigationComponent
      },
      {
        path : 'documents',
        component : DocumentsComponent
      },
      
      {
        path : 'profile',
        loadChildren: () => ConventionalModule 
      },
      {
        path: 'my_duties',
        component: MydutiesComponent,
        loadChildren:()=> MydutiesModule
      },
      {
        path : 'complaints',
        component:ComplaintsComponent,
        loadChildren:()=> ComplaintsModule
      },
      {
        path : '**',
        component : PageNotFoundComponent
      },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HomeRoutingModule, StudentRoutingModule,
   ],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
