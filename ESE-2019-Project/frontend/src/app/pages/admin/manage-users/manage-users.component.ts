import {
	Component,
    OnInit
} from '@angular/core';
import {
    UserService
} from 'src/app/core/services/userService/user.service';
import {
    ProgressIndicatorService
} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {
    isUndefined
} from 'util';

@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {

    constructor(private userService: UserService, private progressIndicatorService: ProgressIndicatorService) {
    }

    private userList = [];
    valuesToHide = ['password', 'openDetail', 'image'];

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers() {
        this.progressIndicatorService.presentLoading('Loading...');
        this.userService.getAllUsers().subscribe(
            data => {
                data.sort((a, b) => {
                    return (b as any).admin - (a as any).admin;
                });
                this.userList = data;
                this.progressIndicatorService.dismissLoadingIndicator();
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('User could not be updated', 'danger');
                console.log(err);
            }
        );
    }

    isUndefined(obj: any) {
        return isUndefined(obj);
    }

    deleteUser(id: String) {
        this.progressIndicatorService.presentLoading("Deleting User!");
        this.userService.deleteUser(id).subscribe(
            data => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast("Deleted User");
                this.getAllUsers();
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast("Deleting failed", 'danger');
                console.log(err);
            }
        );
    }
}
