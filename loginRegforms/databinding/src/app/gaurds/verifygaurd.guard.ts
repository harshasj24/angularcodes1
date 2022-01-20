import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { VerifyService } from '../services/verify.service';

@Injectable({
  providedIn: 'root',
})
export class VerifygaurdGuard implements CanActivate {
  constructor(private passData: VerifyService) {}
  canActivate() {
    if (this.passData.verify()) {
      return true;
    } else {
      window.alert('Invalid user name');
      return false;
    }
  }
}
