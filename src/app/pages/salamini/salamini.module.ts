import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaminiPageRoutingModule } from './salamini-routing.module';

import { SalaminiPage } from './salamini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaminiPageRoutingModule
  ],
  declarations: [SalaminiPage]
})
export class SalaminiPageModule {}
