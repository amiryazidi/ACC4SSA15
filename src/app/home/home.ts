import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

    title:string = "hello 4SSA15"
    searchName= signal('')
  // declaration d'un siganl
  name = signal('welcome signal')
  color = signal('')
  products = signal<Product[]>([
    {id:1, title : "Iphone 15", price : 500 , Qunatity : 5 , likes : 0},
    {id:2, title : "Iphone 16", price : 2000 , Qunatity : 4 , likes : 0},
  ])


  buy(id:number){
 this.products.update(list=>list.map(p=>p.id===id ?  {...p,Qunatity:p.Qunatity - 1} :p))

  }
  search(){
  return  this.products().filter(p=>p.title.toLowerCase().includes(this.searchName().toLowerCase()))
  }


  // incrementer le nombre de like
  like(id:number){
    this.products.update(list=>list.map(p=>p.id===id ?  {...p,likes:p.likes + 1} :p))
  }

}

