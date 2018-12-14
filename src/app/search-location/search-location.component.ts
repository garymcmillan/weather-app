import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/reducers/app.reducers';
import * as weatherActions from '../store/actions/weather.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent implements OnInit {
  searchForm: FormGroup;
  availableCountries = [
        'uk',
        'us'
    ];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    if (this.searchForm && this.searchForm.touched) {
      return;
    }

    this.searchForm = new FormGroup({
      location: new FormControl('', Validators.required),
      country: new FormControl('-1', Validators.required)
    });
  }

  onSubmit() {
    if (this.searchForm.value.country !== -1) {
      const location = {
        city: this.searchForm.value.location,
        country: this.availableCountries[this.searchForm.value.country]
      };
      this.store.dispatch(new weatherActions.GetForecast(location));
    } else {
      window.alert('Please select a country');
    }
  }

}
