import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({ 
    templateUrl: 'login-page.component.html' 
})
export class LoginPageComponent {
    user = {
        email: null,
        password: null
    };
    
    constructor(private _router: Router) { }
    
    onSubmit(user: any) {
        console.log(user);

        this._router.navigateByUrl('/')
    
    }
}
