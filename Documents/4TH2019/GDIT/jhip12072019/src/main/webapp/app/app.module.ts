import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhip12072019SharedModule } from 'app/shared/shared.module';
import { Jhip12072019CoreModule } from 'app/core/core.module';
import { Jhip12072019AppRoutingModule } from './app-routing.module';
import { Jhip12072019HomeModule } from './home/home.module';
import { Jhip12072019EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhip12072019SharedModule,
    Jhip12072019CoreModule,
    Jhip12072019HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhip12072019EntityModule,
    Jhip12072019AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Jhip12072019AppModule {}
