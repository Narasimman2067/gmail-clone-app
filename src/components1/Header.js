import React from "react";
import { AppBar, Avatar, Box, IconButton, InputBase, Toolbar,styled} from "@mui/material";
import gmailLogo from "../Assets/Images/gmailLogo.png";
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";



function Header({toggleDrawer}) {
  return (
    <div>
      <StyledAppBar position="fixed">
        <Toolbar>

          <MenuIcon color="actions" onClick={toggleDrawer}/>
          <img  color="inherit" src={gmailLogo} alt="Logo" style={{marginLeft:10,width:"20rem"}}/>

<SearchWrapper>
  <SearchIcon/>
<InputBase sx={{width:"100vw",padding:"0px 5px"}}/>
<TuneIcon/>

</SearchWrapper>

<OptionsWrapper>
<IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
<Avatar src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQS3FXn0alyEfNkVm9kWa0yA700XH0i3uV-lJzp7izIK10Ez8mh"></Avatar>
</OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default Header;


 const  StyledAppBar =styled(AppBar)({
  backgroundColor:"Orange",
  boxShadow:"none",
  zIndex:2000,
 })

 const SearchWrapper =styled(Box)({
backgroundColor:"lightgrey",
marginLeft:80,
borderRadius:8,
minWidth:80,
maxWidth:720,
height:48,
alignItems:"center",
justifyContent:"space-between",
display:"flex",
padding:"0px 20px"

 })
 
 
const   OptionsWrapper= styled(Box)({
width:"100%",
display:"flex",
justifyContent:"flex-end",
gap:"1rem",
marginLeft:"10px"
})







