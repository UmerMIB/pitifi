import Button from "../components/Buttton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div>
      <h1>All Layouts components will appear here</h1>
      <div>
        header: <Header />
      </div>
      <div>
        Navbar: <Navbar />
      </div>

      <div className="flex">
        button: <Button />
      </div>
      <div className="flex">
        input:
        <Input />
      </div>
      <div className="flex">
        loader:
        <Loader />
      </div>
      <div className="flex">
        footer:
        <Footer />
      </div>
    </div>
  );
}
