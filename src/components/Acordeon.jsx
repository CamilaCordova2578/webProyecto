import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import "../css/faq.css";

function Example() {
  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    setOpen((prevOpen) => (prevOpen === id ? undefined : id));
  };

  return (
    <div className="faq-cont mi-acordeon">
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Quiero visitar el MNHN</AccordionHeader>
          <AccordionBody accordionId="1">
            Los horarios de visita son de lunes a sábado de 9:00 a 16:00. Los boletos para nacionales son: Bs. 2 para personas de la tercera edad y con discapacidad, Bs. 3 para menores hasta 12 años, Bs. 5 a partir de los 12 años. Si eres de otro país, el precio es de 12 Bs. sin distinción de edad.
            <br />
            <a 
              href="https://www.google.com.bo/maps/place/Museo+Nacional+de+Historia+Natural/@-16.5389946,-68.0707676,17z/data=!3m1!4b1!4m6!3m5!1s0x915f2147ee756ed3:0x2b3aabea70a675ed!8m2!3d-16.5389946!4d-68.0707676!16s%2Fg%2F1pt_0rjsr?hl=es&entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a la ubicación
            </a>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">Quiero visitar el MNHN con una delegación de estudiantes</AccordionHeader>
          <AccordionBody accordionId="2">
            Llama al 2795364 para reservar el día y hora de la visita. Atendemos de lunes a sábado de 9:00 a 16:00. Te pediremos el número de contacto y la cantidad de personas visitantes. No es necesario mandar carta.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Quiero enviar una nota formal. ¿A quién debo dirigirla?</AccordionHeader>
          <AccordionBody accordionId="3">
            Datos:
            <ul>
              <li><strong>Hugo Aranibar Rojas</strong> - Director General Ejecutivo a.i.</li>
              <li><strong>Museo Nacional de Historia Natural</strong></li>
            </ul>
            <p>
              <strong>Presencial:</strong> La recepción de las notas formales es en oficinas, de lunes a viernes hasta las 15:00.
              <br />
              <strong>Virtual:</strong> Enviar un mensaje adjuntando la nota en PDF y solicitando su recepción, al correo electrónico <a href="mailto:info@mnhn.gob.bo">info@mnhn.gob.bo</a>.
            </p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">Quiero ser parte del voluntariado del MNHN</AccordionHeader>
          <AccordionBody accordionId="4">
            La convocatoria al programa de voluntariado se realiza dos veces al año y es anunciada en nuestras redes sociales (Facebook, Instagram). El requisito básico para este programa es ser estudiante del nivel universitario. Si te interesa recibir la noticia cuando salga la convocatoria, envíanos un mensaje a <a href="mailto:info@mnhn.gob.bo">info@mnhn.gob.bo</a>.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5">Quiero ser parte del grupo de investigadores asociados al MNHN</AccordionHeader>
          <AccordionBody accordionId="5">
            Envía un correo electrónico a <a href="mailto:info@mnhn.gob.bo">info@mnhn.gob.bo</a> adjuntando tu hoja de vida, especificando la Unidad y especialidad dentro de las áreas del MNHN en la que te gustaría trabajar.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="6">Organigrama</AccordionHeader>
          <AccordionBody accordionId="6">
            <img src="/img/imagen48.jpg" alt="Organigrama del MNHN" style={{ maxWidth: '100%' }} />
            <div>
              <p><strong>Dirección General Ejecutiva</strong></p>
              <p>Hugo Aranibar Rojas – Director General Ejecutivo a.i.</p>
              <a href="mailto:mnhnbolivia.dir@mnhn.gob.bo">mnhnbolivia.dir@mnhn.gob.bo</a>
              <br /><br />

              <p><strong>Unidad Administrativa</strong></p>
              <ul>
                <li>Lic. Nelbi Xavier – Jefe de unidad (<a href="mailto:nxavier@mnhn.gob.bo">nxavier@mnhn.gob.bo</a>)</li>
                <li>Meri Alanoca – Habilitado y Apoyo a Dirección (<a href="mailto:malanoca@mnhn.gob.bo">malanoca@mnhn.gob.bo</a>)</li>
                <li>Rubén Mamani – Auxiliar Mantenimiento y Vigilancia (<a href="mailto:rmamani@mnhn.gob.bo">rmamani@mnhn.gob.bo</a>)</li>
                <li>Carmen Lecoña – Auxiliar Limpieza y Jardinería (<a href="mailto:clecona@mnhn.gob.bo">clecona@mnhn.gob.bo</a>)</li>
              </ul>
            
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Example;
