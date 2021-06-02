import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchComponent
  ],
  providers: [
    SearchService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
