import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Provider } from "react-redux";
import store from "../../store/store";

const Layout = () => {
  return ( <>
    <Provider store={store}>
      <div className="app">
        <Header />
        <main>
          <Outlet /> {/* Renders child pages here */}
        </main>
        <Footer />
      </div>
    </Provider>
    </>
  );
};

export default Layout;

