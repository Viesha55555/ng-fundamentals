import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    profileForm!:FormGroup  

    constructor(private authService:AuthService, 
        private router:Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr){

    }
    ngOnInit(){
        let firstName = new FormControl(this.authService.currentUser?.firstName);
        let lastName = new FormControl(this.authService.currentUser?.lastName);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    saveProfile(formValues: { firstName: string; lastName: string; }){
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
            .subscribe(()=> {
                this.toastr.success('Profile saved!');
            });
    };
    Cancel(){
        this.router.navigate(['events']);
    }

    logout(){
        this.authService.logout().subscribe(()=>{
            this.router.navigate(['/user/login']);
        });
    }
}