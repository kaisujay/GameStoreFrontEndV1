import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderWrapperRoutingModule } from './header-wrapper-routing.module';
import { HeaderWrapperComponent } from './component/header-wrapper.component';
import { SupportModule } from './modules/support/support.module';

@NgModule({
  declarations: [
    HeaderWrapperComponent
  ],
  imports: [
    CommonModule,
    SupportModule,
    HeaderWrapperRoutingModule
  ],
  exports:[HeaderWrapperComponent]
})
export class HeaderWrapperModule { }
