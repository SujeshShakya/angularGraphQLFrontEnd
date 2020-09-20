import { Component, OnInit } from '@angular/core';
import { Apollo} from 'apollo-angular';
import{ Observable } from 'rxjs';
import{map} from 'rxjs/operators';

import {Router } from '@angular/router';

import gql from 'graphql-tag';

import {message, Query} from '../../types';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
link: string;
  commenters: Observable<message[]>;
  constructor(private apollo: Apollo,
  private router: Router
) { }

  ngOnInit() {
    this.commenters = this.apollo.watchQuery<Query>({
      query: gql`
      query messages {
        messages {
          value
        }
      }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.messages)
    );

    
  }

  gotoDetails(event){
    debugger;  
    event.preventDefault();
    //this.link= 'https://www.tronalddump.io/tag/' + event.target.innerText;
    this.router.navigate(['content', event.target.innerText]);
    //window.location.href = "https://www.tronalddump.io/tag/" + event.target.innerText;
  }

}
