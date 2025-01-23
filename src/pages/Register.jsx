import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const data = Object.fromEntries(formdata);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Registration Success");
    return redirect("/login");
  } catch (error) {
    const errorMsg =
      error?.response?.data?.error?.message || "please check your credintials";
    toast.error(errorMsg);
  }
};
export default function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 "
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          label="username"
          type="text"
          name="username"
          defaultValue="james smith2"
        />
        <FormInput
          label="email"
          type="email"
          name="email"
          defaultValue="james2@gmail.com"
        />
        <FormInput label="password" type="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/Login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}
