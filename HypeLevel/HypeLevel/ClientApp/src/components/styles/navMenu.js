import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({

    navInverse:{
        paddingLeft: "0px",
        // backgroundImage:"inherit",
        background:"#533e42",
        border:"1px",
        borderColor: "blue",
        marginBottom:"0"
    },
    navFont:{
        fontSize: "large",
        color: "black"
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