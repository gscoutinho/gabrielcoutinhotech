import Home from "./Home";
import SectionDivider from "@/components/SectionDivider"
import Aboutme from "./Aboutme";
import Feed from "./Feed";
import Portfolio from "./Portfolio";

import db_info from "@/database/info.json" // info for the website

export default function Page() {
  return (
    <main className="mt-20 w-3/5 flex flex-col items-center">
      <Home>{db_info.data_page.resume}</Home>
      <SectionDivider />
      <Aboutme>{db_info.data_page.about}</Aboutme>
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Feed />
    </main>
  );
}
