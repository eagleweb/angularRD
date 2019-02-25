import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() submit = new EventEmitter<any>();

  public filterForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      minPrice: ['', Validators.pattern('[0-9]*')],
      maxPrice: ['', Validators.pattern('[0-9]*')],
      size: [''],
      category: ['']
    });
  }

  onSubmit() {
    this.submit.emit(this.filterForm.controls);
  }

  resetForm() {
    // this.filterForm.reset();
  }

}
