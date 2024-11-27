import React from 'react';

const Publicaciones = () => {
  const posts = [
    {
      title: 'Reporte de Seguridad - Robos en Arequipa zona de Miraflores',
      date: 'Jun 10',
      imageUrl: 'https://www.lavanguardia.com/files/image_948_465/uploads/2019/09/13/5fa538009ab04.jpeg',
      description: 'Recientemente, se han reportado varios incidentes de robo en la zona de Miraflores, específicamente en áreas residenciales cercanas a la Plaza de Armas y en las inmediaciones de la Avenida Parra. Los robos, principalmente en horarios nocturnos, han involucrado tanto el robo de pertenencias personales como el acceso a viviendas y vehículos estacionados en la vía pública. Los ladrones suelen actuar en grupos pequeños, utilizando motos o vehículos para escapar rápidamente después de cometer los delitos. Se ha identificado un patrón de robo en el que los delincuentes aprovechan la falta de iluminación en ciertas calles para llevar a cabo los robos sin ser fácilmente detectados.',
    },
    {
      title: 'Recomendaciones de seguridad',
      date: 'Jun 10',
      imageUrl: 'https://www.defensoria.gob.pe/wp-content/uploads/2022/12/seguridad-ciudadana.jpg',
      description: 'En los últimos meses, la ciudad de Arequipa ha registrado un aumento en los robos en zonas residenciales y comerciales, lo que ha generado preocupación entre la población. Es fundamental que todos tomemos medidas preventivas para protegernos a nosotros mismos y a nuestros bienes. A continuación, se presentan algunas recomendaciones de seguridad:',
      medidas: [
        'Instale luces exteriores con sensores de movimiento para disuadir a los delincuentes.',
        'Asegure puertas y ventanas con cerraduras de alta calidad y no deje las llaves en lugares visibles.',
        'Considere instalar un sistema de cámaras de vigilancia conectadas a su teléfono móvil para monitorear su hogar en tiempo real.',
        'Si observa comportamientos inusuales en su vecindario, no dude en llamar a las autoridades.'
      ]
    },
    {
        title: 'Zonas Peligrosas',
        date: 'Jun 10',
        imageUrl: 'https://d219336yigegi3.cloudfront.net/sites/noticias-m2/files/styles/crop_770x383/public/field/image/iStock-1033774292%20(1).jpg',
        description: 'En Arequipa, algunas zonas son consideradas más peligrosas debido a factores como la alta concentración de personas, comercio informal y actividad nocturna. El Centro Histórico, aunque turístico, es propenso a robos menores debido a las multitudes y la presencia de carteristas. El Mercado San Camilo y sus alrededores también son áreas de alto tráfico, lo que aumenta el riesgo de delitos como el robo de pertenencias. En las zonas periféricas como Yanahuara, Socabaya y Cayma, algunas áreas alejadas del centro carecen de infraestructura adecuada y presencia policial, lo que puede generar inseguridad, especialmente por la noche.',
      },
      {
        title: 'Inseguridad Ciudadana',
        date: 'Jun 10',
        imageUrl: 'https://seaperu.pe/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-02-at-12.55.20-1024x576.jpeg',
        description: 'La inseguridad ciudadana en Arequipa es un problema creciente que afecta tanto a los residentes como a los visitantes. Aunque la ciudad ha experimentado un desarrollo económico en los últimos años, ciertas áreas siguen siendo más vulnerables a delitos como robos, asaltos y crímenes violentos. Las zonas comerciales del centro, como el Centro Histórico y los alrededores del Mercado San Camilo, suelen ser focos de robos menores debido a la alta concentración de personas y el comercio informal. Los carteristas son comunes en estos lugares, aprovechando la aglomeración de turistas y compradores.',
      },
  
    
  ];

  return (
    <div className="w-full max-w-screen p-4 md:p-8 mt-14">
      <div className="max-w-4xl mx-auto grid gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
              
              <div className="relative w-full h-48 md:h-[300px]">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-base md:text-lg text-justify">
                  {post.description}
                </p>
                
                {post.medidas && (
                  <ul className="space-y-2 list-decimal list-inside">
                    {post.medidas.map((medida, idx) => (
                      <li key={idx} className="text-gray-700 text-base text-left md:text-lg">
                        {medida}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publicaciones;