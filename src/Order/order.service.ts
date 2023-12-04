// // profile.service.ts
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Order } from './order.entity';
// @Injectable()
// export class OrderService { 
//   constructor(
//     @InjectRepository(Order)
//     private readonly orderRepository: Repository<Order>,
//   ) {}

//   // async createOrder(foodData: Partial<Order>): Promise<Order> {
//   //   const order = this.orderRepository.create(foodData);
//   //   return this.orderRepository.save(order);
//   // }

//   create(order_time: string,order_table: string, order_item: string, order_addon: string, order_quantity: string, order_total_price: string, order_type: string, payment_option: string, payment_status: string, order_status: string, order_issue: string, total_cooking_time: string) {
//     const order = this.orderRepository.create({
//         order_time,
//         order_table,
//         order_item,
//         order_addon,
//         // order_requried_item,
//         order_quantity,
//         order_total_price,
//         order_type,
//         payment_option,
//         payment_status,
//         order_status,
//         order_issue,
//         total_cooking_time,
//     });

//     return this.orderRepository.save(order);
//   }
// } 

// order.service.ts
// order.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'; // Import this decorator

import { Order } from './order.entity';

@Injectable() 
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(orderData: Order): Promise<void> {
    await this.orderRepository.save(orderData);
  }
  // findOne(order_id: number) {
  //   if (!order_id) {
  //     return null;
  //   }
  //   return this.orderRepository.findOneBy({ order_id });
  // }
  // find(order_id: number) {
  //   return this.orderRepository.findBy({ order_id });
  // }

  // async remove(order_id: number) {
  //   const requiredItems = await this.findOne(order_id);
  //   if (!requiredItems) {    }
  //   return this.orderRepository.remove(requiredItems);
  // }
  findOne(order_number: string) {
    if (!order_number) {
      return null;
    } 
    return this.orderRepository.findOneBy({ order_number });
  }
  find(order_number: string) {
    return this.orderRepository.findBy({ order_number });
  }
  async getAllImageDetails(): Promise<{  order_id: number,order_number:string, order_time: string, order_table: string, order_item: string, order_addon: string, order_requried_item: string, order_quantity: string, order_total_price: string, order_type: string, payment_option: string, payment_status: string, order_status: string, order_issue: string, total_cooking_time: string }[]> {
    return this.orderRepository.find({
      select: [ 'order_id','order_number', 'order_time', 'order_table', 'order_item', 'order_addon', 'order_requried_item', 'order_quantity', 'order_total_price', 'order_type', 'payment_option', 'payment_status', 'order_status', 'order_issue', 'total_cooking_time'],
    });
  } 
  async findAll(): Promise<Order[]> {
    return this.orderRepository.find(); 
  }

  async remove(order_number: string) {
    const order = await this.findOne(order_number);
    if (!order) {
      return ('food not found');
    }
    return this.orderRepository.remove(order);
  }

  async update(order_number: string, attrs: Partial<Order>) {
    const order = await this.findOne(order_number);
    if (!order) {
      throw new NotFoundException('not found');
    }
    Object.assign(order, attrs);
    return this.orderRepository.save(order);
  }

}
