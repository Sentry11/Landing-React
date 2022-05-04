
import './navigation/navigation';
import Navigation from './navigation/navigation';
import Masthead from './masthead/masthead';
import About from './about/about';
import Projects from './projects/projects';
import Signup from './signup/signup';
import Contact from './contact/contact';
import Footer from './footer/footer';



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    // Shrink the navbar 
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
 
});


const App = () => {
        return (
            <div className='App'>
                <Navigation/>
                <Masthead/>
                <About/>
                <Projects/>
                <Signup />
                <Contact/>
                <Footer/>
            </div>
         )

}

export default App;
