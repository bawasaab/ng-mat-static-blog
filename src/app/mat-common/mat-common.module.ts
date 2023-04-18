import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [matModules],
  exports: [matModules]
})
export class MatCommonModule { }
