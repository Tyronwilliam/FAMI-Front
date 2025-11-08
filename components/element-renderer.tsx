import { fetchAPI } from "./function";
import { componentMap } from "./site";

interface ElementRendererProps {
  component: any;
}
const ElementRenderer: React.FC<ElementRendererProps> = ({ component }) => {
  const entry = componentMap[component.__component];
  if (!entry) {
    console.warn(`No component for ${component.__component}`);
    return null;
  }
  const Component = entry.component;

  console.log("Rendering:", component.__component, component.section);

  return <Component {...entry.defaultProps} datas={component} />;
};
export default ElementRenderer;

export const pageRequests = {
  async fetchBodyPage() {
    // Strapi gère déjà les populates en backend (config API)
    const data = await fetchAPI(`/api/site?pLevel`);

    console.log(data.data, "fetchBodyPage");
    if (!data?.data.General) {
      console.warn(`⚠️ Aucune page trouvée pour le slug: `);
      return null;
    }

    return data?.data.General;
  },
};
