import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NewsGatewayService } from './news-gateway.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [NewsGatewayService]
})
export class NetworkModule {}
