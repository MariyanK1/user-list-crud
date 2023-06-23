import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { specialCharValidator } from 'src/app/constants/custom-validators';
import { IUser } from 'src/app/constants/data';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss'],
})
export class AddEditFormComponent implements OnInit {
  @Input() userData!: IUser | undefined;
  form!: FormGroup;
  requiredErrorMessage: string = 'Field is required';
  specialCharsErrorMessage: string = 'No special characters';
  ageOptions!: number[];
  selectedAge: number = 0;
  submittedSuccessfully = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, specialCharValidator]],
      familyName: ['', [Validators.required, specialCharValidator]],
      job: ['', [Validators.required, specialCharValidator]],
      gender: ['male'],
      age: ['Please select', Validators.required],
    });
  }

  ngOnInit() {
    this.ageOptions = Array.from({ length: 53 }, (v, i) => i + 18);

    if (this.userData) {
      this.form.patchValue(this.userData);
    }
  }

  onAgeSelectionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    this.selectedAge = +selectedValue;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.controls['age'].value === 'Please select') {
      this.form.controls['age'].setErrors({ required: true });
    }

    if (!this.form.valid) throw Error('Form is invalid');

    if (this.userData) {
      this.userService.updateUser({ ...this.form.value, id: this.userData.id });
    } else {
      const user: IUser = {
        ...this.form.value,
        id: Math.floor(Math.random() * 9999),
      };
      this.userService.addUser(user);
    }

    this.submittedSuccessfully = true;
    this.form.reset();

    setTimeout(() => {
      this.router.navigate(['']);
    }, 1500);
  }
}
