'use client';

import { Box, Typography, Stack, TextField, Button, Paper, IconButton, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import SvgIcon from '@/components/SvgIcon';
import { Grid } from '@mui/material';
import NextLink from 'next/link';

const SocialButton = ({ icon, label }) => (
  <Button
    fullWidth
    variant="outlined"
    sx={{
      py: 1.5,
      color: 'text.secondary',
      borderColor: 'grey.300',
      '&:hover': { 
        backgroundColor: 'grey.50',
        borderColor: 'grey.400'
      },
    }}
    startIcon={icon}
  >
    {label}
  </Button>
);

export default function AuthRegister() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      {/* Left Section - Login Form */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 480 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
            <SvgIcon name="logo" sx={{ width: 48, height: 48, color: 'primary.main' }} />
          </Box>

          {/* Title */}
          <Stack spacing={1} sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h4" fontWeight={700}>
                Sign Up
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Create an account to get started.
            </Typography>
          </Stack>

          {/* Social Login Buttons */}
          <Stack spacing={2} sx={{ mb: 4 }}>
            <SocialButton icon={<GoogleIcon />} label="Sign in with Google" />
            <SocialButton icon={<FacebookIcon />} label="Sign in with Facebook" />
            <SocialButton icon={<AppleIcon />} label="Sign in with Apple" />
          </Stack>

          {/* Divider */}
          <Box sx={{ position: 'relative', my: 4 }}>
            <Divider>
              <Typography variant="body2" sx={{ px: 2, color: 'text.secondary' }}>
                or continue with email
              </Typography>
            </Divider>
          </Box>

          {/* Login Form */}
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Email"
              placeholder="your.email@example.com"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'grey.300',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              label="Password"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'grey.300',
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                ),
              }}
            />
            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{ 
                py: 1.5,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>

          {/* Sign Up Link */}
          <Typography variant="body2" align="center" sx={{ mt: 4, color: 'text.secondary' }}>
            Already have an account?{' '}
            <Button
    component={NextLink}
    href="/auth/login"
    color="primary"
    sx={{
      textTransform: 'none',
      fontWeight: 500,
      '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
      },
    }}
  >
    Sign In
  </Button>
          </Typography>

          {/* Footer */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 8 }}
          >
            <Typography variant="caption" color="text.secondary">
              © 2025 StudySmart
            </Typography>
            <Typography 
              variant="caption" 
              color="text.secondary" 
              component="a" 
              href="#"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              variant="caption" 
              color="text.secondary" 
              component="a" 
              href="#"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Terms & Conditions
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* Right Section - Product Showcase */}
      <Box
        sx={{
          width: '50%',
          bgcolor: 'primary.lighter',
          p: 4,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
        }}
      >
        <Box sx={{ mb: 8 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <SvgIcon name="logo" sx={{ width: 28, height: 28, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.main">
              {/* SaasAble */}
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
            {/* SaaS platform for seamless data management and user insights. */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Unlock growth with real-time analytics and flexible features. */}
          </Typography>
        </Box>

        {/* Dashboard Preview */}
        <Paper
          elevation={24}
          sx={{
            p: 3,
            height: '100%',
            borderRadius: 2,
            bgcolor: 'background.paper',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.02)' },
          }}
        >
          {/* Dashboard Preview Content */}
          <Box sx={{ height: '100%' }}>
            <Stack spacing={3}>
              <img src="/assets/images/login/login.png" alt="Dashboard Preview" />
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}