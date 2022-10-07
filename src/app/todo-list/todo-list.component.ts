import { Component, OnInit } from '@angular/core';
declare const opentodoTab:any;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  opentodoTab(id: any){
    opentodoTab(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

  groclists = [
    { name: 'Vegetables'},
    { name: 'Fruits'},
    { name: 'onions'},
    { name: 'Garlic'}
  ];

  Toolslists = [
    { name: 'vinegar'},
    { name: 'Sugar'},
    { name: 'Honey'},
  ];
  planlists = [
    { name: 'buy grocories'},
    { name: 'get kids from school'},
    { name: 'Wash dishes'},
  ];

  Misclists = [
    { name: 'Pasta'},
    { name: 'bread'},
    { name: 'Butter'},
    { name: 'Eggs'},
    { name: 'yogurt'},
  ];

  groce: any = {};
  tools: any = {};
  plan: any = {};
  misc: any = {};

  addgroc() {
    this.groclists.push(this.groce);
    this.groce = {};
  }
  addTools() {
    this.Toolslists.push(this.tools);
    this.tools = {};
  }
  addplan() {
    this.planlists.push(this.plan);
    this.plan = {};
  }
  addMisc() {
    this.Misclists.push(this.misc);
    this.misc = {};
  }

  deletegroc(i: number) {
    this.groclists.splice(i,1);
  }

  deleteTools(i: number) {
    this.Toolslists.splice(i,1);
  }
  deleteplan(i: number) {
    this.planlists.splice(i,1);
  }

  deleteMisc(i: number) {
    this.Misclists.splice(i,1);
  }

}
