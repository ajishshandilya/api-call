import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../api-call-service';

@Component({
  selector: 'app-api-call',
  imports: [CommonModule],
  templateUrl: './api-call.html',
  styleUrl: './api-call.scss'
})
export class ApiCall {
  apiCall: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private apiCallService: ApiCallService) {}
  ngOnInit() {
    this.apiCallService.getData().subscribe((data: any)=>{
      console.log(data);
    });
  }
}
