// getting data from localstorage
let arr = JSON.parse(localStorage.getItem("products")) || [] ;

// mapping arr
arr.map( function(e,i){

  let div = document.createElement("div");
  div.setAttribute("id","div");

  let image = document.createElement("img");
  image.src = e.image;
  image.setAttribute("id","image")

  let desc = document.createElement("h4");
  desc.innerText = e.desc;

  let price = document.createElement("h4");
  price.innerText = e.price;

  let type  = document.createElement("h4");
  type.innerText = e.type;

  let button = document.createElement("button");
  button.innerText = "Remove";
  button.setAttribute("id","remove_product");
  
  button.addEventListener("click", function(){
       remove(e,i);
  })

  div.append(image, type, desc, price, button );
  document.querySelector("#all_products").append(div);
});



// remove function
function remove(e,i) {
 
    arr.splice(i,1);
    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload();
   
}

// add more product function
function add_more_product() {
      window.location.href="index.html";

}
