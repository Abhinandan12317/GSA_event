import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Icosahedron } from '@react-three/drei';
import { Box, Sphere, Torus } from './components/ThreeDElements';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Agenda from './components/Agenda';
import Prerequisites from './components/Prerequisites';
import Venue from './components/Venue';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';

import { Box as MuiBox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a Google-like color scheme
const googleColors = {
  blue: '#4285F4',
  red: '#DB4437',
  yellow: '#F4B400',
  green: '#0F9D58',
  gray: '#F8F9FA',
  darkGray: '#202124',
  white: '#FFFFFF',
};

const theme = createTheme({
  palette: {
    primary: {
      main: googleColors.blue,
    },
    secondary: {
      main: googleColors.green,
    },
    error: {
      main: googleColors.red,
    },
    warning: {
      main: googleColors.yellow,
    },
    background: {
      default: 'transparent',
      paper: 'transparent',
    },
    text: {
      primary: googleColors.white,
      secondary: 'rgba(255, 255, 255, 0.85)',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      color: googleColors.white,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      color: googleColors.white,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: googleColors.white,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
      color: googleColors.white,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: googleColors.white,
      letterSpacing: '0em',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 0.85)',
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 0.7)',
      letterSpacing: '0.01071em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
<color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Floating and Moving 3D Elements */}
        <Float speed={1} rotationIntensity={1} floatIntensity={2}>
            <Box position={[-3, 0, -5]} color={googleColors.blue} />
        </Float>
        <Float speed={1.2} rotationIntensity={1.2} floatIntensity={2.2}>
            <Sphere position={[3, 2, -10]} color={googleColors.red} />
        </Float>
        <Float speed={1.4} rotationIntensity={1.4} floatIntensity={2.4}>
            <Torus position={[-5, -2, -15]} color={googleColors.yellow} />
        </Float>
        <Float speed={1.6} rotationIntensity={1.6} floatIntensity={2.6}>
            <Box position={[0, -4, -8]} color={googleColors.green} />
        </Float>
        <Float speed={1.8} rotationIntensity={1.8} floatIntensity={2.8}>
            <Sphere position={[5, -1, -3]} color={googleColors.blue} />
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={3}>
            <Torus position={[-2, 4, -12]} color={googleColors.red} />
        </Float>
        <Float speed={2.2} rotationIntensity={2.2} floatIntensity={3.2}>
            <Icosahedron position={[6, 5, -14]} args={[0.8]}>
              <meshStandardMaterial color={googleColors.yellow} />
            </Icosahedron>
        </Float>
        <Float speed={2.4} rotationIntensity={2.4} floatIntensity={3.4}>
            <Icosahedron position={[-7, -3, -9]} args={[1]}>
              <meshStandardMaterial color={googleColors.green} />
            </Icosahedron>
        </Float>

        <OrbitControls />
      </Canvas>

      <MuiBox sx={{ color: googleColors.darkGray, pointerEvents: 'none' }}>
        <Header eventName="Gemini-CLI learn and build" />
        <main>
          <Hero
            eventName="Gemini-CLI learn and build"
            venue="ATMECE Mysuru"
            time="2:00pm - 4:45pm"
            date="Dec 10th 2025"
            registrationLink="https://forms.gle/1R2gMc3PWX2RLpj6A"
          />
          <Agenda />
          <Prerequisites />
          <About />
          <Venue />
          <Sponsors />
          <FAQ />
        </main>
        <Footer />
      </MuiBox>
    </ThemeProvider>
  );
}

export default App;