import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { openWhatsAppForGeneralAppointment } from '../../utils/whatsapp';
import { initScrollAnimations } from '../../utils/animations';
import TestModal from '../../components/TestModal/TestModal';
import { testsData } from '../../data/testsData';
import './Survey.css';

const Survey = () => {
  const { t, language } = useLanguage();
  const [activeTest, setActiveTest] = useState(null);

  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer.disconnect();
  }, []);

  const tests = [
    {
      id: 'adaptation',
      icon: '🎓',
      title: { ru: 'Тест адаптации к студенчеству (ТАС)', kz: 'Студенттікке бейімделу тесті (ТАС)' },
      description: {
        ru: 'Выявление уровня социальной, учебной и психологической адаптации первокурсников к условиям вузовской среды',
        kz: 'Бірінші курс студенттерінің жоғары оқу орнының жағдайларына әлеуметтік, оқу және психологиялық бейімделу деңгейін анықтау',
      },
      duration: '15',
      questions: '40',
      externalLink: 'https://psytests.org/work/asvvuz.html',
    },
    {
      id: 'burnout',
      icon: '💪',
      title: { ru: 'Диагностика эмоционального выгорания (В.В. Бойко)', kz: 'Эмоционалды өртенуді диагностикалау (В.В. Бойко)' },
      description: {
        ru: 'Определение признаков эмоционального истощения, особенно у старшекурсников и студентов с высокой нагрузкой',
        kz: 'Эмоционалды шаршау белгілерін анықтау, әсіресе жоғары курс студенттері мен жоғары жүктемесі бар студенттерде',
      },
      duration: '20',
      questions: '84',
      externalLink: 'https://psytests.org/boyko/boburn.html',
    },
    {
      id: 'anxiety',
      icon: '😊',
      title: { ru: 'Опросник тревожности Спилбергера-Ханина', kz: 'Спилбергер-Ханин мазасыздық сауалнамасы' },
      description: {
        ru: 'Диагностика уровня тревожности студента в данный момент (ситуативной) и в целом (личностной)',
        kz: 'Студенттің қазіргі сәттегі (жағдайлық) және жалпы (жеке) мазасыздық деңгейін диагностикалау',
      },
      duration: '10',
      questions: '40',
      externalLink: 'https://psytests.org/anxiety/stai-run.html',
    },
    {
      id: 'self-esteem',
      icon: '🎯',
      title: { ru: 'Методика Дембо-Рубинштейн (самооценка)', kz: 'Дембо-Рубинштейн әдісі (өзін-өзі бағалау)' },
      description: {
        ru: 'Оценка уровня и адекватности самооценки студента по различным параметрам личности',
        kz: 'Тұлғаның әртүрлі параметрлері бойынша студенттің өзін-өзі бағалау деңгейі мен дұрыстығын бағалау',
      },
      duration: '10',
      questions: '7',
      externalLink: 'https://psytests.org/trait/demborp.html',
    },
    {
      id: 'coping',
      icon: '🛡️',
      title: { ru: 'Стратегии совладания (Лазарус и Фолькман)', kz: 'Күресу стратегиялары (Лазарус және Фолькман)' },
      description: {
        ru: 'Выявление предпочтительных стратегий преодоления трудных жизненных ситуаций',
        kz: 'Қиын өмірлік жағдайларды жеңудің басым стратегияларын анықтау',
      },
      duration: '15',
      questions: '50',
      externalLink: 'https://psytests.org/coping/wcq-run.html',
    },
    {
      id: 'motivation',
      icon: '📚',
      title: { ru: 'Опросник мотивации учения (Т.И. Ильина)', kz: 'Оқу мотивациясы сауалнамасы (Т.И. Ильина)' },
      description: {
        ru: 'Определение ведущих мотивов учебной деятельности студентов',
        kz: 'Студенттердің оқу қызметінің жетекші мотивтерін анықтау',
      },
      duration: '10',
      questions: '50',
      externalLink: 'https://psytests.org/emvol/ilmov.html',
    },
    {
      id: 'depression',
      icon: '🌧️',
      title: { ru: 'Шкала депрессии Бека (BDI)', kz: 'Бек депрессия шкаласы (BDI)' },
      description: {
        ru: 'Выявление признаков депрессии и определение степени её выраженности',
        kz: 'Депрессия белгілерін анықтау және оның көрінісінің дәрежесін анықтау',
      },
      duration: '10',
      questions: '21',
      externalLink: 'https://psytests.org/depr/bdi-run.html',
    },
  ];

  const startTest = (testId) => {
    setActiveTest(testId);
  };

  const closeTest = () => {
    setActiveTest(null);
  };

  return (
    <div className="survey-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>{t({ ru: 'Психологические тесты', kz: 'Психологиялық тесттер' })}</h1>
          <p style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '1rem' }}>
            {t({
              ru: 'Понять себя - первый шаг к внутреннему балансу',
              kz: 'Өзін түсіну - ішкі тепе-теңдікке бірінші қадам',
            })}
          </p>
          <p>
            {t({
              ru: 'Этот раздел - для тех, кто хочет разобраться в себе, своих эмоциях, мотивации и способах преодоления стресса. Это не экзамен и не приговор. Просто честный разговор с самим собой — в удобном и безопасном формате.',
              kz: 'Бұл бөлім өзін, эмоцияларын, мотивациясын және стрессті жеңу жолдарын түсінгісі келетіндерге арналған. Бұл емтихан да, үкім де емес. Тек өзіңізбен ыңғайлы және қауіпсіз форматта шынайы әңгіме.',
            })}
          </p>
        </div>
      </section>

      {/* Tests List */}
      <section className="tests">
        <div className="container">
          <div className="tests-grid">
            {tests.map((test, index) => (
              <div 
                key={test.id} 
                className="test-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="test-icon">{test.icon}</div>
                <h3>{t(test.title)}</h3>
                <p>{t(test.description)}</p>
                <div className="test-meta">
                  <span>⏱ {test.duration} мин</span>
                  <span>
                    📝 {test.questions} {t({ ru: 'вопросов', kz: 'сұрақ' })}
                  </span>
                </div>
                {test.externalLink ? (
                  <a 
                    href={test.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {t({ ru: 'Пройти тест', kz: 'Тестілеуден өту' })} →
                  </a>
                ) : (
                  <button className="btn btn-primary" onClick={() => startTest(test.id)}>
                    {t({ ru: 'Пройти тест', kz: 'Тестілеуден өту' })}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <div className="container">
          <div className="info-content">
            <h2>{t({ ru: 'Важная информация', kz: 'Маңызды ақпарат' })}</h2>
            <div className="info-text">
              <p>
                {t({
                  ru: 'Все тесты являются информационными и не заменяют профессиональную консультацию психолога. Результаты тестов помогут вам лучше понять себя и определить области, требующие внимания.',
                  kz: 'Барлық тесттер ақпараттық болып табылады және психологтың кәсіби кеңесін алмастырмайды. Тест нәтижелері сізге өзіңізді жақсырақ түсінуге және назар аударуды қажет ететін салаларды анықтауға көмектеседі.',
                })}
              </p>
              <p>
                {t({
                  ru: 'Если результаты теста вызывают у вас беспокойство или вы хотите получить более детальную оценку, рекомендуем записаться на консультацию к нашим специалистам.',
                  kz: 'Тест нәтижелері сізде алаңдаушылық тудырса немесе егжей-тегжейлі бағалау алғыңыз келсе, біздің мамандарымыздан кеңес алуды ұсынамыз.',
                })}
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const currentLanguage = language || 'ru';
                  openWhatsAppForGeneralAppointment(currentLanguage);
                }}
              >
                {t({ ru: 'Записаться на консультацию', kz: 'Кеңеске жазылу' })}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Test Modal */}
      {activeTest && <TestModal testId={activeTest} onClose={closeTest} />}
    </div>
  );
};

export default Survey;

