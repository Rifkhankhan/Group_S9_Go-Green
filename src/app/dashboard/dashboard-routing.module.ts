import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: DashboardPage,
    children:[
      {
        path:'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
      },
      {
        path: '',
        redirectTo: '/dashboard/tabs/home',
        pathMatch: 'full'
       }
    ]
  },
];


// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: OwnerPage,
//     children:[
//       {
//         path: 'customers',
//         children:[
//           {
//             path:'',
//             loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule)
//           },
//           {
//             path:'edit/:CustomerId',
//             loadChildren:()=>import('./customers/edit-customer/edit-customer.module').then(m=>m.EditCustomerPageModule)
//           },
//           {
//             path:':CustomerId',
//             loadChildren:()=>import('./customers/customer-details/customer-details.module').then(m=>m.CustomerDetailsPageModule)
//           },
//           {
//             path:'new-customer',
//             loadChildren:()=>import('./customers/new-customer/new-customer.module').then(m=>m.NewCustomerPageModule)
//           }
//         ]
//       },
//       {
//         path: 'shops',
//         children:[
//           {
//             path:'',
//             loadChildren: () => import('./shops/shops.module').then( m => m.ShopsPageModule)
//           },
//           {
//             path:'edit/:ShopId',
//             loadChildren: () => import('./shops/edit-shop/edit-shop.module').then( m => m.EditShopPageModule)
//           },
//           {
//             path:'new-shop',
//             loadChildren: () => import('./shops/new-shop/new-shop.module').then( m => m.NewShopPageModule)
//           },
//           {
//             path:':ShopId',
//             children:[
//               {
//                 path:'',
//                 loadChildren: () => import('./shops/shop-details/shop-details.module').then( m => m.ShopDetailsPageModule)
//               },
//               {
//                 path:'shop-products/:ShopId',
//                 loadChildren:()=>import('./shops/shop-details/shop-products/shop-products.module').then(m=>m.ShopProductsPageModule)
//               }
//             ] 
//           },
//           {
//             path: '',
//             redirectTo: '/owner/tabs/shops/:ShopId',
//             pathMatch: 'full'
//            }
//         ]
//       },
//       {
//         path: 'employees',
//         children:[
//           {
//             path:'',
//             loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
//           },
//           {
//             path:'edit/:EmployeeId',
//             loadChildren: () => import('./employees/edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
//           },
//           {
//             path:'new-employee',
//             loadChildren: () => import('./employees/new-employee/new-employee.module').then( m => m.NewEmployeePageModule)
//           },
//           {
//             path:':EmployeeId',
//             loadChildren: () => import('./employees/employee-details/employee-details.module').then( m => m.EmployeeDetailsPageModule)
//           }
//         ]
//       },
//       {
//         path: 'products',
//         children:[
//           {
//             path:'',
//             loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
//           },
//           {
//             path:'edit/:ProductId',
//             loadChildren: () => import('./products/edit-product/edit-product.module').then( m => m.EditProductPageModule)
//           },
//           {
//             path:'new-product',
//             loadChildren: () => import('./products/new-product/new-product.module').then( m => m.NewProductPageModule)
//           },
//           {
//             path:':ProductId',
//             loadChildren: () => import('./products/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
//           }
//         ]
//       },
//       {
//         path: 'orders',
//         children:[
//           {
//             path:'',
//             loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
//           },
//           {
//             path:':OrderId',
//             loadChildren: () => import('./orders/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
//           }
//         ]
//       },
//       {
//             path:'category',  
//             loadChildren:()=>import('./category/category.module').then(m=>m.CategoryPageModule)
//       },
          
//       {
//         path: '',
//         redirectTo: '/owner/tabs/customers',
//         pathMatch: 'full'
//        }
//     ]
//   },
 
//   {
//     path: '',
//     redirectTo: '/owner/tabs/customers',
//     pathMatch: 'full'
//   },
//   {
//     path: 'category',
//     loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
