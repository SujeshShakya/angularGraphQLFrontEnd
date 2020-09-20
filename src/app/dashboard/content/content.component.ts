import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  sub: any;
  user: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params
			.subscribe(params => {
				this.user = params['content'];
			});
  }

}
