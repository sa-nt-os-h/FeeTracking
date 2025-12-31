import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Batchmaster } from './pages/batchmaster/batchmaster';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
   {
     path:'',
     redirectTo:'login',
     pathMatch:'full'
   },
   {
    path:'login',
    component:Login
   },
   {
    path:'',
    component:Layout,
    children:[
        {
            path:'batch',
            component:Batchmaster
        },
        {
            path:'dashboard',
            component:Dashboard
        }
    ]
   }



];
