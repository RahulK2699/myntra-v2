import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public category_name: String;

  public static async listing(request) {
    let { search_key, page, limit } = request.qs();
    if (!page) {
      page = 1;
    }
    let query = this.query();

    if (search_key) {
      query = query.where("category_name", "like", `%${search_key}%`);
    }

    return query.select("category_name", "id").paginate(page, limit);
  }
}
