import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    contentRow:{
        marginLeft: "15px",
        marginRight: "15px",
    },
    newsCol: {
        paddingLeft: "0",
        paddingRight: "0",
        margin: "0"
    },
    newsInside:{
        padding: "0"
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