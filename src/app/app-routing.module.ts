import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorContinenteComponent } from "./pais/pages/por-continente/por-continente.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
  {
    path: "",
    component: PorPaisComponent,
    pathMatch: "full",
  },
  { path: "continente", component: PorContinenteComponent },
  { path: "capital", component: PorCapitalComponent },
  { path: "country/:id", component: VerPaisComponent },
  { path: "**", redirectTo: "" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
