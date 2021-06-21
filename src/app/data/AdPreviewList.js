import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as IoIcons from 'react-icons/io';

const AdPreviewList = [
    {
        id: 1,
        cardClass:'card-facebook',
        socialTitle:'Facebook',
        title:'Design Ad Preview',
        description: 'Design your own Ad. Embellish them with ad extensions like links, call out, ratings, and so on.',
        link:'ad-preview-facebook',
        icon: <IoIcons.IoLogoFacebook size="20px" />,
        show: true
    },
    {
        id: 2,
        cardClass:'card-instagram',
        socialTitle:'Instagram',
        title:'Design Ad Preview',
        description: 'Design your own Ad. Embellish them with ad extensions like links, call out, ratings, and so on.',
        link:'ad-preview-instagram',
        icon: <FaIcons.FaInstagram size="20px" />,
        show: false
    },
    {
        id: 3,
        cardClass:'card-linkedin',
        socialTitle:'LinkedIn',
        title:'Design Ad Preview',
        description: 'Design your own Ad. Embellish them with ad extensions like links, call out, ratings, and so on.',
        link:'ad-preview-linkedin',
        icon: <SiIcons.SiLinkedin size="20px" />,
        show: false
    },
    {
        id: 4,
        cardClass:'card-twitter',
        socialTitle:'Twitter',
        title:'Design Ad Preview',
        description: 'Design your own Ad. Embellish them with ad extensions like links, call out, ratings, and so on.',
        link:'ad-preview-twitter',
        icon: <GrIcons.GrTwitter size="20px" />,
        show: false
    },
    {
        id: 5,
        cardClass:'card-google',
        socialTitle:'Google',
        title:'Design Ad Preview',
        description: 'Design your own Ad. Embellish them with ad extensions like links, call out, ratings, and so on.',
        link:'ad-preview-google',
        icon: <GrIcons.GrGoogle size="20px" />,
        show: false
    },
    {
        id: 6,
        cardClass:'card-snapchat',
        socialTitle:'Snapchat',
        title:'Design Ad Preview',
        description: 'Design your own Ad. Embellish them with ad extensions like links, call out, ratings, and so on.',
        link:'ad-preview-snapchat',
        icon: <GrIcons.GrSnapchat size="20px" />,
        show: false
    },
    {
        id: 7,
        cardClass:'card-tiktok',
        socialTitle:'Tik Tok',
        title:'Design Ad Preview',
        description: 'Design your own Ad. Embellish them with ad extensions like links, call out, ratings, and so on.',
        link:'ad-preview-tiktok',
        icon: <SiIcons.SiTiktok size="20px" />,
        show: true
    }
];

export default AdPreviewList;