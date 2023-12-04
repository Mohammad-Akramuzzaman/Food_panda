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
import { Controller, Post, Body, Get, Param, Res, Delete, Patch, Put } from '@nestjs/common';
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
  findItem(@Param('order_number')order_number: string) {
    return this.orderService.find(order_number); 
  }
 

  @Get('/:order_number')
  findOne(@Param('order_number') order_number: string) {
    return this.orderService.findOne((order_number));
  }

@Delete('/:order_number')
  removeMeeting(@Param('order_number')  order_number: string) {
    return this.orderService.remove(( order_number));
  }

  @Put('/:order_number')
  updateMeeting(@Param('order_number') order_number: string, @Body() body: any) {
    return this.orderService.update((order_number), body);
  } 
}
