import { Component, OnInit } from "@angular/core";
import { Country } from "../../interfaces/RestCountry.interface";

import { PaisService } from "../../services/pais.service";

@Component({
  selector: "app-por-pais",
  templateUrl: "./por-pais.component.html",
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = "";
  hayError: boolean = false;
  countries!: Country[];
  titulo: string = "Por País";
  placeholder: string = "Buscar país...";
  suggestedCountries: Country[] = [];
  toggleSuggest: boolean = false;

  constructor(private paisSrv: PaisService) {}

  buscar(event: string) {
    this.toggleSuggest = false;
    this.termino = event;
    this.hayError = false;
    this.paisSrv.buscarPais(this.termino).subscribe(
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
    this.hayError = false;
    this.termino = event;
    this.toggleSuggest = true;

    this.paisSrv.buscarPais(event).subscribe(
      (countries) => (this.suggestedCountries = countries.splice(0, 5)),
      (err) => (this.suggestedCountries = []),
    );
  }

  searchSuggest(event: string) {
    this.buscar(event);
  }

  ngOnInit(): void {}
}
