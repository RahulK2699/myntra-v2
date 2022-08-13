import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Product from "./Product";

export default class Wishlist extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public user_id: Number;

  @column()
  public product_id: Number;

  @belongsTo(() => Product, {
    foreignKey: "product_id",
  })
  public products: BelongsTo<typeof Product>;
}
