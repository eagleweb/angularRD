import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filter } from '../../../core/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() submit: EventEmitter<Filter> = new EventEmitter();

  public filterForm: FormGroup;
  public filterObj: Filter;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.filterObj = { min_price: null, max_price: null, category: null, size: null};

    this.filterForm = this.formBuilder.group({
      minPrice: ['', Validators.pattern('[0-9]*')],
      maxPrice: ['', Validators.pattern('[0-9]*')],
      size: [''],
      category: ['']
    });

  }

  onSubmit(e): void {
    e.stopPropagation();
    this.filterObj.min_price = this.filterForm.get('minPrice').value;
    this.filterObj.max_price = this.filterForm.get('maxPrice').value;
    this.filterObj.size = this.filterForm.get('size').value;
    this.filterObj.category = this.filterForm.get('category').value;
    this.submit.emit(this.filterObj);
  }

  resetForm(): void {
    this.filterForm.reset();
  }

}
