import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  @ViewChild(NgForm) form;
  model: any = {};

  ngAfterViewInit() {
    console.log('FORM', this.form);
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    console.log(this.model);
  }
}
