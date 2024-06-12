
function Authchek(Component) {
    const isAuthcheck = true;
    return (
        (props) => {
            if (isAuthcheck) {
                return <Component {...props} />
            }
            else {
                return <Login />
            }

        }
    )
}

function Login() {
    return (
        <h1>This is Login coponent</h1>
    )
}
function User(props) {
    return (
        <>
            <h1>This is User coponent</h1>
            <p>Hello {props.name}</p>
        </>
    )
}
let AuthChecked = Authchek(User)

function HighOrderComponent(Component) {
    return (


        <AuthChecked  name={"vinay"}/>

    )
}
export default HighOrderComponent