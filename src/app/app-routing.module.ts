import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredInfoComponent } from './components/registered-info/registered-info.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

const routes: Routes = [
  { path: '', component: SubscriptionFormComponent },
  { path: 'registered', component: RegisteredInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
