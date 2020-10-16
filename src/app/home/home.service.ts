import { Injectable } from '@angular/core';
import {CPU, RAM, GPU, MotherBoard } from './home.model';

import { General } from './home_general.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private add = 5;
  private general: General[] = [] 
  private process: CPU[] = [
    {
      id : 1,
      type : 'CPU',
      photo : 'https://5.imimg.com/data5/KE/ME/MY-12042782/intel-core-processor-500x500.jpg',
      brand : 'Intel',
      model : 'Core-i7-5820K',
      price : 12000000,
      stock : 10,
      base_clock : '3.3 GHz',
      boost_clock : '3.6 GHz',
      core_total : '6',
      thread_total : '12',
  }
];
  private ram: RAM[] = [
      {
        id : 2,
        type : 'RAM',
        photo : 'https://www.computeruniverse.net/images/1000/90663435619804A0D53F4CCD85B3E339.jpg',
        brand : 'Transcend',
        model : 'DDR4 SO-DIMM',
        price : 400000,
        stock : 10,
        speed : '2400 MHz',
        size : '8 GB'
    },
  ];
  private mb: MotherBoard[] = [
  {
      id : 3,
      type : 'MotherBoard',
      photo : 'https://images-na.ssl-images-amazon.com/images/I/915enQg0e1L._AC_SL1500_.jpg',
      brand : 'MSI',
      model : 'Z490-A PRO ProSeries ATX Motherboard',
      price : 2500000,
      stock : 0,
      chipset : '10th Gen Intel Core',
      motherboard_type : 'LGA 1200 Socket',
  }
];
private graphic: GPU[] = [
  {
      id : 4,
      type : 'GraphicCard',
      photo : 'https://cdn.mos.cms.futurecdn.net/obNHUnF85G2kHtApYvix5D.png',
      brand : 'NVIDIA',
      model : 'GeForce RTX 3080',
      price : 10000000,
      stock : 2
  }
];

  constructor() { }

  getAllItem(){
    this.general.length = 0;
    this.ram.forEach(element => {
        this.general.push(element as General);
    });
    this.graphic.forEach(element => {
        this.general.push(element as General);
    });
    this.process.forEach(element => {
        this.general.push(element as General);
    });
    this.mb.forEach(element => {
        this.general.push(element as General);
    });
    return [...this.general];
  }
  getItem(homeId: number){
    return {...this.general.find(general=>{
      return general.id === homeId;
    })};
  }
  deleteItem(homeId: number){
    this.process = this.process.filter(process =>{
      return process.id !== homeId;
    })
    this.graphic = this.graphic.filter(graphic =>{
      return graphic.id !== homeId;
    })
    this.mb = this.mb.filter(mb =>{
      return mb.id !== homeId;
    })
    this.ram = this.ram.filter(ram =>{
      return ram.id !== homeId;
    })
  }
  add_cpu(brand: string, photo: string, model: string, price: number, stock: number, 
    baseClock: string, boostClock: string, totalCore: string, totalThread:string, type: string){
      const cpuArray: CPU = {
          id: this.add,
          type: type,
          brand: brand,
          model: model,
          photo: photo,
          price: price,
          stock: stock,
          base_clock: baseClock,
          boost_clock: boostClock,
          core_total: totalCore,
          thread_total: totalThread
      }
      
      this.add++;
      this.process.push(cpuArray);
  }
  add_gpu(brand: string, photo: string, model: string, price: number, stock: number, type: string){
      const gpuArray: GPU = {
          id: this.add,
          type: type,
          brand: brand,
          photo: photo,
          model: model,
          price: price,
          stock: stock
      }
      this.add++;
      this.graphic.push(gpuArray);
  }
  add_ram(brand: string, photo: string, model: string, price: number, stock: number, speed: string, size:string, type: string){
    const ramArray: RAM = {
        id: this.add,
        type: type,
        brand: brand,
        photo: photo,
        model: model,
        price: price,
        stock: stock,
        speed: speed,
        size: size
    }
    this.add++;
    this.ram.push(ramArray);
  }
  add_mb(brand: string, photo: string, model: string, price: number, stock: number, chipset: string, mb_type:string, type: string){
    const mbArray: MotherBoard = {
        id: this.add,
        type: type,
        brand: brand,
        photo: photo,
        model: model,
        price: price,
        stock: stock,
        chipset: chipset,
        motherboard_type: mb_type
    }
    this.add++;
    this.mb.push(mbArray);
  }
} 
