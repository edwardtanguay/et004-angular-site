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
	@Input() isHighlighted = false;
	color = '';
	showDevInfo = true;
	buttonIsDisabled = true;

	constructor() {
	}

	ngOnInit() {
		this.color = this.status === 'danger' ? 'red' : this.status === '' ? '' : 'green';
	}

	handleToggleDevInfo() {
		this.showDevInfo = !this.showDevInfo;
		console.log(`Component "${this.title}" now has showDevInfo status ${this.showDevInfo}.`);
	}
}
