var heading = document.createElement("h1");
heading.innerHTML = "MakeUp API";
heading.setAttribute("class","heading");
heading.setAttribute("id","heading")

var paragraph = document.createElement("p");
paragraph.innerHTML=" Lorem ipsum dolor sit amet, consectetur adipisicing elitDeleniti numquam quas laboriosam perspiciatis aut dignissimos quidem asperiores dolore doloremque. Sit odit tenetur unde nihil maiores soluta sunt dolor excepturi reiciendis.";
paragraph.setAttribute("class", "paragraph")

var grid = document.createElement("div")
grid.setAttribute("class","grid")


var box =document.createElement("div")
box.setAttribute("class","box")

var container = document.createElement("div")
container.setAttribute("class","container")


var row = document.createElement("div")
row.setAttribute("class","row")
container.append(row)


async function foo(){

    var  res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    var ress= await res.json();
    console.log(ress)
    try {
        for(var i in ress){
        row.innerHTML +=`<div class="col-sm-3">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <img src="${ress[i].api_featured_image}" class="card-img-top" alt="...">
        <div class="card-body">
        <a class="productlink" href="${ress[i].product_link}" target="_blank">Product_Link</a>
            <h5 class="name-title"><b>Product Name : </b>${ress[i].name}</h5><br>
            <h5 class="brand-title"><b>Brand Name : </b>${ress[i].brand}</h5><br>
            <h5 class="category-title"><b>Category : </b>${ress[i].category}</h5><br>
            <h5 class="price-title"><b>Price :</b> $${ress[i].price}</h5><br>
            <h5 class="description"><b>Description : </b><br>${ress[i].description}</h5><br>
        </div>
        </div>
    </div>`
        box.append(container)
    }
    } catch (error) {
        console.log(error)
        
    }
   
   
   
    
    
    }
    
    foo() 
    document.body.append (heading,paragraph,grid,box);








