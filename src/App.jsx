import { ThemeProvider } from 'styled-components';
import Layout from "./components/Layout";
import Article from "./components/Article";

import GlobalStyle from './theme/globalStyle';

const theme = {
    themeColor: '#E3F4F8',
    backgroundColor: '#3124c7',
}
export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Layout>
                <Article/>
            </Layout>
        </ThemeProvider>

    );
}