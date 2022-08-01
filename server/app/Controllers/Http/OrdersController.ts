import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import MetaOrder from "App/Models/MetaOrder";
import Order from "App/Models/Order";
// import Order from "App/Models/Order";
import Product from "App/Models/Product";

import { calculate } from "../../../helpers/calculation";

export default class OrdersController {
  public async index({ request, response }: HttpContextContract) {
    try {
      let order = await Order.listing(request);
      if (!order) return response.notFound({ message: "No data found.." });
      return response.ok({ data: order });
    } catch (err) {
      return response.internalServerError({ message: "Internal server error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      let user = request.body().user_id
      let order = new Order();
      let products = request.body().products;
      products = await Promise.all(
        products.map(async (item) => {
          const product: any = await Product.query()
            .where("id", item.product_id)
            .first();
          const sub_total = product.price * item.quantity;
          item.sub_total = sub_total;
          item.price = product.price;
          return item;
        })
      );

      const { sub_total, tax, final_total } = await calculate(products);

      order.user_id = user;
      order.sub_total = sub_total;
      order.total = final_total;
      order.tax = tax;
      order.discount = "0";
      await order.save();

      for (let product of products) {
        await MetaOrder.create({
          order_id: order.id,
          product_id: product.product_id,
          quantity: product.quantity,
          price: product.price,
        });
      }
      return response.ok({ message: "Order created/updated successfully" });
    } catch (err) {
      return response.internalServerError({ message: "Internal server error" });
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      let order = await Order.listing(request);
      if (!order) return response.notFound({ message: "No data found.." });
      return response.ok({ data: order });
    } catch (err) {
      return response.internalServerError({ message: "Internal server error" });
    }
  }

  // public async edit({}: HttpContextContract) {}

  // public async update({}: HttpContextContract) {}

  // public async destroy({}: HttpContextContract) {}
}
