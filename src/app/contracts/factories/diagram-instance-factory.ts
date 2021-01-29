import Diagram from 'diagram-js';

import ConnectModule from 'diagram-js/lib/features/connect';
import ContextPadModule from 'diagram-js/lib/features/context-pad';
import CreateModule from 'diagram-js/lib/features/create';
import LassoToolModule from 'diagram-js/lib/features/lasso-tool';
import ModelingModule from 'diagram-js/lib/features/modeling';
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas';
import MoveModule from 'diagram-js/lib/features/move';
import OutlineModule from 'diagram-js/lib/features/outline';
import PaletteModule from 'diagram-js/lib/features/palette';
import ResizeModule from 'diagram-js/lib/features/resize';
import RulesModule from 'diagram-js/lib/features/rules';
import SelectionModule from 'diagram-js/lib/features/selection';
import ZoomScrollModule from 'diagram-js/lib/navigation/zoomscroll';
import { DiagramInstance } from '../models/diagram-instance.model';
import ProvidersModule from '../../djs-wrapper/providers';


export class DiagramInstanceFactory {

    public newDiagramEditorInstance(diagramId: string): DiagramInstance {
        const diagramInstance: DiagramInstance = this.initializeDiagramInstance(diagramId);
        return diagramInstance;
    }

    private initializeDiagramInstance(diagramId: string): DiagramInstance {
        let diagramInstance: DiagramInstance = null;
        const diagramInstanceConfiguration: any = this.getDiagramInstanceConfiguration(diagramId);
        if (diagramInstanceConfiguration && diagramInstanceConfiguration.canvas && diagramInstanceConfiguration.canvas.container) {
            if (diagramId) {
                diagramInstance = new DiagramInstance();
                diagramInstance.id = diagramId;
                diagramInstance.isVisible = true;
                diagramInstance.diagram = new Diagram(diagramInstanceConfiguration);
                diagramInstance.canvas = diagramInstance.diagram.get('canvas');
                diagramInstance.elementFactory = diagramInstance.diagram.get('elementFactory');
                diagramInstance.graphicsFactory = diagramInstance.diagram.get('graphicsFactory');
                diagramInstance.eventBus = diagramInstance.diagram.get('eventBus');
                diagramInstance.root = diagramInstance.elementFactory.createRoot();
                diagramInstance.canvas.setRootElement(diagramInstance.root);
                diagramInstance.selection = diagramInstance.diagram.get('selection');
                diagramInstance.elementRegistry = diagramInstance.diagram.get('elementRegistry');
            }
        }
        return diagramInstance;
    }

    private getDiagramInstanceConfiguration(diagramId: string): any {
        const diagramInstanceConfiguration = {
            canvas: this.getHtmlElementForCanvas(diagramId),
            modelerRenderer: {
                id: `modelerRenderer_${diagramId}`
            },
            elementFactory: {
                id: `elementFactory_${diagramId}`
            },
            elementRegistry: {
                id: `elementRegistry_${diagramId}`
            },
            selection: {
                id: `selection_${diagramId}`
            },
            modules: [
                ConnectModule,
                ContextPadModule,
                CreateModule,
                LassoToolModule,
                ModelingModule,
                MoveCanvasModule,
                MoveModule,
                OutlineModule,
                PaletteModule,
                ResizeModule,
                RulesModule,
                SelectionModule,
                ZoomScrollModule,
                ProvidersModule 
            ]
        };
        return diagramInstanceConfiguration;
    }

    // Get HTML element (div) in which will be rendered the diagram
    private getHtmlElementForCanvas(containerId: string): { container?: any } {
        const canvasContent: { container?: any } = {};
        if (containerId) {
            const container = document.getElementById(`diagram-${containerId}`);
            canvasContent.container = container;
        }
        return canvasContent;
    }
}