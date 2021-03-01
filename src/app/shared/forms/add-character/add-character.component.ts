import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  @Output() close = new EventEmitter();

  form: FormGroup;
  eyeColor: any[] = [
    { label: 'Blue', value: 'Blue' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Red', value: 'red' },
    { label: 'Brown', value: 'brown' },
    { label: 'Blue Gray', value: 'blue-gray' },
  ];
  gender: any[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'n/a', value: 'n/a' },
    { label: 'Unknown', value: 'unknown' },
  ];
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      height: new FormControl(null),
      mass: new FormControl(null),
      hair_color: new FormControl(null),
      eye_color: new FormControl('yellow'),
      birth_year: new FormControl(null),
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
