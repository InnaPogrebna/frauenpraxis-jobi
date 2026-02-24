"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapPin, Scale } from "lucide-react";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#FCFBFA] flex flex-col selection:bg-[#e62e7a]/10">
      <Header forceScrolled />

      <main className="flex-1 pt-32 md:pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 border-b border-rose-100 pb-12"
          >
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.5em] font-black text-[#e62e7a] block mb-4 font-sans">
              Rechtliche Hinweise
            </span>
            <h1 className="font-serif text-slate-800 leading-[0.9] tracking-tighter text-5xl sm:text-6xl md:text-7xl break-all">
              Datenschutz<span className="text-[#e62e7a]">erklärung</span>
            </h1>
            <p className="mt-8 text-slate-500 font-serif text-lg md:text-xl max-w-2xl">
              für Websitebetreiber nach den Vorgaben der Datenschutzgrundverordnung (DSGVO).
            </p>
          </motion.div>

          <div className="space-y-12">

            {/* I */}
            <section className="relative">
              <div className="flex flex-col gap-6">
                <h2 className="text-[#e62e7a] font-sans font-black uppercase text-[11px] tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#e62e7a]" /> I. Name und Anschrift des Verantwortlichen
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-600 font-serif text-sm md:text-sm md:text-base">
                    Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist die:
                  </p>
                  <div className="bg-white p-8 rounded-[40px] border border-rose-100 shadow-sm space-y-2 font-serif italic text-slate-800">
                    <p className="font-bold text-xl not-italic text-slate-950">Nana Jobi</p>
                    <p className="flex items-center gap-3"> <MapPin className="w-4 h-4 text-[#e62e7a]" /> Staufenbergstrasse 31, 74081 Heilbronn</p>
                    <p className="flex items-center gap-3"> <Scale className="w-4 h-4 text-[#e62e7a]" /> Deutschland</p>
                    <p className="mt-4 border-t border-rose-50 pt-4">Tel: 07131-42570</p>
                    <p>E-Mail: <a href="mailto:info@frauenpraxis-jobi.de" className="text-[#e62e7a] underline decoration-rose-200">info@frauenpraxis-jobi.de</a></p>
                  </div>
                </div>
              </div>
            </section>

            {/*II */}
            <section className="relative">
              <div className="flex flex-col gap-6">
                <h2 className="text-[#e62e7a] font-sans font-black uppercase text-[11px] tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#e62e7a]" /> II.Allgemeines zur Datenverarbeitung
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      1.Umfang der Verarbeitung personenbezogener Daten
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base leading-relaxed">
                      Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
                      Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
                      Die Erhebung und Verwendung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung
                      des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus
                      tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften
                      gestattet ist.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person
                      einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei
                      die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.
                      Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,
                      der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine
                      Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich
                      und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte
                      Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      3. Datenlöschung und Speicherdauer
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung
                      entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber
                      in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen
                      wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene
                      Speicherfrist abläuft, es sei denn, dass
                      eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* III. Kontaktformular und E-Mail-Kontakt */}
            <section className="relative">
              <div className="flex flex-col gap-6">
                <h2 className="text-[#e62e7a] font-sans font-black uppercase text-[11px] tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#e62e7a]" /> III. Kontaktformular und E-Mail-Kontakt
                </h2>
                <div className="space-y-12">

                  {/* 1. Beschreibung */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      1. Beschreibung und Umfang der Datenverarbeitung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische
                      Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der
                      Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:
                      <br />
                      <strong>Vor- und Zuname, email-Adresse, Telefonnummer</strong>
                      <br />
                      Zum Zeitpunkt der Absendung der Nachricht werden zudem folgende Daten gespeichert:
                      <br />
                      <strong>Auflistung erhobener Daten, z. B. IP-Adresse des Nutzers, Datum und Uhrzeit der Registrierung</strong>
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Für die Verarbeitung der Daten wird im Rahmen des Absendevorgangs Ihre
                      Einwilligung eingeholt und auf diese Datenschutzerklärung verwiesen.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Alternativ ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich.
                      In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Es erfolgt in diesem Zusammenhang keine Weitergabe der Daten an Dritte.
                      Die Daten werden ausschließlich für die Verarbeitung der Konversation verwendet.
                    </p>
                  </div>

                  {/* 2. Rechtsgrundlage */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      2. Rechtsgrundlage für die Datenverarbeitung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des
                      Nutzers Art. 6 Abs. 1 lit. a DSGVO.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden,
                      ist Art. 6 Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss eines
                      Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
                    </p>
                  </div>

                  {/* 3. Zweck & Dauer */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg md:text-xl text-slate-900">
                      3. Zweck der Datenverarbeitung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme.
                      Im Falle einer Kontaktaufnahme per E-Mail liegt hieran auch das erforderliche berechtigte
                      Interesse an der Verarbeitung der Daten.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Die sonstigen während des Absendevorgangs verarbeiteten personenbezogenen Daten dienen dazu, einen Missbrauch
                      des Kontaktformulars zu verhindern und die Sicherheit unserer informationstechnischen Systeme sicherzustellen.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Dauer der Speicherung
                      <br />
                      Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                      erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars und
                      diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation
                      mit dem Nutzer beendet ist. Beendet ist die Konversation dann,
                      wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Die während des Absendevorgangs zusätzlich erhobenen personenbezogenen
                      Daten werden spätestens nach einer Frist von sieben Tagen gelöscht.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg md:text-xl text-slate-900">
                      4. Widerspruchs- und Beseitigungsmöglichkeit
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der
                      personenbezogenen Daten zu widerrufen. Nimmt der Nutzer per E-Mail Kontakt mit uns auf, so kann
                      er der Speicherung seiner personenbezogenen Daten
                      jederzeit widersprechen. In einem solchen Fall kann die Konversation nicht fortgeführt werden.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      <strong>Beschreibung, auf welche Weise der Widerruf bzw. Widerspruch ermöglicht wird.</strong>
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme gespeichert wurden, werden in diesem Fall gelöscht.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* IV. */}
            <section className="relative">
              <div className="flex flex-col gap-6">
                <h2 className="text-[#e62e7a] font-sans font-black uppercase text-[11px] tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#e62e7a]" />
                  IV. Rechte der betroffenen Person
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-slate-600 font-serif text-sm md:text-base italic">
                      Die folgende Auflistung umfasst alle Rechte der Betroffenen nach der DSGVO. Rechte, die für die
                      eigene Webseite keine Relevanz haben, müssen nicht genannt werden. Insoweit kann die Auflistung gekürzt werden.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Werden personenbezogene Daten von Ihnen verarbeitet,
                      sind Sie Betroffener i. S. d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      1. Auskunftsrecht
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen,
                      ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Liegt eine solche Verarbeitung vor, können Sie über folgende Informationen Auskunft verlangen:
                    </p>
                    <div className="grid gap-3 max-w-5xl">
                      {[
                        { id: "(1)", text: "die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;" },
                        { id: "(2)", text: "die Kategorien von personenbezogenen Daten, welche verarbeitet werden;" },
                        { id: "(3)", text: "die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;" },
                        {
                          id: "(4)", text: "die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder," +
                            "falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;"
                        },
                        {
                          id: "(5)", text: "das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts" +
                            "auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;"
                        },
                        { id: "(6)", text: "das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;" },
                        {
                          id: "(7)", text: "alle verfügbaren Informationen über die Herkunft der Daten," +
                            "wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;"
                        },
                        {
                          id: "(8)", text: "das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und" +
                            "– zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte" +
                            "Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person."
                        },
                      ].map((item) => (
                        <div key={item.id} className="flex gap-3 md:gap-4 p-4 rounded-[20px] bg-white border border-rose-50 shadow-sm hover:border-[#e62e7a]/30 transition-all group/item">
                          <span className="font-sans font-black text-[#e62e7a] text-[12px] md:min-w-[30px]">
                            {item.id}
                          </span>
                          <p className="text-slate-600 font-serif italic text-base leading-snug group-hover/item:text-slate-900 transition-colors">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie betreffenden personenbezogenen Daten in
                      ein Drittland oder an eine internationale Organisation übermittelt werden. In diesem Zusammenhang können Sie verlangen,
                      über die geeigneten Garantien gem. Art. 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      2. Recht auf Berichtigung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen,
                      unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich vorzunehmen.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      3. Recht auf Einschränkung der Verarbeitung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden
                      personenbezogenen Daten verlangen:
                    </p>
                    <div className="grid gap-1 md:gap-2 max-w-5xl">
                      {[
                        {
                          id: "(1)", text: " wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es" +
                            "dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;"
                        },
                        {
                          id: "(2)", text: " die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und" +
                            "stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;"
                        },
                        {
                          id: "(3)", text: "der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger" +
                            "benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder"
                        },
                        {
                          id: "(4)", text: "  wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch" +
                            "nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen"
                        },
                      ].map((item) => (
                        <div key={item.id} className="flex gap-1 md:gap-2 p-4 md:p-5 rounded-[15px] md:rounded-[25px] bg-white border border-rose-50 shadow-sm hover:border-[#e62e7a]/30 transition-all group/item">
                          <span className="font-sans font-black text-[#e62e7a] text-[12px] md:min-w-[30px]">
                            {item.id}
                          </span>
                          <p className="text-slate-600 font-serif italic text-base leading-snug group-hover/item:text-slate-900 transition-colors">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt, dürfen diese Daten – von ihrer
                      Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
                      Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person
                      oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen eingeschränkt,
                      werden Sie von dem Verantwortlichen unterrichtet bevor die Einschränkung aufgehoben wird.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      4. Recht auf Löschung
                    </h3>
                    <p className="text-slate-600 font-bold text-base md:text-lg">
                      a. Löschungspflicht
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich
                      gelöscht werden, und der
                      Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:
                    </p>
                    <div className="grid gap-1 md:gap-2 max-w-5xl">
                      {[
                        { id: "(1)", text: " Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig" },
                        { id: "(2)", text: "Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung." },
                        {
                          id: "(3)", text: "Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor," +
                            "oder Sie legen gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein."
                        },
                        { id: "(4)", text: "Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet." },
                        { id: "(5)", text: "Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt." },
                        { id: "(6)", text: "Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben." },
                      ].map((item) => (
                        <div key={item.id} className="flex gap-1 md:gap-2 p-4 md:p-5 rounded-[15px] md:rounded-[25px] bg-white border border-rose-50 shadow-sm hover:border-[#e62e7a]/30 transition-all group/item">
                          <span className="font-sans font-black text-[#e62e7a] text-[12px] md:min-w-[30px]">
                            {item.id}
                          </span>
                          <p className="text-slate-600 font-serif italic text-base leading-snug group-hover/item:text-slate-900 transition-colors">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-slate-600 font-bold text-base md:text-lg">
                      b. Information an Dritte
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Hat der Verantwortliche die Sie betreffenden personenbezogenen Daten öffentlich gemacht und ist er gem. Art. 17 Abs.
                      1 DSGVO zu deren Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der
                      Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche,
                      die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass Sie als betroffene Person von ihnen die
                      Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser
                      personenbezogenen Daten verlangt haben.
                    </p>
                    <p className="text-slate-600 font-bold text-base md:text-lg">
                      c. Ausnahmen
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist
                    </p>
                    <div className="grid gap-1 md:gap-2 max-w-5xl">
                      {[
                        { id: "(1)", text: "zur Ausübung des Rechts auf freie Meinungsäußerung und Information;" },
                        {
                          id: "(2)", text: "zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer" +
                            "Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;"
                        },
                        { id: "(3)", text: "aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;" },
                        {
                          id: "(4)", text: " für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für" +
                            "statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter Abschnitt" +
                            "a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder"
                        },
                        { id: "(5)", text: "zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen." }
                      ].map((item) => (
                        <div key={item.id} className="flex gap-1 md:gap-2 p-4 md:p-5 rounded-[15px] md:rounded-[25px] bg-white border border-rose-50 shadow-sm hover:border-[#e62e7a]/30 transition-all group/item">
                          <span className="font-sans font-black text-[#e62e7a] text-[12px] md:min-w-[30px]">
                            {item.id}
                          </span>
                          <p className="text-slate-600 font-serif italic text-base leading-snug group-hover/item:text-slate-900 transition-colors">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      5. Recht auf Unterrichtung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht,
                      ist dieser verpflichtet, allen Empfängern, denen die Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung
                      oder Löschung der Daten oder Einschränkung
                      der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über diese Empfänger unterrichtet zu werden.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      6. Recht auf Datenübertragbarkeit
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben,
                      in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Außerdem haben Sie das Recht, diese Daten einem anderen
                      Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern
                    </p>
                    <div className="grid gap-1 md:gap-2 max-w-5xl">
                      {[
                        { id: "(1)", text: "die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO beruht und" },
                        { id: "(2)", text: " die Verarbeitung mithilfe automatisierter Verfahren erfolgt" },

                      ].map((item) => (
                        <div key={item.id} className="flex gap-1 md:gap-2 p-4 md:p-5 rounded-[15px] md:rounded-[25px] bg-white border border-rose-50 shadow-sm hover:border-[#e62e7a]/30 transition-all group/item">
                          <span className="font-sans font-black text-[#e62e7a] text-[12px] md:min-w-[30px]">
                            {item.id}
                          </span>
                          <p className="text-slate-600 font-serif italic text-base leading-snug group-hover/item:text-slate-900 transition-colors">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      In Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken, dass die Sie betreffenden personenbezogenen Daten direkt von einem
                      Verantwortlichen einem anderen Verantwortlichen
                      übermittelt werden, soweit dies technisch machbar ist. Freiheiten und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung personenbezogener Daten, die für die Wahrnehmung einer Aufgabe
                      erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      7. Widerspruchsrecht
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die
                      Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von
                      Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht mehr, es sei denn, er kann
                      zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen,
                      oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch
                      gegen die Verarbeitung der Sie betreffenden personenbezogenen
                      Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die Sie betreffenden personenbezogenen Daten nicht mehr
                      für diese Zwecke verarbeitet.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG – Ihr
                      Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      8. Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf
                      der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      9. Recht auf Beschwerde bei einer Aufsichtsbehörde
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer
                      Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                      Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                    </p>
                  </div>
                </div>
              </div>
            </section>


            {/* I */}
            <section className="relative">
              <div className="flex flex-col gap-6">
                <h2 className="text-[#e62e7a] font-sans font-black uppercase text-[11px] tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#e62e7a]" />
                  V. Cookies
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-600 font-serif text-sm md:text-base">
                    Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien. Viele Cookies enthalten eine sogenannte Cookie-ID.
                    Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem
                    konkreten Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Ruft ein Nutzer eine Website auf, so kann ein
                    Cookie auf dem Betriebssystem des Nutzers
                    gespeichert werden. Dieser Cookie ermöglicht dann die eine eindeutige Identifizierung des Browsers beim erneuten Aufrufen der Website.
                  </p>
                  <p className="text-slate-600 font-serif text-sm md:text-base">
                    Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass
                    der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann. In den Cookies werden dabei folgende Daten gespeichert und
                    übermittelt:
                    <br />
                    Spracheinstellungen
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      1. Rechtsgrundlage für die Datenverarbeitung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter
                      Verwendung von Cookies ist Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      2. Zweck der Datenverarbeitung
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Wir verwenden auf unserer Internetseite technisch notwendige Cookies, um die Nutzung unserer Internetseite für Sie zu vereinfachen.
                       Dieser Einsatz der Cookies ist notwendig, da sonst einige Funktionen unserer Website nicht angeboten werden könnten.
                       Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird. Zweck dieser Wiedererkennung ist es, den Nutzern die Verwendung unserer Internetseite zu erleichtern. Der Benutzer einer Internetseite, die Cookies verwendet, muss beispielsweise nicht bei jedem Besuch der Internetseite erneut seine Zugangsdaten eingeben, weil dies von der Internetseite und dem auf dem Computersystem des Benutzers abgelegten Cookie übernommen wird. Ein weiteres Beispiel ist das Cookie eines Warenkorbes im Online-Shop. Der Online-Shop merkt sich die Artikel,
                      die ein Kunde in den virtuellen Warenkorb gelegt hat, über ein Cookie.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Für folgende Anwendungen benötigen wir Cookies:
                    </p>
                    <div className="grid gap-1 md:gap-2 max-w-5xl">
                      {[
                        { id: "(1)", text: "Übernahme von Spracheinstellungen" },
                        { id: "(2)", text: "Merken von Suchbegriffen" },
            ].map((item) => (
                      <div key={item.id} className="flex gap-1 md:gap-2 p-4 md:p-5 rounded-[15px] md:rounded-[25px] bg-white border border-rose-50 shadow-sm hover:border-[#e62e7a]/30 transition-all group/item">
                        <span className="font-sans font-black text-[#e62e7a] text-[12px] md:min-w-[30px]">
                          {item.id}
                        </span>
                        <p className="text-slate-600 font-serif italic text-base leading-snug group-hover/item:text-slate-900 transition-colors">
                          {item.text}
                        </p>
                      </div>
            ))}
                    </div>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Die durch technisch notwendige Cookies erhobenen Nutzerdaten werden nicht zur Erstellung von Nutzerprofilen verwendet
                      </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      In diesen Zwecken liegt auch unser berechtigtes Interesse in der Verarbeitung der personenbezogenen Daten nach Art. 6 Abs. 1 lit. f DSGVO
                      </p>
                      
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl italic text-slate-900">
                      3. Dauer der Speicherung, Widerspruchs- und Beseitigungsmöglichkeit
                    </h3>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Die von uns verwendeten Cookies, die technisch notwendigen sowie auch die nicht notwendigen, werden auf dem Rechner des Nutzers
                      gespeichert und von diesem an unserer Seite übermittelt. Sie als Nutzer haben deshalb auch die volle Kontrolle über die Verwendung von
                      Cookies. Sie können die Übertragung von Cookies deaktivieren oder einschränken, indem Sie durch die Einstellungen in Ihrem Internetbrowser
                      entsprechend ändern und damit der Setzung von Cookies dauerhaft widersprechen. Bereits gespeicherte Cookies können jederzeit gelöscht werden.
                      Bitte beachten Sie, dass im Falle einer
                      Deaktivierung der Cookies für unsere Internetseite eventuell nicht mehr alle programmierten Funktionen vollständig genutzt werden können.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Die Übermittlung von Flash-Cookies lässt sich nicht über die Einstellungen des Browsers,
                      jedoch durch Änderungen der Einstellung des Flash Players unterbinden.
                    </p>
                    <p className="text-slate-600 font-serif text-sm md:text-base">
                      Wir verwenden „Session-Cookies“, die nur für die Zeitdauer des aktuellen Besuchs auf unserer Onlinepräsenz abgelegt werden
                      (z.B. um die Speicherung Ihres Login-Status oder die Warenkorbfunktion und somit die Nutzung unseres Onlineangebotes
                      überhaupt ermöglichen zu können). In einem Session-Cookie wird eine zufällig erzeugte eindeutige Identifikationsnummer abgelegt,
                      eine sogenannte Session-ID. Außerdem enthält ein Cookie die Angabe über seine Herkunft und die Speicherfrist. Diese Cookies können
                      keine anderen Daten speichern. Session-Cookies werden gelöscht, wenn Sie die Nutzung
                      unseres Onlineangebotes beendet haben und sich z.B. ausloggen oder den Browser schließen.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg md:text-xl italic text-slate-900">
                        Google Analytics
                      </h3>
                      <p className="text-slate-600 font-serif text-sm md:text-base">
                        Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“).
                        Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse
                        der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser
                         Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung
                         der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen
                         Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird
                         die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird
                         Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen
                         und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
                         Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
                         Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf
                         hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber
                         hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie
                         die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link (http://tools.google.com/dlpage/gaoptout?hl=de)
                        verfügbare Browser-Plugin herunterladen und installieren.
                      </p>

                      <p className="text-slate-600 font-serif text-sm md:text-base leading-relaxed italic">
                        Sie können die Erfassung durch Google Analytics verhindern, indem Sie auf
                        folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, das die zukünftige
                        Erfassung Ihrer Daten beim Besuch dieser Website verhindert:{" "}
                        <a
                          href="https://marketingplatform.google.com/about/analytics/terms/de/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e62e7a] font-bold underline hover:opacity-80 transition-opacity"
                        >
                          Google Analytics deaktivieren
                        </a>
                        <br /><br />
                        Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter{" "}
                        <a
                          href="http://www.google.com/analytics/terms/de.html"
                          className="text-[#e62e7a] underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          http://www.google.com/analytics/terms/de.html
                        </a>{" "}
                        bzw. unter{" "}
                        <a
                          href="https://www.google.de/intl/de/policies/"
                          className="text-[#e62e7a] underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.google.de/intl/de/policies/
                        </a>.
                        Wir weisen Sie darauf hin, dass auf dieser Website Google Analytics um den Code
                        „anonymizeIp“ erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen
                        (sog. IP-Masking) zu gewährleisten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-12 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-300">
              Stand der Information: Februar 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}