import { Heading } from "@/components/ui";
import { FormInput } from "@/components/ui";
import {router} from '@inertiajs/react';

export default function LoginForm({headingLevel = 1}) {
    const handleSubmit=(event)=>{
        event.preventDefault()
        router.get('/auth/login')       
    }

    return    <>
    <section>
            <Heading level={headingLevel}>Iniciar Sesión</Heading>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="Usuario:"
                id="username" 
                type="text" 
                placeholder="Usuario" 
                name="username" 
                autoFocus 
                required/>
                <FormInput 
                label="Contraseña:"
                type="password"
                pwdIsVisibleContent={<li className="iconoir-eye"></li>}
                pwdIsNotVisibleContent={<li className="iconoir-eye-closed"></li>}
                name="userpwd" 
                required/>
                <button type="submit" title="Click para iniciar sesión">Iniciar</button>
            <button type="reset" title="Click para limpiar el formulario">Limpiar</button>
            </form>
        </section>
    </>;
}