import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';

import { StorageService } from './services/storage.service';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { HomeComponent } from './components/home/home.component';
import { GooddetailComponent } from './components/gooddetail/gooddetail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    AComponent,
    BComponent,
    HomeComponent,
    GoodslistComponent,
    GooddetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home/:id',component:HomeComponent},
      {path:'a',component:AComponent},
      {path:'b',component:BComponent},
      {path:'goodslist',component:GoodslistComponent,
        children: [{
          path:'gooddetail',component:GooddetailComponent
        }]
    }
    ])
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
