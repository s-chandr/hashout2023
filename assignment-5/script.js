const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var ul = document.getElementById("list");

    data.forEach((item) => {
      console.log(item);
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      const textNode = document.createTextNode(item.title);
      h3.appendChild(textNode);
      const img = document.createElement("img"); // Create an <img> element.
      img.src = item.image; // Set the src attribute to the image URL.
      li.appendChild(h3);
      li.appendChild(img); // Append the <img> element to the list item.
      
      const p = document.createElement("p");
      const textNodep = document.createTextNode("price: " + item.price);
      p.appendChild(textNodep);
      li.appendChild(p);
      ul.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
