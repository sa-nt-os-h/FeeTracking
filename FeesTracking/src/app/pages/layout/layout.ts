import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

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
const localData = localStorage.getItem('batchuser'); // This would usually come from an Auth service
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
    localStorage.removeItem('batchuser');
    this.router.navigate(['login']);
  }
}

