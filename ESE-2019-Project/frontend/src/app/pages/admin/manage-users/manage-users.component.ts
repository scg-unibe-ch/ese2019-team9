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

/**
 * The component in the admin panel to mange the users
 */
@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {

    /**
     * @ignore
     */
    constructor(private userService: UserService, private progressIndicatorService: ProgressIndicatorService) {
    }

    /**
     * The list of all users
     */
    userList = [];
    /**
     * The fields which should be hidden
     */
    valuesToHide = ['password', 'openDetail', 'image'];

    /**
     * Fetch all users
     */
    ngOnInit() {
        this.getAllUsers();
    }

    /**
     * Fetches all users from the backend and displays a loading indicator
     */
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

    /**
     * checks if the object is undefined
     * @param obj the object to be checked
     * @return true if the object is undefined
     */
    isUndefined(obj: any) {
        return isUndefined(obj);
    }

    /**
     * Delete a user
     * @param id the id of the user
     */
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
