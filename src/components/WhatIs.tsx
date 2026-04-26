import { motion } from 'motion/react';
import { Accessibility, Shield, Zap } from 'lucide-react';

const cardData = [
  {
    title: "Previene dolores",
    description: "Optimiza la postura y reduce la tensión muscular durante la jornada.",
    icon: Accessibility,
    bgColor: "bg-[#C8E6C9]",
    iconColor: "text-brand-primary",
    accentColor: "bg-brand-tertiary-container"
  },
  {
    title: "Reduce estrés",
    description: "Ejercicios de respiración y pausas activas para la calma mental.",
    icon: Shield,
    bgColor: "bg-[#FCE4EC]",
    iconColor: "text-pink-600",
    accentColor: "bg-brand-primary-container"
  },
  {
    title: "Mejora el rendimiento",
    description: "Recupera la energía y el enfoque con movimientos dinamizadores.",
    icon: Zap,
    bgColor: "bg-[#E0F2F1]",
    iconColor: "text-[#26A69A]",
    accentColor: "bg-brand-tertiary-container"
  }
];

export default function WhatIs() {
  return (
    <section className="relative h-full flex flex-col items-center justify-center px-6 md:px-10 py-10 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 max-w-2xl"
        >
          <h2 className="font-display text-4xl text-brand-primary mb-3 font-bold tracking-tight">¿Qué es Re-Activa?</h2>
          <p className="font-sans text-sm text-brand-on-surface-variant font-medium">
            Un programa integral de bienestar con ejercicios personalizados, guiados y adaptados al entorno laboral.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] flex flex-col items-center text-center shadow-lg border border-slate-100"
            >
              <div className={`w-14 h-14 ${card.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <card.icon className={`${card.iconColor}`} size={32} />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-brand-on-surface">{card.title}</h3>
              <div className={`w-8 h-1 ${card.accentColor} rounded-full mb-4 opacity-50`}></div>
              <p className="text-brand-on-surface-variant font-sans leading-relaxed text-xs">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Presentation Dots */}
        <div className="mt-8 flex gap-2">
           <div className="w-2 h-2 rounded-full bg-slate-200"></div>
           <div className="w-2 h-2 rounded-full bg-slate-200"></div>
           <div className="w-8 h-2 rounded-full bg-brand-primary/50"></div>
           <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        </div>
      </div>
    </section>
  );
}
