//store the products array in localstorage as "products"




let arr = JSON.parse(localStorage.getItem("products")) || [];


function Products(a,b,c,d) {
     this.type = a;
     this.desc = b;
     this.price = c;
     this.image = d;

}

function products() {

  event.preventDefault();


  let form = document.getElementById("products");

      let type = form.type.value;
      let desc = form.desc.value;
      let price = form.price.value;
      let image = form.image.value;

      let p = new Products(type, desc, price, image);
      arr.push(p);
      localStorage.setItem("products",JSON.stringify(arr));

      window.location.reload();
}



function show_products() {
  window.location.href="inventory.html"
}


