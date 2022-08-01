import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Order from "./Order";

export default class user extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken?: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public mob_no: String;

  @column()
  public full_name: String;

  @column()
  public gender: String;

  @column()
  public alternate_no: String;

  @beforeSave()
  public static async hashPassword(user: user) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @hasMany(() => Order, {
    foreignKey: "user_id",
  })
  public order: HasMany<typeof Order>;

  public static async listing(params) {
    let id = params.id;
    let query = this.query();
    return query
      .preload("order", (query) => {
        query.preload("meta_order", (query) => {
          query.preload("product");
        });
      })
      .where("id", id);
  }
}
