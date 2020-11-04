import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipe-create',
  templateUrl: './receipe-create.component.html',
  styleUrls: ['./receipe-create.component.scss'],
})
export class ReceipeCreateComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log('Edit Mode: ' + this.editMode);
    });
  }
}
