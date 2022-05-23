import React from 'react'
import emailjs from 'emailjs-com';
import { FiCheck } from "react-icons/fi";

function mailer() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            "service_1r7zgih",
            "template_b2ka3mo",
            e.target,
            "GqIHVgAy11BE0VJYs").then(res=>{
                console.log(res);
            }).catch(err =>console.log(err));
    }
  return (
    <div>
      <img src="/assets/logo.png" alt="logo" className=" w-60 h-20 ml-5 laptop:w-96 laptop:h-24 tablet:w-80 tablet:h-28 tablet:ml-5 mt-5"/>
      <h1 className="font-bold text-center m-5 my-8 laptop:text-center laptop:text-xl laptop:m-10 laptop:mt-20 tablet:text-lg tablet:m-10 tablet:text-center">Ich möchte mich an der Weiterentwicklung der IT-Systeme im gesundheitlichen Verbraucherschutz in Bayern beteiligen</h1>
      <form className="grid grid-rows-6 text-left mx-5 laptop:m-auto laptop:my-24 laptop:w-4/12 my-20 tablet:m-20" onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="name" className="border-b-4 border-black outline-none" placeholder="Vorname Nachname"/><br/>
          <label>Berufsgruppe: </label> 
          <input type="text" name="berufsgruppe" className="border-b-4 border-black outline-none"  placeholder="Berufsgruppe"/><br/>
          <label>Amt:</label>
          <input type="text" name="amt" className="border-b-4 border-black outline-none"  placeholder="Amt"/><br/>
          <label>Email:</label>
          <input type="email" name="email" className="border-b-4 border-black outline-none"  placeholder="max.mustermann@musteramt.bayern.de"/><br/>
          <label>Telefon:</label>
          <input type="text" name="telefon" className="border-b-4 border-black outline-none"  placeholder="Telefonnummer"/><br/>
          <label>Mein liebstes elektronisches Gerät ist:</label>
          <input type="text" name="device" className="border-b-4 border-black outline-none"  placeholder="freiwillige Angabe"/><br/>
          <input type="submit" value="Senden" className="bg-[#1D54F2] text-white hover:bg-[#1479FF] px-14 py-3 rounded-full w-40 align-center mx-auto my-10 cursor-pointer"/>
      </form>
      <div className="laptop:ml-20 m-10 text-xs">
          <p className="text-left flex flex-row gap-5 font-sm"><FiCheck className="w-12 h-12 laptop:w-4 laptop:h-4"/>Bei Abgabe ergeben sich KEINE konkreten Verpflichtungen, es handelt sich lediglich um die grundsätzliche Bereitschaft, sich einzubringen!</p>
          <p className="text-left flex flex-row gap-5 font-sm"><FiCheck className="w-4 h-4"/>Jedes Engagement ist – jedes Mal – freiwillig.</p>
          <p className="text-left flex flex-row gap-5 font-sm"><FiCheck className="w-10 h-10 laptop:w-4 laptop:h-4"/>Je nach Zeit und Verfügbarkeit sind einmalige Einzelinterviews (online, ca. 1h) die Regel, bei Interesse/Zeit auch mehr.</p>
          <p className="text-left flex flex-row gap-5 font-sm"><FiCheck className="w-10 h-10 laptop:w-4 laptop:h-4"/>Vom IT-Nerd bis hin zum IT-Skeptiker sind alle Meinungen gefragt – konstruktives Feedback vorausgesetzt.</p>
          <p className="text-left flex flex-row gap-5 font-sm"><FiCheck className="w-5 h-5 laptop:w-4 h-4"/>Uns ist Ihre Erfahrung aus der Praxis wichtig!</p>
      </div>
      <div className="text-left ml-5">Ihr Team der Abteilung 4</div>
      <div className="text-right m-5 mb-20">Datenschutzhinweis – siehe Rückseite</div>
      <div>
          <p className="underline text-left ml-5">Datenschutzhinweis:</p>
          <ul className="text-xs text-left list-disc m-5">
              <li className="mx-5">Mit der Abgabe des Zettels stimmen Sie der Verarbeitung Ihrer Daten - nur zu dem Zweck „Weiterentwicklung der IT-Systeme im esundheitlichen Verbraucherschutz“ zu.</li>
              <li className="mx-5">Ein Widerruf ist jederzeit möglich unter 48@stmuv.bayern.de Oder IT-Architektur-gesv@stmuv.bayern.de</li>
              <li className="mx-5">Für Fragen oder spätere Anmeldungen stehen wir gerne unter beiden E-Mail- Adressen zur Verfügung!</li>
          </ul>
      </div>
    </div>
  )
}

export default mailer
