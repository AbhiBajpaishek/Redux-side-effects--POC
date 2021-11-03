import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMYPRODUCTS = [
  {
    id:"Pro1",
    title: "Test1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id:"Pro2",
    title: "Test2",
    price: 12.22,
    description: "This is a second product - amazing!",
  },
  {
    id:"Pro3",
    title: "Test3",
    price: 9.99,
    description: "This is a third product - amazing!",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMYPRODUCTS.map((item) =>{
        return(
        <ProductItem key = {item.id}
          id = {item.id}
          title= {item.title}
          price={item.price}
          description={item.description}
        />
        );
      })
    }
      </ul>
    </section>
  );
};

export default Products;
