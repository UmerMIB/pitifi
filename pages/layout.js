import Header from "../components/Header";
import BriefCard from "../components/Card/BriefCard";
import HorizontalCard from "../components/Card/HorizontalCard";
import Table from "../components/Table";
import Sidebar from "../components/sidebar";

export default function Layout() {
  return (
    <div>
      <h1>All Layouts components will appear here</h1>
      <div>
        header: <Header />
      </div>

      <div className="flex">
        card: <BriefCard />
      </div>
      <div className="flex">
        Horizontal Card: <HorizontalCard />
      </div>
      <div className="flex">
        Table: <Table />
      </div>
      <div>
        Sidebar: <Sidebar />
      </div>
    </div>
  );
}
