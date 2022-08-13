import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "wishlists";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
      table.integer("user_id").unsigned().references("users.id");
      table.integer("product_id").unsigned().references("products.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
