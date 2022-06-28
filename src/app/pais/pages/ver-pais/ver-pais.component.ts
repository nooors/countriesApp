import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";
import { PaisService } from "../../services/pais.service";
import { Country } from "../../interfaces/RestCountry.interface";

@Component({
  selector: "app-ver-pais",
  templateUrl: "./ver-pais.component.html",
  styles: [],
})
export class VerPaisComponent implements OnInit {
  country!: Country;
  constructor(
    private actRoute: ActivatedRoute,
    private countrySrv: PaisService,
  ) {}

  ngOnInit(): void {
    // {id}---> desestructuring params  (params.id)
    // this.actRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.countrySrv
    //     .getCountryByAlpha(id)
    //     .subscribe((country) => console.log(country));
    // });

    // Same result written in other way, with rxjs operators
    this.actRoute.params
      .pipe(
        switchMap(({ id }) => this.countrySrv.getCountryByAlpha(id)), // switchMap gets an Observable and returns another Oservable
        tap(console.log),
      )
      .subscribe((country) => (this.country = country[0]));
  }
}
