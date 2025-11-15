import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div>
      <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((Service) => (
          <ServiceCard key={Service.label}{...Service}/>
        ))}
      </section>
    </div>
  );
};

export default Services;
