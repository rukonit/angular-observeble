import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated= false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
  this.activatedSub =  this.userService.activatedEmmiter.subscribe(
      (data) => {
        this.userActivated = data;
      }
    )
  }
  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
