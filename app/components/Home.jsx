"use client";

import React, { useState, useEffect, useRef } from 'react';
import Button from './assets/Button'
import Cards from './assets/Cards'
import Tag from './assets/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import useGeolocation from '../hooks/useGeolocation';
import translations from '../../public/translations.json';


function Home() {


  const [showColumns, setShowColumns] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const country = useGeolocation();
  const [texts, setTexts] = useState(translations.EN)
  
  useEffect(() => {
    switch (country) {
        case "DE":
            setTexts(translations.DE);
            break;
        case "PT":
            setTexts(translations.PT);
            break;
        case "FR":
            setTexts(translations.FR);
            break;
        case "NL":
            setTexts(translations.NL);
            break;
        case "IT":
            setTexts(translations.IT);
            break;
        default:
            setTexts(translations.EN);
    }
}, [country]);


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Wie lange habe ich Zugang zum Kurs?",
      answer: "Du hast mindestens 12 Monate Zugang zum Kursmaterial. Das heißt, du kannst den Kurs in deinem eigenen Tempo durcharbeiten und jederzeit Inhalte erneut ansehen."
    },
    {
      question: "Brauche ich bereits Erfahrung im Trading?",
      answer: "Nein, der Kurs ist sowohl für Anfänger als auch für Fortgeschrittene geeignet. Du wirst Schritt für Schritt durch den gesamten Prozess geführt."
    },
    {
      question: "Wie viel Zeit muss ich in das Trading investieren?",
      answer: "Das hängt von deinen Zielen und deinem aktuellen Wissensstand ab. Es wird empfohlen, täglich mindestens 1 Stunde zu investieren, um die besten Ergebnisse zu erzielen."
    },
    {
      question: "Ist der Kurs auch für Fortgeschrittene sinnvoll?",
      answer: "Ja, auch Fortgeschrittene können von fortgeschrittenen Strategien und Techniken im Kurs profitieren."
    },
    {
      question: "Gibt es aktiven Support?",
      answer: "Ja, wir bieten aktiven Support durch unser Team, das dir bei Fragen oder Problemen zur Seite steht."
    }
  ];
  const handleShowColumns = () => {
    setShowColumns(true); 
  };

  const handleToggleColumns = () => {
    setShowColumns(prevState => !prevState);
  };
  return (
    <main className="relative " style={{ fontFamily: "'Outfit', sans-serif" }}>
        <div className="light-bg"  style={{ fontFamily: "'Outfit', sans-serif" }}>
        <div className="bg-white">
        <header className="w-full max-w-[80rem] h-[5rem] py-1 bg-[#fff] mx-auto sm:h-[3.8rem]">
  <nav className="flex justify-between items-center  h-full px-4">
    <div className="left-imagess">
      <img
        src="/images/6601dc8887b1e34f1fff3ef7_logo.webp"
        alt="Logo"
        className="w-[40px] h-auto sm:w-[40px]"  
      />
    </div>

    <div className="right-images flex items-center">
      <img
        src="/images/66d71361e6381ef5a1d07c03_avatars 2k.png"
        alt="Avatar"
        className="w-[118px] sm:w-[114px]"  
      />
      <div className="text-nav ml-4 text-black text-[12px] md:text-[12px]">
          Beretis <strong>2.145+</strong> Mal bestellt
        </div>

    </div>
  </nav>
</header>

</div>



<div className="w-[90%] max-w-[40rem] mx-auto relative z-[1000] flex flex-col items-center justify-center lg:mt-[3rem] mt-[2rem] sm:mt-1">
  <div
    className="text-[12px] text-black font-bold bg-white itepy-2 rounded-3xl px-4 py-3 flex items-center uppercase mt-[1rem]  fadeInUp"
    style={{ animationDelay: "0s" }}
  >
    <span className="online h-3 w-3 bg-green-500 rounded-full mr-2"></span>
    {texts.online.treading}
      </div>
  <h1
  className="title-top text-center text-black text-[32px] sm:text-[32px] font-bold tracking-[-.7px] leading-[1.1] mt-6 sm:leading-[1.1] md:text-[56px] fadeInUp"
  style={{ animationDelay: "0.2s", fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
>
  In nur 7 Tagen seriös <br /> Trading lernen
</h1>




  <div
    className="desc1 text-center w-[90%] max-w-[30rem] text-[14px] sm:text-[16px] text-[#728291] tracking-[-.32px] leading-[1.5] my-4 px-4 sm:tracking-[.2px] sm:px-2 fadeInUp"
    style={{ animationDelay: "0.4s" }}
  >
    Dein Start ins Daytrading mit Schritt für Schritt Anleitungen, sofort umsetzbaren Tipps, Brokerempfehlungen, Chartanalyse und DAX
    Strategie für nachhaltig profitables Trading.
  </div>

  <div className="relative z-[1000]">
    <Button />
    <div className="flex items-center justify-center mt-[1rem] fadeInUp" style={{ animationDelay: "0.8s" }}>
      <img
        src="/images/66d71361e6381ef5a1d07c03_avatars 2k.png"
        alt="Avatar"
        width={114}
        height={30.19}
      />
      <div className="text-people ml-4 text-black text-[12px] sm:text-[10px]">
        Beretis <strong>2.145+</strong> Mal bestellt
      </div>
    </div>
  </div>
  </div>



        

<img
  className="absolute top-[5rem] md:top-[3.8rem] inset-0 w-full h-[500px] sm:h-[500px] md:h-[600px] object-cover z-10 opacity-100 bg-gray-80"
  src="/images/66d7215fe0a981366df06f3c_Group 2087326459-p-2600.png"
  alt="Large banner"
/>



<div className="relative z-10 mt-[2rem] sm:mt-[3rem] fadeInUp flex justify-center" style={{ animationDelay: "0.9s" }}>
  <img
    className="images1 h-auto object-cover relative w-[50%] sm:w-[60%] md:w-[70%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]" // Adjusted width for mobile
    src="/images/66d72bafcf5c6b7b6a1493d7_MacBook Air M2-p-1080.webp"
    alt="New Image"
    loading="lazy"
  />

  <div
    className="blur-white absolute inset-auto w-full h-[110px] sm:h-[200px] md:h-[250px] z-30"
    style={{
      inset: 'auto 0% -1%',
      backgroundImage: 'linear-gradient(#f1f3f500, #f1f3f5 60%)'
    }}
  ></div>
</div>







<div className="grid grid-cols-2 sm:w-[90%] md:grid-cols-6 md:w-[70%]  lg:w-[190%] xl:w-[73%] m-auto">
  <img className="h-20 w-full object-contain" src="/images/66bd0c5162bf58d9ecb4f3b9_01.avif" alt="" />
  <img className="h-20 w-full object-contain" src="/images/66bd0c50de0cca26456f73d0_02.avif" alt="" />
  <img className="h-20 w-full object-contain" src="/images/66bd0c51fe74fff065641ef3_03.avif" alt="" />
  <img className="h-20 w-full object-contain" src="/images/66bd0c502151a3464e282feb_04.avif" alt="" />
  <img className="h-20 w-full object-contain" src="/images/66bd0c5099c8b478e9732b9d_05.avif" alt="" />
  <img className="h-20 w-full object-contain" src="/images/66bd0c509710055dd7251e0a_06.avif" alt="" />
</div>

<div className="Tradingdeine w-full h-auto mt-[5rem] px-4 mb-[5rem] flex flex-col items-center">
  <h1 className="w-[27.9rem] sm:w-[40.24rem] font-bold text-[34px] sm:text-[45px] tracking-[.4px] leading-[1.2] text-center fadeInUp" style={{ animationDelay: "0.9s" }}>
    Wie ergologreiches Trading deine
    <span className="text-[#0cdc6a] fadeInUp ml-2" style={{ animationDelay: "0.9s" }}>Zuknfit Verandern kann</span>
  </h1>

  <div className="desc flex justify-center mt-4 text-[#728291] text-[16px] sm:text-[16px] fadeInUp" style={{ animationDelay: "0.9s" }}>
    mit nur 30-50 Minuten Zitaufawnd am Tag.
  </div>

  <Cards />
</div>

<div className="part3 w-full h-auto bg-[#041212] pt-[3rem] text-[#fff] flex flex-col items-center rounded-2xl">

<div className="text-[12px] flex justify-center font-bold bg-[#fefefe0f] w-[10rem] h-auto py-2 rounded-2xl px-3 items-center uppercase mt-4">
    <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
    Dein Lehrplan
</div>

<div className="title flex justify-center mt-10 text-[48px] font-bold leading-[1.2] tracking-[.4px]">
    <h1>In nur 7 Tagen sicher traden</h1>
</div>


<Tag />

{!showColumns && (
    <div className="w-full h-auto mt-10 flex justify-center mb-[1.5rem] md:mb-[4rem]">
        <div
            onClick={handleToggleColumns}
            className="button flex items-center justify-between w-[20rem] bg-[#69bc8f26] font-[600] rounded-[10px] p-[20px] m-auto cursor-pointer"
            style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
            <p className="mr-2">Mehr anzeigen</p>
            <div className="icon-create w-[24px] h-[24px]">
                <img src="/images/66bdc762139d5d2dbcb2c74c_Add box.png" alt="" />
            </div>
        </div>
    </div>
)}
{showColumns && (
  <>
    <div className="column-add px-5">
      <div className="flex flex-wrap justify-center gap-3">
        {/* Column 1 */}
        <div className="column w-full md:w-[40rem] h-auto p-[20px] bg-[#fefefe08] mb-[2.5rem] md:mb-3 sm:mb-[3rem] relative rounded-[10px]" style={{ border: '1px solid #ffffff0d' }}>
    <img
        className="w-full h-auto object-cover sm:h-[250px] md:h-auto" 
        src="/images/66d70f4263b1d68278be1fe5_Group 2087326667.png"
        alt="" 
    />
<div className="on_the_trader relative z-[20] mt-[3rem] md:mt-0"> 
<div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
            Tag 4
        </div>
        <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
            Markstrukturen
        </div>
        <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2 mb-[-1rem]">
            Erlerne die Grundlagen der technischen Analyse sowie das Lesen der Märkte, um die Entwicklung einer Aktie zu verstehen.
        </div>
    </div>
    <div className="trader_block-overlay" style={{
        backgroundImage: 'linear-gradient(#0c191900, #0c1919  20%)',
        height: '243px',
        position: 'absolute',
        inset: '0',
        width: '100%',
        top: '40%',
        zIndex: 10,
    }}></div>
</div>

        {/* Column 2 */}
        <div className="column w-full md:w-[40rem] h-auto p-[15px] bg-[#fefefe08] mb-[1.9rem] md:mb-3 mobile:mb-[3rem] relative rounded-[10px]" style={{ border: '1px solid #ffffff0d' }}>
          <img
            className="imgtog5 w-auto h-auto"
            src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bdcaea1657996322be914b_U.avif"
            alt="" />
          <div className="on_the_trader relative z-[20] mt-[-1.7rem] md:mt-[-8.7rem] ">
            <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
              Tag 5
            </div>
            <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
              Die TF Methode
            </div>
            <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
              Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.
            </div>
          </div>
          <div className="trader_block-overlay" style={{
            backgroundImage: 'linear-gradient(#0c191900, #0c1919  30%)',
            height: '243px',
            position: 'absolute',
            inset: '0',
            width: '100%',
            top: '40%',
            zIndex: 10,
          }}></div>
        </div>

        {/* Column 3 */}
        <div className="column w-full md:w-[40rem] h-auto p-[15px] bg-[#fefefe08] mb-[1.9rem] md:mb-3 mobile:mb-[3rem] relative rounded-[10px]" style={{ border: '1px solid #ffffff0d' }}>
          <img
            className="imgtog5 w-auto h-auto"
            src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d70fe18435ec9fd92ece3a_Group%202087326431.png"
            alt="" />
          <div className="on_the_trader relative z-[20] mt-[-1.7rem] md:mt-[-8.7rem] ">
          <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
              Tag 6
            </div>
            <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
              Die TF Methode
            </div>
            <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
              Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.
            </div>
          </div>
          <div className="trader_block-overlay" style={{
            backgroundImage: 'linear-gradient(#0c191900, #0c1919  30%)',
            height: '243px',
            position: 'absolute',
            inset: '0',
            width: '100%',
            top: '40%',
            zIndex: 10,
          }}></div>
        </div>

        {/* Column 4 */}
        <div className="column w-full md:w-[40rem] h-auto p-[15px] bg-[#fefefe08] mb-3 relative rounded-[10px]" style={{ border: '1px solid #ffffff0d' }}>
          <img
            className="imgtog5 w-auto h-auto"
            src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bdcaea186d4f1e46c729f4_Frame%202087326564.avif"
            alt="" />
          <div className="on_the_trader relative z-[20] mt-[1rem] md:mt-[-3rem] ">
            <div className="tag text-[12px] text-[#041212] uppercase bg-[#14f97b] font-bold leading-[1] p-[10px] w-[3.5rem] rounded-2xl">
              Tag 7
            </div>
            <div className="h3 text-[#fff] tracking-[0] font-[500] leading-[1.2] text-[24px] mt-3">
              Die TF Methode
            </div>
            <div className="description text-[#788886] tracking-[-.28px] text-[14px] leading-[1.5] mt-2">
              Du wirst lernen, wie du in nur 6 Schritten mit der TF Methode innerhalb der nächsten 7 Tage deinen ersten profitablen Trade setzen kannst.
            </div>
          </div>
          <div className="trader_block-overlay" style={{
            backgroundImage: 'linear-gradient(#0c191900, #0c1919  30%)',
            height: '200px',
            position: 'absolute',
            inset: '0',
            width: '100%',
            top: '50%',
            zIndex: 10,
          }}></div>
        </div>
      </div>
    </div>

   
    <div className="relative z-[1000] text-[#000]">
  <Button />
  <div className="flex items-center justify-center  mb-[2.5rem] mt-[2rem] sm:mt-[1rem]">
          <img
            src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d71361e6381ef5a1d07c03_avatars%202k.png"
            alt="Avatar"
            width={114}
            height={30.19}
          />
          <div className="text-people ml-4 text-white text-[12px]  sm:text-[10px]">
            Beretis <strong>2.145+</strong> Mal bestellt
          </div>
        </div>
</div>
  </>
)}



</div>

<div className="part3 bg-gradient-[#f1f3f5, #fff]">
<div className="mt-[6rem] flex justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00B67A" className="w-6 h-6 ml-2">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
  <p className="font-[600] text-[14px] text-center">Trustpilot</p>
</div>




  <div className="flex flex-wrap justify-center gap-4 w-[100%] h-auto mt-[2.5rem] z-0 px-5">
  <div className="relative flex flex-col items-start rounded-[12px] pr-[32px] pl-[32px] bg-[#fff] p-4 pt-[2rem] w-[25.5rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600]">
    <span className="text-[#0ec661]">2.145+</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Zurfriedene</span>
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Teilnehmer/innen</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f60_images-group-p-500.png"
      alt=""
      className="mt-[1rem] object-cover bg-contain bg-repeat w-[27rem] h-[10.6rem] "
      style={{ backgroundImage: '100%' }}
    />
    
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '120px',
        position: 'absolute',
        bottom: '0',
        width: '89%',
        zIndex: 10,
      }}
    />
</div>

  {/* Kolona 2 */}
  <div className="relative flex flex-col rounded-[12px] items-start bg-[#fff] pt-[2rem] pl-[2rem] w-[53rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600] col-start-2 z-20">
    <span className="block text-[28px]  tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem] z-10">Mehr als</span>
    <span className="text-[#0ec661] relative z-10">12 Top-Experten</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem] relative z-10">im Teams</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/664cd3b45a1b4940ebcfc4ab_272327.webp"
      alt=""
      className="hidden md:block w-auto h-[200px] object-cover z-0 bg-contain bg-repeat ml-[-2rem] md:mr-2 mt-[-2.3rem] md:mt-[-6.3rem] md:w-[820.33px] md:h-[300px]"
      style={{ backgroundImage: '100%' }}
    />
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/664cd803960057669fadea99_5.webp"
      alt=""
      className="block md:hidden w-auto h-auto object-cover z-0 bg-contain mt-[-8rem] bg-repeat ml-[-1rem] md:mr-2 md:mt-[-6.3rem] md:w-[820.33px] md:h-[300px]"
      style={{ backgroundImage: '100%' }}
    />

    {/* <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '80px',
        position: 'absolute',
        bottom: '0',
        width: '94%',
        zIndex: 10,
        marginRight: "4rem",
      }}
    /> */}
  </div>

</div> 



<div className="flex flex-wrap justify-center gap-4 w-[100%] h-auto mt-[1rem]">
  <div className="relative flex flex-col items-start rounded-[12px] pr-[32px] pl-[32px] bg-[#fff] p-4 pt-[2rem] w-[25.5rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600]">

    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem] z-20">Wir sind ein</span>
    <span className="text-[#0ec661] z-20">deutsches</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem] z-20">Unternehmen</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/664cd3ac78e980e08b45322e_272326.webp"
      alt=""
      className="mt-[-5rem] object-cover bg-contain bg-repeat relative z-10"
      style={{ backgroundImage: '100%' }}
    />

    <img className='absolute bottom-[5rem] z-20 w-[260px]' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/665490e2dc5220d2999408d9_370483916-p-500.webp" alt="" />
    
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '120px',
        position: 'absolute',
        bottom: '0',
        width: '89%',
        zIndex: 10,
      }}
    />
</div>
<div className="relative z-10 flex flex-col items-start rounded-[12px] pr-[32px] pl-[32px] bg-[#fff] p-4 pt-[2rem] w-[25.5rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600]">
    <span className="text-[#0ec661]">15.000+</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Durchgefuhrte</span>
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Trades</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f5f_frame-numbers-p-500.png"
      alt=""
      className="mt-[2rem]  object-cover bg-contain bg-repeat w-[27rem] h-[10.1rem] "
      style={{ backgroundImage: '100%' }}
    />
    
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '120px',
        position: 'absolute',
        bottom: '0',
        width: '89%',
        zIndex: 10,
      }}
    />
</div>
<div className="relative flex flex-col items-start rounded-[12px] pr-[32px] pl-[32px] bg-[#fff] p-4 pt-[2rem] w-[25.5rem] h-auto text-[28px] tracking-[.35px] leading-[100%] font-[600]">
    <span className="text-[#0ec661]">15 Jahre</span> 
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Trading</span>
    <span className="block text-[28px] tracking-[.35px] leading-[100%] font-[600] mt-[0.5rem]">Erfahrung</span>
    
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff4016_Frame%25201948755811-p-500.png"
      alt=""
      className="mt-[2rem] object-cover bg-contain bg-repeat w-[27rem] h-[10.1rem] "
      style={{ backgroundImage: '100%' }}
    />
    
    <div
      className="trader_block-overlay"
      style={{
        backgroundImage: 'linear-gradient(to top, #fff, #0000)',
        height: '120px',
        position: 'absolute',
        bottom: '0',
        width: '89%',
        zIndex: 10,
      }}
    />
</div>
</div>
</div>
<div className="part5  md:mt-[6rem]">
  <div className="relative w-screen flex flex-col items-center z-20 mt-10 px-5">
    <div className="text-[12px] text-black font-bold bg-white py-2 rounded-3xl px-4 flex items-center uppercase mt-4">
      <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
      Erkennstt du dich hier wieder?
    </div>

    <div className="title1 text-center text-black text-[40px] tracking-[.7px] font-bold leading-[1.1] mt-6">
      Für wen dieser Kurs ist
    </div>

    <div className="flex flex-wrap justify-center items-start w-full h-auto mt-10 gap-6">
      <div className="w-[32rem] bg-[#fff] p-3 rounded-[20px]">
        <div className="button1 bg-[#0cdc6a] text-[#ffffff] font-bold pt-[15px] pb-[15px] text-[20px] items-center text-center rounded-[10px]">
          100% richtig:
        </div>
        <ul className="list-inside list-none m-5 md:m-10 text-[16px] text-[#728291]">
        <li className="flex mt-6">
        <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du interessiert dich für die Börse
    </li>
  <li className="flex mt-8">
    <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du willst eine neue Fähigkeit lernen
    </li>
  <li className="flex mt-8">
    <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du willst finanzielle Freiheit erreichen
    </li>
  <li className="flex mt-8">
    <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du hast 30-60 Minuten Zeit pro Tag
    </li>
  <li className="flex mt-8">
    <span className="relative bg-[#0cdc6a] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20174cfe997185dd9702_chek.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du willst erfolgserprobte Trading-Strategien
    </li>
</ul>
      </div>
      
      <div className="w-[32rem] bg-[#fff] p-3 rounded-[20px]">
        <div className="button1 bg-[#ff0000] text-[#ffffff] font-bold pt-[15px] pb-[15px] text-[20px] items-center text-center rounded-[10px] ">
        Definitiv nicht:
        </div>
        <ul className="list-inside list-none m-5 md:m-10 text-[16px] text-[#728291]">
        <li className="flex mt-6">
        <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
      <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Trading interessiert dich nicht

    </li>
  <li className="flex mt-8">
  <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
  <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du bist nicht lernbereit

    </li>
  <li className="flex mt-8">
  <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
  <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du hast keine finanziellen Ziele

    </li>
  <li className="flex mt-8">
  <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
  <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du willst keine Zeit investieren

    </li>
  <li className="flex mt-8">
  <span className="relative bg-[#f3ecea] rounded-full w-[24px] h-[24px] mr-2 flex items-center justify-center">
  <img 
        src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd20b15f0d9108f1af0809_Group%202087326444.png" 
        alt="check icon" 
        className="absolute  w-[10px] h-[10px]"
      />
    </span>
    Du denkst Trading hat mit Glück zu tun

    </li>
</ul>
      </div>
    </div>
  </div>
</div>



<div className="part5 w-full h-auto bg-[#041212] rounded-[20px] flex flex-col lg:flex-row justify-center items-center mt-[4rem] md:mt-[6rem] mb-10 px-4 lg:px-0">
  
  <div className="left-img w-full lg:w-[34rem] mt-[1.5rem] h-auto lg:mt-[6rem] mb-[2rem] lg:mb-[6rem]">
    <img src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd24c802a20ec487fa78e0_image%201376-p-1080.webp" alt="dada" loading='lazy' className="w-full lg:w-auto" />
  </div>

  <div className="text text-[#ffff] lg:mt-5 lg:ml-[7rem]">
    <h1 className='text-[28px] lg:text-[40px] font-bold leading-[1.2] mb-5 text-center lg:text-left'>
      Der mit Abstand einfachste <br /> 
      Weg, um mit geringem <br /> 
      <span className='text-[#0cdc6a] text-[28px] lg:text-[40px]'>
        Zeitaufwand ins Trading <br />einzusteigen.
      </span>
    </h1>

    <div className="descript text-[#788886] text-[16px] lg:text-[16px] tracking-[-.32px] leading-[1.5] text-center lg:text-left">
      In dieser 7-tägigen Ausbildung lernst du die Grundlagen des Daytradings in leicht <br className="hidden lg:block"/> 
      verständlicher und unterhaltsamer Form und bekommst zudem noch klare Anleitungen und <br className="hidden lg:block"/>  
      Strategien, die du danach eigenständig und sicher umsetzen kannst.
      <br /><br />
      In über 15 Jahren als Trader habe ich vieles gelernt, aber auch einige Fehler gemacht. <br className="hidden lg:block"/>
      Ich weiß, wie komplex Trading für einen Anfänger ist. Um dir den Einstieg so einfach wie nur <br className="hidden lg:block"/>  
      möglich zu machen, habe ich dieses kostenlose Online-Training erstellt. So eine Ausbildung <br className="hidden lg:block"/>  
      hätte ich mir damals selbst gewünscht.
      <br /><br />
      Viel Spaß beim Erlernen dieser einzigartigen Fähigkeit!
      <br />
      <strong className='text-[#fff]'>Dein Tim</strong>
      <br /><br />
      <img className='w-[155px] lg:w-[154px] mb-[4rem] mx-auto lg:mx-0' src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bd24f909b20f8f904dba08_tim%20signature.avif" alt="Tim Signature" />
    </div>
  </div>
</div>

<div className="part6 py-5 px-4 lg:py-16">
  <div className="part6-1 flex flex-col lg:flex-row justify-between items-start max-w-7xl mx-auto">
  <h1 className="hidden lg:block text-[40px] font-bold text-black leading-[1.2] mb-6 lg:mb-0">
  Häufig gestellte <br /> Fragen
</h1>
<h1 className="block lg:hidden text-[28px] font-bold text-black leading-[1.2] mb-10 lg:mb-0">
  Häufig gestellte Fragen
</h1>



   
    {/* FAQ Section */}
    <div className="columns-click w-full lg:w-[38rem] px-1">
  {faqs.map((faq, index) => (
    <div 
      key={index} 
      className="bg-white mb-4 p-4 rounded-lg shadow-lg cursor-pointer" 
      onClick={() => toggleAccordion(index)}  
    >
      <div className="flex justify-between items-center relative">
        <h2 className="text-sm lg:text-[15px] tracking-[.18px] p-1 text-black font-[600]">
          {faq.question}
        </h2>

        <div className="container">
          <input type="checkbox" checked={activeIndex === index} readOnly />
          <div className="line"></div>
          <div className={`line line-indicator ${activeIndex === index ? 'active' : ''}`}></div>
        </div>
      </div>

      {activeIndex === index && (
        <div className="mt-2 text-[#0006] text-xs lg:text-[14px] p-2 leading-[160%]">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>




  </div>
</div>



<div className="part7 flex justify-center items-center w-full py-6">
  <div className="section3 part7-1 mb-[-19rem] flex flex-col md:flex-row items-start justify-between max-w-7xl w-full md:w-[85rem] rounded-[20px] mx-auto bg-white pb-[80px] py-[30px] px-[20px] md:px-[80px]">
  <div className="footer_blur hidden md:block"> </div>


    {/* Left Section */}
    <div className="left mt-[2rem] md:mt-[7rem] text-center md:text-left w-full md:w-auto">
      <h1 className="text-[28px] md:text-[44px] font-[600] leading-tight">
        Nur noch <span className="text-[#0cdc6a]">1 Schritt</span>...
      </h1>

      <div className="description text-[15px] md:text-[16px] text-[#728291] leading-relaxed mt-3">
        Verwandle dich vom kompletten Anfänger zum fortgeschrittenen <br className="hidden md:inline" />
        Trader in nur 7 Tagen. Warte nicht länger und sichere dir jetzt den <br className="hidden md:inline" />
        Zugang zu dieser einzigartigen und für dich kostenlosen Online- <br className="hidden md:inline" />
        Ausbildung.
      </div>

      {/* Button Section */}
      <div className="relative z-[1000] text-[#000] hidden md:block">
      <Button />
  <div className="flex items-center justify-start  mb-[2rem] mt-[2rem] sm:mt-[1rem]">
          <img
            src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d71361e6381ef5a1d07c03_avatars%202k.png"
            alt="Avatar"
            width={114}
            height={30.19}
          />
          <div className="text-people ml-4 text-black text-[12px]  sm:text-[10px]">
            Beretis <strong>2.145+</strong> Mal bestellt
          </div>
        </div>
        
</div>

     
</div>


    {/* Right Section */}
    <div className="right mt-[2rem] md:mt-[4rem] w-full md:w-auto">



      
    <img className="w-full md:w-[518px] h-auto mx-auto md:mx-0 relative hidden md:block" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bdc35e8d97a420409c5f60_image%201385-p-1080.avif" alt="" />
    <img className="w-full md:w-[518px] h-auto mx-auto md:mx-0 relative block md:hidden" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bdd5372eaada0fae9eccc1_image%201385m.avif" alt="" />
<div className="absolute bottom-[117.9rem] lg:bottom-[83.4rem]">
<img className="w-[200px]" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bddb6c5a17773ef43ca625_new%204.avif" alt="" />

</div>
<div className="img-foot absolute bottom-[90rem] left-[12rem] lg:bottom-[59.5rem] lg:left-[81.5rem]">
<img className="w-[200px]" src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66bdc35512c1734c225b3e8b_5.avif" alt="" />

</div> 
<div className="footer_blur1 block lg:hidden"></div>



    </div>
    <div className="relative z-[1000] text-[#000] block md:hidden"> 
  <Button />
  <div className="flex items-center justify-start mb-[4rem] mt-[2rem] sm:mt-[1rem]">
    <img
      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d71361e6381ef5a1d07c03_avatars%202k.png"
      alt="Avatar"
      width={114}
      height={30.19}
    />
    <div className="text-people ml-4 text-black text-[12px] sm:text-[10px]">
      Beretis <strong>2.145+</strong> Mal bestellt
    </div>
  </div>
</div>


  

  </div>
</div>

<div className="light-background-footer bg-[#04120b]">
  <div className="part7-1 max-w-full md:max-w-8xl w-full md:w-[85rem] rounded-[20px] bg-[#04120b] flex flex-col mx-auto pb-[80px] py-[30px] px-[20px] md:px-[80px]">

    {/* Footer Top Section */}
    <div className="content mt-[10rem] md:mt-[20rem] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between border-b border-solid border-[#ffffff29]">

{/* Left Images */}
<div className="left-images mb-[3rem]">
  <img
    src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3eca_logo.webp"
    alt="Logo"
    width={38}
    height={32}
  />
</div>

{/* Right List */}
<div className="list-right flex flex-col items-start justify-start h-full  md:p-0">
  <ul className="list-none flex flex-col items-start space-y-2 text-[14px] md:flex-row md:space-x-8 md:space-y-0 text-[#fff] mb-[3rem]  md:text-[14px]">
    <li className="text-left py-2">Trader Training</li>
    <li className="text-left py-2">Karriere</li>
    <li className="text-left py-2">Kennenlerngespräch</li>
    <li className="text-left py-2">Kundenmeinungen</li>
  </ul>
</div>

</div>




    {/* Footer Bottom Section */}
    <div className="content flex flex-col md:flex-row items-start md:items-center justify-between border-b border-solid border-[#ffffff29] py-4">
  {/* Left List */}
  <div className="text-left">
    <ul className="list-none flex space-x-4 md:space-x-8 text-[#fff] text-[14px] md:text-[14px] mt-[2.5rem] mb-[2.5rem] font-[500] tracking-[.175px]">
      <li>Datenschutz</li>
      <li>Impressum</li>
      <li>Risikohnwis</li>
    </ul>
  </div>
  
  {/* Right Copyright Text */}
  <div className="text text-[#ffffff3d] text-[14px] md:text-[12px] ">
    © 2023 TradingFreaks® All rights reserved
  </div>
</div>
    <div className="content flex flex-col py-4 mt-[3rem] md:mt-[5rem]">
      <div className="title-footer mb-[2rem] text-[#fff] text-[24px] md:text-[24px] font-[600] leading-[100%]">
        Risikohinweis
      </div>
      <div className="description-bottom text-[#ffffff8f] w-full font-[400] md:w-[44rem] text-[13px] md:text-[14px]">
      Der Handel mit Hebelprodukten (z.B. CFD´s und Forex Trades) oder anderen Finanzinstrumenten ist mit einem enormen Risiko verbunden und nicht für jeden geeignet. Es besteht die Möglichkeit, dass Sie einen Totalverlust erleiden oder sogar Verluste erleiden, die Ihre Investitionen übersteigen. Bevor Sie mit Hebelprodukten oder anderen Finanzinstrumenten handeln, sollten Sie sicherstellen, dass Sie alle damit verbunden Risiken verstanden haben. Im Übrigen verweisen wir auf unsere Risikohinweise auf: https://tradingfreaks.com/risikohinweis/. Es wird ausdrücklich klargestellt, dass wir (TF Daytrading GmbH/ www.tradingfreaks.com/) keine Anlageberatung anbieten und durchführen und insbesondere auch keinerlei konkrete Empfehlungen zu einem Wertpapier, Finanzprodukt oder -Instrument abgeben. Die Erwähnung bestimmter Wertpapiere oder Anlageprodukte stellen ausdrücklich keine Empfehlung zum Kaufen oder Verkaufen oder Halten dar. Sie handeln bzw. traden auf eigenes Risiko. Jegliche Haftung wird ausgeschlossen.
<br />
<br />
        CFDs sind komplexe Instrumente und bergen aufgrund der Hebelwirkung ein hohes Risiko, schnell Geld zu verlieren. Die große Mehrheit der Konten von Kleinanlegern verliert beim Handel mit CFDs Geld. Sie sollten abwägen, ob Sie die Funktionsweise von CFDs verstehen und ob Sie es sich leisten können, das hohe Risiko einzugehen, ihr Geld zu verlieren.
      <br />
      <br />
      Kontaktieren Sie uns: info@tradingfreaks.com      </div>
    </div>
  </div>
</div>








      <style jsx>{`
        @keyframes moveInteraction {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-interaction {
          animation: moveInteraction 3s linear infinite;
        }
      `}</style>



</div>
 
    </main>
  );
}

export default Home;
