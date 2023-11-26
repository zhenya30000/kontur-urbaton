import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant='h2'
        color={colors.lighterPrimary[100]}
        fontWeight='bold'
        sx={{ mb: '5px', ml: '50px' }}
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
        color={colors.accent1[500]}
      >
        {subtitle}
      </Typography>
    </Box >
  )
}

export default Header;