import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AddUserComponent } from '../pages/add-user/add-user.component';
import { EditUserComponent } from '../pages/edit-user/edit-user.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'add-user',
    component: AddUserComponent,
    title: 'Add User',
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
    title: 'Edit User',
  },
];
