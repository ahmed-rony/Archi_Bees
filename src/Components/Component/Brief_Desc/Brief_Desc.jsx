import { Link } from "react-router-dom";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import "./Brief_Desc.scss";

const Brief_Desc = () => {
  return (
    <div className="brief_desc">
      <div className="brief__header">
        <p>HOST | DEPT. OF ARCHITECTURE,BANGLADESH UNIVERSITY</p>
        <p>DHAKA, BANGLADESH</p>
        <p>2025</p>
      </div>
      <div className="line_head">
        <h3 className="line_header">Museum Editorial</h3>
        <CountdownTimer hours={120} minutes={0} seconds={0} shrink={"shrink"} />
      </div>
      <div className="brief__content">
        <div className="left">
          <h1 className="section__title">AMPLIFICA TU MIRADA</h1>
          <p className="section__tagline">FESTIVAL DE CINE</p>
          <hr className="section__divider" />
          <p className="section__author">POR FEDERICO LUNA</p>
          <Link to="/files/brief01.pdf" target="_blank" className="brief_pdf" download>DOWNLOAD BRIEF</Link>
        </div>
        <div className="right">
          <p className="section__description">
            Proyecto editorial que consistió en diseñar una{" "}
            <strong>agenda cultural junto con un suplemento</strong> sobre un
            festival de cine (conceptual, es decir, un festival ficticio que
            sirva de excusa para el proyecto). Originalmente fue realizado para
            la materia Diseño II de la cátedra Mazzeo en la UBA en 2018, pero
            reeditado personalmente en su totalidad en 2020, explotando todo su
            potencial...
          </p>
          <p className="section__sub-description">
            <strong>Sobre la temática...</strong> En la realización de una
            película se desarrollan muchos aspectos que los podemos agrupar en 3
            categorías: <strong>Fotografía, Arte y Narrativa.</strong> En la
            mayoría de al producto final o simplemente, no se dan cuentalos casos, el espectador no aprecia estos aspectos que
            enriquecen al producto final o simplemente, no se dan cuenta.
            Entonces, el festival tiene como objetivo ser un disparador cultural
            y otorgarle a los participantes un panorama más crítico a la hora de
            ver una obra audiovisual para valorizar todas sus partes,
            construyendo así, un cine de mayor calidad y exigencia.
          </p>
        </div>
      </div>
      {/* <div className="full_desc">
        <h4 className="heading">
          Andorra National Art Museum: A “Bilbao Effect” Project?
        </h4>
        <div className="content">
          <div className="left">
            <p>
              The Andorra National Art Museum is a project that aims to
              revitalize the city of Andorra, located in the Pyrenees mountains
              between France and Spain. The project is part of a larger urban
              regeneration plan that seeks to transform the city into a cultural
              hub. The museum is designed to be a landmark building that will
              attract visitors from around the world and put Andorra on the map
              as a cultural destination.
            </p>
            <p>
              The museum is designed by the renowned architect Frank Gehry, who
              is known for his iconic buildings such as the Guggenheim Museum in
              Bilbao, Spain. The design of the museum is inspired by the natural
              landscape of the Pyrenees mountains, with undulating forms and
              reflective surfaces that mimic the surrounding mountains and
              lakes. The museum is clad in titanium panels that change color
              with the light, creating a dynamic and ever-changing appearance.
            </p>
          </div>
          <div className="right">
            <p>
              The museum will house a collection of modern and contemporary art
              from Andorra and around the world, with a focus on promoting local
              artists and cultural heritage. The museum will also host temporary
              exhibitions, educational programs, and cultural events that will
              attract visitors of all ages and interests. The museum is expected
              to be a catalyst for economic growth in Andorra, attracting
              tourists, investors, and new residents to the city.
            </p>
            <p>
              The Andorra National Art Museum is a bold and ambitious project
              that has the potential to transform the city of Andorra and
              establish it as a major cultural destination in Europe. The museum
              is set to open in 2025, and is already generating excitement and
              interest from around the world. With its striking design,
              world-class collection, and innovative programming, the museum is
              poised to become a new icon of contemporary architecture and art.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Brief_Desc;
