import {Heading, FormInput, Button} from '@/components/ui';
import styles from './index.module.css'
export default function LoginForm({headingLevel = 1}) {
    return    <>
        <section className={styles.section}>
            <Heading level={headingLevel}>Inicias Sesión</Heading>
            <form>
                <FormInput label='Usuario:' required/>
                <FormInput label='Contraseña:' type='password' required/>
                <Button type='submit'>Ingresar</Button>
            </form>
        </section>
    </>;
}