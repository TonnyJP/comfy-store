import {FormInput, SubmitBtn} from "../components";
import { Form, Link } from 'react-router-dom'

export const Login = () => {
    
    return(
        <section className="h-screen grid place-items-center">
            <Form methode="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">login</h4>
                <FormInput 
                  type="email" 
                  label="Email" 
                  name="identifier" 
                  defaultValue="test@test.com" 
                />
                <FormInput
                  type="password"
                  label="password"
                  name="password"
                  defaultValue="password"
                />
                <div className="mt-4">
                    <SubmitBtn type="submit" text={"login"} styleClass="btn btn-primary btn-block"/>
                </div>
                <div className="mt-4">
                    <SubmitBtn type="button" styleClass="btn btn-secondary btn-block" text="guest user"/>
                    <p className="text-center mt-4">
                        Not a member yet? <Link to="/register" className="ml-2 link link-hover link-secondary capitalize">register</Link>
                    </p>
                </div>
            </Form>
        </section>
    )
}