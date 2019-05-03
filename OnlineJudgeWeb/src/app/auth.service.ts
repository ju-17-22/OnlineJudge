import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from "angular-webstorage-service";

@Injectable()
export class AuthService implements CanActivate {

  constructor(public router:Router, @Inject(SESSION_STORAGE) private storage: WebStorageService) { 

  }

  canActivate(): boolean{
    if(!this.storage.get("login")){
        
        return false;

    }
    else return true;
  }
}
