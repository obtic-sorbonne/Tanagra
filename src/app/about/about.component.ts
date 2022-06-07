import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http:HttpClient) { }
  home :any = {}
  ngOnInit(): void {
    this.http.get('assets/home.json')
    .subscribe((res:any) => {
      this.home = res[0]
      
    })
  }

}
