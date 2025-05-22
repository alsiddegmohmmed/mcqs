'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
/***************************  NAVBAR - CONTENT 10  ***************************/

export default function NavbarContent10({ landingBaseUrl, navItems, primaryBtn, secondaryBtn }) {
  const theme = useTheme();
  const { user } = useAuth();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));


const router = useRouter();

const handleLogout = async () => {
  await supabase.auth.signOut();
  router.push('/auth/login');
};

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      <Logo to={landingBaseUrl} />
      {!downMD && navItems && (
        <Box sx={{ bgcolor: 'grey.200', borderRadius: 10 }}>
          <NavMenu {...{ navItems }} />
        </Box>
      )}
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        {!downSM && (
          <>
            {/* <NavSecondaryButton {...secondaryBtn} />
            <ButtonAnimationWrapper>
              <NavPrimaryButton {...primaryBtn} />
            </ButtonAnimationWrapper> */}
            {!user ? (
  <>
    <NavSecondaryButton href="/auth/login">Sign In</NavSecondaryButton>
    <ButtonAnimationWrapper>
      <NavPrimaryButton href="/auth/register">Sign Up</NavPrimaryButton>
    </ButtonAnimationWrapper>
  </>
) : (
  <Button variant="text" color="error" onClick={handleLogout}>
    Logout
  </Button>
)}

          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper>
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 5, py: 2.5, mx: -5, bgcolor: 'grey.100' }}>
                  {!user ? (
  <>
    <NavSecondaryButton href="/auth/login">Sign In</NavSecondaryButton>
    <ButtonAnimationWrapper>
      <NavPrimaryButton href="/auth/register">Sign Up</NavPrimaryButton>
    </ButtonAnimationWrapper>
  </>
) : (
  <Button variant="text" color="error" onClick={handleLogout}>
    Logout
  </Button>
)}

                  </Stack>

                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

NavbarContent10.propTypes = {
  landingBaseUrl: PropTypes.any,
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any
};
