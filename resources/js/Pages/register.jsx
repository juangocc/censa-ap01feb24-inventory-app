import styles from '../../css/Pages/register.module.css';
import { Head } from "@inertiajs/react";
import RegisterForm from "@/components/auth/register-form";
export default function Login() {
    return (
        <>
            <Head title='Registro' />
            <main className={styles.register}>
                <RegisterForm />
            </main>
        </>
    );
}
