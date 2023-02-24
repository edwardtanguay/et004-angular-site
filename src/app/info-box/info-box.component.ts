import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-info-box',
	templateUrl: './info-box.component.html',
	styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
	@Input() title = 'Information';
	@Input() body = '(watch this space...)';
	@Input() status = '';
	color = '';

	constructor() {
	}

	ngOnInit() {
		this.color = this.status === 'danger' ? 'red' : this.status === '' ? '' : 'green';
	}
}
