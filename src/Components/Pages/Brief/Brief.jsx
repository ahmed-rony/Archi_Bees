import "./Brief.scss";

const Brief = () => {
  return (
    <section className="brief">
      <div className="container">
        <div className="brief__header">
          <p>FADU | UBA - PROYECTO PERSONAL</p>
          <p>DHAKA, BANGLADESH</p>
          <p>2025</p>
        </div>
        <h3 className="line_header">Museum Editorial</h3>
        <div className="brief__content">
          <div className="left">
            <h1 className="section__title">AMPLIFICA TU MIRADA</h1>
            <p className="section__tagline">FESTIVAL DE CINE</p>
            <hr className="section__divider" />
            <p className="section__author">POR FEDERICO LUNA</p>
          </div>
          <div className="right">
            <p className="section__description">
              Proyecto editorial que consistió en diseñar una{" "}
              <strong>agenda cultural junto con un suplemento</strong> sobre un
              festival de cine (conceptual, es decir, un festival ficticio que
              sirva de excusa para el proyecto). Originalmente fue realizado
              para la materia Diseño II de la cátedra Mazzeo en la UBA en 2018,
              pero reeditado personalmente en su totalidad en 2020, explotando
              todo su potencial...
            </p>
            <p className="section__sub-description">
              <strong>Sobre la temática...</strong> En la realización de una
              película se desarrollan muchos aspectos que los podemos agrupar en
              3 categorías: <strong>Fotografía, Arte y Narrativa.</strong> En la
              mayoría de los casos, el espectador no aprecia estos aspectos que
              enriquecen al producto final o simplemente, no se dan cuenta.
              Entonces, el festival tiene como objetivo ser un disparador
              cultural y otorgarle a los participantes un panorama más crítico a
              la hora de ver una obra audiovisual para valorizar todas sus
              partes, construyendo así, un cine de mayor calidad y exigencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brief;
