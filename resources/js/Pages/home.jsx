import styles from '../../css/Pages/home.module.css';
import { Head } from "@inertiajs/react";
export default function Login() {
    return (
        <>
    <header class="main-header">
        <nav className={styles.navigation_bar}>
            <span>
            <a className={styles.brand_link} href="/" title="Ir a la página principal">
                <img className={styles.img} src="https://static.vecteezy.com/system/resources/previews/009/100/350/non_2x/burger-restaurant-logo-template-with-isolated-background-vector.jpg" alt="Logo del restaurante." width="40" height="40"
                    loading="lazy"/>
                <span className={styles.span}>Restaurante</span>
            </a>
            </span>
            <span className={styles.home}>
                <a href='/login'>Iniciar Sesión</a>
                <a href='/register'>Registro</a>
            </span>
        </nav>
    </header>
    <main>
    <Head title='Restaurante' />
    </main>
        </>
    );
}
