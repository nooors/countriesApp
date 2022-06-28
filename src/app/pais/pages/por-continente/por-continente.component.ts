import { Component, OnInit } from "@angular/core";
import { Country } from "../../interfaces/RestCountry.interface";
import { PaisService } from "../../services/pais.service";

@Component({
  selector: "app-por-continente",
  templateUrl: "./por-continente.component.html",
  styles: [],
})
export class PorContinenteComponent implements OnInit {
  termino: string = "";
  hayError: boolean = false;
  countries!: Country[];
  titulo: string = "Por Continente";
  placeholder: string = "Buscar por continente...";

  constructor(private paisSrv: PaisService) {}

  buscar(event: string) {
    this.termino = event;
    this.hayError = false;
    this.paisSrv.buscarContinente(this.termino).subscribe(
      (payload) => {
        console.log(payload);
        this.countries = payload;
      },
      (err) => {
        this.hayError = true;
      },
    );
  }

  sugerencias(event: any) {
    this.buscar(event);
  }

  ngOnInit(): void {}
}
