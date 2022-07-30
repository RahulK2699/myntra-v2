import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import user from "App/Models/user";
import Hash from "@ioc:Adonis/Core/Hash";

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    try {
      const { email, password } = request.all();

      console.log(email, password);

      const isUser = await user.query().where("email", "=", email).first();

      if (!isUser) {
        return response.badRequest({
          message: "No registeation found for this Email or Phone Number",
        });
      }
      if (!(await Hash.verify(isUser.password, password))) {
        return response.unauthorized("Invalid credentials");
      }

      const token = await auth.use("api").generate(isUser, {
        expiresIn: "12hrs",
      });

      const data = {
        id: isUser?.id,
        full_name: isUser?.full_name,
        email: isUser?.email,
        gender: isUser?.gender,
        mob_no: isUser?.mob_no,
        alternate_no: isUser?.alternate_no,
        token,
      };
      //console.log("data", data);
      return response.ok({ data });
    } catch (err) {
      console.log(err);
      return response.internalServerError({ message: "Internal Server Error" });
    }
  }
}
