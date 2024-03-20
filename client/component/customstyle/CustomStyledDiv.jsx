import { styled } from '@material-ui/core/styles';

export const PADDING_HORIZONTAL_HEADER_LOGO_MOBILE = 32

export const ContainerLoginRegister  = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: PADDING_HORIZONTAL_HEADER_LOGO_MOBILE,
    paddingRight: PADDING_HORIZONTAL_HEADER_LOGO_MOBILE,
    alignItems: 'center',
    marginTop: 20,
    [theme.breakpoints.up('sm')]: {
      width: '100%', 
      maxWidth: 433,
      marginTop: 50,
      paddingLeft: 0,
      paddingRight: 0,
    }
}))