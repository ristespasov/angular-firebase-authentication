import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RouteType } from 'src/app/shared/enums/route.enum';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const shouldRedirectToResetPassword =
      route.routeConfig?.path === RouteType.AUTH ||
      route.routeConfig?.path === RouteType.RESET_PASSWORD;

    const oobCode = route.queryParams['oobCode'];
    if (shouldRedirectToResetPassword && !this.authService.user) {
      this.router.navigate([RouteType.RESET_PASSWORD], {
        queryParams: { oobCode: oobCode },
      });
      return true;
    } else {
      return false;
    }
  }
}
