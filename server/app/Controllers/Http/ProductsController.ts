import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";
const Validator = require("validatorjs");
export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    let products: any = await Product.listing(request);
    return response.ok({ data: products });
  }

  public async store(ctx) {
    return this.save(ctx, null);
  }

  public async update(ctx) {
    let product: any = await Product.query().where("id", ctx.params.id).first();
    return this.save(ctx, product);
  }

  public async save({ request, response }, record) {
    let payload = request.only([
      "image_url",
      "brand_name",
      "type_of_shirt",
      "price",
      "rating",
      "color",
      "discount",
      "category_id",
    ]);

    let rules: any = {
      image_url: "url|required",
      brand_name: "required|string|max:50",
      type_of_shirt: "required|string|max:50",
      price: "required",
      rating: "required|integer|min:0",
      color: "required|string|max:15",
      discount: "string",
      category_id: "required|integer",
    };

    const validation = new Validator(request.all(), rules, {
      regex: "The price must be zero or more",
    });

    if (validation.fails()) {
      return response.badRequest(validation.errors.errors);
    }

    let product: any = record;
    if (product === null) {
      product = new Product();
    }

    try {
      product.image_url = payload.image_url;
      product.brand_name = payload.brand_name;
      product.type_of_shirt = payload.type_of_shirt;
      product.price = payload.price;
      product.rating = payload.rating;
      product.color = payload.color;
      product.discount = payload.discount;
      product.category_id = payload.category_id;
      await product.save();
      return response.ok({ message: "Successfully updated/created" });
    } catch (err) {
      return response.internalServerError({ message: "Internal server error" });
    }
  }

  public async show(ctx) {
    let { product } = ctx.request;
    return { data: product };
  }

  public async destroy(ctx) {
    let { product } = ctx.request;
    await product.delete();
    return { message: "product deleted successfully" };
  }
}
