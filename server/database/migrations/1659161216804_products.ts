import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string("image_url").notNullable();
      table.string("brand_name").notNullable();
      table.string("type_of_shirt").notNullable();
      table.string("price").notNullable();
      table.string("rating");
      table.string("color");
      table.string("discount");
      table
        .integer("category_id")
        .unsigned()
        .references("categories.id")
        .onDelete("cascade")
        .notNullable();
      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
