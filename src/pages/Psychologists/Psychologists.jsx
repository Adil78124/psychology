import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { openWhatsAppForPsychologist } from '../../utils/whatsapp';
import './Psychologists.css';

const Psychologists = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');


  const psychologists = [
    {
      id: 1,
      category: 'consultant',
      name: { ru: 'Секрекова Жадра Сарсенбековна', kz: 'Секрекова Жадра Сарсенбековна' },
      position: { ru: 'Практикующий психолог', kz: 'Тәжірибелі психолог' },
      phone: '+77076750099',
      email: '',
      therapy: { ru: 'Терапия принятия и ответственности (ACT)', kz: 'Қабылдау және жауапкершілік терапиясы (ACT)' },
      education: {
        ru: 'Бакалавриат: Казахский национальный университет им. аль-Фараби, г. Алматы\nМагистратура: Университет "Туран", г. Алматы',
        kz: 'Бакалавриат: Әл-Фараби атындағы Қазақ ұлттық университеті, Алматы қ.\nМагистратура: "Тұран" университеті, Алматы қ.',
      },
      about: {
        ru: 'Я - Жадра, практикующий психолог. Работаю в подходе терапии принятия и ответственности (АСТ), помогаю людям справляться с тревогой, стрессом, выгоранием, находить баланс между работой, отношениями и личными ценностями. Для меня важно создавать безопасное пространство, где можно говорить о сложном, находить опору и шаг за шагом строить жизнь, которая имеет смысл именно для вас.',
        kz: 'Мен - Жадра, тәжірибелі психолог. Қабылдау және жауапкершілік терапиясы (ACT) тәсілімен жұмыс істеймін, адамдарға мазасыздықпен, стресспен, өртенумен күресуге, жұмыс, қатынас және жеке құндылықтар арасындағы тепе-теңдікті табуға көмектесемін. Мен үшін күрделі нәрселер туралы сөйлесуге, тірек табуға және қадамдап өзіңіз үшін мағынасы бар өмір құруға болатын қауіпсіз кеңістік жасау маңызды.',
      },
      specialization: {
        ru: 'тревожность, панические атаки, фобии, стресс, эмоциональное выгорание, чувство вины, стыда, заниженная самооценка, прокрастинация, трудности с мотивацией, поиск смысла и ценностей, внутренние кризисы, выгорание, страх ошибок, развитие лидерских и коммуникативных навыков',
        kz: 'мазасыздық, паникалық шабуылдар, фобиялар, стресс, эмоционалды өртену, кінә сезімі, ұят, төмен өзін-өзі бағалау, кешіктіру, мотивация қиындықтары, мағына мен құндылықтарды іздеу, ішкі дағдарыстар, өртену, қателер қорқынышы, көшбасшылық және коммуникативтік дағдыларды дамыту',
      },
      description: {
        ru: 'Работаю в подходе терапии принятия и ответственности (АСТ), помогаю людям справляться с тревогой, стрессом, выгоранием.',
        kz: 'Қабылдау және жауапкершілік терапиясы (ACT) тәсілімен жұмыс істеймін, адамдарға мазасыздықпен, стресспен, өртенумен күресуге көмектесемін.',
      },
      image: '/images/Секрекова_Жадра_Сарсенбековна.jpg',
    },
    {
      id: 2,
      category: 'consultant',
      name: { ru: 'Нүркенов Ерсін Рысқалиұлы', kz: 'Нүркенов Ерсін Рысқалиұлы' },
      initials: 'НЕ',
      hasPhoto: false,
      position: { ru: 'Психолог', kz: 'Психолог' },
      phone: '+77772852133',
      email: '',
      therapy: { ru: 'Гуманистический подход', kz: 'Гуманистік тәсіл' },
      education: {
        ru: '2014-2018 гг. Бакалавриат: Университет "Туран", г. Алматы. Психология\n2018-2021 гг. Магистратура: Казахский гуманитарно-юридический инновационный университет, г. Семей. Педагогика и психология',
        kz: '2014-2018 жж. Бакалавриат: "Тұран" университеті, Алматы қ. Психология\n2018-2021 жж. Магистратура: Қазақ гуманитарлық-заң инновациялық университеті, Семей қ. Педагогика және психология',
      },
      about: {
        ru: 'Я - психолог, который помогает людям лучше понимать себя и свои внутренние процессы. Моя цель - не перегружать сухой теорией, а говорить о сложных вещах простым и понятным языком.',
        kz: 'Мен адамдарға өздерін және ішкі процестерін жақсырақ түсінуге көмектесетін психологпын. Менің мақсатым - құрғақ теориямен шамадан тыс жүктемеу, күрделі нәрселер туралы қарапайым және түсінікті тілде сөйлесу.',
      },
      specialization: {
        ru: 'тревога, стресс, эмоциональное выгорание, неуверенность в себе, заниженная самооценка, трудности в отношениях, прокрастинация, отсутствие мотивации, адаптация к новым условиям, поиск себя, личностный рост, поддержка студентов и молодых специалистов, переживание кризисов и сложных жизненных ситуаций',
        kz: 'мазасыздық, стресс, эмоционалды өртену, өзіне сенімсіздік, төмен өзін-өзі бағалау, қатынастағы қиындықтар, кешіктіру, мотивацияның жоқтығы, жаңа жағдайларға бейімделу, өзін іздеу, жеке өсу, студенттер мен жас мамандарды қолдау, дағдарыстар мен күрделі өмірлік жағдайларды бастан кешіру',
      },
      description: {
        ru: 'Помогаю людям лучше понимать себя и свои внутренние процессы. Говорю о сложных вещах простым и понятным языком.',
        kz: 'Адамдарға өздерін және ішкі процестерін жақсырақ түсінуге көмектесемін. Күрделі нәрселер туралы қарапайым және түсінікті тілде сөйлесемін.',
      },
      image: '/images/psychologist-8.jpg',
    },
    {
      id: 3,
      category: 'consultant',
      name: { ru: 'Рахматоллаева Амина Руслановна', kz: 'Рахматоллаева Амина Руслановна' },
      position: { ru: 'Психолог, Магистр педагогических наук', kz: 'Психолог, Педагогика ғылымдарының магистрі' },
      phone: '+77779920696',
      email: '',
      therapy: { ru: 'Классические методы консультирования', kz: 'Кеңес берудің классикалық әдістері' },
      education: {
        ru: '2019-2023 гг. Бакалавриат: НАО "Университет имени Шакарима", г. Семей. Психология\n2023-2025 гг. Магистратура: НАО "Университет имени Шакарима", г. Семей. Педагогика и психология',
        kz: '2019-2023 жж. Бакалавриат: "Шәкәрім атындағы университеті" ҰАҚ, Семей қ. Психология\n2023-2025 жж. Магистратура: "Шәкәрім атындағы университеті" ҰАҚ, Семей қ. Педагогика және психология',
      },
      about: {
        ru: 'Психолог «Службы психологической поддержки» ABU, Магистр педагогических наук. В своей работе опираюсь на профессиональные методы, но при этом создаю тёплую и доверительную атмосферу, в которой каждый может открыто говорить о своих переживаниях.',
        kz: 'ABU «Психологиялық қолдау қызметінің» психологы, Педагогика ғылымдарының магистрі. Жұмысымда кәсіби әдістерге сүйенемін, бірақ әрқайсысы өз өткелдері туралы ашық сөйлесе алатын жылы және сенімді атмосфера жасаймын.',
      },
      specialization: {
        ru: 'неуверенность в себе, улучшение отношений с собой и окружающими, поиск смысла и жизненных целей, страх, чувство тревоги, личностное развитие',
        kz: 'өзіне сенімсіздік, өзімен және айналадағылармен қарым-қатынасты жақсарту, мағына мен өмірлік мақсаттарды іздеу, қорқыныш, мазасыздық сезімі, жеке дамыту',
      },
      description: {
        ru: 'Создаю тёплую и доверительную атмосферу, в которой каждый может открыто говорить о своих переживаниях.',
        kz: 'Әрқайсысы өз өткелдері туралы ашық сөйлесе алатын жылы және сенімді атмосфера жасаймын.',
      },
      image: '/images/Рахматоллаева_Амина_Руслановна.jpg',
    },
  ];

  const filteredPsychologists = psychologists.filter((psychologist) => {
    const matchesSearch =
      t(psychologist.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(psychologist.description).toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const handleAppointment = (psychologistName) => {
    console.log('Кнопка нажата, психолог:', psychologistName);
    try {
      const currentLanguage = language || 'ru';
      console.log('Текущий язык:', currentLanguage);
      openWhatsAppForPsychologist(psychologistName, currentLanguage);
    } catch (error) {
      console.error('Ошибка при открытии WhatsApp:', error);
      alert('Ошибка при открытии WhatsApp. Попробуйте еще раз.');
    }
  };

  return (
    <div className="psychologists-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>{t({ ru: 'Наши психологи', kz: 'Біздің психологтар' })}</h1>
          <p>{t({ ru: 'Команда специалистов по работе со студентами и молодежью', kz: 'Студенттер мен жастармен жұмыс жасауға маманданған мамандар командасы' })}</p>
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--light-blue)', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
              {t({ ru: 'Если вас беспокоит…', kz: 'Егер сізді мазалап жатса…' })}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <li style={{ padding: '0.5rem 0' }}>
                ❗ {t({ ru: 'чувство тревоги', kz: 'мазасыздық сезімі' })}
              </li>
              <li style={{ padding: '0.5rem 0' }}>
                ❗ {t({ ru: 'неуверенность в себе', kz: 'өзіне сенімсіздік' })}
              </li>
              <li style={{ padding: '0.5rem 0' }}>
                ❗ {t({ ru: 'эмоциональное выгорание', kz: 'эмоционалды өртену' })}
              </li>
              <li style={{ padding: '0.5rem 0' }}>
                ❗ {t({ ru: 'отсутствие мотивации', kz: 'мотивацияның жоқтығы' })}
              </li>
            </ul>
            <p style={{ marginTop: '1rem', fontWeight: '500' }}>
              {t({ ru: 'Наши специалисты готовы помочь вам!', kz: 'Біздің мамандар сізге көмектесуге дайын!' })}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="search-filter">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t({ ru: 'Поиск по имени или специализации...', kz: 'Аты немесе мамандандыру бойынша іздеу...' })}
            />
          </div>
        </div>
      </section>

      {/* Psychologists Grid */}
      <section className="psychologists">
        <div className="container">
          <div className="psychologists-grid">
            {filteredPsychologists.map((psychologist) => (
              <div key={psychologist.id} className="psychologist-card">
                <div className="psychologist-image">
                  {psychologist.hasPhoto !== false ? (
                    <img src={psychologist.image} alt={t(psychologist.name)} />
                  ) : (
                    <div className="psychologist-placeholder">
                      <div className="placeholder-initials">{psychologist.initials || 'НЕ'}</div>
                      <div className="placeholder-text">{t({ ru: 'Фото скоро появится', kz: 'Фото жақында пайда болады' })}</div>
                    </div>
                  )}
                </div>
                <div className="psychologist-info">
                  <h3>{t(psychologist.name)}</h3>
                  <p className="psychologist-position">{t(psychologist.position)}</p>
                  
                  {psychologist.therapy && (
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--primary-blue)', fontWeight: '500' }}>
                      💼 {t(psychologist.therapy)}
                    </p>
                  )}
                  
                  {psychologist.phone && (
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      📞 <a href={`tel:${psychologist.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{psychologist.phone}</a>
                    </p>
                  )}
                  
                  <p className="psychologist-description">{t(psychologist.about || psychologist.description)}</p>
                  
                  {psychologist.specialization && (
                    <details style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                      <summary style={{ cursor: 'pointer', fontWeight: '500', color: 'var(--primary-blue)' }}>
                        {t({ ru: 'Работа со следующими запросами', kz: 'Келесі сұрауларға жұмыс' })} ▼
                      </summary>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-light)' }}>
                        {t(psychologist.specialization)}
                      </p>
                    </details>
                  )}
                  
                  <button
                    className="btn btn-primary btn-small"
                    onClick={() => handleAppointment(t(psychologist.name))}
                  >
                    {t({ ru: 'Записаться', kz: 'Жазылу' })}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Psychologists;

