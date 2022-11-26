import { ProductsService } from "./services/products.service";
import { ProductsView } from "./views/products.view";
import { ProductsController } from "./controllers/products.controller";
import { CartView } from "./views/cart.view";
import { CartService } from "./services/cart.service";
import { CartController } from "./controllers/cart.controller";

const productsService = new ProductsService();
const productsView = new ProductsView();
const cartView = new CartView();

const cartService = new CartService();
new ProductsController(productsView, productsService);
new CartController(cartView,cartService,productsService,productsView);