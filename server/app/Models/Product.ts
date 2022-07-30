import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

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
}
