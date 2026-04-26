import { motion } from 'motion/react';
import { Brain, Timer, Activity, ZapOff, TriangleAlert } from 'lucide-react';

const risks = [
  {
    icon: Brain,
    title: "Mayor fatiga mental",
    desc: "Reducción del flujo sanguíneo cerebral.",
    color: "bg-brand-tertiary-container",
    onColor: "text-brand-on-tertiary-container"
  },
  {
    icon: Timer,
    title: "+4 horas sentado",
    desc: "Punto crítico para el metabolismo muscular.",
    color: "bg-brand-primary-container",
    onColor: "text-brand-on-primary-container"
  },
  {
    icon: Activity,
    title: "Dolencias musculares",
    desc: "Tensión acumulada en cuello y lumbares.",
    color: "bg-brand-surface",
    onColor: "text-brand-primary"
  },
  {
    icon: ZapOff,
    title: "Dificultad para desconectar",
    desc: "El sedentarismo está vinculado a mayores niveles de estrés residual post-laboral.",
    color: "bg-slate-100",
    onColor: "text-slate-600"
  }
];

export default function SedentaryCost() {
  return (
    <section className="h-full px-6 flex items-center justify-center bg-brand-cream overflow-hidden py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Text Section */}
        <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl text-brand-primary tracking-tight mb-3 font-bold">
              El Costo del Sedentarismo
            </h2>
            <p className="font-sans text-sm text-brand-on-surface-variant max-w-lg mb-4">
              La inactividad prolongada no es solo un hábito, es una barrera invisible que compromete tu vitalidad diaria.
            </p>
          </motion.div>

          <div className="flex flex-col gap-2">
            {risks.map((risk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-3 rounded-xl shadow-sm border border-slate-50 flex items-center gap-4"
              >
                <div className={`${risk.color} ${risk.onColor} w-8 h-8 rounded-full flex items-center justify-center shrink-0`}>
                  <risk.icon size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-on-surface text-[12px]">{risk.title}</h4>
                  <p className="text-[10px] text-brand-on-surface-variant/70 font-medium leading-tight">{risk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Impact Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 order-1 lg:order-2 relative"
        >
          <div className="overflow-hidden rounded-[32px] shadow-2xl relative">
            <img 
              alt="People working in office" 
              className="w-full aspect-video object-cover" 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              referrerPolicy="no-referrer"
            />
            {/* Warning Overlay Label */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2 border border-white/40 shadow-xl"
            >
              <TriangleAlert className="text-brand-primary" size={14} />
              <span className="font-bold text-brand-on-surface text-[10px]">Riesgo Ergonómico Detectado</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
