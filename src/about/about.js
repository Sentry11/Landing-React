
import imgMasthead from '../assets/img/Masthead.png'
import '../style.css'

const About = () => {
    return (
        <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8">
                    <h2 className="text-white mb-4">Moments</h2>
                    <p className="text-white-50">
                    Below are some of the events and characters that will remain forever both in memory and in the soul of every Ukrainian
                    </p>
                </div>
            </div>
            <img className="img-fluid" src={imgMasthead } alt="..." />
        </div>
    </section>
    )
}

export default About;