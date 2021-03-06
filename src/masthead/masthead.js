

import '../style.css'

const Masthead = () => {
    return(
<header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Glory to Ukraine</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">This website was created to develop myself as a web developer while there is a war going on my land </h2>
                        <a className="btn btn-primary" href="#about">Show moments</a>
                    </div>
                </div>
            </div>
        </header>
    )

}


export default Masthead;