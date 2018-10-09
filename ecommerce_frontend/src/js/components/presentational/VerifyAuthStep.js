import React from 'react'
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button'
import InputText from './InputText'


const VerifyAuthStep = (props) => {

    const fieldValidate = (e) => {
        e.preventDefault()
        let target = e.target
        const name = target['name'].value
        const email = target['email'].value
        const password = target['password'].value

        props.onValidate(companyCode,enrollment,password).then(() => {
            target.reset()
        })
    }

    return (
       <div className="login-wrapper">
           <div className="login-box company-logo">
               <form onSubmit={fieldValidate}>

                    <div className="step-form">
                        <header className="step-title">
                            <p>
                                Olá, que bom te ver por aqui!<br/>
                                Faça o cadastro e prossiga com as compras!
                            </p>
                        </header>
                        <section className="step-container">
                            <div className="step-controls">
                                <InputText id="company_code" label="Digite o seu nome" className="full-width"
                                           error={props.errors && props.errors.name !== undefined}
                                           helperText={props.errors ? props.errors.name : ''}
                                           defaultValue={props.name}
                                />
                                <InputText id="enrollment" label="Digite seu email" className="full-width"
                                           error={props.errors && props.errors.email !== undefined}
                                           helperText={props.errors ? props.errors.email : ''}
                                           defaultValue={props.email}
                                />
                                <InputText id="password" label="Digite sua senha" type="password" hideValue={true} className="full-width"
                                           error={props.errors && props.errors.password !== undefined}
                                           helperText={props.errors ? props.errors.password : ''}  />
                            </div>
                        </section>
                        <div className="step-button-center">
                            <Button type="submit" color="primary" variant="raised">
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                </form>
           </div>
       </div>
    )
}

VerifyAuthStep.propTypes = {
    errors: PropTypes.object,
    user: PropTypes.object.isRequired,
    onValidate: PropTypes.func.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
}

export default VerifyAuthStep
