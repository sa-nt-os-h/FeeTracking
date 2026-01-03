import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstant } from '../../core/guard/constant/Global.constant';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  http=inject(HttpClient);
  router=inject(Router);

  loginObj:any={
    email:"",
    password:""
  }
onLogin()
{
  debugger;
  this.http.post("https://feestracking.freeprojectapi.com/api/BatchUser/login",this.loginObj).subscribe({
   next:(res:any)=>
   {
    debugger;
     localStorage.setItem(GlobalConstant.LoCAL_KEY_LOGIN,JSON.stringify(res.data));
     this.router.navigateByUrl('dashboard');
   },
   error:(err=>{
    alert(err.error.message)
   })

  })
}

}
