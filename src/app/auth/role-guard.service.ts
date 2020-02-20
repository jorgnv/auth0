import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
import { mergeMap, catchError } from 'rxjs/operators';
//const token: String;
@Injectable()

export class RoleGuardService implements CanActivate {
  token: String;
  constructor(public auth: AuthService, public router: Router) {
    //  this.auth.getTokenSilently$().subscribe((token) => { 
    //    console.log("observable",token);
    //    this.token=token
    //  })
  }    
  getTokenFromOAuth() {
    this.auth.getTokenSilently$().subscribe((token) => {
      console.info(token);
      this.token = token; // token saved 
    })
  }
  
  useTokenAfterOutsideObservable() {
    console.info(this.token);
  }
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    console.log(this.token);
    //  const expectedRole = route.data.expectedRole;
     //const token = this.token;
     // decode the token to get its payload
     //const tokenPayload = decode(token);
     //const token = await auth.getTokenSilently({audience: 'https://example-api/});
     //console.log(tokenPayload['permissions']);

      // if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      //   this.router.navigate(['external-api']);
      //   return false;
      // }

     return true;
  }
}