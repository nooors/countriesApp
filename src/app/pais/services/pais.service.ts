import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../interfaces/RestCountry.interface";

@Injectable({
  providedIn: "root",
})
export class PaisService {
  private API_URL: string = " https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.API_URL}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarContinente(termino: string): Observable<Country[]> {
    const url = `${this.API_URL}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.API_URL}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this.API_URL}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
}
