import { motion } from 'motion/react';
import { CalendarRange, Timer, LineChart, BellRing, UserCheck, Play, Accessibility } from 'lucide-react';

export default function PlatformFeatures() {
  return (
    <section className="h-full px-6 flex flex-col justify-center bg-brand-cream overflow-hidden py-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-4 md:gap-6">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2 text-brand-primary">
            <Timer className="animate-pulse" size={14} />
            <span className="font-bold text-[9px] uppercase tracking-widest">MÓDULO DE BIENESTAR</span>
          </div>
          <h2 className="font-display text-4xl text-brand-on-surface font-bold leading-tight tracking-tight">
            Pausas Activas + Seguimiento
          </h2>
          <p className="font-sans text-sm text-brand-on-surface-variant max-w-2xl leading-relaxed font-medium">
            Impulsamos la vitalidad laboral a través de micro-hábitos. Menos sedentarismo, más energía.
          </p>
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Platform Mockup Visual */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="lg:col-span-8 relative overflow-hidden rounded-[32px] bg-white shadow-xl border border-slate-50 min-h-[300px]"
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
               <img 
                alt="Platform Interface" 
                className="w-full h-auto max-h-[250px] object-contain rounded-lg shadow-xl" 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div 
              className="bg-[#E0F2F1] p-6 lg:p-10 rounded-[32px] flex flex-col items-center justify-center text-center shadow-sm h-1/2"
            >
              <h4 className="font-display text-4xl text-brand-primary mb-1 font-bold tracking-tight">3 veces</h4>
              <p className="font-bold text-brand-primary/60 uppercase tracking-widest text-[9px]">POR SEMANA</p>
            </motion.div>

            <motion.div 
              className="bg-white py-6 lg:p-10 rounded-[32px] border border-slate-50 shadow-lg flex flex-col items-center justify-center text-center h-1/2"
            >
              <h4 className="font-display text-4xl text-brand-on-surface mb-1 font-bold tracking-tight">5 a 10 min</h4>
              <p className="font-bold text-brand-on-surface-variant/60 uppercase tracking-widest text-[9px]">POR SESIÓN</p>
            </motion.div>
          </div>
        </div>

        {/* Feature Icons Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: LineChart, label: "Seguimiento Real", desc: "Dashboard para RRHH con métricas." },
            { icon: BellRing, label: "Notificaciones", desc: "Alertas no invasivas al movimiento." },
            { icon: Accessibility, label: "Ejercicios Validados", desc: "Rutinas por especialistas." }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              className="bg-white rounded-xl border border-slate-50 shadow-sm p-4 flex items-center gap-4 transition-all cursor-default"
            >
              <div className="p-2 bg-[#E0F2F1] rounded-lg text-brand-primary">
                <feat.icon size={16} />
              </div>
              <div>
                <p className="font-bold text-brand-on-surface text-[11px]">{feat.label}</p>
                <p className="text-[9px] text-brand-on-surface-variant/70 leading-tight font-medium">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
