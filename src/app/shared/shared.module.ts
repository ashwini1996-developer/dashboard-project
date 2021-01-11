import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const commonModule =[
  CommonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatSnackBarModule,
 
]

@NgModule({
  declarations: [],
  imports: [...commonModule,
  ],
  exports:[
    ...commonModule,

  ]
})
export class SharedModule { }
