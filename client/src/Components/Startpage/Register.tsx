const loginWrapper = "bg-black flex rounded-sm max-w-sm h-80 w-80 md:w-96 md:h-96 m-auto flex-col justify-center items-center p-2";
const inputStyle = "text-white h-12 w-38 md:h-16 md:w-56 lg:w-72 border-2 border-white bg-black my-2 p-2 placeholder-white";
const signupLink = "text-white border-2 border-white my-2 bg-black p-2";
const linkStyle = "text-white";

const Register = () => {

    return (
        <div>
            <div className={loginWrapper}>
                <form>
                    <div>
                        <input
                            className={inputStyle}
                            placeholder="Name..."
                        />
                    </div>
                    <div>
                        <input
                            className={inputStyle}
                            placeholder="Email..."
                        />
                    </div>
                    <div>
                        <input
                            className={inputStyle}
                            placeholder="Password..."
                        />
                    </div>
                    <button></button>
                </form>
            </div>
        </div>
    )
}

export default Register;