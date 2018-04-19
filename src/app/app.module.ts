import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppSettings } from './../providers/app-settings/app-settings';
import { RecipeService } from './../providers/recipe-service/recipe-service';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { FavouritesPageModule } from '../pages/favourites/favourites.module';
import { ShoppingListPageModule } from '../pages/shopping-list/shopping-list.module';
import { AboutPageModule } from '../pages/about/about.module';
import { PrimaryTabsPageModule } from '../pages/primary-tabs/primary-tabs.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    HomePageModule,
    FavouritesPageModule,
    ShoppingListPageModule,
    AboutPageModule,
    PrimaryTabsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RecipeService,
    AppSettings,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
