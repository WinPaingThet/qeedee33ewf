import { renderCategory } from "../app/category";
import { categories, products } from "./data";
import { renderProduct } from "../app/product";

const initialRender = () => {
    renderCategory(categories);
    renderProduct(products);
};

export default initialRender;