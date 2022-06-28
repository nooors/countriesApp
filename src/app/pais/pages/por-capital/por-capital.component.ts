import { Component, OnInit } from "@angular/core";
import { Country } from "../../interfaces/RestCountry.interface";

import { PaisService } from "../../services/pais.service";

@Component({
  selector: "app-por-capital",
  templateUrl: "./por-capital.component.html",
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = "";
  hayError: boolean = false;
  countries!: Country[];
  titulo: string = "Por Capital";
  placeholder: string = "Busca por capital ...";

  constructor(private paisSrv: PaisService) {}

  buscar(event: string) {
    this.termino = event;
    this.hayError = false;
    this.paisSrv.buscarCapital(this.termino).subscribe(
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
