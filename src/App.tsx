import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/Layout/Layout';
import { GlobalStyles } from './consts/globalStyles/globalStyles';
import { theme } from './consts/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <div>DUUUUUUPA</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
