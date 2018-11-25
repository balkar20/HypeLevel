import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({

    labelRow:{
        height: "100px",
        backgroundColor: "black"
    },
    topRow:{
        backgroundColor:"sienna",
        minHeight:"min-content",
        paddingLeft: "0px",
    },
    navLeft:{
        
        paddingRight: "0px",
        
    },
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

    small: {
        '@media (max-width: 769px)': {
            // clear:"both",
            // height: "auto"
        }
    }
});

export default styles;