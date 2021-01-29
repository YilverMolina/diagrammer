import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiagramInstanceFactory } from 'src/app/contracts/factories/diagram-instance-factory';
import { DiagramInstance } from 'src/app/contracts/models/diagram-instance.model';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  private processDiagram: DiagramInstance;
  public diagramId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadDiagramInstance();
  }

  private loadDiagramInstance(): void {
    this.diagramId = this.activatedRoute.snapshot.params.diagramId;
    this.cdRef.detectChanges();
    this.processDiagram = new DiagramInstanceFactory().newDiagramEditorInstance(this.diagramId);
    console.log(this.processDiagram)
  }
}
