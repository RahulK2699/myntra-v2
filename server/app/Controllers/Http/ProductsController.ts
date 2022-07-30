import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";

export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    let products = await Product.listing(request);
    return response.ok({ data: products });
  }

  public async store(ctx) {
    return await this.save(ctx);
  }

  public async update(ctx) {
    let product = await Product.query().where("id", ctx.params.id).first();
    return await this.save(ctx, product);
  }

  public async save({ request, response }, record = null) {
    let product: any = record;
    let payload = request.body();
    if (product === null) {
      product = new Product();
    }

    (product.image_url = payload.image_url),
      (product.brand_name = payload.brand_name),
      (product.type_of_shirt = payload.type_of_shirt),
      (product.price = payload.price),
      (product.rating = payload.rating),
      (product.color = payload.color),
      (product.discount = payload.discount),
      (product.category_id = payload.category_id),
      await product.save();
    return response.ok({ message: "Successfully updated/created" });
  }

  public async show({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
