import React from 'react'

const Collaps = (props) => {

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#".concat(props.collapsHref)} aria-expanded="true" aria-controls="collapseOne">
                        {props.collapsTitle}
                    </button>
                </h2>
                <div id={props.collapsHref} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {props.children}
                    </div>
                </div>
            </div>
            
        </div>

    )

}
export default Collaps;
