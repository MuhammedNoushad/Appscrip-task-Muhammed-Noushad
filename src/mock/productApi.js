import mockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new mockAdapter(axios);

mock.onGet("/api/products").reply(200, {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
      wishlisted: true,
      popularity: 78,
      date: "2024-12-01",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: "/img2.jpg",
      outOfStock: true,
      popularity: 62,
      date: "2025-01-15",
    },
    {
      id: 3,
      name: "Product 3",
      price: 49.99,
      image: "/img3.jpg",
      popularity: 88,
      date: "2025-01-10",
    },
    {
      id: 4,
      name: "Product 4",
      price: 9.99,
      image: "/img4.jpg",
      wishlisted: true,
      popularity: 55,
      date: "2025-02-03",
    },
    {
      id: 5,
      name: "Product 5",
      price: 24.99,
      image: "/img5.jpg",
      popularity: 69,
      date: "2024-11-25",
    },
    {
      id: 6,
      name: "Product 6",
      price: 39.99,
      image: "/img6.jpg",
      wishlisted: true,
      popularity: 90,
      date: "2025-01-20",
    },
    {
      id: 7,
      name: "Product 7",
      price: 14.99,
      image: "/img7.jpg",
      popularity: 37,
      date: "2025-02-01",
    },
    {
      id: 8,
      name: "Product 8",
      price: 59.99,
      image: "/img8.jpg",
      outOfStock: true,
      popularity: 43,
      date: "2024-12-15",
    },
    {
      id: 9,
      name: "Product 9",
      price: 34.99,
      image: "/img9.jpg",
      wishlisted: true,
      popularity: 72,
      date: "2025-01-25",
    },
    {
      id: 10,
      name: "Product 10",
      price: 12.99,
      image: "/img10.jpg",
      popularity: 59,
      date: "2024-11-30",
    },
    {
      id: 11,
      name: "Product 11",
      price: 22.49,
      image: "/img11.jpg",
      popularity: 80,
      date: "2025-02-18",
    },
    {
      id: 12,
      name: "Product 12",
      price: 18.75,
      image: "/img12.jpg",
      popularity: 47,
      date: "2025-02-20",
    },
    {
      id: 13,
      name: "Product 13",
      price: 27.89,
      image: "/img13.jpg",
      wishlisted: true,
      outOfStock: true,
      popularity: 91,
      date: "2025-01-02",
    },
    {
      id: 14,
      name: "Product 14",
      price: 16.99,
      image: "/img14.jpg",
      popularity: 33,
      date: "2024-12-22",
    },
    {
      id: 15,
      name: "Product 15",
      price: 44.99,
      image: "/img15.jpg",
      wishlisted: true,
      popularity: 95,
      date: "2025-02-14",
    },
    {
      id: 16,
      name: "Product 16",
      price: 31.49,
      image: "/img16.jpg",
      popularity: 50,
      date: "2024-10-30",
    },
    {
      id: 17,
      name: "Product 17",
      price: 20.0,
      image: "/img17.jpg",
      popularity: 26,
      date: "2025-01-05",
    },
    {
      id: 18,
      name: "Product 18",
      price: 11.11,
      image: "/img18.jpg",
      popularity: 64,
      date: "2025-02-10",
    },
  ],
});

export default mock;
