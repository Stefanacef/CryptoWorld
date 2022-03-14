import NavigationLinks from './NavigationLinks'
import { AppBar, Toolbar, Typography, Box, Divider } from '@mui/material'
import MainStatsBar from './MainStatsBar'

const TopNavigation = () => {
  return (
    <AppBar position="sticky">
      <Box m=" 5px 30px">
        <MainStatsBar />
      </Box>
      <Divider color="white" />
      <Box mx="30px">
        <Toolbar style={{ padding: '0 3px' }}>
          <Typography variant="h6" component="div">
            LOGO
          </Typography>
          <NavigationLinks />
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default TopNavigation
