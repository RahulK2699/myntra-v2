import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Category";
export default class CategoriesController {
  public async index({ request, response }: HttpContextContract) {
    let category = await Category.listing(request);
    return response.ok({ data: category });
  }

  public async store(ctx) {
    await this.save(ctx);
  }

  public async update(ctx) {
    let category = await Category.query().where("id", ctx.params.id).first();
    return await this.save(ctx, category);
  }

  async save({ request, response }, record = null) {
    let category: any = record;
    let payload = request.only(["category_name"]);

    if (category === null) {
      category = new Category();
    }

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
  }

  public async show({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
