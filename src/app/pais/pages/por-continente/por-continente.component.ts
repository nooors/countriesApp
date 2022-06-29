import { Component } from "@angular/core";
import { Country } from "../../interfaces/RestCountry.interface";
import { PaisService } from "../../services/pais.service";

@Component({
  selector: "app-por-continente",
  templateUrl: "./por-continente.component.html",
  styles: [],
})
export class PorContinenteComponent {
  continents: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  continentActive: string = "";
  countries: Country[] = [];
  hayError: boolean = false;

  constructor(private paisSrv: PaisService) {}

  getClassCSS(continent: string): string {
    return this.continentActive === continent
      ? "btn-primary"
      : "btn-outline-primary";
  }

  activateContinent(continent: string) {
    if (continent === this.continentActive) {
      return;
    }

    this.hayError = false;
    this.continentActive = continent;
    this.countries = [];
    this.paisSrv.getCountriesByContinent(continent).subscribe(
      (countries) => (this.countries = countries),
      (err) => (this.hayError = true),
    );
  }
}
