document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Product 1",
      description: "Description for product 1",
      price: "$10.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 2",
      description: "Description for product 2",
      price: "$20.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 3",
      description: "Description for product 3",
      price: "$30.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 4",
      description: "Description for product 4",
      price: "$40.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 5",
      description: "Description for product 5",
      price: "$50.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 6",
      description: "Description for product 6",
      price: "$60.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 7",
      description: "Description for product 7",
      price: "$70.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 8",
      description: "Description for product 8",
      price: "$80.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 9",
      description: "Description for product 9",
      price: "$90.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 10",
      description: "Description for product 10",
      price: "$100.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 11",
      description: "Description for product 11",
      price: "$110.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 12",
      description: "Description for product 12",
      price: "$120.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 13",
      description: "Description for product 13",
      price: "$130.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 14",
      description: "Description for product 14",
      price: "$140.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 15",
      description: "Description for product 15",
      price: "$150.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 16",
      description: "Description for product 16",
      price: "$160.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 17",
      description: "Description for product 17",
      price: "$170.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 18",
      description: "Description for product 18",
      price: "$180.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 19",
      description: "Description for product 19",
      price: "$190.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 20",
      description: "Description for product 20",
      price: "$200.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 21",
      description: "Description for product 21",
      price: "$210.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 22",
      description: "Description for product 22",
      price: "$220.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 23",
      description: "Description for product 23",
      price: "$230.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 24",
      description: "Description for product 24",
      price: "$240.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 25",
      description: "Description for product 25",
      price: "$250.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 26",
      description: "Description for product 26",
      price: "$260.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 27",
      description: "Description for product 27",
      price: "$270.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 28",
      description: "Description for product 28",
      price: "$280.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 29",
      description: "Description for product 29",
      price: "$290.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 30",
      description: "Description for product 30",
      price: "$300.00",
      image: "https://via.placeholder.com/150",
    },
  ];

  const carousels = [
    document.querySelector("#carousel-1"),
    document.querySelector("#carousel-2"),
    document.querySelector("#carousel-3"),
  ];

  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.id = `product-${index + 1}`;

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = product.name;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.textContent = product.description;

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    priceDiv.textContent = product.price;

    productDiv.appendChild(img);
    productDiv.appendChild(nameDiv);
    productDiv.appendChild(descriptionDiv);
    productDiv.appendChild(priceDiv);
    carousels[Math.floor(index / 10)].appendChild(productDiv);
  });
});
