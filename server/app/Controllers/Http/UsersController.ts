import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import user from "App/Models/user";
const Validator = require("validatorjs");

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const user_data = await user.all();
      response.ok({ data: user_data });
    } catch (err) {
      response.badRequest({ message: "Internal Server Error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.body();
      const rules: any = {
        email: "required|email",
        password: "required",
        mob_no: "required|numeric|digits:10",
        full_name: "required|string|max:30",
        gender: "required",
        alternate_no: "numeric|digits:10",
      };

      const validation = new Validator(data, rules);

      if (validation.fails()) {
        return response.badRequest(validation.errors.errors);
      }

      let create_user = await user.create(data);

      return response.ok({ data: create_user });
    } catch (err) {
      response.internalServerError({ message: "Internal Server Error" });
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
