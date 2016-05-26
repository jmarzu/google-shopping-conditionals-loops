var data = require('../products.json');

// Write your solutions below

//Exercise 1 the answer is 16

for (i = 0; i <= data.items.length; i++) {
  console.log(data.items[i].kind.length);
}

//Exercise 2

//Answer Sony Alpha DSLR SLT-A77 Translucent Mirror Digital Camera, 24.3MP, 12fps,
//OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19-point Auto Focus
//Fujifilm FinePix REAL 3D W3 - digital camera


for (var i = 0; i < data.items.length; i++) {

   if (data.items[i].product.inventories[0].availability.includes('backorder')) {
    console.log(data.items[i].product.title);
  }
}

//Exercise 3

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.images.length > 1) {
    console.log(data.items[i].product.images.length)
  }
}
 //Answer: 6

 //Exercise 4

for (var i = 0; i < data.items.length; i++) {
   if (data.items[i].product.brand == 'Canon') {
    console.log(data.items[i].product.title);
   }
}

//Exercise 5

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand == "Canon" &&
    data.items[i].product.author.name == "eBay") {
    console.log(data.items[i].product.title);

//   }
// }

//Exercise 6

for (var i = 0; i < data.items.length; i++) {
  console.log(data.items[i].product.brand)
  console.log(data.items[i].product.inventories[0].price)
  console.log(data.items[i].product.images)
}
