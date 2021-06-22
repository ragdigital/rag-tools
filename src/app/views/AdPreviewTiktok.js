import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AdPreviewList from "../data/AdPreviewList";
import * as TiIcons from "react-icons/ti";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";


class AdPreviewTiktok extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUser:'',
            imageUserPreviewUrl:'',
            image:'',
            imagePreviewUrl:'',
            username:'',
            time:'',
            description:'',
            hashtags:''
        };

        this.handleUserImageChange = this.handleUserImageChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    handleUserImageChange(e) {
        let reader = new FileReader();
        let imageUser = e.target.files[0];

        if (imageUser!=='' && imageUser!==null) {
            if (imageUser) {
                reader.onloadend = () => {
                    this.setState({
                        imageUser: imageUser,
                        imageUserPreviewUrl: reader.result
                    });
                };
                reader.readAsDataURL(imageUser);
            }
        }
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

    render() {
        const {
            imageUserPreviewUrl,imagePreviewUrl
        } = this.state;

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
                                    <div className="card direct-chat shadow-none bg-transparent mx-auto card-tiktok" >
                                        <div className="card-header pr-1 border-0 d-none">
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" title="Options" data-widget="chat-pane-toggle">
                                                    <TiIcons.TiCogOutline size={'20px'} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div className="z-depth-1 card-content bg-tiktok" style={{borderRadius:'45px',backgroundColor:'#31313E',
                                            width:'345px',whiteSpace:'nowrap',overflow:'hidden',height:'700px'
                                        }}>
                                            <label>
                                                <i className="fas fa-edit icon-img-bg img-circle img-thumbnail z-depth-1"/>
                                                <img src={imagePreviewUrl ? imagePreviewUrl:null} alt="" className="img-ajust" />
                                                <input type="file" size="60" onChange={e => this.handleImageChange(e)} />
                                            </label>

                                            <div style={{position:'absolute', right:'4.1%', top:'33.3%'}} className="img-user">
                                                <label>
                                                    <i className="fas fa-edit icon-img img-circle img-thumbnail z-depth-1"/>
                                                    {/*eslint-disable-next-line*/}
                                                    <img className="img-circle img-ajust" src={imageUserPreviewUrl ? imageUserPreviewUrl:'https://i.pravatar.cc/'} alt="User Image" style={{
                                                        height:'52px',width:'52px',border:'4px solid #ffffff'
                                                    }} />
                                                    <input type="file" size="60" onChange={e => this.handleUserImageChange(e)} />

                                                    <HiIcons.HiPlusCircle className="rounded-circle" style={{
                                                        color:'red',backgroundColor:'#ffffff',position:'absolute',bottom:'0',right:'33%'
                                                    }} />
                                                </label>
                                            </div>

                                            <div>
                                                <input type="text" placeholder={"@username"} name='username' onChange={this.handleChange}
                                                       className="small username text-white" autoComplete={'off'} style={{
                                                           whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}/>

                                                <div className="rounded-circle" style={{
                                                    height:'4px',width:'4px',backgroundColor:'#ffffff',position:'absolute',
                                                    bottom:'30%',left:'30%'}}/>

                                                <input type="text" placeholder={"3h ago"} name='time' onChange={this.handleChange}
                                                       className="small time text-white" autoComplete={'off'} style={{
                                                    whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}/>

                                                <input type="text" placeholder={"Description goes here"} name='description' onChange={this.handleChange}
                                                       className="small description text-white" autoComplete={'off'} style={{
                                                    whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}/>

                                                <input type="text" placeholder={"#hashtags #music #dance"} name='hashtags' onChange={this.handleChange}
                                                       className="small hashtags text-white" autoComplete={'off'} style={{
                                                    whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}/>

                                                <Link to="#" className="small link-translation text-white">See translation</Link>

                                                <span className="small txt-original text-white">
                                                    <BsIcons.BsMusicNoteBeamed /> Original sound
                                                    <GiIcons.GiSoundOff size={'20px'} className={'ml-2'}/> Mute
                                                </span>

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

export default AdPreviewTiktok;