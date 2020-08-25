import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { DropComponent } from '../../pages/drop/drop.component';
import { UsersComponent } from '../../pages/users/users.component';
import { AgencyComponent } from '../../pages/agency/agency.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',               component: DashboardComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'drop',           component: DropComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'agencys',        component: AgencyComponent }

];
