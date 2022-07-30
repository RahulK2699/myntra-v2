

import Route from "@ioc:Adonis/Core/Route";

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('category','CategoriesController')
Route.resource("user", "UsersController");
Route.post("login", "AuthController.login");
