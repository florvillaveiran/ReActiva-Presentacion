import { motion } from 'motion/react';
import { DollarSign, Clock, Zap, Target, LineChart, ArrowLeftRight } from 'lucide-react';

const comparisonData = [
  {
    label: "Costo",
    icon: DollarSign,
    trad: { title: "Alto costo", desc: "Inversión significativa por sesión presencial." },
    digital: { title: "Menor y escalable", desc: "Llega a toda la organización sin costos lineales." }
  },
  {
    label: "Tiempo",
    icon: Clock,
    trad: { title: "20-30 min tiempo", desc: "Logística compleja y traslados internos." },
    digital: { title: "5-8 min tiempo", desc: "Micro-pausas efectivas sin perder enfoque." }
  },
  {
    label: "Flujo",
    icon: Zap,
    trad: { title: "Cortan la jornada", desc: "Interrupción del flujo de trabajo creativo." },
    digital: { title: "Se integran", desc: "Diseñado para fluir con el ritmo laboral." }
  },
  {
    label: "Ritmo",
    icon: Target,
    trad: { title: "Baja frecuencia", desc: "Eventos aislados sin continuidad real." },
    digital: { title: "Alta y sostenida frecuencia", desc: "Generación de hábitos diarios y duraderos." }
  },
  {
    label: "Datos",
    icon: LineChart,
    trad: { title: "Difícil medición", desc: "Retorno de inversión (ROI) opaco y subjetivo." },
    digital: { title: "Medible y reportable", desc: "Analítica en tiempo real para decisiones RRHH." }
  }
];

export default function Comparison() {
  return (
    <section className="h-full px-6 flex flex-col justify-center items-center bg-brand-cream overflow-hidden py-10">
      <div className="max-w-7xl w-full">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#E0F2F1] text-brand-primary font-bold text-[9px] uppercase tracking-widest mb-3 border border-brand-primary/10">
            EFICIENCIA CORPORATIVA
          </span>
          <h2 className="font-display text-4xl text-brand-on-surface font-bold mb-3 tracking-tight">Virtual gana siempre.</h2>
          <p className="font-sans text-sm text-brand-on-surface-variant max-w-2xl mx-auto font-medium">
            La brecha entre el bienestar tradicional y la productividad moderna se cierra con tecnología.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-11 gap-3 items-stretch">
          
          {/* Traditional Column */}
          <div className="lg:col-span-5 space-y-2">
             <h3 className="font-display italic text-lg text-brand-on-surface-variant/40 mb-3 pl-2">Tradicional</h3>
             {comparisonData.map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-xl flex items-center gap-4 border border-slate-50 shadow-sm min-h-[70px]">
                   <div className="bg-slate-50 p-2 rounded-lg text-brand-on-surface-variant/30">
                      <item.icon size={16} />
                   </div>
                   <div>
                      <h4 className="font-bold text-brand-on-surface text-[12px] mb-0.5">{item.trad.title}</h4>
                      <p className="text-[9px] text-brand-on-surface-variant/60 font-medium">{item.trad.desc}</p>
                   </div>
                </div>
             ))}
          </div>

          {/* Center Column - Labels */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-between items-center py-10">
             <div className="h-full w-px bg-slate-100 relative py-8 flex flex-col justify-between items-center">
                <ArrowLeftRight className="absolute top-1/2 -translate-y-1/2 bg-brand-cream text-slate-200 z-10" size={16} />
                {comparisonData.map((item, i) => (
                   <span key={i} className="bg-slate-50 py-1 px-2 rounded-full text-[7px] font-bold text-slate-300 uppercase tracking-widest border border-slate-100 z-10">
                      {item.label}
                   </span>
                ))}
             </div>
          </div>

          {/* Digital Column */}
          <div className="lg:col-span-5 space-y-2">
             <h3 className="font-display font-bold text-lg text-brand-primary mb-3 pl-2">Digital-First</h3>
             {comparisonData.map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-xl flex items-center gap-4 border-slate-100 border shadow-md min-h-[70px]">
                   <div className="bg-[#E0F2F1] p-2 rounded-lg text-brand-primary">
                      <item.icon size={16} />
                   </div>
                   <div>
                      <h4 className="font-bold text-brand-on-surface text-[12px] mb-0.5">{item.digital.title}</h4>
                      <p className="text-[9px] text-brand-on-surface-variant/60 font-medium">{item.digital.desc}</p>
                   </div>
                </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
