import { StylesProvider } from '@material-ui/core/styles';
import '../styles/global.scss';
import 'fontsource-roboto';

const App = ({ Component, pageProps }) => {
    return (
        <StylesProvider injectFirst>
            <Component {...pageProps} />
        </StylesProvider>
    );
};

export default App;
