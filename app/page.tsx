import Home from "./Home";
import SectionDivider from "@/components/SectionDivider"
import Aboutme from "./Aboutme";
import Experience from "./Experience";

import db_info from "@/database/info.json" // info for the website
import ContactMe from "./contactme";

export default function Page() {
  return (
    <main className="mt-4 w-full lg:w-4/6 flex flex-col items-center bg-neutral-50 shadow-md p-10">
      <Home>{db_info.data_page.resume}</Home>
      <SectionDivider />
      <Aboutme>{db_info.data_page.about}</Aboutme>
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <ContactMe />
    </main>
  );
}
