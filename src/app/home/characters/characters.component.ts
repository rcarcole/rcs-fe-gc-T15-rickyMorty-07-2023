import { Component, Input } from '@angular/core';
import * as database from '../../database.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],

})
export class CharactersComponent {
  characters = database;
  constructor(private modalService: NgbModal) {}

	open(character: any) {
		const modalRef = this.modalService.open(DetalleComponent);
    modalRef.componentInstance.character = character;
	}
}