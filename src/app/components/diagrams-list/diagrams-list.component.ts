import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-diagrams-list',
  templateUrl: './diagrams-list.component.html',
  styleUrls: ['./diagrams-list.component.scss']
})
export class DiagramsListComponent implements OnInit {

  public diagrams = [];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  public addDiagram(): void {
    this.locationService.navigateToInternalUrl(`diagrams/${uuidv4()}`);
  }

}
