import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});
//users auth
Route.resource("user", "UsersController");
Route.post("login", "AuthController.login");

//category
Route.resource("category", "CategoriesController").middleware({
  show: ["find:Category"],
  update: ["find:Category"],
  destroy: ["find:Category"],
});

//products
Route.resource("product", "ProductsController").middleware({
  show: ["find:Product"],
  update: ["find:Product"],
  destroy: ["find:Product"],
});

//orders

Route.resource('orders','OrdersController')
Route.resource('cart','CartsController')
