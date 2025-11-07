import ElementRenderer, { pageRequests } from "@/components/element-renderer";

export default async function Home() {
  const slug = "accueil";

  const page = await pageRequests.fetchBodyPage();
  console.log(page, "OUAIS");

  if (!page) return <div>Page non trouvée</div>;

  return (
    <main className="min-h-screen">
      {page?.map((component: any, index: number) => {
        return <ElementRenderer component={component} key={index} />;
      })}
    </main>
  );
}
