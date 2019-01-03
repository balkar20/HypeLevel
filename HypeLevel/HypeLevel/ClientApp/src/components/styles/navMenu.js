import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({

    navInverse:{
        zIndex:"9999",
        paddingLeft: "0px",
        position: "fixed",
        top:"0",
        left:"0",
        right:"0",
        background:"#533e42",
        border:"1px",
        borderColor: "blue",
        marginBottom:"0"
    },
    navFont:{
        fontSize: "large",
        color: "#cf9fff"
    },
    navCollapse:{
        marginLeft:"-15px"
    },
    hover:{
        ":hover": {
            backgroundColor:"black",
            color:"white"
            
        }
    },
    link:{
        color:"black"
    }
    // red: {
    //     backgroundColor: 'red'
    // },

    // blue: {
    //     backgroundColor: 'blue'
    // },

    // hover: {
    //     ':hover': {
    //         backgroundColor: 'red'
    //     }
    // },

    // small: {
    //     '@media (max-width: 600px)': {
    //         backgroundColor: 'red',
    //     }
    // }
});

export default styles;