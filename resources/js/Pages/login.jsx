import styles from '../../css/Pages/login.module.css';
import { Head } from "@inertiajs/react";
import LoginForm from "@/components/auth/login-form";
export default function Login() {
    return (
        <>
            <Head title='Inicio de Sesión' />
            <main className={styles.login}>
                <LoginForm />
            </main>
        </>
    );
}
