import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  exports: [MatToolbarModule, MatInputModule, MatCardModule]
})
export class AppMaterialModule {}
