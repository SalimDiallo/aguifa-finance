import { useLanguage } from '../context/LanguageContext';

export default function LangSwitch() {
    const { language, toggleLanguage } = useLanguage();
    return (
        <button onClick={toggleLanguage} className="flex items-center cursor-pointer gap-2 px-3 py-2 backdrop-blur-sm transition-all duration-300 group">
            <span className="text-lg group-hover:scale-110 transition-transform">{language === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
            <span className=" text-sm font-semibold tracking-wide">{language === 'fr' ? 'FR' : 'EN'}</span>
        </button>
    );
}