import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AppComponent } from './component/component.component'

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppComponent],
})
export class ComponentsModule {}
