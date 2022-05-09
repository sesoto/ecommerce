import { Box, Typography, Divider, Link } from '@mui/material'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home"

const Copyright = () => {
    return (
        <Typography variant='body2' color='textPrimary' align='center'>
            Sebastian Soto &reg; {new Date().getFullYear()}
        </Typography>
    )
}

export const Footer = () => {
    return (
        <Box sx={{ marginTop: 'auto' }}>
            <Divider />
            <Box sx={{ bgcolor: 'primary.main', p: 6 }} component='footer'>
                <Typography variant='h6' align='center' gutterBottom>
                    <Link href="https://pinamarsoft.com" target="_blank" decoration="none">
                        <HomeIcon color={"secondary"}/>
                    </Link>
                    <Link href="https://instagram.com/sesoto22" target="_blank" decoration="none">
                        <InstagramIcon color={"secondary"}/>
                    </Link>
                    <Link href="https://facebook.com/sesoto" target="_blank" decoration="none">
                        <FacebookIcon color={"secondary"}/>
                    </Link>
                    <Link href="https://github.com/sesoto" target="_blank" decoration="none">
                        <GitHubIcon color={"secondary"}/>
                    </Link>
                </Typography>
                <Copyright />
            </Box>
        </Box>
    )
}

export default Footer;