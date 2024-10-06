// frontend/routes/register.jsx
import { Form, useActionData, useNavigation } from "@remix-run/react";  
import { redirect } from "@remix-run/node"; 
import { getSession } from "../utils/auth";
import { useEffect } from "react";

export default function Register() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.redirectTo) {
      window.location.href = actionData.redirectTo;
    }
  }, [actionData]);

  return (
    <div className="register-container">
      <h1>Register</h1>
      {actionData?.error && <p className="error text-red-500">{actionData.error}</p>}
      <Form method="post" className="flex flex-col space-y-4">
        <label>Cedula: <input type="text" name="cedula" required className="input" /></label>
        <label>Email: <input type="email" name="email" required className="input" /></label>
        <label>Name: <input type="text" name="name" required className="input" /></label>
        <label>Last Name: <input type="text" name="lastName" required className="input" /></label>
        <label>Birth Date: <input type="date" name="birthDate" required className="input" /></label>
        <label>Phone Number: <input type="tel" name="phoneNumber" required className="input" /></label>
        <label>Password: <input type="password" name="password" required className="input" /></label>
        <label>Gender: 
          <select name="gender" required className="input">
            <option value="">Select Gender</option>
            <option value="male">Femenino</option>
            <option value="female">Masculino</option>
          </select>
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </Form>
    </div>
  );
}

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return redirect("/home"); // Redirect to home if authenticated
  }
  return null; // Allow access to register page if not authenticated
};
