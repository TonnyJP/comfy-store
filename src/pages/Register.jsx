import {Form, Link} from "react-router-dom"
import {FormInput, SubmitBtn} from "../components"

export const Register = () => {
    
    return<section className="h-screen grid place-items-center">
        <Form
         method="POST"
         className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y4"
        >
            <h4 className="text-center text-3xl font-bold">Register</h4>
            <FormInput type="text" label="username" name="username" />
            <FormInput type="email" label="email" name="email" />
            <FormInput type="password" label="password" name="password" />
            <div className="mt-4">
                <SubmitBtn text="register" />
            </div>
            <div className="mt-4">
                    <SubmitBtn type="button" styleClass="btn btn-secondary btn-block" text="guest user"/>
                    <p className="text-center mt-4">
                        Not a member yet? <Link to="/register" className="ml-2 link link-hover link-secondary capitalize">
                        register
                        </Link>
                    </p>
                </div>
        </Form>
    </section>
}