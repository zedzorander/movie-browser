import Hero from "./Hero";

const PageNotFound = () => {
    return (
        <>
            <Hero text="Error 404. Page Not Found" backdrop="https://image.freepik.com/free-vector/warning-yellow-black-colors_1017-30754.jpg"></Hero>
            
            <div className="container">
                <div className="row my-5">
                    <img src="https://i.imgur.com/121qYoz.jpg" alt="bender"/>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;