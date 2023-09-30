import {Link, useRouteError} from "react-router-dom"

export const Error = () => {
    const error = useRouteError();
    console.log(error)
    
    return(
        <main className="grid min-h-[100vh] place-items-center px-8">
            <div className="text-center">
                <p className="text-9xl font-semibold text-primary">{error.status}</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{error.statusText}</h1>
                <p className="mt-6 text-lg leading-7">Sorry, we couldn't find the page you're looking for.</p>
                <div className="mt-10">
                    <Link to="/" className="btn btn-secondary">
                        go back home
                    </Link>
                </div>
            </div>
        </main>
    )
}