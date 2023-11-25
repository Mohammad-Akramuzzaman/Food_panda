// // profile.controller.ts
// import { Controller, Post, UseInterceptors, UploadedFiles, Body } from '@nestjs/common';
// import { FilesInterceptor } from '@nestjs/platform-express';
// import { Order } from './order.entity';
// import { OrderService } from './order.service';



// @Controller('order')
// export class OrderController {
//   constructor(private readonly orderService: OrderService) {}

//   @Post('create')
//   create(@Body() body: any) {
//     this.orderService.create(
//         body.order_time,
//         body.order_table, 
//         body.order_item,
//         body.order_addon,
//         // body.order_requried_item,
//         body.order_quantity,
//         body.order_total_price,
//         body.order_type,
//         body.payment_option, 
//         body.payment_status,
//         body.order_status,
//         body.order_issue,
//         body.total_cooking_time,
//       );
//       return ("order created")
//     }
// }

// profile.controller.ts
import { Controller, Post, Body, Get, Param, Res, Delete, Patch } from '@nestjs/common';
import { OrderService } from './order.service';
 
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  create(@Body() body: any) {
    this.orderService.create(body);
    return "order created";
  }
  @Get('/find')
  findItem(@Param('order_id')order_id: number) {
    return this.orderService.find(order_id); 
  }


  @Get('/:order_id')
  findOne(@Param('order_id') order_id: string) {
    return this.orderService.findOne(Number(order_id));
  }

@Delete('/:order_id')
  removeMeeting(@Param('order_id')  order_id: string) {
    return this.orderService.remove(parseInt( order_id));
  }

  @Patch('/:id')
  updateMeeting(@Param('id') id: string, @Body() body: any) {
    return this.orderService.update(parseInt(id), body);
  } 
}
