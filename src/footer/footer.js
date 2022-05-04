

import '../style.css'

const d = new Date();
const currentYear = d.getFullYear(); 


const Footer = () => {

    return(
        <footer className="footer bg-black small text-center text-white-50 "><div className="container px-4 px-lg-5 sizefoot">Copyright &copy; Sentry_11 All Rights Reserved {currentYear}</div></footer>
    )
}

export default Footer;