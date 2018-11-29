import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({

    fluid:{
        minHeight: "100%",
        height: "100%"
    },
    labelRow:{
        
        height: "100px",
        backgroundImage: "url(http://x-lines.ru/letters/i/cyrillicbasic/0495/b37a7c/42/1/etozr43ye31se3m1cf4g155q.png)",
        //backgroundRepeat: "no-repeat"
    },
    contentRow:{
        background:"black,"
        // backgroundImage: 'url(http://x-lines.ru/letters/i/cyrillicbasic/0495/4c4c70/30/1/etozr43ye31se3m1cf4g155q.png)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: "100%" 
    },
    topRow:{
        backgroundColor:"sienna",
        minHeight:"min-content",
        paddingLeft: "0px",
    },
    navLeft:{
        
        paddingRight: "0px",
    },
    imageContainer:{
        width: '100%',
        height: "200px",
        textAlign: 'center',
        //  backgroundImage: 'url(http://x-lines.ru/letters/i/cyrillicgothic/4570/000000/60/1/etozr43ye31se3m1cf4g155q.png)',
        //  backgroundRepeat: 'no-repeat',
         
    },
    
    imageLarge:{
        '@media (max-width: 800px)': {
            display: 'none',
        }
    },
    imageSmall:{
        width: '100%',
        height: '50%',
        '@media (min-width: 800px) ': {
            display: 'none',
        },
    },
    footer:{
        height: '300px',
        background: '#595959'
    },
    // imageExstraSmall:{
        
    //     '@media (min-width: 545px) ': {
    //         display: 'none',
    //     },
    // },
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