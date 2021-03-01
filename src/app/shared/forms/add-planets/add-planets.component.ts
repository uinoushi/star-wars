import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-planets',
  templateUrl: './add-planets.component.html',
  styleUrls: ['./add-planets.component.scss']
})
export class AddPlanetsComponent implements OnInit {
  @Output() close = new EventEmitter();

  form: FormGroup;
  terrains: any[] = [
    { label: 'Dessert', value: 'dessert' },
    { label: 'Grasslands, Mountains', value: 'grasslands, mountains' },
    { label: 'Jungle, Rainforests', value: 'jungle, rainforests' },
    { label: 'Tundra, Ice caves, Mountain ranges', value: 'tundra, ice caves, mountain ranges' },
    { label: 'Swamp, Jungles', value: 'swamp, jungles' },
    { label: 'Gas Giant', value: 'gas giant' },
    { label: 'Forests, Mountains, Lakes', value: 'forests, mountains, lakes' },
    { label: 'Grassy hills, Swamps, Forests, Mountains', value: 'grassy hills, swamps, forests, mountains' },
    { label: 'Cityscape, Mountains', value: 'cityscape, mountains' },
    { label: 'Ocean', value: 'ocean' },
  ];
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      terrain: new FormControl('dessert'),
      climate: new FormControl(null),
      gender: new FormControl('unknown'),
    });
  }

  getNameError() {
    if (this.form.get('name').pristine) {
        return '';
    }
    if (this.form.get('name').hasError('required')) {
        return 'Name is required!!';
    }

    return '';
}

  onSubmit() {
    console.log(this.form.value);
  }
}
