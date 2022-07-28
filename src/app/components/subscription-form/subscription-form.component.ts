import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-subscription-form',
	templateUrl: './subscription-form.component.html',
	styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

	public validForm: boolean = false;
	public subscriptionForm = this.formBuilder.group({
		name: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
	})

	constructor(
		private route: Router,
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {

	};

	onSubmit(): void {
		this.route.navigate(['/registered', this.subscriptionForm.value]);
	};
}
