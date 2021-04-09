
import 'swiper/swiper.min.css';
import '../styles/globals.css'
import AuthState from "../context/auth/authState";
import PageState from "../context/pages/pageState";

function MyApp({ Component, pageProps }) {
  return (
      <AuthState>
        <PageState>
            <Component {...pageProps} />
        </PageState>
      </AuthState>
  )
}

export default MyApp
