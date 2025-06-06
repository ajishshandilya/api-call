import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiCall } from "./api-call/api-call";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApiCall],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'api-call';
}
