import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Erro404Component } from "./component/error404/error404.component";
import { NavbarComponent } from "./component/navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        Erro404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Erro404Component
            }
        ])
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule {

}