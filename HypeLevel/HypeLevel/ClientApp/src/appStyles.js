import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
    row: {
        height: '50px'
    },
    navTop:{
        paddingleft:'0',
        background: '#1a2b42',
    },
    navTopLi:{
        color:"red"
    },
    navbutton:{
        '@media (max-width: 400px)':{
            display:"hidden"
        }
    },
    middleHead:{
        height: "750px",
        // position:"relative"
        background: "url('require(\"../pictures/maxresdefault.jpg\")')"
    },
    midImg:{
        width:"100%",
        height:"100%"
    }
    
});