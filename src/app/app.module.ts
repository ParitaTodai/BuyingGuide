import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoListsComponent } from './components/video-lists/video-lists.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { ProductService } from './Service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './Pipe/safe.pipe';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    HomeComponent,
    VideoListsComponent,
    VideoDetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // FontAwesomeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }






