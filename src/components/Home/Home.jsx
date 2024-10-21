import React from 'react'
import { useTranslation } from 'react-i18next';

//class component
function Home() {
  const { t, i18n } = useTranslation();
  const mai = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
        <h1>{t('Home')}</h1>
        <p>{t('wtow')}</p>
        <button  onClick={() => mai('en')}>English</button>
        <button  onClick={() => mai('arabic')}>Arabic</button>
    </div>
  )
}

export default Home