import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../material.module";

import { AttrsDirective } from "./directives/attrs.directive";
import { RegistryDirective } from "./directives/registry.directive";
import { DraggableDirective } from "./directives/draggable.directive";
import { CanvasComponent } from "./canvas/canvas.component";
import { DocumentComponent } from "./document/document.component";
import { ObjectToolComponent } from "./object-tool/object-tool.component";
import { PathToolComponent } from "./path-tool/path-tool.component";
import { TextToolComponent } from "./text-tool/text-tool.component";
import { ResizeDirective } from "./directives/resize.directive";


@NgModule({
	declarations: [
		AttrsDirective,
		RegistryDirective,
		DraggableDirective,
		CanvasComponent,
		DocumentComponent,
		ObjectToolComponent,
		PathToolComponent,
		TextToolComponent,
		ResizeDirective,
	],
	imports: [
		CommonModule,
		MaterialModule,
	],
	exports: [
		AttrsDirective,
		RegistryDirective,
		DraggableDirective,
		CanvasComponent,
	],
})
export class CanvasModule { }