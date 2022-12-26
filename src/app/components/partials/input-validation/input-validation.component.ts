import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {AbstractControl} from "@angular/forms";

const VALIDATORS_MESSAGES: any = {
  required: 'Should not be empty',
  email: 'Email is not valid'
}
@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.scss']
})
export class InputValidationComponent implements OnInit, OnChanges{
  @Input()
  control!: AbstractControl;
  @Input()
  showErrorsWhen: boolean = true;
  errorMessages: string[] = [];
  checkValidation() {
    const errors = this.control.errors;
    if(!errors) {
      this.errorMessages = [];
      return
    }

    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key])
  }
  // @ts-ignore
  ngOnChanges (changes: SimpleChange): void {
    this.checkValidation();
  }
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    })
  }
}
