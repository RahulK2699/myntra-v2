import { test } from "@japa/runner";

// test("display welcome page", async ({ client }) => {
//   const response = await client.get("/");

//   response.assertStatus(200);
//   response.assertBodyContains({ hello: "world" });
// });

// test.group("List users", () => {
//   test("get a paginated list of users", async ({ client }) => {
//     const response = await client.get("/user");
//     console.log(response.body());
//   });
// });

// test.group("List categories", () => {
//   test("get a  list of categories", async ({ client }) => {
//     const response = await client.get("/category");
//      console.log(response.body());
//   });
// });

// test.group("Single categories", () => {
//   test("get a single category", async ({ client }) => {
//     const response = await client.get("/category/2");
//      console.log(response.body());
//   });
// });

test.group("list of Orders", () => {
  test("get orders", async ({ client }) => {
    const response = await client.get("/orders");
     console.log(response.body());
  });
});

// test.group("Create a category", () => {
//   test("get orders", async ({ client ,assert}) => {
//     assert.plan(2)
//     try{
//       const response = await client.post("/category").json({
//         "category_name":"men"
//       });
//       console.log(response.body());
//       response.assertStatus(400);
//       response.assertBody({
//         "message": "Category already exists"
//     });
//     }catch(err){
//       assert.equal(500, 500);
//       assert.equal(err, '{"message":"Internal server error"}');
//     }
//   });
// });

// test.group("creating Orders", () => {
//   test("post order", async ({ client, assert }) => {
//     assert.plan(2);

//     try {
//       const response = await client.post("/orders").json({
//         user_id: "",
//         products: [
//           {
//             product_id: 2,
//             quantity: 1,
//           },
//           {
//             product_id: 3,
//             quantity: 1,
//           },
//         ],
//       });
//       response.assertStatus(200);
//       response.assertBody({
//         message: "Order created/updated successfully",
//       });
//     } catch (err) {
//       assert.equal(500, 500);
//       assert.equal(err, '{"message":"Internal server error"}');
//     }
//   });
// });
