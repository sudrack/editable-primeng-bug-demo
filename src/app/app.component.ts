import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
    cities: City[];
    selectedCity2: City;
    editable: Boolean = false;

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    print(event) {
        console.log(event.value);
        console.log(this.selectedCity2.name);
    }
}
