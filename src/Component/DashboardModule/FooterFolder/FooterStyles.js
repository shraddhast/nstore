import { makeStyles} from '@material-ui/core'

const FooterStyles = makeStyles((theme) => ({

    grid:{
        background:"black",
        paddingLeft:"10%",
        paddingRight:"10%",
        marginTop:"100px"
    },
    aboutCompany:{
        color:"white",
        marginTop:"10%",
        marginBottom:"10%"
    },
    content:{
        color:"white",
       paddingBottom:"10%",
    },
    text:{
        background:"white",
        marginTop:"4%"
    },
    subscribe:{
        marginTop:"2%",
        background:"white",
        height:"10%"
    },
}))

export default FooterStyles