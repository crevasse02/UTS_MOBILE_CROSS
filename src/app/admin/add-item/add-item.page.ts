import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
private type_change:Text;
  constructor(
    private addItemService : HomeService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onChange(form: NgForm){
    this.type_change = form.value.type;
  }

  onSubmit(form: NgForm){
    if(form.value.type == "GraphicCard")
    {
      this.addItemService.add_gpu(form.value.brand,form.value.photo,form.value.model,form.value.price,form.value.stock,form.value.type);
    }
    else if(form.value.type == "CPU")
    {
      this.addItemService.add_cpu(form.value.brand,form.value.photo,form.value.model,form.value.price,form.value.stock,form.value.baseclock,form.value.boostclock,form.value.core,form.value.thread,form.value.type);
    }
    else if(form.value.type == "RAM")
    {
      this.addItemService.add_ram(form.value.brand,form.value.photo,form.value.model,form.value.price,form.value.stock,form.value.speed,form.value.size,form.value.type);
    }
    else if(form.value.type == "MotherBoard")
    {
      this.addItemService.add_mb(form.value.brand,form.value.photo,form.value.model,form.value.price,form.value.stock,form.value.chipset,form.value.mb_type,form.value.type);
    }
    this.router.navigate(['/', 'admin']);
  }

}