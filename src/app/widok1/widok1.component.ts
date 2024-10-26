import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ApiService} from '../services/api.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-widok1',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './widok1.component.html',
  styleUrl: './widok1.component.css'
})
export class Widok1Component {
    currencyForm = new FormGroup({
      currency: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });

    constructor(private apiService: ApiService) {
    }

    onSubmit(){
      if(this.currencyForm.valid){
        this.apiService.sendData(this.currencyForm.value).subscribe((response)=>{
          console.log('Data sent: ', response);
        },
          (error)=>{
            console.error('Error: ', error);
          }
          );
      }
    }
}
