import React, {Component} from 'react';
import {Link} from "react-router-dom";

import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as TiIcons from 'react-icons/ti';
import * as MdIcons from 'react-icons/md';

import logoFace from '../../assets/images/logo-facebook.png';
import bgDefault from '../../assets/images/bg-default.jpg';

import DisplayDevicesList from "../data/DisplayDevicesList";
import AdPreviewList from "../data/AdPreviewList";

class AdPreviewFacebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 1,
            minRows: 1,
            maxRows: 10,
            logo: '',
            logoPreviewUrl: '',
            pageTitle: '',
            description: '',
            image: '',
            imagePreviewUrl: '',
            linkPage: '',
            titlePage: '',
            titleDescription: '',
            callAction: '',
            activeDevice: false,
            deviceName: '',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleLogoChange = this.handleLogoChange.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            activeDevice: !prevState.activeDevice
        }));
    }
    handleChangeTextarea = (e) => {
        const textareaLineHeight = 24;
        const { minRows, maxRows } = this.state;
        const previousRows = e.target.rows;
        e.target.rows = minRows; // reset number of rows in textarea
        const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);
        if (currentRows === previousRows) {
            e.target.rows = currentRows;
        }
        if (currentRows >= maxRows) {
            e.target.rows = maxRows;
            e.target.scrollTop = e.target.scrollHeight;
        }
        this.setState({
            description: e.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
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
        let image = e.target.files[0];

        if (image!=='' && image!==null) {
            if (image) {
                reader.onloadend = () => {
                    this.setState({
                        image: image,
                        imagePreviewUrl: reader.result
                    });
                };
                reader.readAsDataURL(image);
            }
        }
    }
    handleLogoChange(e) {
        let reader = new FileReader();
        let logo = e.target.files[0];

        if (logo!=='' && logo!==null) {
            if (logo) {
                reader.onloadend = () => {
                    this.setState({
                        logo: logo,
                        logoPreviewUrl: reader.result
                    });
                };
                reader.readAsDataURL(logo);
            }
        }
    }

    render() {
        const {
            activeDevice,logoPreviewUrl,imagePreviewUrl
        } = this.state;

        let $classBtn = null;
        if (activeDevice===true) {
            $classBtn = 'btn-danger';
        }
        else {
            $classBtn = 'btn-success';
        }

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0"> Ad Preview Facebook <small className="font-weight-light">Tools</small></h1>
                            </div>

                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/">Tools</Link></li>
                                    <li className="breadcrumb-item active">Ad Preview Facebook</li>
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
                            <div className="col-md-3 d-none">
                                <div className="container3">
                                    <button onClick={this.handleClick} className={"btn btn-block btn-sm mb-3 "+$classBtn}>
                                        {activeDevice ?
                                            <span><GoIcons.GoEyeClosed size={'22px'} /> <br/> Disable Display Devices</span> :
                                            <span><MdIcons.MdDevices size={'22px'} /> <br/> Enable Display Devices</span>
                                        }
                                    </button>

                                    <div className="d-none d-md-block">
                                        {DisplayDevicesList.map(device =>
                                            <div className="form-check" key={device.id}>
                                                <input className="form-check-input" type="radio" name="deviceName" disabled={activeDevice===false}
                                                       id={"exampleRadios"+device.id} onChange={this.handleChange} value={device.name} />
                                                <label className="form-check-label" htmlFor={"exampleRadios"+device.id}>
                                                    {device.name}
                                                </label>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>

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
                                        <div className="z-depth-1 card-content d-none d-md-block">
                                            <div className="bg-white">
                                                <div className="card-header border-bottom-0">
                                                    <div className="user-block w-100">
                                                        <label>
                                                            <i className="fas fa-edit icon-img img-circle img-thumbnail z-depth-1"/>
                                                            {/*eslint-disable-next-line*/}
                                                            <img className="img-circle" src={logoPreviewUrl ? logoPreviewUrl:logoFace} alt="User Image"/>
                                                            <input type="file" size="60" onChange={e => this.handleLogoChange(e)} />
                                                        </label>
                                                        <span className="username">
                                                            <input type="text" placeholder={"PageTitle"} name='pageTitle' onChange={this.handleChange}/>
                                                        </span>
                                                        <span className="description" style={{marginTop:'2px'}}>Suponsored</span>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className="mx-3 mb-2">
                                                        <textarea className='autoHeight' rows={this.state.rows} value={this.state.description}
                                                              placeholder='Description for your Ad.' onChange={this.handleChangeTextarea}/>
                                                    </div>

                                                    <label className="icon-content m-0">
                                                        <i className="fas fa-edit icon-img img-circle img-thumbnail z-depth-1"/>
                                                        <img src={imagePreviewUrl ? imagePreviewUrl:bgDefault} alt="" className="img-ajust"/>
                                                        <input type="file" size="60" onChange={e => this.handleImageChange(e)} />
                                                    </label>

                                                    <div className="px-4 py-2 border-bottom" style={{backgroundColor:'#F0F2F5'}}>
                                                        <input type="text" placeholder={"YOURPAGE.COM"} className="linkPage" maxLength={40}
                                                               name='linkPage' onChange={this.handleChange} />

                                                        <h4 className="mb-1" style={{fontSize:'25px'}}>
                                                            <input type="text" placeholder={"Title for your Ad"} className="titlePage" maxLength={100}
                                                                   name='titlePage' onChange={this.handleChange} />
                                                        </h4>
                                                        <p className="m-0">
                                                            <input type="text" placeholder={"Link Description"} className="titleDescription" maxLength={100}
                                                                   name='titleDescription' onChange={this.handleChange} />
                                                        </p>

                                                        <select className="btn-select btn btn-light btn-sm" name='callAction' onChange={this.handleChange}>
                                                            <option value="Download">Download</option>
                                                            <option value="Get Offer">Get Offer</option>
                                                            <option value="Get Quote">Get Quote</option>
                                                            <option value="Get Showtime">Get Showtimes</option>
                                                            <option value="Learn More">Learn More</option>
                                                            <option value="Request Time">Request Time</option>
                                                            <option value="See Menu">See Menu</option>
                                                            <option value="Shop Now">Shop Now</option>
                                                            <option value="Sign Up">Sign Up</option>
                                                        </select>

                                                    </div>

                                                    {/*
                                                    <div className="h-100 direct-chat-contacts">
                                                        <ul className="contacts-list">
                                                            <li>
                                                                <a data-widget="chat-pane-toggle">
                                                                    <img className="contacts-list-img" src="" alt="User Avatar"/>

                                                                    <div className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Count Dracula
                                                                        <small className="contacts-list-date float-right">2/28/2015</small>
                                                                    </span>
                                                                        <span className="contacts-list-msg">How have you been? I was...</span>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    */}
                                                </div>
                                            </div>

                                            <div className="card-footer bg-white py-0">
                                                <nav className="nav d-flex justify-content-between mx-4">
                                                    <span className="p-2 text-muted">
                                                        <FaIcons.FaRegThumbsUp size={'20px'} /> <span className="align-middle" style={{fontWeight:'500'}}>
                                                                Like
                                                            </span>
                                                    </span>
                                                    <span className="p-2 text-muted">
                                                        <GoIcons.GoComment size={'20px'} /> <span className="align-middle" style={{fontWeight:'500'}}>
                                                                Comment
                                                            </span>
                                                    </span>
                                                    <span className="p-2 text-muted">
                                                        <BiIcons.BiShare size={'20px'} style={{transform: 'scaleX(-1)'}} /> <span className="align-middle" style={{fontWeight:'500'}}>
                                                                Share
                                                            </span>
                                                    </span>
                                                </nav>
                                            </div>

                                        </div>
                                        {/* End - Card */}

                                        {/* card mobile */}
                                        <div className="z-depth-1 card-content d-md-none">
                                            <div className="bg-white">
                                                <div className="card-header border-bottom-0">
                                                    <div className="user-block w-100">
                                                        <label>
                                                            <i className="fas fa-edit icon-img img-circle img-thumbnail z-depth-1"/>
                                                            {/*eslint-disable-next-line*/}
                                                            <img className="img-circle" src={logoPreviewUrl ? logoPreviewUrl:logoFace} alt="User Image"/>
                                                            <input type="file" size="60" onChange={e => this.handleLogoChange(e)} />
                                                        </label>
                                                        <span className="username">
                                                            <input type="text" placeholder={"PageTitle"} name='pageTitle' onChange={this.handleChange}/>
                                                        </span>
                                                        <span className="description" style={{marginTop:'2px'}}>Suponsored</span>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className="mx-3 mb-2">
                                                        <textarea className='autoHeight' rows={this.state.rows} value={this.state.description}
                                                                  placeholder='Description for your Ad.' onChange={this.handleChangeTextarea}/>
                                                    </div>

                                                    <label className="icon-content m-0">
                                                        <i className="fas fa-edit icon-img img-circle img-thumbnail z-depth-1"/>
                                                        {/*eslint-disable-next-line*/}
                                                        <img className="img-ajust" src={imagePreviewUrl ? imagePreviewUrl:bgDefault} alt="User Image"/>
                                                        <input type="file" size="60" onChange={e => this.handleImageChange(e)} />
                                                    </label>

                                                    <div className="px-4 py-2 border-bottom" style={{backgroundColor:'#F0F2F5'}}>
                                                        <input type="text" placeholder={"YOURPAGE.COM"} className="linkPage" maxLength={40}
                                                               name='linkPage' onChange={this.handleChange} style={{width:'65%'}} />

                                                        <h4 className="mb-1" style={{fontSize:'25px'}}>
                                                            <input type="text" placeholder={"Title for your Ad"} className="titlePage" maxLength={100}
                                                                   name='titlePage' onChange={this.handleChange} style={{width:'65%'}} />
                                                        </h4>
                                                        <p className="m-0">
                                                            <input type="text" placeholder={"Link Description"} className="titleDescription" maxLength={100}
                                                                   name='titleDescription' onChange={this.handleChange} style={{width:'65%'}} />
                                                        </p>

                                                        <select className="btn-select btn btn-light btn-sm" name='callAction' onChange={this.handleChange}>
                                                            <option value="Download">Download</option>
                                                            <option value="Get Offer">Get Offer</option>
                                                            <option value="Get Quote">Get Quote</option>
                                                            <option value="Get Showtime">Get Showtimes</option>
                                                            <option value="Learn More">Learn More</option>
                                                            <option value="Request Time">Request Time</option>
                                                            <option value="See Menu">See Menu</option>
                                                            <option value="Shop Now">Shop Now</option>
                                                            <option value="Sign Up">Sign Up</option>
                                                        </select>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="card-footer bg-white py-0">
                                                <nav className="nav d-flex justify-content-between mx-3">
                                                    <span className="p-2 text-muted">
                                                        <FaIcons.FaRegThumbsUp size={'20px'} /> <span className="align-middle" style={{fontWeight:'500'}}>
                                                                Like
                                                            </span>
                                                    </span>
                                                    <span className="p-2 text-muted">
                                                        <GoIcons.GoComment size={'20px'} /> <span className="align-middle" style={{fontWeight:'500'}}>
                                                                Comment
                                                            </span>
                                                    </span>
                                                    <span className="p-2 text-muted">
                                                        <BiIcons.BiShare size={'20px'} style={{transform: 'scaleX(-1)'}} /> <span className="align-middle" style={{fontWeight:'500'}}>
                                                                Share
                                                            </span>
                                                    </span>
                                                </nav>
                                            </div>

                                        </div>
                                        {/* End - Card mobile */}

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

export default AdPreviewFacebook;