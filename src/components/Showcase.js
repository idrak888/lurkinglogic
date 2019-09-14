import React from 'react';

const Showcase = props => {
    return (
        <div className="Showcase">
            <h2>{props.name}</h2>
            <p>{props.function}</p>
            <div className="row">
                <div className="col-sm-6">
                    <img src={require(`../images/${props.code.toLowerCase()}.png`)}/>
                </div>
                <div className="col-sm-6">
                    <img src={require(`../images/${props.output.toLowerCase()}.png`)}/>

                    <div className="links">
                        <button>Try it out</button> <button><img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg"/> View code</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;