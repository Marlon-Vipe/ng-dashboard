import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component').then(c => c.LayoutComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component').then(c => c.DashboardComponent)
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component').then(c => c.ProfileComponent)
            },
            {
                path: 'tables',
                loadComponent: () => import('./business/tables/tables.component').then(c => c.TablesComponent)
            }
        ]
    }
];
