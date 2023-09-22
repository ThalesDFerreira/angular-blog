import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MmenuTitleComponent } from './components/mmenu-title/mmenu-title.component';
import { MbigCardComponent } from './components/mbig-card/mbig-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { SbigCardComponent } from './components/sbig-card/sbig-card.component';
import { SigCardComponent } from './components/sig-card/sig-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MmenuTitleComponent,
    MbigCardComponent,
    SmallCardComponent,
    SbigCardComponent,
    SigCardComponent,
    MenuTitleComponent,
    BigCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
