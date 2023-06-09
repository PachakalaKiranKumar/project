import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {
  pop!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.pop = this.formBuilder.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      gender: ['', Validators.required],
      productGroup: ['', Validators.required],
      product: ['', Validators.required],
      unifiedRoles: ['', Validators.required],
      productWorkedArea: ['', Validators.required],
      workGroup: ['', Validators.required],
      hlRole: ['', Validators.required],
      hlDesignation: ['', Validators.required],
      hlTitle: ['', Validators.required],
      reportingManager: ['', Validators.required],
      managerEmail: ['', [Validators.required, Validators.email]],
      get: ['', Validators.required],
      cscDoj: ['', Validators.required],
      dateOfLeaving: ['', Validators.required],
      unit: ['', Validators.required],
      owning: ['', Validators.required]
    });
  }

  clearForm(): void {
    this.pop.reset();
    alert("Are you sure?");
  }

  submitForm(): void {
    if (this.pop.valid) {
      const formData = { ...this.pop.value };
  
      this.http.post('https://myapi-b7ad2-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', formData)
        .subscribe(
          response => {
            console.log('Success:', response);
            alert("Form submitted successfully!\nThank you for your submission.");
            this.pop.reset(); // Reset the form
            this.formSubmitted = true; // Set the formSubmitted flag to true
          },
          error => {
            console.error('Error:', error);
            alert("Form submission failed. Please try again.");
          }
        );
    } else {
      console.log('Invalid form');
    }
  }
  
}
