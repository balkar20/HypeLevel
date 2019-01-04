import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    frame: {
        display:"block",
        width: "20%",
        margin: "5px",
        textAlign: "center",
        background:"#832e18",
        color:"#ffffff",
        position:"relative",
        border:"left",
        borderRadius:"20%",
        borderStyle:"solid",
        borderWidth:"1px",
        borderColor: "blue", 
        wordWrap: "break-word",
        ':hover': {
            background: '#740c62',
            cursor:"pointer"
        },
        '@media (max-width: 763px)': {
            display: 'none',
        }
    },
    p:{
        position:'absolute',
        bottom:"0",
        left:"0",
        right:"0",
        fontSize:"0.9em",
        '@media (max-width: 763px)': {
            display: 'none',
        },
        marginBottom:"0"
    },
    h:{
        position: "absolute",
        top:"0",
        left:"0",
        right:"0",
        fontSize:"2em",
    },
    img:{
        marginTop:"16%",
        width: '50%',
        height: '50%',
        // backgroundImage: 'url(../icons/myspace.png)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: "100%" 
    }
});

export default styles;