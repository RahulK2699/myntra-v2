import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Category from "./Category";

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public image_url: String;

  @column()
  public brand_name: String;

  @column()
  public type_of_shirt: String;

  @column()
  public price: String;

  @column()
  public discount: String;

  @column()
  public category_id: Number;

  @column()
  public color: String;

  @column()
  public rating: String;

  @belongsTo(() => Category, {
    foreignKey: "category_id",
  })
  public category: BelongsTo<typeof Category>;

  public static async listing(request) {
    let {
      search_key,
      category,
      color,
      brand,
      price_from,
      price_to,
      page,
      limit,
    } = request.qs();

    let query = this.query();

    if (search_key) {
      query = query.where("brand_name", "like", `%${search_key}%`);
    }

    if (category) {
      query = query.where("category_id", "=", category);
    }

    if (color) {
      query = query.where("color", "=", color);
    }

    if (brand) {
      query = query.where("brand_name", "=", brand);
    }

    if (price_from && price_to) {
      query = query.whereBetween("price", [price_from, price_to]);
    }

    return query.preload("category").paginate(page, limit);
  }
}
