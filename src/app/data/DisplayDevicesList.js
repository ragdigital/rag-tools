import IphoneX from "../components/devices/IphoneX";
import Iphone8 from "../components/devices/Iphone8";
import GooglePixel2 from "../components/devices/GooglePixel2";
import GooglePixel from "../components/devices/GooglePixel";
import SamsungGalaxyS8 from "../components/devices/SamsungGalaxyS8";
import IpadPro from "../components/devices/IpadPro";
import SurfacePro from "../components/devices/SurfacePro";
import SurfaceBook from "../components/devices/SurfaceBook";
import MacBook from "../components/devices/MacBook";
import MacBookPro from "../components/devices/MacBookPro";
import SurfaceStudio from "../components/devices/SurfaceStudio";
import ImacPro from "../components/devices/ImacPro";

const DisplayDevicesList = [
    {
        id:1,
        typeDevice:'mobile',
        name:'Iphone X',
        component: <IphoneX />
    },
    {
        id:2,
        typeDevice:'mobile',
        name:'Iphone 8',
        component: <Iphone8 />
    },
    {
        id:3,
        typeDevice:'mobile',
        name:'Google Pixel 2 XL',
        component: <GooglePixel2 />
    },
    {
        id:4,
        typeDevice:'mobile',
        name:'Google Pixel',
        component: <GooglePixel />
    },
    {
        id:5,
        typeDevice:'mobile',
        name:'Samsung Galaxy S8',
        component: <SamsungGalaxyS8 />
    },
    {
        id:6,
        typeDevice:'ipad',
        name:'iPad Pro',
        component: <IpadPro />
    },
    {
        id:7,
        typeDevice:'tablet',
        name:'Surface Pro',
        component: <SurfacePro />
    },
    {
        id:8,
        typeDevice:'notebook',
        name:'Surface Book',
        component: <SurfaceBook />
    },
    {
        id:9,
        typeDevice:'notebook',
        name:'MacBook',
        component: <MacBook />
    },
    {
        id:10,
        typeDevice:'notebook',
        name:'MacBook Pro',
        component: <MacBookPro />
    },
    {
        id:11,
        typeDevice:'desktop',
        name:'Surface Studio',
        component: <SurfaceStudio />
    },
    {
        id:12,
        typeDevice:'desktop',
        name:'iMac Pro',
        component: <ImacPro />
    }
];

export default DisplayDevicesList;