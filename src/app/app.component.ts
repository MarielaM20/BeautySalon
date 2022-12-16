import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BeautySalon';

  //users: any[];

  constructor(
    private router: Router,
    private pageTitle: Title,
    db: AngularFireDatabase
  ) {
    this.router.events.pipe(
      filter((e): e is ActivationStart => e instanceof ActivationStart),
      map(e => e.snapshot.data?.['title']),
      filter((d) => !!d)
    ).subscribe((pageTitle) => {
      this.pageTitle.setTitle(pageTitle);
    });

    //db.list('/users')
  }
}

