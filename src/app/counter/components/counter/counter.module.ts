import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCounterComponent } from "./counter.component";



@NgModule({
  declarations: [
    AppCounterComponent
  ],
  exports: [
    AppCounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule {



}
