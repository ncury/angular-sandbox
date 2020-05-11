import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    
})

export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage: string;

    _listFilter: string;

    get listFilter() : string {
        return this._listFilter;
    }
    
    set listFilter(listFilter : string) {
        this._listFilter = listFilter;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products; 
    }
    
    filteredProducts: IProduct[];

    products: IProduct[] = [];

    constructor(private productService: ProductService) {
        
    }

    performFilter(filterBy:string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this.productService.getProductsFromHttp().subscribe({
          next: products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error: err => this.errorMessage = err           
          // next(products) {
          //   this.products = products;
          //   this.filteredProducts = this.products;     ----------> Only use this syntax when you don't need to change 
          // },                                                       class level properties (like calling only console.log or methods that do this for you)
          // error(err) { 
          //   this.errorMessage = err 
          // }
        });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List' + message;

    }

}