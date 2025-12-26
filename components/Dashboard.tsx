import React, { useState } from 'react';
import { Smartphone, Activity, Play, CheckCircle2, BarChart3, RefreshCw, Heart, Moon, Zap, PlayCircle, Search, Lock } from 'lucide-react';

interface DashboardProps {
  language: 'en' | 'es';
}

export const Dashboard: React.FC<DashboardProps> = ({ language }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  // State for Digital Programming View
  const [workoutComplete, setWorkoutComplete] = useState(false);
  const [activeBarIndex, setActiveBarIndex] = useState(5);
  const [loadValue, setLoadValue] = useState(75);

  // State for Video Library View
  const [videoCategory, setVideoCategory] = useState('For You');

  const translations = {
    en: {
      title: 'Your recovery. In your pocket.',
      desc: 'We track your load, sleep, and pain metrics to adjust your program in real-time.',
      features: ["Digital Programming", "Biofeedback Tracking", "HD Video Library"],
      phone: {
        week: 'Week',
        stability: 'Stability Load',
        targetMet: 'Target Met',
        readiness: 'Readiness',
        peak: 'Peak Performance',
        recovery: 'Recovery Mode',
        wellness: 'Wellness',
        dailyMetrics: 'Daily metrics synced from Oura',
        recoveryScore: 'Recovery Score',
        optimal: 'Optimal',
        sleep: 'Sleep',
        pain: 'Knee Pain',
        library: 'Library'
      }
    },
    es: {
      title: 'Tu recuperación. En tu bolsillo.',
      desc: 'Rastreamos tu carga, sueño y dolor para ajustar tu programa en tiempo real.',
      features: ["Programación Digital", "Biofeedback", "Librería de Video HD"],
      phone: {
        week: 'Semana',
        stability: 'Carga de Estabilidad',
        targetMet: 'Objetivo',
        readiness: 'Readiness',
        peak: 'Rendimiento Óptimo',
        recovery: 'Modo Recuperación',
        wellness: 'Bienestar',
        dailyMetrics: 'Métricas diarias de Oura',
        recoveryScore: 'Puntaje Recup.',
        optimal: 'Óptimo',
        sleep: 'Sueño',
        pain: 'Dolor Rodilla',
        library: 'Librería'
      }
    }
  };

  const t = translations[language];

  const features = [
    { icon: Smartphone, label: t.features[0], id: 0 },
    { icon: Activity, label: t.features[1], id: 1 },
    { icon: Play, label: t.features[2], id: 2 }
  ];

  // --- Phone Screen Renderers ---

  const renderDigitalProgramming = () => (
    <>
      {/* Header */}
      <div className="pt-8 px-6 pb-6 animate-[fadeInUp_0.5s_ease-out_forwards]">
        <p className="text-motion-muted text-[10px] uppercase tracking-widest mb-1">{language === 'en' ? 'Thursday, Oct 12' : 'Jueves, 12 Oct'}</p>
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold text-white">{t.phone.week} 4</h3>
          <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}images/avatar_placeholder.webp`} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="px-4 space-y-3 overflow-y-auto no-scrollbar pb-10 animate-[fadeInUp_0.5s_ease-out_0.1s_forwards] opacity-0">

        {/* Interactive Load Card */}
        <div
          className="bg-motion-surface p-5 rounded-xl cursor-pointer active:scale-95 transition-all hover:bg-white/5"
          onClick={() => setLoadValue(prev => prev >= 100 ? 25 : prev + 25)}
        >
          <div className="flex justify-between items-start mb-3">
            <span className="text-white text-sm font-medium">{t.phone.stability}</span>
            <RefreshCw size={14} className="text-motion-muted" />
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-motion-accent rounded-full transition-all duration-700 ease-out"
              style={{ width: `${loadValue}%` }}
            ></div>
          </div>
          <div className="mt-2 text-right">
            <span className="text-xs text-motion-muted">{loadValue}% {t.phone.targetMet}</span>
          </div>
        </div>

        {/* Interactive Workout Card */}
        <div
          className={`p-5 rounded-xl flex gap-4 items-center cursor-pointer transition-all duration-300 border ${workoutComplete ? 'bg-motion-accent/10 border-motion-accent/30' : 'bg-motion-surface border-transparent hover:bg-white/5'}`}
          onClick={() => setWorkoutComplete(!workoutComplete)}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${workoutComplete ? 'bg-motion-accent' : 'bg-white/5'}`}>
            {workoutComplete ? <CheckCircle2 size={20} /> : <Play size={16} fill="currentColor" />}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-medium transition-colors ${workoutComplete ? 'text-motion-accent' : 'text-white'}`}>Tidal Tank Squat</p>
            <p className="text-motion-muted text-xs">3 sets x 8 reps</p>
          </div>
        </div>

        {/* Interactive Graph Card */}
        <div className="bg-motion-surface p-5 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
          <div className="flex justify-between items-center mb-4">
            <p className="text-motion-muted text-[10px] uppercase tracking-widest">{t.phone.readiness}</p>
            <BarChart3 size={14} className="text-motion-muted" />
          </div>

          {/* Bars */}
          <div className="flex justify-between items-end h-24 px-1">
            {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveBarIndex(i); }}
                className={`w-6 rounded-md transition-all duration-300 hover:opacity-80 ${i === activeBarIndex ? 'bg-motion-accent shadow-[0_0_15px_rgba(124,58,237,0.5)]' : 'bg-white/10'}`}
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>

          {/* Day Labels */}
          <div className="flex justify-between px-1 mt-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <span key={i} className={`w-6 text-center text-[9px] font-medium ${i === activeBarIndex ? 'text-white' : 'text-motion-muted'}`}>
                {day}
              </span>
            ))}
          </div>

          <p className="text-center text-xs text-motion-muted mt-3">
            {activeBarIndex === 5 ? t.phone.peak : t.phone.recovery}
          </p>
        </div>
      </div>
    </>
  );

  const renderBiofeedback = () => (
    <>
      <div className="pt-8 px-6 pb-6 animate-[fadeInUp_0.5s_ease-out_forwards]">
        <h3 className="text-2xl font-bold text-white mb-2">{t.phone.wellness}</h3>
        <p className="text-motion-muted text-xs">{t.phone.dailyMetrics}</p>
      </div>

      <div className="px-4 space-y-3 pb-10 animate-[fadeInUp_0.5s_ease-out_0.1s_forwards] opacity-0">
        {/* Readiness Score */}
        <div className="bg-motion-surface p-6 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-motion-muted text-[10px] uppercase tracking-widest mb-1">{t.phone.recoveryScore}</p>
            <p className="text-4xl font-bold text-white">92<span className="text-lg text-motion-muted font-normal">/100</span></p>
            <p className="text-green-400 text-xs mt-2 flex items-center gap-1"><Zap size={10} fill="currentColor" /> {t.phone.optimal}</p>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-white/5 border-t-motion-accent flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-4 border-motion-accent opacity-20 blur-[2px]"></div>
          </div>
        </div>

        {/* Grid Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-motion-surface p-4 rounded-xl">
            <Heart size={18} className="text-red-400 mb-3" />
            <p className="text-lg font-bold text-white">54 <span className="text-xs text-motion-muted font-normal">ms</span></p>
            <p className="text-motion-muted text-[10px] uppercase tracking-widest mt-1">HRV</p>
          </div>
          <div className="bg-motion-surface p-4 rounded-xl">
            <Moon size={18} className="text-indigo-400 mb-3" />
            <p className="text-lg font-bold text-white">7h 42m</p>
            <p className="text-motion-muted text-[10px] uppercase tracking-widest mt-1">{t.phone.sleep}</p>
          </div>
        </div>

        {/* Pain Scale */}
        <div className="bg-motion-surface p-5 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white text-sm font-medium">{t.phone.pain}</span>
            <span className="text-xs text-motion-muted">2/10</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
            <div className="absolute w-1/5 h-full bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );

  // Data for Video Library
  const videoContent = {
    'For You': {
      featured: { title: "Hip Mobility Flow", duration: "12 min", level: "Beginner", img: `${import.meta.env.BASE_URL}images/video_mobility.jpg` },
      list: [
        { title: "Ankle Dorsiflexion", dur: "4 min", locked: false, img: `${import.meta.env.BASE_URL}images/service_running.jpg` },
        { title: "T-Spine Rotation", dur: "8 min", locked: false, img: `${import.meta.env.BASE_URL}images/service_rehab.jpg` },
        { title: "Single Leg RDL", dur: "10 min", locked: true, img: `${import.meta.env.BASE_URL}images/service_online.jpg` }
      ]
    },
    'Mobility': {
      featured: { title: "Full Body Unlock", duration: "15 min", level: "All Levels", img: `${import.meta.env.BASE_URL}images/video_fullbody.jpg` },
      list: [
        { title: "90/90 Hip Switch", dur: "5 min", locked: false, img: `${import.meta.env.BASE_URL}images/hero_bg.jpg` },
        { title: "Cat-Cow Flow", dur: "3 min", locked: false, img: `${import.meta.env.BASE_URL}images/service_rehab.jpg` },
        { title: "Deep Squat Hold", dur: "6 min", locked: true, img: `${import.meta.env.BASE_URL}images/service_running.jpg` }
      ]
    },
    'Strength': {
      featured: { title: "Core Foundations", duration: "20 min", level: "Intermediate", img: `${import.meta.env.BASE_URL}images/video_strength.jpg` },
      list: [
        { title: "Goblet Squat", dur: "8 min", locked: false, img: `${import.meta.env.BASE_URL}images/service_online.jpg` },
        { title: "Pallof Press", dur: "4 min", locked: false, img: `${import.meta.env.BASE_URL}images/blog_1.jpg` },
        { title: "Romanian Deadlift", dur: "12 min", locked: true, img: `${import.meta.env.BASE_URL}images/blog_2.jpg` }
      ]
    }
  };

  const renderVideoLibrary = () => {
    const currentVideos = videoContent[videoCategory as keyof typeof videoContent];

    return (
      <>
        <div className="pt-8 px-6 pb-4 animate-[fadeInUp_0.5s_ease-out_forwards]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">{t.phone.library}</h3>
            <Search size={18} className="text-white" />
          </div>

          {/* Interactive Categories */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {['For You', 'Mobility', 'Strength'].map((cat) => (
              <button
                key={cat}
                onClick={() => setVideoCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors ${videoCategory === cat ? 'bg-white text-black font-bold' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 space-y-4 pb-10 animate-[fadeInUp_0.5s_ease-out_0.1s_forwards] opacity-0">
          {/* Featured Video - Dynamic based on category */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-motion-surface group cursor-pointer">
            <img src={currentVideos.featured.img} alt="Video" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle size={40} className="text-white fill-white/20 group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute bottom-3 left-3">
              <p className="text-white text-sm font-bold">{currentVideos.featured.title}</p>
              <p className="text-xs text-white/70">{currentVideos.featured.duration} • {currentVideos.featured.level}</p>
            </div>
          </div>

          {/* List - Dynamic based on category */}
          <div className="space-y-3">
            {currentVideos.list.map((vid, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
                <div className="w-16 h-12 bg-white/10 rounded overflow-hidden flex-shrink-0 relative">
                  {/* Thumbnail Image */}
                  <img src={(vid as any).img} alt={vid.title} className="w-full h-full object-cover opacity-80" />
                  {vid.locked && <div className="absolute inset-0 bg-black/60 flex items-center justify-center"><Lock size={12} className="text-white" /></div>}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium group-hover/item:text-motion-accent transition-colors">{vid.title}</p>
                  <p className="text-motion-muted text-xs">{vid.dur}</p>
                </div>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover/item:border-motion-accent group-hover/item:bg-motion-accent/10 transition-colors">
                  <Play size={10} className="text-white ml-0.5 group-hover/item:text-motion-accent" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <section id="dashboard" className="py-16 bg-motion-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Text Section (Left) */}
          <div className="w-full md:w-1/2 reveal-on-scroll text-left">
            <span className="text-motion-accent font-bold tracking-widest uppercase text-xs mb-4 block">Motion App</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: t.title.replace('recovery.', 'recovery.<br/>').replace('recuperación.', 'recuperación.<br/>') }}>
            </h2>
            <p className="text-lg text-motion-muted mb-8 font-light leading-relaxed max-w-md">
              {t.desc}
            </p>

            <div className="space-y-4">
              {features.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(item.id)}
                  className={`w-full flex items-center gap-4 group transition-all duration-300 p-2 -ml-2 rounded-xl ${activeFeature === item.id ? 'bg-white/5 ring-1 ring-white/10' : 'hover:bg-white/5'}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${activeFeature === item.id ? 'bg-motion-accent text-white border-motion-accent' : 'bg-motion-surface border-white/5 text-white group-hover:border-motion-accent/50'}`}>
                    <item.icon size={18} className={activeFeature === item.id ? "" : "group-hover:text-motion-accent transition-colors"} />
                  </div>
                  <span className={`font-medium tracking-wide text-sm transition-colors ${activeFeature === item.id ? 'text-white' : 'text-motion-muted group-hover:text-white'}`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Phone Mockup (Right) */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end reveal-on-scroll mt-12 md:mt-0">
            {/* Minimalist Phone Container */}
            <div className="relative w-[300px] h-[600px] bg-motion-subtle rounded-[2.5rem] border-[6px] border-motion-surface shadow-2xl z-10 transition-transform hover:scale-[1.01] duration-300">

              {/* Screen Content */}
              <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative flex flex-col">

                {/* Status Bar Mockup */}
                <div className="h-6 w-full flex justify-between items-center px-6 pt-3 z-20">
                  <span className="text-[10px] text-white/50">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  </div>
                </div>

                {/* Dynamic Content Area */}
                <div className="flex-1 flex flex-col relative">
                  {activeFeature === 0 && renderDigitalProgramming()}
                  {activeFeature === 1 && renderBiofeedback()}
                  {activeFeature === 2 && renderVideoLibrary()}
                </div>

                {/* Bottom Nav Mockup */}
                <div className="absolute bottom-0 w-full bg-black/90 backdrop-blur-md border-t border-white/5 p-4 flex justify-around z-20">
                  <div className="w-8 h-1 rounded-full bg-white/20 mb-1 mx-auto absolute top-2 left-1/2 -translate-x-1/2"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};