import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhip12072019SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhip12072019SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jhip12072019HomeModule {}
