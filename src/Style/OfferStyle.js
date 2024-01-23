import { makeStyles } from '@mui/styles';
import Image from '../assets/images/background.webp'

export const OfferStyle=makeStyles({
    'main':{
        backgroundImage: `url(${Image})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'left',
        opacity:'0.8',
        
    },
    'discountTitle':{
        width:'100%',
        
    },
    'discountTitleHeading':{
        width:'50%',
        marginLeft:'47% !important',
        paddingTop:'120px !important',
        lineHeight:'6.2rem !important',
        textAlign:'left'
        
    },
    'caption':{
        width:'50%',
        marginLeft:'47% !important',
       textAlign:'left',
       paddingBottom:'120px !important'
    }

})