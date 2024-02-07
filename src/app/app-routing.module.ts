import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ABOUT/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"", redirectTo:"home" ,pathMatch:"full"},
  {path: "about", component:AboutComponent , title:'about'},
  {path: "contact", component:ContactComponent , title:'contact'},
  {path: "portfolio", component:PortfolioComponent ,title:'portfolio'},
  {path: "home", component:HomeComponent ,title:'home'},
  {path: "footer", component:FooterComponent,title:'footer'},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
