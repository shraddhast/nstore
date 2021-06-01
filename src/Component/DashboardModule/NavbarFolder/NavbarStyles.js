import { makeStyles} from '@material-ui/core'
 
const NavbarStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
    },
    appBar:{
        background:"black",
    },
    neoStore:{
        fontWeight:"bold",
        fontSize:"30px"
    },
    store:{
        color:"red",
    },
    button:{
        flexGrow: 1,
    },
    searchIcon: {
        width: '100%',
      },
    inputBase:{
        color:"black",
        background:"white",
       borderRadius:"2px",
       width:"20%"
      },
    buttonCart:{
        color:"black",
        background:"white",
        marginLeft:"1%",
        '&:hover':{
            color:"black",
            background:"white",
        }
    },
    buttonProfile:{
        color:"black",
        background:"white",
        padding:"8px",
        marginLeft:"1%",
        '&:hover':{
            color:"black",
            background:"white",
        }
    },

}))

export default NavbarStyles
  