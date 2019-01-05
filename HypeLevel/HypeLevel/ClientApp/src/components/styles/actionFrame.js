import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    frame: {
        display:"block",
        width: "150px",
        height: "120px",
        margin: "5px",
        textAlign: "center",
        background:"#832e18",
        color:"#fcf3fc",
        border:"left",
        borderRadius:"20%",
        borderStyle:"solid",
        borderWidth:"1px",
        borderColor: "blue", 
        // wordWrap: "break-word",
        ':hover': {
            background: '#740c62',
            cursor:"pointer"
        },
    },
    p:{
        display: "block",
        fontSize:"0.7em",
        // '@media (max-width: 892px)': {
        //     display: 'none',
        // },
        marginBottom:"0",
        
    },
    h:{
        display:'block',
        fontSize:"1.0em",
        marginTop: "0",
        marginBottom: "1px",
        '@media (max-width: 892px)': {
            fontSize:"0.8em",
        },
    },
    img:{
        marginTop:"1px",
        // width: '50%',
        // height: '50%',
        // backgroundImage: 'url(../icons/myspace.png)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: "100%" 
    }
});

export default styles;