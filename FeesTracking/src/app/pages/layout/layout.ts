import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GlobalConstant } from '../../core/guard/constant/Global.constant';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
isSidebarActive = false;
 localDataAny:any; 
 router=inject(Router);
constructor()
{
const localData = localStorage.getItem(GlobalConstant.LoCAL_KEY_LOGIN); // This would usually come from an Auth service
if(localData!=null)
{
  this.localDataAny=JSON.parse(localData);
}
 
}

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
 
  onLogoff()
  {
    localStorage.removeItem(GlobalConstant.LoCAL_KEY_LOGIN);
    this.router.navigate(['login']);
  }
}

