import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {TextField} from "@mui/material";


const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <GraphicEqIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album Searcher
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Spotify Album Searcher
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Search for all of your favorite artist's albums using the Spotify API
                        </Typography>
                        <TextField fullWidth label="Search for your favorite artist" />
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}
