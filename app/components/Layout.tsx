import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
