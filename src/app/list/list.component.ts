import { Component, OnInit } from '@angular/core';
import { Apollo} from 'apollo-angular';
import{ Observable } from 'rxjs';
import{map} from 'rxjs/operators';

import gql from 'graphql-tag';

import {message, Query} from '../types';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
commenters: Observable<message[]>;
  constructor(private apollo: Apollo) { }

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
    // event.preventDefault();
      
      window.location.href = "https://www.tronalddump.io/tag/Barack%20Obama";
  }

}
