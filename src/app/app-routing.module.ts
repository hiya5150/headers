import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {JokeComponent} from './joke/joke.component';
import {SecretComponent} from './secret/secret.component';
import {KeeperOfSecretsGuard} from './controllers/keeper-of-secrets.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: MainComponent, children: [
  {path: 'joke', component: JokeComponent},
      {path: 'secret', component: SecretComponent, canActivate: [KeeperOfSecretsGuard]}
]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
