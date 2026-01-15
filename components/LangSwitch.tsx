import { useLanguage } from '../context/LanguageContext';

interface LangSwitchProps {
  variant?: 'light' | 'dark';
}

export default function LangSwitch({ variant = 'dark' }: LangSwitchProps) {
  const { language, toggleLanguage } = useLanguage();
  
  const isDark = variant === 'dark';
  
  return (
    <button 
      onClick={toggleLanguage} 
      className={`
        flex items-center gap-2 px-3 py-1.5 border transition-all duration-200
        ${isDark 
          ? 'border-slate-300 text-slate-700 hover:border-slate-500 hover:text-slate-900' 
          : 'border-white/30 text-white/90 hover:border-white hover:text-white'
        }
      `}
    >
      <span className="text-xs font-medium tracking-wider uppercase">
        {language === 'fr' ? 'FR' : 'EN'}
      </span>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}