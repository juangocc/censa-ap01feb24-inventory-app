import {Heading, FormInput, Button} from '@/components/ui';
import styles from './index.module.css'
export default function RegisterForm({headingLevel = 1}) {
    return    <>
        <section className={styles.section}>
            <Heading level={headingLevel}>Registro</Heading>
            <form>
                <FormInput label='Usuario:' required/>
                <FormInput label='Contraseña:' type='password' required/>
                <FormInput label='Confirmar Contraseña:' type='password' required/>
                <Button type='submit'>Registrarse</Button>
            </form>
        </section>
    </>;
}