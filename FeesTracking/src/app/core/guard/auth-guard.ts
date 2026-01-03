import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalConstant } from './constant/Global.constant';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  debugger;
  const localData=localStorage.getItem(GlobalConstant.LoCAL_KEY_LOGIN);
  if(localData!=null)
  {
     return true;
  }
  else
  {
    router.navigateByUrl('/login');
    return false;
  }

};
