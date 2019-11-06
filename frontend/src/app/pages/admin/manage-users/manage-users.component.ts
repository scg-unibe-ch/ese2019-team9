import {
	Component,
	OnInit
} from '@angular/core';
import {
	UserService
} from 'src/app/core/services/userService/user.service';
import {
	first
} from 'rxjs/operators';
import {
	ProgressIndicatorService
} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';

@Component({
	selector: 'app-manage-users',
	templateUrl: './manage-users.component.html',
	styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {

	constructor(private userService: UserService, private progressIndicatorService: ProgressIndicatorService) {}

	private userList = [];

	ngOnInit() {}

	getAllUsers() {
		this.progressIndicatorService.presentLoading('Loading...');
		this.userService.getAllUsers().pipe(first()).subscribe(
			data => {
				this.userList = data;
				this.progressIndicatorService.dismissLoadingIndicator();
			},
			err => {
				this.progressIndicatorService.dismissLoadingIndicator();
				this.progressIndicatorService.presentToast('User could not be updated', 2000, "danger");
				console.log(err);
			}
		);
	}


}