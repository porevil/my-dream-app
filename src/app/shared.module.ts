import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { SharedRoutingModule } from './shared-routing.module';
import { CounterComponent } from './counter/counter.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule
  ],
  declarations: [CounterComponent],

  exports : [ CommonModule,
    FormsModule,CounterComponent, MatButtonModule, MatCheckboxModule]
})
export class SharedModule { }
