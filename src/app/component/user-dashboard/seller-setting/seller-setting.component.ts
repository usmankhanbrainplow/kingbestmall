
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Router, ActivatedRoute } from '@angular/router';
// import { LoginService } from '../log-in/log-in.services';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { PasswordValidation } from './password-validator.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-setting',
  templateUrl: './seller-setting.component.html',
  styleUrls: ['./seller-setting.component.css']
})
export class SellerSettingComponent implements OnInit {
  hide = true;
  hide1 =true;
  hide2=true;
  match = true;
 
  notsame = false;
  Waitcall = false;
  USerNameID: any;
  SessionstoreName: any;
  signupForm: FormGroup;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private http: HttpService,private fb: FormBuilder,
              private _nav: Router) { }

  ngOnInit() {
    // if (isPlatformBrowser(this.platformId)) {
      this.signupForm = this.fb.group({
        current: ['', Validators.compose([Validators.required])],
        pass1: ['', Validators.compose([Validators.required])],
        pass2: ['', Validators.compose([Validators.required])],
  
      },{
        validator: PasswordValidation.MatchPassword // your validation method
      });

      
  
    // }
  }

  // "current":"123",
  // "pass1":"admin123",
  // "pass2":"admin123"
  updatePassword() {
     
let auth={
   "current":this.signupForm.controls.current.value,
  "pass1":this.signupForm.controls.pass1.value,
  "pass2":this.signupForm.controls.pass2.value
}
 
      this.http.changepassword(auth).subscribe((data) => {
          /* this function is executed every time there's a new output */
          console.log("VALUE RECEIVED: "+data['msg']);
        //   // if(response.json() == "PasswordChanged"){  
        //     return Response({'msg':'PasswordChanged'},status=status.HTTP_200_OK)
        // else:
        //     return Response({'msg':'something went wrong'},status=status.HTTP_400_BAD_REQUEST)  
        if ( data.msg == "PasswordChanged") { 
          Swal.fire({
            title: 'You have been successfully update your password',
            type: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          })
                // Swal.fire('You have been successfully update your passwrod.','','success');
        }
        else if (data.msg == "something went wrong"){
          Swal.fire({
            title: 'Something Went Wrong',
            type: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          })
          // Swal.fire('You have been successfully update your passwrod.','','success');

        }
          // }
          // else {
          // }
        }
        );        
      



     

  }

  clearSessionstoreage() {
    if (isPlatformBrowser(this.platformId)){
    localStorage.clear();
      Swal.fire('You have been successfully signed out from Dhaar.','','success');
    }
  }

}
