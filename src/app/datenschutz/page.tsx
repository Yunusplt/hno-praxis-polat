import React from "react";
import Head from "next/head";
import { Container } from "@mui/material";
import { WebPage, WithContext } from "schema-dts";

export const metadata = {
  title: "Datenschutzerklärung - HNO Praxis Polat",
  description:
    "Erfahren Sie mehr über den Datenschutz bei HNO Praxis in Esslingen am Neckar und wie Ihre Daten DSGVO-konform verarbeitet werden.",
  openGraph: {
    title: "Datenschutzerklärung - HNO Praxis Polat",
    description:
      "Datenschutzerklärung und DSGVO-konforme Datenverarbeitung in der HNO Praxis.",
    url: "https://hnopraxis.de/datenschutz",
    siteName: "HNO Praxis in Esslingen am Neckar",
  },
  twitter: {
    card: "summary",
    title: "Datenschutzerklärung - HNO Praxis Polat",
    description:
      "Datenschutzerklärung und DSGVO-konforme Datenverarbeitung in der HNO Praxis.",
  },
};

const globalStructuredData: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Datenschutzerklärung",
  description:
    "Erfahren Sie mehr über den Datenschutz bei HNO Praxis in Esslingen am Neckar und wie Ihre Daten DSGVO-konform verarbeitet werden.",
  url: "https://hnopraxis.de/datenschutz",
  publisher: {
    "@type": "Organization",
    name: "HNO Praxis Polat",
    url: "https://hnopraxis.de",
  },
};

const Datenschutz = () => {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalStructuredData),
          }}
        />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
      </Head>
      <Container
        sx={{
          py: "4rem",
          "& h1": {
            mb: 3,
            textAlign: "center",
          },

          "& h2": {
            my: 2,
          },

          "& h3": {
            my: 1,
          },
          "& h4,p": {
            mb: 1,
          },

          "& ul": {
            pl: 2,
            "& li": {
              mb: 1,
            },
          },
        }}
      >
        <h1>Datenschutzerklärung</h1>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <h3>Datenerfassung auf dieser Website</h3>
        <h4>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen
        </p>
        <h4>Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere ITSysteme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie diese Website betreten
        </p>
        <h4>Wofür nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </p>
        <h3>Analyse-Tools und Tools von Drittanbietern</h3>
        <p>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen.
        </p>
        <p>
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
          der folgenden Datenschutzerklärung.
        </p>
        <h2>2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
        <h3>Amazon Web Services (AWS)</h3>
        <p>
          Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue John F.
          Kennedy, 1855 Luxemburg (nachfolgend AWS).
        </p>
        <p>
          Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten
          auf den Servern von AWS verarbeitet. Hierbei können auch
          personenbezogene Daten an das Mutterunternehmen von AWS in die USA
          übermittelt werden. Die Datenübertragung in die USA wird auf die
          EU-Standardvertragsklauseln gestützt. Details finden Sie hier:{" "}
          <a
            href="https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/.
          </a>
        </p>
        <p>
          Weitere Informationen entnehmen Sie der Datenschutzerklärung von AWS:{" "}
          <a
            href="https://aws.amazon.com/de/privacy/?nc1=f_pr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://aws.amazon.com/de/privacy/?nc1=f_pr.
          </a>
        </p>
        <p>
          Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
          zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
          Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
          auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG,
          soweit die Einwilligung die Speicherung von Cookies oder den Zugriff
          auf Informationen im Endgerät des Nutzers (z. B.
          Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>
        <p>
          Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
          Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
          Europäischen Union und den USA, der die Einhaltung europäischer
          Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten
          soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
          diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu
          erhalten Sie vom Anbieter unter folgendem Link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/participant/5776"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.dataprivacyframework.gov/participant/5776.
          </a>
        </p>
        <h4>Auftragsverarbeitung</h4>
        <p>
          Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung
          des oben genannten Dienstes geschlossen. Hierbei handelt es sich um
          einen datenschutzrechtlich vorgeschriebenen Vertrag, der
          gewährleistet, dass dieser die personenbezogenen Daten unserer
          Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
          DSGVO verarbeitet.
        </p>
        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>HNO Praxis Polat</p>
        <p>Martinstraße 11, 73728 Esslingen am Neckar</p>
        <p>Telefon: 07115 0091363</p>
        <p>E-Mail : info@hnopolat.de</p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>
        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe
        </p>
        <h3>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
          Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
          Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
          Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr
          Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
          die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG.
          Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs.
          1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf
          Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann
          ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
          1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser
          Datenschutzerklärung informiert.
        </p>
        <h3>Empfänger von personenbezogenen Daten</h3>
        <p>
          Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen
          externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung
          von personenbezogenen Daten an diese externen Stellen erforderlich.
          Wir geben personenbezogene Daten nur dann an externe Stellen weiter,
          wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir
          gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an
          Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs.
          1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden
          nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung
          weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
          gemeinsame Verarbeitung geschlossen.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3>
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </h3>
        <p>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH
          AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
          PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
          AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
          RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
          DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
          IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
          SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
          VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
          ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG
          ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS.
          1 DSGVO). WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
          DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
          WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
          DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS
          PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
          WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
          ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
          (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
        </p>
        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe
        </p>
        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <h3>Auskunft, Berichtigung und Löschung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>
        <h3>Recht auf Einschränkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:
        </p>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
            um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah/geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
            jedoch zur Ausübung, Verteidigung oder Geltendmachung von
            Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abwägung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
          von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </p>
        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLSVerschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </p>
        <h3>Widerspruch gegen Werbe-E-Mails</h3>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor
        </p>
        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Cookies</h3>
        <p>
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
          kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
          Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
          Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
          automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische
          Löschung durch Ihren Webbrowser erfolgt.
        </p>
        <p>
          Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen
          stammen (sog. Third-PartyCookies). Third-Party-Cookies ermöglichen die
          Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb
          von Webseiten (z. B. Cookies zur Abwicklung von
          Zahlungsdienstleistungen).
        </p>
        <p>
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
          technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht
          funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von
          Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens
          oder zu Werbezwecken verwendet werden.
        </p>
        <p>
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
          Optimierung der Website (z. B. Cookies zur Messung des Webpublikums)
          erforderlich sind (notwendige Cookies), werden auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
          angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an
          der Speicherung von notwendigen Cookies zur technisch fehlerfreien und
          optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung
          zur Speicherung von Cookies und vergleichbaren
          Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit
          widerrufbar
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browsers
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </p>
        <p>
          Welche Cookies und Dienste auf dieser Website eingesetzt werden,
          können Sie dieser Datenschutzerklärung entnehmen
        </p>
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
          Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen
          – bleiben unberührt.
        </p>
        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
          bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).
          Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
          Aufbewahrungsfristen – bleiben unberührt.
        </p>
        <h2>5. Soziale Medien</h2>
        <h3>Instagram</h3>
        <p>
          Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden.
          Diese Funktionen werden angeboten durch die Meta Platforms Ireland
          Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
        </p>
        <p>
          Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung
          zwischen Ihrem Endgerät und dem Instagram-Server hergestellt.
          Instagram erhält dadurch Informationen über den Besuch dieser Website
          durch Sie.
        </p>
        <p>
          Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch
          Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem
          Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser
          Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir
          als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten
          Daten sowie deren Nutzung durch Instagram erhalten.
        </p>
        <p>
          Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung
          nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die
          Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten
          auf unserer Website erfasst und an Facebook bzw. Instagram
          weitergeleitet werden, sind wir und die Meta Platforms Ireland
          Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland
          gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO).
          Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich
          auf die Erfassung der Daten und deren Weitergabe an Facebook bzw.
          Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch
          Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung.
          Die uns gemeinsam obliegenden Verpflichtungen wurden in einer
          Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut
          der Vereinbarung finden Sie unter:{" "}
          <a
            href="https://www.facebook.com/legal/controller_addendum"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/legal/controller_addendum.
          </a>{" "}
          Laut dieser Vereinbarung sind wir für die Erteilung der
          Datenschutzinformationen beim Einsatz des Facebook- bzw.
          Instagram-Tools und für die datenschutzrechtlich sichere
          Implementierung des Tools auf unserer Website verantwortlich. Für die
          Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook
          verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen)
          hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten
          können Sie direkt bei Facebook geltend machen. Wenn Sie die
          Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese
          an Facebook weiterzuleiten.
        </p>
        <p>
          Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
          der EU-Kommission gestützt. Details finden Sie hier:{" "}
          <a
            href="https://www.facebook.com/legal/EU_data_transfer_addendum"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/legal/EU_data_transfer_addendum
          </a>
          ,{" "}
          <a
            href="https://privacycenter.instagram.com/policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://privacycenter.instagram.com/policy/
          </a>{" "}
          und{" "}
          <a
            href="https://de-de.facebook.com/help/566994660333381"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://de-de.facebook.com/help/566994660333381.
          </a>
        </p>
        <p>
          Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
          von Instagram:{" "}
          <a
            href="https://privacycenter.instagram.com/policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://privacycenter.instagram.com/policy/.
          </a>
        </p>
        <p>
          Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
          Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
          Europäischen Union und den USA, der die Einhaltung europäischer
          Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten
          soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
          diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu
          erhalten Sie vom Anbieter unter folgendem Link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/participant/4452"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.dataprivacyframework.gov/participant/4452.
          </a>
        </p>
        <h2>6. Plugins und Tools</h2>
        <h3>YouTube mit erweitertem Datenschutz</h3>
        <p>
          Diese Website bindet Videos der Website YouTube ein. Betreiber der
          Website ist die Google Ireland Limited („Google”), Gordon House,
          Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Wenn Sie eine dieser Website besuchen, auf denen YouTube eingebunden
          ist, wird eine Verbindung zu den Servern von YouTube hergestellt.
          Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie
          besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind,
          ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen
          Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus
          Ihrem YouTube-Account ausloggen.
        </p>
        <p>
          Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos, die im
          erweiterten Datenschutzmodus abgespielt werden, werden nach Aussage
          von YouTube nicht zur Personalisierung des Surfens auf YouTube
          eingesetzt. Anzeigen, die im erweiterten Datenschutzmodus ausgespielt
          werden, sind ebenfalls nicht personalisiert. Im erweiterten
          Datenschutzmodus werden keine Cookies gesetzt. Stattdessen werden
          jedoch sogenannte Local Storage Elemente im Browser des Users
          gespeichert, die ähnlich wie Cookies personenbezogene Daten beinhalten
          und zur Wiedererkennung eingesetzt werden können. Details zum
          erweiterten Datenschutzmodus finden Sie hier:{" "}
          <a
            href="https://support.google.com/youtube/answer/171780"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/youtube/answer/171780.
          </a>
        </p>
        <p>
          Gegebenenfalls können nach der Aktivierung eines YouTube-Videos
          weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir
          keinen Einfluss haben
        </p>
        <p>
          Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
          Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
          Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder
          den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
          Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>
        <p>
          Weitere Informationen über Datenschutz bei YouTube finden Sie in deren
          Datenschutzerklärung unter:{" "}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy?hl=de.
          </a>
        </p>
        <p>
          Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
          Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
          Europäischen Union und den USA, der die Einhaltung europäischer
          Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten
          soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
          diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu
          erhalten Sie vom Anbieter unter folgendem Link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/participant/5780"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.dataprivacyframework.gov/participant/5780.
          </a>
        </p>
        <h3>Google Fonts (lokales Hosting)</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
          genannte Google Fonts, die von Google bereitgestellt werden. Die
          Google Fonts sind lokal installiert. Eine Verbindung zu Servern von
          Google findet dabei nicht statt.
        </p>
        <p>
          Weitere Informationen zu Google Fonts finden Sie unter{" "}
          <a
            href="https://developers.google.com/fonts/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://developers.google.com/fonts/faq
          </a>
        </p>
        <p>
          und in der Datenschutzerklärung von Google:{" "}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy?hl=de.
          </a>
        </p>
        <h3>Google Maps</h3>
        <p>
          Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
          Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin
          4, Irland. Mit Hilfe dieses Dienstes können wir Kartenmaterial auf
          unserer Website einbinden.
        </p>
        <p>
          Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
          IP-Adresse zu speichern. Diese Informationen werden in der Regel an
          einen Server von Google in den USA übertragen und dort gespeichert.
          Der Anbieter dieser Seite hat keinen Einfluss auf diese
          Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum
          Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts
          verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten
          Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt
          anzuzeigen.
        </p>
        <p>
          Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
          Darstellung unserer OnlineAngebote und an einer leichten
          Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies
          stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
          DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
          erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
          1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
          des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
          Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
          der EU-Kommission gestützt. Details finden Sie hier:{" "}
          <a
            href="https://privacy.google.com/businesses/gdprcontrollerterms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://privacy.google.com/businesses/gdprcontrollerterms/
          </a>{" "}
          und{" "}
          <a
            href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://privacy.google.com/businesses/gdprcontrollerterms/sccs/.
          </a>
        </p>
        Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
        Datenschutzerklärung von Google:{" "}
        <a
          href="https://policies.google.com/privacy?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/privacy?hl=de.
        </a>
        <p>
          Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
          Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
          Europäischen Union und den USA, der die Einhaltung europäischer
          Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten
          soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
          diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu
          erhalten Sie vom Anbieter unter folgendem Link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/participant/5780"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.dataprivacyframework.gov/participant/5780.
          </a>
        </p>
        <h3>Google reCAPTCHA</h3>
        <p>
          Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf dieser
          Website. Anbieter ist die Google Ireland Limited („Google“), Gordon
          House, Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser
          Website (z. B. in einem Kontaktformular) durch einen Menschen oder
          durch ein automatisiertes Programm erfolgt. Hierzu analysiert
          reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener
          Merkmale. Diese Analyse beginnt automatisch, sobald der
          Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA
          verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des
          Websitebesuchers auf der Website oder vom Nutzer getätigte
          Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google
          weitergeleitet.
        </p>
        <p>
          Die reCAPTCHA-Analysen laufen vollständig im Hintergrund.
          Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse
          stattfindet.
        </p>
        <p>
          Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
          Interesse daran, seine Webangebote vor missbräuchlicher
          automatisierter Ausspähung und vor SPAM zu schützen. Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder
          den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
          Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>
        <p>
          Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
          Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen
          unter folgenden Links:{" "}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy?hl=de
          </a>{" "}
          und{" "}
          <a
            href="https://policies.google.com/terms?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/terms?hl=de.
          </a>
        </p>
        <p>
          Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
          Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
          Europäischen Union und den USA, der die Einhaltung europäischer
          Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten
          soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
          diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu
          erhalten Sie vom Anbieter unter folgendem Link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/participant/5780"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.dataprivacyframework.gov/participant/5780.
          </a>
        </p>
        <p>
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.e-recht24.de/
          </a>
        </p>
      </Container>
    </main>
  );
};

export default Datenschutz;
