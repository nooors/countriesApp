import { Component, Input, OnInit } from "@angular/core";
import { Country } from "../../interfaces/RestCountry.interface";

@Component({
  selector: "app-pais-tabla",
  templateUrl: "./pais-tabla.component.html",
  styles: [],
})
export class PaisTablaComponent implements OnInit {
  @Input() hayError!: boolean;
  @Input() countries!: Country[];

  constructor() {}

  ngOnInit(): void {}
}
