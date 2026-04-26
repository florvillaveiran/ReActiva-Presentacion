import { motion } from 'motion/react';
import { Users, Search, Check, Clock } from 'lucide-react';

export default function Services() {
  return (
    <section className="h-full px-6 flex flex-col justify-center items-center bg-brand-cream overflow-hidden py-10">
      <div className="max-w-7xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-display text-4xl text-brand-on-surface font-bold mb-3 tracking-tight">Servicios opcionales.</h2>
          <p className="font-sans text-sm text-brand-on-surface-variant max-w-2xl font-medium">
            Complementa tu programa con soluciones diseñadas para profundizar en el impacto y la personalización del cuidado de tus colaboradores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-[40px] shadow-sm border border-slate-50 relative flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
               <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#2E7D32]">
                  <Search size={24} />
               </div>
               <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[9px] font-bold tracking-widest uppercase">1-on-1 Focus</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-2 text-brand-on-surface">Consultas Individuales</h3>
            <p className="text-brand-on-surface-variant text-[11px] font-medium leading-relaxed mb-6">
              Atención personalizada dirigida a abordar necesidades específicas de salud y rendimiento.
            </p>
            <ul className="space-y-2 mb-6 flex-grow font-medium text-brand-on-surface-variant">
               <li className="flex items-center gap-2 text-xs"><Check size={14} className="text-[#2E7D32]" /> Sesiones 1 a 1 con especialista</li>
               <li className="flex items-center gap-2 text-xs"><Check size={14} className="text-[#2E7D32]" /> Plan personalizado de acción</li>
               <li className="flex items-center gap-2 text-xs"><Check size={14} className="text-[#2E7D32]" /> Seguimiento de progreso clínico</li>
            </ul>
            <div className="rounded-[24px] overflow-hidden aspect-[21/9]">
               <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" alt="Consultation" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 md:p-8 rounded-[40px] shadow-sm border border-slate-50 relative flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
               <div className="w-12 h-12 bg-[#FCE4EC] rounded-xl flex items-center justify-center text-pink-600">
                  <Users size={24} />
               </div>
               <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[9px] font-bold tracking-widest uppercase">Team Training</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-2 text-brand-on-surface">Capacitaciones en Bienestar</h3>
            <p className="text-brand-on-surface-variant text-[11px] font-medium leading-relaxed mb-6">
              Formación grupal dinámica para fomentar una cultura de salud dentro de los equipos de trabajo.
            </p>
            <ul className="space-y-2 mb-6 flex-grow font-medium text-brand-on-surface-variant">
               <li className="flex items-center gap-2 text-xs"><Check size={14} className="text-pink-600" /> Talleres sincrónicos interactivos</li>
               <li className="flex items-center gap-2 text-xs"><Check size={14} className="text-pink-600" /> Contenido adaptado al rubro</li>
               <li className="flex items-center gap-2 text-xs"><Check size={14} className="text-pink-600" /> Grabaciones disponibles 24/7</li>
            </ul>
            <div className="rounded-[24px] overflow-hidden aspect-[21/9]">
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Training" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
