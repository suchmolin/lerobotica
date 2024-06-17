"use client";

import { Slide } from "react-awesome-reveal";

export default function TerminosyCondiciones() {
  return (
    <Slide
      direction="up"
      triggerOnce
      className="firstSec relative mt-5 w-full flex justify-center"
    >
      <img
        loading="lazy"
        className="fixed hidden md:block top-0 left-0"
        src="/img/robot1.png"
        width={100}
        height={100}
        alt="robot1"
      />
      <div className="w-10/12 md:w-5/12 flex flex-col items-center justify-center">
        <h2 className="text-[#b1127c] text-4xl font-bold py-5">
          Terminos y Condiciones
        </h2>
        <p>
          INTRODUCCIÓN
          <br />
          <br />
          Usted como usuario o navegador de Lerobótica se le recomienda leer con
          detenimiento los Términos y Condiciones antes de usar el ciberespacio.
          Al usar el espacio, usted expresa su autorización y/o consentimiento a
          los Términos y Condiciones. De no estar de acuerdo con los Términos y
          Condiciones se le recomienda no navegar por el espacio.
          <br />
          <br />
          Lerobótica es propietario del sitio Web y está apegado a normas
          venezolanas. Tiene su oficina principal en Puerto Ordaz, estado
          Bolívar- Venezuela.
          <br />
          <br />
          Lerobótica está diseñada para mantener entretenimiento e informado al
          usuario sobre el mundo de la robótica y la programación.
          <br />
          <br />
          <br />
          TÉRMINOS Y CONDICIONES DE LEROBÓTICA
          <br />
          <br />
        </p>
        <ol className="list-decimal space-y-3">
          <li>
            Lerobótica no se hace responsable del uso que haga el usuario sobre
            las informaciones que se manejen en el sitio Web.
          </li>
          <li>
            Lerobótica hace el mayor de los esfuerzos para mantener actualizada
            toda información que se publica, tanto de entretenimiento como
            informativo. Sin embargo, no se hace responsable, ni garantiza la
            exactitud ni la veracidad de la misma.
          </li>
          <li>
            Todo usuario, de Lerobótica, es responsable del uso y navegación en
            este sitio Web. El usuario navega en el ciberespacio de Lerobótica
            bajo su responsabilidad.
          </li>
          <li>
            Toda información que obtenga Lerobótica a través de correos
            electrónicos o por otro medio, bien sea, datos, preguntas,
            comentarios o sugerencias será tratado como material no
            confidencial.
          </li>
          <li>
            Toda marca o logo que se visualice en sitio Web de Lerobótica son
            considerados aliados de la firma, que puede ser de índole comercial
            o informativo.
          </li>
          <li>
            Este ciberespacio puede mostrar enlaces a otros sitios Web con la
            finalidad de nutrir cualquier información que se publique en
            Lerobótica. Es importante señalar que el enlace es el responsable
            del contenido publicado. Por lo tanto, Lerobótica renuncia a todas
            las garantías, expresas o no con relación a la legalidad,
            confiabilidad o validez de cualquier contenido de otro sitio ajeno
            al propio. Además, Lerobótica renuncia a toda responsabilidad por
            pérdida, lesión, reclamo, obligación o daño de cualquier tipo que
            involucre a un tercero.
          </li>
          <li>
            Lerobótica puede revisar y actualizar los Términos y Condiciones en
            cualquier momento, con el fin de proteger al sitio web y a los
            usuarios.
          </li>
        </ol>
      </div>

      <img
        loading="lazy"
        className="fixed hidden md:block bottom-20 right-0"
        src="/img/robot2.png"
        width={100}
        height={100}
        alt="robot2"
      />
    </Slide>
  );
}
