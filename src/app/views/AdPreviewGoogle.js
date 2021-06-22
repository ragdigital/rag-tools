import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AdPreviewList from "../data/AdPreviewList";
import * as TiIcons from "react-icons/ti";
import * as FaIcons from "react-icons/fa";
import AutosizeInput from 'react-input-autosize';
import logo from '../../assets/images/google-logo.png';
import SelectAutosize from "../components/SelectAutosize";

class AdPreviewGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headline1:'',
            headline2:'',
            headline3:'',
            logo: '',
            logoPreviewUrl: '',
            path: '',
            call: '',
            description: '',
            rows: 1,
            minRows: 1,
            maxRows: 10,
            callout1: '',
            callout2: '',
            callout3: '',
            callout4: '',
            brands: '',
            brand1: '',
            brand2: '',
            brand3: '',
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
                                    <div className="card direct-chat shadow-none bg-transparent mx-auto google-card" style={{width:'680px'}}>
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

                                                    <div className='d-flex'>
                                                        <label className="mr-3">
                                                            <i className="fas fa-edit icon-img img-circle img-thumbnail z-depth-1"/>
                                                            {/*eslint-disable-next-line*/}
                                                            <img src={this.state.logoPreviewUrl ? this.state.logoPreviewUrl: logo} className="img-fluid" name="logo"  alt="" style={{width:'25px'}}/>
                                                            <input type="file" size="60" onChange={e => this.handleImageChange(e)} />
                                                        </label>
                                                        <input type="text" placeholder={"websitepath.com/ad-preview-google"} className="pathPage" maxLength={32}
                                                               name='path' onChange={this.handleChange} />

                                                        <input type="text" placeholder={"(201)555-0123"} className="callPage" maxLength={18}
                                                               name='call' onChange={this.handleChange} />
                                                    </div>

                                                </div>

                                                <div className="card-body border-top">

                                                    <div className="mt-2">
                                                        <textarea className='description m-0' rows={this.state.rows} value={this.state.description}
                                                                  maxLength={194} placeholder='Description for your Ad.'
                                                                  onChange={this.handleChangeTextarea}/>
                                                    </div>

                                                    <div>
                                                        <AutosizeInput
                                                            name="callout1"
                                                            inputClassName={"callout"}
                                                            value={this.state.callout1}
                                                            onChange={this.handleChange}
                                                            placeholder={"Callout 1"}
                                                            maxLength={26}
                                                        />
                                                        <AutosizeInput
                                                            name="callout2"
                                                            inputClassName={"callout"}
                                                            value={this.state.callout2}
                                                            onChange={this.handleChange}
                                                            placeholder={"Callout 2"}
                                                            maxLength={26}
                                                        />
                                                        <AutosizeInput
                                                            name="callout3"
                                                            inputClassName={"callout"}
                                                            value={this.state.callout3}
                                                            onChange={this.handleChange}
                                                            placeholder={"Callout 3"}
                                                            maxLength={26}
                                                        />
                                                        <AutosizeInput
                                                            name="callout4"
                                                            inputClassName={"callout"}
                                                            value={this.state.callout4}
                                                            onChange={this.handleChange}
                                                            placeholder={"Callout 4"}
                                                            maxLength={26}
                                                        />

                                                    </div>

                                                    <div className="d-flex">
                                                        <SelectAutosize />

                                                        <div className="ml-1">
                                                            <AutosizeInput
                                                                name="brand1"
                                                                inputClassName={"brands"}
                                                                value={this.state.brand1}
                                                                onChange={this.handleChange}
                                                                placeholder={"Value 1"}
                                                                maxLength={26}
                                                            />,
                                                            <AutosizeInput
                                                                name="brand2"
                                                                inputClassName={"brands"}
                                                                value={this.state.brand2}
                                                                onChange={this.handleChange}
                                                                placeholder={"Value 2"}
                                                                maxLength={26}
                                                            />,
                                                            <AutosizeInput
                                                                name="brand3"
                                                                inputClassName={"brands"}
                                                                value={this.state.brand3}
                                                                onChange={this.handleChange}
                                                                placeholder={"Value 3"}
                                                                maxLength={26}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="ml-5 d-flex mb-2">
                                                        <div style={{width:'50%'}}>
                                                            <input type="text" placeholder={"Sitelink Extension 1"} className="sitelink"
                                                                   maxLength={26} name='sitelink1' onChange={this.handleChange}  />

                                                            <input type="text" placeholder={"Sitelink description line 1"} className="sitelinkDesc"
                                                                   maxLength={36} name='sitelinkDec1' onChange={this.handleChange}  />
                                                            <input type="text" placeholder={"Sitelink description line 2"} className="sitelinkDesc"
                                                                   maxLength={36} name='sitelinkDesc2' onChange={this.handleChange}  />
                                                        </div>
                                                        <div style={{width:'50%'}}>
                                                            <input type="text" placeholder={"Sitelink Extension 2"} className="sitelink"
                                                                   maxLength={26} name='sitelink2' onChange={this.handleChange}  />

                                                            <input type="text" placeholder={"Sitelink description line 1"} className="sitelinkDesc"
                                                                   maxLength={36} name='sitelinkDec3' onChange={this.handleChange}  />
                                                            <input type="text" placeholder={"Sitelink description line 2"} className="sitelinkDesc"
                                                                   maxLength={36} name='sitelinkDesc4' onChange={this.handleChange}  />
                                                        </div>
                                                    </div>
                                                    <div className="ml-5 d-flex">
                                                        <div style={{width:'50%'}}>
                                                            <input type="text" placeholder={"Sitelink Extension 3"} className="sitelink"
                                                                   maxLength={26} name='sitelink3' onChange={this.handleChange}  />

                                                            <input type="text" placeholder={"Sitelink description line 1"} className="sitelinkDesc"
                                                                   maxLength={36} name='sitelinkDec5' onChange={this.handleChange}  />
                                                            <input type="text" placeholder={"Sitelink description line 2"} className="sitelinkDesc"
                                                                   maxLength={36} name='sitelinkDesc6' onChange={this.handleChange}  />
                                                        </div>
                                                        <div style={{width:'50%'}}>
                                                            <input type="text" placeholder={"Sitelink Extension 4"} className="sitelink"
                                                                   maxLength={26} name='sitelink4' onChange={this.handleChange}  />

                                                            <input type="text" placeholder={"Sitelink description line 1"} className="sitelinkDesc"
                                                                   maxLength={36} name='sitelinkDec7' onChange={this.handleChange}  />
                                                            <input type="text" placeholder={"Sitelink description line 2"} className="sitelinkDesc"
                                                                   maxLength={36} name='sitelinkDesc8' onChange={this.handleChange}  />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* End - Card */}

                                        {/* Card */}
                                        <div className="z-depth-1 card-content d-md-none">
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

                                                    <div className='d-flex'>
                                                        <label className="mr-3">
                                                            <i className="fas fa-edit icon-img img-circle img-thumbnail z-depth-1"/>
                                                            {/*eslint-disable-next-line*/}
                                                            <img src={this.state.logoPreviewUrl ? this.state.logoPreviewUrl: logo} className="img-fluid" name="logo"  alt="" style={{width:'25px'}}/>
                                                            <input type="file" size="60" onChange={e => this.handleImageChange(e)} />
                                                        </label>
                                                        <input type="text" placeholder={"websitepath.com/ad-preview-google"} className="pathPage" maxLength={32}
                                                               name='path' onChange={this.handleChange} />
                                                    </div>

                                                </div>

                                                <div className="card-body border-top">
                                                    <div className="mt-2">
                                                        <textarea className='description m-0' rows={this.state.rows} value={this.state.description}
                                                                  maxLength={194} placeholder='Description for your Ad.'
                                                                  onChange={this.handleChangeTextarea}/>
                                                   </div>

                                                    <div>
                                                        <AutosizeInput
                                                            name="callout1"
                                                            inputClassName={"callout"}
                                                            value={this.state.callout1}
                                                            onChange={this.handleChange}
                                                            placeholder={"Callout 1"}
                                                            maxLength={26}
                                                        />
                                                        <AutosizeInput
                                                            name="callout2"
                                                            inputClassName={"callout"}
                                                            value={this.state.callout2}
                                                            onChange={this.handleChange}
                                                            placeholder={"Callout 2"}
                                                            maxLength={26}
                                                        />
                                                        <AutosizeInput
                                                            name="callout3"
                                                            inputClassName={"callout"}
                                                            value={this.state.callout3}
                                                            onChange={this.handleChange}
                                                            placeholder={"Callout 3"}
                                                            maxLength={26}
                                                        />
                                                        <AutosizeInput
                                                            name="callout4"
                                                            inputClassName={"callout"}
                                                            value={this.state.callout4}
                                                            onChange={this.handleChange}
                                                            placeholder={"Callout 4"}
                                                            maxLength={26}
                                                        />

                                                    </div>

                                                    <div className="d-flex">
                                                        <SelectAutosize />

                                                        <div className="ml-1">
                                                            <AutosizeInput
                                                                name="brand1"
                                                                inputClassName={"brands"}
                                                                value={this.state.brand1}
                                                                onChange={this.handleChange}
                                                                placeholder={"Value 1"}
                                                                maxLength={26}
                                                            />,
                                                            <AutosizeInput
                                                                name="brand2"
                                                                inputClassName={"brands"}
                                                                value={this.state.brand2}
                                                                onChange={this.handleChange}
                                                                placeholder={"Value 2"}
                                                                maxLength={26}
                                                            />,
                                                            <AutosizeInput
                                                                name="brand3"
                                                                inputClassName={"brands"}
                                                                value={this.state.brand3}
                                                                onChange={this.handleChange}
                                                                placeholder={"Value 3"}
                                                                maxLength={26}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex mb-2">
                                                        <div style={{width:'50%'}}>
                                                            <input type="text" placeholder={"Sitelink Extension 1"} className="sitelink"
                                                                   maxLength={26} name='sitelink1' onChange={this.handleChange}  />
                                                        </div>
                                                        <div style={{width:'50%'}}>
                                                            <input type="text" placeholder={"Sitelink Extension 2"} className="sitelink"
                                                                   maxLength={26} name='sitelink2' onChange={this.handleChange}  />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div style={{width:'50%'}}>
                                                            <input type="text" placeholder={"Sitelink Extension 3"} className="sitelink"
                                                                   maxLength={26} name='sitelink3' onChange={this.handleChange}  />
                                                        </div>
                                                        <div style={{width:'50%'}}>
                                                            <input type="text" placeholder={"Sitelink Extension 4"} className="sitelink"
                                                                   maxLength={26} name='sitelink4' onChange={this.handleChange}  />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="card-footer bg-white border-top">
                                                <FaIcons.FaPhoneAlt style={{color:'gray'}} />
                                                <span className="text-muted ml-4 mr-1">Call</span>
                                                <input type="text" placeholder={"(201)555-0123"} className="callPage2" maxLength={18}
                                                            name='call' onChange={this.handleChange} style={{width:'50%'}} />
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