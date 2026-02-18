import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search  {
  form = new FormGroup({
    search: new FormControl(''),
  })

  constructor(private router: Router) {}

  onSubmit() {
    const term = this.form.get('search')!.value ?? '';

    this.router.navigate(['/searchresults'], {
      queryParams: { q: term},
    });
  }
}
