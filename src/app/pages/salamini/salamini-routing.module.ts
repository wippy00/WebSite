import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaminiPage } from './salamini.page';

const routes: Routes = [
  {
    path: '',
    component: SalaminiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaminiPageRoutingModule {}
