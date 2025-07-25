import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent : ()=> import('./pages/loan/pages/loan-dashboard').then( (c)=> c.LoanDashboard )
    },
    {
        path: '*.*',
        loadComponent : () => import( './common/components/not-found/not-found' ).then(( c )=> c.NotFound )
    }
];
