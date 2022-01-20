import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
// import { ProductsModule } from './products/products.module';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'features', component: FeaturesComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((x) => x.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
