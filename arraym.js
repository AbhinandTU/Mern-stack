// solve the javascript question using array methods 

products=[
  {pid:100,  pName:'apple',      band:'5g',  price:120000, display:'led'},
  {pid:101,  pName:'samsaung',   band:'5g',  price:45000,  display:'led'},
  {pid:102,  pName:'blackberry', band:'4g',  price:50000,  display:'led'},
  {pid:103,  pName:'nokia',      band:'3g',  price:1200,   display:'lcd'},
  {pid:104,  pName:'motorola',   band:'4g',  price:10000,  display:'lcd'}
]

//1. print product name only

console.log('Product Names:')
// products.forEach(product => console.log(product.pName));
// let productName = products.map((a)=>a.pName="hello world")
// console.log(productName);
//2. print all mobile details whose display is lcd

console.log('Mobile Details (LCD):')
products.filter(product => product.display === 'lcd').forEach(product => console.log(product));

//3. print 5g mobile phone name

console.log('5G Mobile Phone Name:')
products.filter(product => product.band === '5g').forEach(product => console.log(product.pName));

//4. filter mobile based on price

console.log('Mobiles with price > 10000:')
products.filter(product => product.price > 10000).forEach(product => console.log(product));

//5. print costly mobile

console.log('Costly Mobile:')
let costlyMobile = products.reduce((a,b)=>a.price>b.price?a:b)
console.log(costlyMobile.pName);

// products.reduce((maxProduct, product) => product.price > maxProduct.price? product : maxProduct, products[0]).forEach(product => console.log(product));

//6. print low cost mobile

console.log('Low Cost Mobile:')
// products.reduce((minProduct, product) => product.price < minProduct.price? product : minProduct, products[0]).forEach(product => console.log(product));
