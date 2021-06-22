import React, {Component} from 'react';

// data
import AdPreviewList from "../data/AdPreviewList";

// components
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0"> Home <small className="font-weight-light">Tools</small></h1>
                            </div>

                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/">Tools</Link></li>
                                    <li className="breadcrumb-item active">Home</li>
                                </ol>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="content">
                    <div className="container">

                        <div className="row">
                            {AdPreviewList.map(toolCard =>
                                toolCard.show ?
                                    <div key={toolCard.id} className="col-sm-4 col-md-6 col-lg-4 mb-3">
                                        <Link to={"/"+toolCard.link}>
                                            <div className={"position-relative p-3 "+toolCard.cardClass} style={{height:'130px'}}>
                                                <div className="ribbon-wrapper ribbon-lg">
                                                    <div className="ribbon bg-white text-lg shadow">
                                                        {toolCard.socialTitle}
                                                    </div>
                                                </div>

                                                <div style={{width:'95%'}}>
                                                    {toolCard.title}
                                                    <hr className="bg-white z-depth-1 my-2"/>
                                                    <small>{toolCard.description}</small>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>:null
                            )}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;