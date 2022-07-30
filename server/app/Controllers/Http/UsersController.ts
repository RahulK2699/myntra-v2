import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import user from "App/Models/user";
const Validator = require("validatorjs");

export default class UsersController {
  public async index({}: HttpContextContract) {}

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
        return response.badRequest({
          message: "No  registered user found for this email",
        });
      }

      let create_user = await user.create(data);

      return { create_user };
    } catch (err) {
      response.internalServerError({ message: "Internal Server Error" });
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
