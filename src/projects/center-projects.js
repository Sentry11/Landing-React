

import '../style.css'

const CenterProjects = (props) => {

const {img, title, desc} = props;




return(
<div className="row gx-0 mb-4 mb-lg-5 align-items-center">
<div className="col-xl-8 col-lg-7">

    <img className="img-fluid mb-3 mb-lg-0" src={img} alt="..." /> 
    </div>
<div className="col-xl-4 col-lg-5">
    <div className="featured-text text-center text-lg-left">
        <h4> {title}</h4>
        <p className="text-black-50 mb-0">{desc}</p>
    </div>
</div>
</div>
)
}

export default CenterProjects;