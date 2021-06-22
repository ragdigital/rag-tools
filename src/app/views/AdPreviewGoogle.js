import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AdPreviewList from "../data/AdPreviewList";
import * as TiIcons from "react-icons/ti";
import AutosizeInput from 'react-input-autosize';
import logo from '../../assets/images/google-logo.png';

class AdPreviewGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headline1:'',
            headline2:'',
            headline3:'',
            logo: '',
            logoPreviewUrl: '',
            path:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    handleImageChange(e) {
        let reader = new FileReader();
        let logo = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                logo: logo,
                logoPreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(logo);
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0"> Ad Preview Google <small className="font-weight-light">Tools</small></h1>
                            </div>

                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/">Tools</Link></li>
                                    <li className="breadcrumb-item active">Ad Preview Google</li>
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
                                    <div className="card direct-chat shadow-none bg-transparent mx-auto google-card" style={{width:'600px'}}>
                                        <div className="card-header pr-1 border-0 d-none">
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" title="Options" data-widget="chat-pane-toggle">
                                                    <TiIcons.TiCogOutline size={'20px'} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div className="z-depth-1 card-content d-none d-md-block">
                                            <div className="bg-white p-3">
                                                <div className="card-header p-0 border-bottom-0" style={{width:'570px'}}>

                                                    <div>
                                                        <AutosizeInput
                                                            name="headline1"
                                                            inputClassName={"headline"}
                                                            value={this.state.headline1}
                                                            onChange={this.handleChange}
                                                            placeholder={"Headline 1"}
                                                            maxLength={32}
                                                        />
                                                        <span style={{fontSize:'19px'}}>|</span>
                                                        <AutosizeInput
                                                            name="headline2"
                                                            inputClassName={"headline"}
                                                            value={this.state.headline2}
                                                            onChange={this.handleChange}
                                                            placeholder={"Headline 2"}
                                                            maxLength={32}
                                                        />
                                                        <span style={{fontSize:'19px'}}>|</span>
                                                        <AutosizeInput
                                                            name="headline3"
                                                            inputClassName={"headline"}
                                                            value={this.state.headline3}
                                                            onChange={this.handleChange}
                                                            placeholder={"Headline 3"}
                                                            maxLength={32}
                                                        />
                                                    </div>

                                                    <label className="mr-3">
                                                        <i className="fas fa-edit icon-img img-circle img-thumbnail z-depth-1"/>
                                                        {/*eslint-disable-next-line*/}
                                                        <img src={this.state.logoPreviewUrl ? this.state.logoPreviewUrl: logo} className="img-fluid" name="logo"  alt="" style={{width:'25px'}}/>
                                                        <input type="file" size="60" onChange={e => this.handleImageChange(e)} />
                                                    </label>
                                                    <input type="text" placeholder={"Add website path"} className="pathPage" maxLength={32}
                                                           name='path' onChange={this.handleChange} />

                                                </div>

                                                <div className="card-body border-top">
                                                    z
                                                </div>
                                            </div>
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

export default AdPreviewGoogle;