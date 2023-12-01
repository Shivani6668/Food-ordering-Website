import { useRouteError } from "react-router-dom"

const Error=()=>{
    const err = useRouteError();

    return(
        <>
        <h1>oooppppsss error</h1>
        <h1>{err.status}</h1>
        </>
    )
}
export default Error