import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Welcome } from './pages/welcome/welcome';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'Welcome',
        component: Welcome
    }
];
