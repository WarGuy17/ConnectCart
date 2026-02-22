import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice',
  imports: [ReactiveFormsModule],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {
  form = new FormGroup({
    product: new FormControl('')
  })

  constructor (private router: Router) {}

  onSubmit() {
    const term = this.form.get('product')!.value ?? '';

    this.router.navigate(['/practice2'],{
      queryParams: {q: term}
    })
  }
}
