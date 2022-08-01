import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Product from "./Product";

export default class MetaOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime()
  public updatedAt: DateTime;

  @column()
  public order_id: Number;

  @column()
  public product_id: Number;

  @column()
  public quantity: Number;

  @column()
  public price: string;

  @belongsTo(() => Product, {
    foreignKey: "product_id",
  })
  public product: BelongsTo<typeof Product>;
}
