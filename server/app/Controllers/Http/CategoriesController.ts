import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Category";
const Validator = require("validatorjs");
export default class CategoriesController {
  public async index({ request, response }: HttpContextContract) {
    let category = await Category.listing(request);
    return response.ok({ data: category });
  }

  public async store(ctx) {
    return this.save(ctx, null);
  }

  public async update(ctx) {
    let { category } = ctx.request;
    return this.save(ctx, category);
  }

  async save({ request, response }, record) {
    let payload = request.only(["category_name"]);

    let rules: any = {
      category_name: "required|string|max:20",
    };

    let validation = new Validator(request.body(), rules);

    if (validation.fails()) {
      return response.badRequest(validation.errors.errors);
    }
    let category: any = record;

    if (category === null) {
      category = new Category();
    }

    try {
      let categoryExists = await Category.query()
        .where("category_name", payload.category_name)
        .first();

      if (categoryExists && categoryExists?.id !== category.id) {
        if (
          categoryExists.category_name.toLowerCase() ===
          payload.category_name.toLowerCase()
        ) {
          return response.badRequest({ message: "Category already exists" });
        }
      }

      category.category_name = payload.category_name;
      await category.save();
      return response.ok({ message: "Category created/updated sucessfully" });
    } catch (err) {
      console.log(err);
      return response.internalServerError({ message: "Internal server error" });
    }
  }

  public async show(ctx) {
    let { category } = ctx.request;
    return { data: category };
  }

  public async destroy({ request, response }: HttpContextContract) {
    let { category }: any = request;
    try {
      await category.delete();
      return response.ok({ message: "Deleted successfully" });
    } catch (err) {
      return response.internalServerError({ message: "Internal server error" });
    }
  }
}
