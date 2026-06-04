import NewImprovedAnnounce from "./NewImprovedAnnounce";
import NewImprovedNavBar from "./NewImprovedNavBar";
import NewImprovedFooter from "./NewImprovedFooter";

export default function NewImprovedChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NewImprovedAnnounce />
      <NewImprovedNavBar />
      <main>{children}</main>
      <NewImprovedFooter />
    </>
  );
}
