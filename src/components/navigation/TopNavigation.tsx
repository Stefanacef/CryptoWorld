import NavigationLinks from './NavigationLinks'
import { AppBar, Toolbar, Typography } from '@mui/material'
import MainStatsBar from './MainStatsBar'

const TopNavigation = () => {
  return (
    <AppBar>
      <MainStatsBar />
      <Toolbar>
        <Typography
          px={10}
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          LOGO
        </Typography>
        <NavigationLinks />
      </Toolbar>
    </AppBar>
  )
}

export default TopNavigation
