
import Scrollspy from 'react-scrollspy'
import '../style.css'

const Navigation = () => {
  

    return(
   
      
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    
        <div className="container px-4 px-lg-5">
<a className="navbar-brand" href="#page-top">Home</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu 
                <i className="fas fa-bars"></i>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarResponsive">
           
                 {/* <ul className="navbar-nav ms-auto">  */}
                 <Scrollspy className="navbar-nav ms-auto" id = "scrollUl"  items = {['about', 'projects', 'signup']} currentClassName = " nav-link active">
                    <a className="nav-link" href="#about">About</a>
                    <a className="nav-link" href="#projects">Moments</a>
                    <a className="nav-link" href="#signup">Contact</a>
                   </Scrollspy>
                 {/* </ul>  */}

             </div>
        
            </div>
            <div>
            </div>
            
         </nav>
         
);

}

export default Navigation;