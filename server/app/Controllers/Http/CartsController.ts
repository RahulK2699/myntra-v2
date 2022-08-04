import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Cart from "App/Models/Cart";
import Product from "App/Models/Product";
import user from "App/Models/user";
const Validator = require("validatorjs");

export default class CartsController {
  // public async index({}: HttpContextContract) {}

  // public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    let payload = request.only(["user_id", "product_id", "quantity"]);
    let { user_id, product_id, quantity } = payload;
    let rules: any = {
      user_id: "required|integer",
      product_id: "required|integer",
      quantity: "required|integer|min:1",
    };

    const validation = new Validator(payload, rules);

    if (validation.fails()) {
      return response.badRequest(validation.errors.errors);
    }
    try {
      let items: any = await Product.query()
        .where("id", "=", product_id)
        .first();
      await Cart.create({
        quantity: quantity,
        price: items.price,
        user_id: user_id,
        product_id: product_id,
      });
      return response.ok({ message: "Added to Cart Successfully" });
    } catch (err) {
      return response.internalServerError({ message: "Internal server error" });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    let cart = await user.listingCart(params);
    return response.ok({ data: cart });
  }

  // public async edit({}: HttpContextContract) {}

  // public async update({}: HttpContextContract) {}

  // public async destroy({}: HttpContextContract) {}
}
