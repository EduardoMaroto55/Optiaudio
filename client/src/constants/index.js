import eyeExam from "../assets/eyeExam.jpg"
import glasses from "../assets/glassesStand.jpg"
import hearAid from "../assets/hearingAid.jpg"
export const navLinks = [
  {
    id: 1, 
    title: "Inicio",
    link: "/inicio",
  },
  {
    id: 2,
    title: "Quienes Somos",
    link: "/sobreNosotros",
  },
  {
    id: 3,
    title: "Servicios",
    link: "/servicios",
  },
  {
    id: 4,
    title: "Contacto",
    link: "/contacto",
  },
  {
    id: 5,
    title: "FAQ",
    link: "/inicio/#faq",
  },
];


export const faqData = [
  {
    id:1,
    title: "Qué servicios ofrecen en la clínica de audiología y optometría",
    data: " En nuestra clínica ofrecemos una amplia gama de servicios de audiología y optometría. Esto incluye exámenes auditivos y visuales, pruebas de audición pediátrica, ajuste de audífonos, terapia visual, lentes de contacto, exámenes de la vista para adultos y niños, entre otros. Nuestro equipo de especialistas está capacitado para atender todas sus necesidades relacionadas con la salud auditiva y visual.", 
    isOpen: false,
  },
  {
    id:2,
    title:"Cuál es el proceso de programar una cita en su clínica",
    data: " Programar una cita en nuestra clínica es fácil y conveniente. Puede hacerlo en línea a través de nuestro sitio web o llamarnos directamente. Nuestro amable personal de recepción estará encantado de ayudarle a encontrar una fecha y hora que se adapte a su horario. También ofrecemos horarios flexibles, incluyendo citas de fin de semana, para garantizar que pueda recibir la atención que necesita sin problemas.",
    isOpen: false,
  },
  {
    id:3,
    title:"Aceptan seguros médicos para los servicios de audiología y optometría",
    data: " Sí, aceptamos una variedad de seguros médicos. Trabajamos con numerosas compañías de seguros para garantizar que nuestros pacientes tengan acceso a nuestros servicios. Sin embargo, la cobertura exacta puede variar según el plan y la compañía. Le recomendamos que se comunique con nuestro personal para verificar su cobertura específica antes de su cita.",
    isOpen: false,
  },
  {
    id:4,
    title:"Cómo puedo cuidar de mi salud auditiva y visual en casa",
    data: "Mantener una buena salud auditiva y visual en casa es esencial. Recomendamos seguir estas pautas simples: Para la audición, evite la exposición prolongada a ruidos fuertes y use protección auditiva en entornos ruidosos. Para la visión, asegúrese de tener una iluminación adecuada y tome descansos regulares al trabajar en pantallas. Además, programe exámenes visuales periódicos para detectar problemas de visión a tiempo.",
    isOpen: false,
  },
];






export const services = [
  {
    id: "1",
    title: "Exámenes de la Vista",
    description: "En nuestra clínica, nos especializamos en ofrecer exámenes de la vista completos y precisos para garantizar una visión óptima. Nuestra dedicada experta en optometría evaluará tu salud ocular y te recetará lentes personalizados.",
    img: eyeExam,
  },
  {
    id: "2",
    title: "Soluciones Auditivas",
    description: "Nuestra clínica se distingue por ofrecer pruebas auditivas y audífonos de última generación. Nuestra comprometida experta en audiología te ayudará a recuperar la claridad auditiva.",
    img: hearAid,
  },
  {
    id: "3",
    title: "Anteojos de Calidad",
    description: "Además de nuestros servicios, también ofrecemos una amplia selección de anteojos de calidad. Nuestra experta en optometría te ayudará a encontrar el par perfecto para tu estilo y necesidades.",
    img: glasses,
  },
];

export const horario = [
  {
    id: "lunes",
    description: "Lunes  2:00 PM - 3:00 PM",
   
  },
  {
    id: "martes",
    description: "Martes 9:00 AM - 3:00 PM",
  },
  {
    id: "miercoles",
    description: "Miércoles 10:00 AM - 4:00 PM",
  },
  {
    id: "jueves",
    description: "Jueves 2:00 PM - 3:00 PM",
  },
  {
    id: "viernes",
    description: "Viernes 9:00 AM - 1:00 PM",
  },
  {
    id: "sabado",
    description: "Sábado 8:00 AM - 1:00 PM",
  },
  {
    id: "domingo",
    description: "Domingo Cerrado",
  },
];