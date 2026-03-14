import Hero from "@/components/home/Hero";
import ActividadesPreview from "@/components/home/ActividadesPreview";
import Estadisticas from "@/components/home/Estadisticas";
import ProximosEventos from "@/components/home/ProximosEventos";
import MensajePresidente from "@/components/home/MensajePresidente";
// import Galeria from "@/components/home/Galeria";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Hero />
      <ActividadesPreview />
      <Estadisticas />
      <ProximosEventos />
      <MensajePresidente />
      {/* <Galeria /> */}
    </div>
  );
}