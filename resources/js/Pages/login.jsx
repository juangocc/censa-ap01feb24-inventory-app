import { Head } from "@inertiajs/react";
import { LoginForm } from "@/components/auth";

export default function LoginPage() {
    return (
        <>
            <Head title='Inicio de Sesión' />
            <LoginForm headingLevel={1}/>
        </>
    );
}
