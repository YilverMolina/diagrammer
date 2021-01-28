import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private router: Router) { }

  public navigateToInternalUrl(path: string, queryParams?: any, extras?: NavigationExtras): void {
    this.router.navigate([path], { queryParams, ...extras })
  }
}
