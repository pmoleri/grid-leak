import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { GridComponent } from './grid/grid.component';
import { EmptyComponent } from './empty/empty.component';
import { SelectComponent } from './select/select.component';

export const routes: Routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'grid', component: GridComponent, data: { text: 'Grid' } },
  { path: 'empty', component: EmptyComponent, data: { text: 'Empty' } },
  { path: 'select', component: SelectComponent, data: { text: 'Select' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
