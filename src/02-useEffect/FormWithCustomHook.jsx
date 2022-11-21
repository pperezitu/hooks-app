import { Fragment, useEffect, useState } from "react"

export const FormCustomHooks = () => {

    //const [formState, setFormState] = useState({
    //    username: '',
    //    email: '',
    //    password: ''
    //})

    useEffect( () => {
        // console.log('useEffect called!')
    }, []);

    useEffect( () => {
        // console.log('formState change!')
    }, [formState]);

    useEffect( () => {
        // console.log('email change!')
    }, [email]);

    return(
        <Fragment>
            <h1>Formulario con custom Hooks</h1>
            <hr />
            <form action="" className="">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                <input 
                    type="text" 
                    className="form-control mt-3"
                    placeholder="pedro@space-x.com"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />

                <input 
                    type="text"
                    className="form-control mt-3"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={onInputChange}>
                </input>
                
            </form>
            
        </Fragment>

        
    )
}