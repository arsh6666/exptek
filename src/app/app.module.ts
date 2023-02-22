import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
import { BlogsComponent } from './components/pages/blogs/blogs.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermConditionsComponent } from './components/pages/term-conditions/term-conditions.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeServicesComponent } from './components/common/home-services/home-services.component';
import { HomeProductsComponent } from './components/common/home-products/home-products.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { HomeSliderComponent } from './components/common/home-slider/home-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    ServiceDetailComponent,
    BlogDetailComponent,
    BlogsComponent,
    PrivacyPolicyComponent,
    TermConditionsComponent,
    NavbarComponent,
    FooterComponent,
    HomeServicesComponent,
    HomeProductsComponent,
    TestimonialsComponent,
    HomeSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
