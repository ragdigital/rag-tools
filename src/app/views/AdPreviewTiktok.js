import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AdPreviewList from "../data/AdPreviewList";
import * as TiIcons from "react-icons/ti";

class AdPreviewTiktok extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0"> Ad Preview TikTok <small className="font-weight-light">Tools</small></h1>
                            </div>

                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/">Tools</Link></li>
                                    <li className="breadcrumb-item active">Ad Preview TikTok</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 text-center">
                                {AdPreviewList.map(toolCard =>
                                    toolCard.show ?
                                        <Link to={"/"+toolCard.link} className={"btn btn-app "+toolCard.cardClass} key={toolCard.id}>
                                            {toolCard.icon} <br/> {toolCard.socialTitle}
                                        </Link>:null
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9 mx-auto">
                                <div className="container4 bg-transparent">
                                    <div className="card direct-chat shadow-none bg-transparent mx-auto" style={{width:'500px'}}>
                                        <div className="card-header pr-1 border-0 d-none">
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" title="Options" data-widget="chat-pane-toggle">
                                                    <TiIcons.TiCogOutline size={'20px'} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div className="z-depth-1 card-content">

                                        </div>
                                        {/* End - Card */}

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdPreviewTiktok;