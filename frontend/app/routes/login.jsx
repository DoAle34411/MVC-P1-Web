// frontend/routes/login.jsx
import { Form, useActionData, useNavigation } from "@remix-run/react"; 
import { redirect } from "@remix-run/node"; 
import { getSession, commitSession } from "../utils/auth";
import { useEffect } from "react";
import styles from "../styles/generalStyles.module.css";

export default function Login() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.redirectTo) {
      window.location.href = actionData.redirectTo;
    }
  }, [actionData]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>Inicio de Sesión</div>
        <Form method="post" action="/login" className={styles.form}>
          <div className={styles.formGroup}>
            <label>Correo Electrónico:</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label>Clave:</label>
            <input type="password" name="password" />
          </div>
          <button type="submit" disabled={isSubmitting} className={`${styles.customButton} ${styles.btn3}`}>
            {isSubmitting ? "Iniciando sesión..." : "Login"}
          </button>
        </Form>
        <label>¿No tienes cuenta?</label>
        <a href="/register" >
            <button className={`${styles.customButton} ${styles.btn3}`}><span>Registrate</span></button>
        </a>
        {actionData?.error && <p className="error text-red-500">{actionData.error}</p>}
      </div>
    </div>
  );
}

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return redirect("/home"); // Redirect to home if authenticated
  }
  return null; // Allow access to login page if not authenticated
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json(); 

    if (!response.ok) {
      return { error: responseData.message || 'Login failed' };
    }

    const session = await getSession(request.headers.get("Cookie"));
    session.set("userId", responseData.userId);

    return redirect("/home", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });

  } catch (err) {
    return { error: "An unexpected error occurred. Please try again later." };
  }
};
