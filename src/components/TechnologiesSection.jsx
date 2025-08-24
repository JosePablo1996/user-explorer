import React from 'react';
import { Atom, Palette, Code, Zap } from 'lucide-react';
import { sharedClasses } from '../constants/styles';

// Definición de las tecnologías con descripciones mejoradas
const technologies = [
  { 
    name: 'React', 
    icon: <Atom size={48} />, 
    color: 'text-blue-500', 
    description: 'Una librería de JavaScript para construir interfaces de usuario interactivas y declarativas.' 
  },
  { 
    name: 'Tailwind CSS', 
    icon: <Palette size={48} />, 
    color: 'text-cyan-400', 
    description: 'Un framework CSS de bajo nivel que facilita la creación de diseños modernos y responsivos.' 
  },
  { 
    name: 'JavaScript', 
    icon: <Code size={48} />, 
    color: 'text-yellow-500', 
    description: 'El lenguaje de programación esencial para la web, que potencia la interactividad y la lógica del lado del cliente.' 
  },
  { 
    name: 'Vite', 
    icon: <Zap size={48} />, 
    color: 'text-purple-500', 
    description: 'Un empaquetador de módulos de desarrollo de nueva generación para proyectos web rápidos y eficientes.' 
  },
];

const TechnologiesSection = () => {
  return (
    <section className={sharedClasses.card + " flex flex-col items-center p-8 mt-12 animate-fadeInUp relative overflow-hidden"}>
      {/* Elemento de brillo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent animate-bg-glow rounded-2xl"></div>
      
      {/* Contenido de la sección */}
      <div className="text-center relative z-10">
        <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Tecnologías Utilizadas
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Esta aplicación ha sido construida utilizando una pila de tecnologías modernas para garantizar un rendimiento óptimo, una interfaz de usuario atractiva y una experiencia de desarrollo eficiente.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 w-full">
        {technologies.map((tech) => (
          <div 
            key={tech.name} 
            className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Brillo de fondo dinámico al pasar el cursor */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col items-center text-center relative z-10">
              <div className={`transition-all duration-300 group-hover:rotate-[20deg] ${tech.color} mb-4`}>
                {tech.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {tech.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
