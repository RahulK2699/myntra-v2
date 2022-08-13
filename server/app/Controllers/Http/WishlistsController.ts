import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import user from "App/Models/user";
import Wishlist from "App/Models/Wishlist";

export default class WishlistsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const data = await user.query().preload("wishlist", (query) => {
        query.preload("products");
      });
      response.ok({ data });
    } catch (error) {
      response.internalServerError({ message: "Internal Server Error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const { product_id, user_id } = request.all();
      const data = await Wishlist.create({
        product_id: product_id,
        user_id: user_id,
      });

      response.ok({ data: data });
    } catch (error) {
      response.internalServerError({ message: "Internal Server Error" });
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
