import ElementRenderer, { pageRequests } from "@/components/element-renderer";

export default async function Home() {
  const page = await pageRequests.fetchBodyPage();
  console.log(page, "Home");

  if (!page) return <div>Data non trouvée</div>;

  return (
    <main className="min-h-screen">
      {page?.map((component: any, index: number) => {
        return <ElementRenderer component={component} key={index} />;
      })}
    </main>
  );
}
