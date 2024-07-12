import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interface/productInterface';
import { ProductService } from 'src/app/core/services/product.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  canAdmin: boolean = false;

  constructor(
    private productService: ProductService,
    private permissionsService: NgxPermissionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllProducts();
    
  }

  loadAllProducts():void {
    this.productService.allProducts().subscribe(
      (data: IProduct[]) => {
        this.allProducts = data;
        console.log(this.allProducts);
        
        this.filteredProducts = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }



  

  searchProducts() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.filteredProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }

  navigateToAddProduct() {
    this.router.navigate(['/add-product']);
  }

  viewProductDetails(product: IProduct) {
    this.router.navigate(['/product', product._id]);
  }

  editProduct(product: IProduct) {
    this.router.navigate(['/edit-product', product._id]);
  }

  deleteProduct(product: IProduct) {
    if (confirm(`Are you sure you want to delete ${product.name}?`)) {
      // Implement delete functionality here
    }
  }

  addToCart(product: IProduct) {}
}
