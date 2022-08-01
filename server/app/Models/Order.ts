import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import MetaOrder from "./MetaOrder";
import user from "./user";

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public user_id: Number;

  @column()
  public discount: string;

  @column()
  public sub_total: string;

  @column()
  public tax: string;

  @column()
  public total: string;

  @hasMany(() => MetaOrder, {
    foreignKey: "order_id",
  })
  public meta_order: HasMany<typeof MetaOrder>;

  @belongsTo(() => user, {
    foreignKey: "user_id",
  })
  public users: BelongsTo<typeof user>;

  public static async listing(request) {
    let { search_key ,id} = request.qs();
    console.log(search_key);

    let query = this.query();

    if(id){
      query = query.where('user_id','=',id)
    }

    return query.preload("meta_order").preload("users");
  }
}
