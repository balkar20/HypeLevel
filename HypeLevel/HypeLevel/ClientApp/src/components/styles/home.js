import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container:{
        // position: 'absolute',
        // top: "0",
        // left: "0",
        width:"100%"
    },
    contentRow:{
        
        marginLeft: "0px",
        marginRight: "15px",
    },
    newsCol: {
        paddingLeft: "0",
        paddingRight: "0"
    },
    newsInside:{
        paddingRight:"0"
    },
    assideCol:{
        paddingLeft: "0",
        paddingRight: "0",
        backgroundColor: "inherit",
        minHeight: "fill-available",
        '@media (max-width: 763px)': {
                    display: 'none',
                }
    },
    assideRow:{
        paddingLeft: "0"
    },
});

export default styles;