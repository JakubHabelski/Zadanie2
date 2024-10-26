import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-widok2',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, HttpClientModule, RouterLink],
  templateUrl: './widok2.component.html',
  styleUrls: ['./widok2.component.css']  // Poprawione tutaj
})
export class Widok2Component implements OnInit{
  title = 'Zadanie2';
  public data:any;
  constructor(private httpClient:HttpClient) {
    this.data=[];
  }
  ngOnInit() {
    this.fetchData();

  }

  public fetchData(){
    this.httpClient.get('http://localhost:8080/currencies/requests').subscribe((data:any)=>{
      console.log(data);
      this.data=data;
    })
  }

}

export interface Root {
  id: number
  currency: string
  name: string
  date: string
  value: number
}
