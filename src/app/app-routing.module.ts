import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [{'component': SettingsComponent, 'path':'settings'}, {'component':AppComponent, 'path':''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
