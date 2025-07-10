(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const l=`     \r
                <div class="headline">\r
                    <h1>Benvenuto nel mondo di Decorline</h1>\r
                    <p>Ispirazione, colore e stile per ogni tipo di spazio —<br> dalla tua casa al tuo ufficio o locale.</p>\r
                    <!-- <p>Ispirazione, colore e stile per ogni ambiente della tua casa.</p> -->\r
                </div>\r
                    \r
                <!--  <div class="container-base buttons">\r
                    <button class="btn-home btn-primary" onclick="location.href='#service'">Scopri i nostri servizi</button>\r
                    <button class="btn-home btn-secondary" onclick="location.href='#gallery'">Guarda</button>           \r
                 </div>    -->\r
\r
                <section class="core-values">\r
                    <div class="value-pillar">\r
                        <h3>Precisione</h3>\r
                        <p>Ogni dettaglio conta. Lavoriamo con cura e attenzione.</p>\r
                    </div>\r
                    <div class="value-pillar">\r
                        <h3>Creatività</h3>\r
                        <p>Colori, finiture e idee per trasformare ogni spazio.</p>\r
                    </div>\r
                    <div class="value-pillar">\r
                        <h3>Affidabilità</h3>\r
                        <p>Rispettiamo tempi e promesse, sempre al tuo fianco.</p>\r
                    </div>\r
                </section>\r
\r
                <div class="service">\r
                    <h2 id="service">I nostri servizi</h2>\r
                    <div class="service-wrapper">\r
                        <div class="service-item">\r
                            <h3>Tinteggiatura d’Interni ed Esterni</h3>                      \r
                            <img src="img/Tinteggiatura.webp" alt="Tinteggiatura" class="service-icon">\r
                            <p>Muri, soffitti e facciate con finiture di qualità professionale.</p>\r
                        </div>                  \r
                        <div class="service-item">\r
                            <h3>Pareti Personalizzate su Misura</h3>\r
                            <img src="img/Pareti_Personalizzate.jpg" alt="Pareti Personalizzate" class="service-icon">\r
                            <p>Soluzioni creative e su progetto: loghi, motivi, scritte, effetti visivi unici.</p>\r
                        </div> \r
                        <div class="service-item">\r
                            <h3>Decorazioni Murali Artistiche</h3>\r
                            <img src="img/Decorazioni_Murali.jpg" alt="Decorazioni Murali Artistiche" class="service-icon">\r
                            <p>Tecniche decorative come spatolato, stucco veneziano, velature e molto altro.</p>\r
                        </div> \r
                        <div class="service-item">\r
                            <h3>Carta da Parati e Rivestimenti</h3>\r
                            <img src="img/Carta_Parati.jpg" alt="Carta da Parati e Rivestimenti" class="service-icon">\r
                            <p>Applicazione precisa di wallpaper classici, moderni e di design personalizzato.</p>\r
                        </div> \r
                        <div class="service-item">\r
                            <h3>Verniciature Speciali</h3>\r
                            <img src="img/Verniciature_Speciali.jpg" alt="Verniciature Speciali" class="service-icon">\r
                            <p>Trattamenti per legno, metallo, mobili e superfici particolari.</p>\r
                        </div> \r
                        <div class="service-item">\r
                            <h3>Restyling e Rinnovo Ambienti</h3>\r
                            <img src="img/Restyling.webp" alt="Restyling e Rinnovo Ambienti" class="service-icon">\r
                            <p>Rinfresco e restauro estetico di spazi vissuti o da rinnovare.</p>\r
                        </div> \r
                    </div>\r
                </div> \r
                <div class="testimonials">\r
                    <h2 id="testimonials">Cosa dicono i nostri clienti</h2>\r
                    <div class="testimonial-wrapper">\r
                        <div class="testimonial-item">\r
                            <p>"Decorline ha trasformato la mia casa! Professionalità e creatività al top!"</p>\r
                            <span>- Maria Rossi</span>\r
                        </div>\r
                        <div class="testimonial-item">\r
                            <p>"Servizio impeccabile, risultati che superano le aspettative. Consigliatissimi!"</p>\r
                            <span>- Luca Bianchi</span>\r
                        </div>\r
                        <div class="testimonial-item">\r
                            <p>"Un team di veri artisti! Le pareti parlano da sole."</p>\r
                            <span>- Elena Verdi</span>\r
                        </div>\r
                        <div class="testimonial-item">\r
                            <p>"Un team di veri artisti! Le pareti parlano da sole."</p>\r
                            <span>- Elena Verdi</span>\r
                        </div>\r
                    </div>\r
\r
                    <svg class="wave-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">\r
                        <path d="M0,50 Q250,0 500,50 T1000,50" \r
                                fill="none" \r
                                stroke="#003366" \r
                                stroke-width="8" \r
                                stroke-linecap="round" \r
                                stroke-linejoin="round"\r
                                stroke-dasharray="1,4"\r
                                opacity="0.4" />\r
                    </svg>  \r
                </div>    \r
       `,d=`<div class="about-columns">\r
  <h2>Dove la Tradizione Incontra l'Innovazione</h2>\r
  <div class="column-wrapper">\r
    <div class="column-block">\r
      <h3>Tradizione</h3>\r
      <p>\r
        Spatolati classici, stucchi veneziani, tecniche tramandate da generazioni.  \r
        Decorline mantiene viva l’arte muraria tradizionale con passione e precisione.\r
      </p>\r
      \r
    </div>\r
\r
    <div class="column-block">\r
      <h3>Innovazione</h3>\r
      <p>\r
        Finiture moderne, colori personalizzati, pareti creative e su misura.  \r
        Utilizziamo strumenti e idee contemporanee per realizzare ambienti unici e attuali.\r
      </p>\r
      \r
    </div>\r
    <div class="about-image">\r
      <img src="img/BackgroundFight.png" alt="Stile di pittura classico e moderno">\r
    </div>\r
  </div>\r
</div>\r
`,p=`\r
\r
<div class="products-section">\r
  <h2>Servizi</h2>\r
  <div class="products-wrapper">\r
\r
  <div class="product">\r
    <div class="products-card">\r
      <h3>Tinteggiatura d’Interni ed Esterni</h3>\r
      <p>Finiture pulite, precise e resistenti per pareti, soffitti e facciate.<br>\r
        Utilizziamo pitture di alta qualità e tecniche adatte a ogni superficie, <br>\r
        garantendo risultati uniformi e duraturi, sia per ambienti residenziali che commerciali.</p>\r
    </div>\r
    <div class="product-image">\r
      <img src="img/Tinteggiatura.webp" alt="Tinteggiatura d’Interni ed Esterni">\r
    </div>\r
  </div>\r
\r
  <div class="product">\r
    <div class="product-image">\r
      <img src="img/Pareti_Personalizzate.jpg" alt="Decorazioni Murali Personalizzate">\r
    </div>\r
    <div class="products-card">\r
      <h3>Decorazioni Murali Personalizzate</h3>\r
      <p>Realizziamo loghi, motivi artistici, scritte decorative e disegni su misura.<br>\r
        Ogni progetto nasce da un’idea condivisa con il cliente e prende forma <br>\r
        su pareti che diventano protagoniste dello spazio, rendendolo veramente unico.</p>\r
    </div>\r
  </div>\r
\r
  <div class="product">\r
    <div class="products-card">\r
      <h3>Stucco Veneziano e Finiture Classiche</h3>\r
      <p>Pregiate tecniche decorative ispirate alla tradizione italiana.<br>\r
        Rifiniture lucide o opache, con profondità e giochi di luce, <br>\r
        perfette per ambienti eleganti, sale di rappresentanza o spazi <br>\r
        che richiedono un tocco di classe intramontabile.</p>\r
    </div>\r
    <div class="product-image">\r
      <img src="img/Pareti_Personalizzate.jpg" alt="Stucco Veneziano">\r
    </div>\r
  </div>\r
\r
  <div class="product">\r
    <div class="product-image">\r
      <img src="img/Decorazioni_Murali.jpg" alt="Effetti Speciali e Texture">\r
    </div>\r
    <div class="products-card">\r
      <h3>Effetti Speciali e Texture</h3>\r
      <p>Applichiamo finiture materiche come spatolato, sabbiato, velature e altre texture.<br>\r
        Ideali per creare superfici dinamiche e originali che valorizzano la luce, <br>\r
        la prospettiva e il carattere dell’ambiente.</p>\r
    </div>\r
  </div>\r
\r
  <div class="product">\r
    <div class="products-card">\r
      <h3>Carta da Parati e Rivestimenti Murali</h3>\r
      <p>Installiamo wallpaper di design con precisione e cura.<br>\r
        Dalle fantasie classiche a quelle moderne, <br>\r
        offriamo soluzioni decorative ad alto impatto visivo e lunga durata, <br>\r
        adattabili a ogni stile e esigenza.</p>\r
    </div>\r
    <div class="product-image">\r
      <img src="img/Restyling.webp" alt="Carta da Parati">\r
    </div>\r
  </div>\r
\r
  <div class="product">\r
    <div class="product-image">\r
      <img src="img/Carta_Parati.jpg" alt="Restyling Ambienti">\r
    </div>\r
    <div class="products-card">\r
      <h3>Restyling Ambienti e Consulenza Colore</h3>\r
      <p>Ti aiutiamo a rinnovare i tuoi spazi con accostamenti cromatici studiati.<br>\r
        Valutiamo luce, arredo e stile per proporre soluzioni armoniose che <br>\r
        trasformano anche gli ambienti più spenti in luoghi pieni di energia e personalità.</p>\r
    </div>\r
  </div>\r
\r
  <div class="product">\r
    <div class="products-card">\r
      <h3>Trattamenti per Legno e Metallo</h3>\r
      <p>Verniciature e finiture protettive per superfici tecniche e decorative.<br>\r
        Rinnoviamo infissi, porte, ringhiere e arredi con trattamenti specifici <br>\r
        che ne esaltano l’estetica e ne aumentano la resistenza.</p>\r
    </div>\r
    <div class="product-image">\r
      <img src="img/Verniciature_Speciali.jpg" alt="Legno e Metallo">\r
    </div>\r
  </div>\r
\r
  <div class="product">\r
    <div class="product-image">\r
      <img src="img/Pareti_Personalizzate.jpg" alt="Pareti Geometriche">\r
    </div>\r
    <div class="products-card">\r
      <h3>Pareti Geometriche e Design Contemporaneo</h3>\r
      <p>Progettiamo e realizziamo composizioni moderne con linee, forme e contrasti.<br>\r
        Ideali per ambienti creativi, uffici, camere giovanili o spazi minimal:<br>\r
        un perfetto equilibrio tra estetica e modernità.</p>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
</div>\r
\r
`,m=`\r
<div class="gallery">\r
  <h2>Galleria</h2>\r
  <div class="gallery-wrapper">\r
\r
  <!-- Hero Carousel Section -->\r
    <section class="hero-gallery">\r
      <div class="carousel-container">\r
        <div class="carousel-slide">\r
          <img src="img/Pareti_Personalizzate.jpg" alt="Project 1">\r
          <h3>Elegant Interior Makeover</h3>\r
        </div>\r
        <div class="carousel-slide">\r
          <img src="img/Tinteggiatura.webp" alt="Project 2">\r
          <h3>Classic Stucco Finish</h3>\r
        </div>\r
        <div class="carousel-slide">\r
          <img src="img/Verniciature_Speciali.jpg" alt="Project 3">\r
          <h3>Classic Stucco Finish</h3>\r
        </div>\r
\r
\r
        <!-- Add more slides as needed -->\r
      </div>\r
    </section>\r
\r
    <!-- Before/After Section -->\r
    <section class="before-after">\r
      <h2 class="section-title">Prima & Dopo</h2>\r
      <div class="before-after-wrapper">\r
        <div class="before-after-pair">\r
          <div class="before">\r
            <img src="img/Pareti_Personalizzate.jpg" alt="Before living room">\r
            <span>Prima</span>\r
          </div>\r
          <div class="after">\r
            <img src="img/Pareti_Personalizzate.jpg" alt="After living room">\r
            <span>Dopo</span>\r
          </div>\r
        </div>\r
\r
        <div class="before-after-pair">\r
          <div class="before">\r
            <img src="img/Verniciature_Speciali.jpg" alt="Before kitchen">\r
            <span>Prima</span>\r
          </div>\r
          <div class="after">\r
            <img src="img/Verniciature_Speciali.jpg" alt="After kitchen">\r
            <span>Dopo</span>\r
          </div>\r
        </div>\r
        <!-- Add more pairs if needed -->\r
      </div>\r
    </section>\r
\r
    <!-- Gallery Collections (placeholder for later) -->\r
    <section class="gallery-collections">\r
      <!-- To be filled in the next phase -->\r
    </section>\r
  </div>\r
  \r
    <section class="gallery-masonry">\r
      <h2>La Nostra Galleria Visiva</h2>\r
      <p class="gallery-description">\r
        Uno sguardo autentico su ispirazioni, dettagli e trasformazioni in corso.\r
      </p>\r
\r
      <div class="masonry-grid">\r
        <div class="masonry-item">\r
          <img src="img/BackgroundFight.png" alt="Effetto decorativo completato">\r
          <p>Parete in stile spatolato, tonalità neutre.</p>\r
        </div>\r
\r
        <div class="masonry-item">\r
          <img src="img/Carta_Parati.jpg" alt="Lavori in corso">\r
          <!-- no caption -->\r
        </div>\r
\r
        <div class="masonry-item">\r
          <img src="img/Restyling.webp" alt="Dettaglio carta da parati">\r
          <p>Applicazione wallpaper geometrico in soggiorno moderno.</p>\r
        </div>\r
\r
        <div class="masonry-item">\r
          <img src="img/Verniciature_Speciali.jpg" alt="Finitura metallo">\r
          <!-- no caption -->\r
        </div>\r
\r
        <div class="masonry-item">\r
          <img src="img/Decorline Logo Design.png" alt="Attrezzi da lavoro">\r
          <p>Strumenti preparati prima dell’intervento.</p>\r
        </div>\r
\r
        <!-- Add more masonry-item blocks as needed -->\r
      </div>\r
    </section>\r
\r
</div>`,v=`<section class="testimonials-section">\r
  <h2 id="testimonials">Cosa dicono i nostri clienti</h2>\r
  <div class="testimonial-grid">\r
    <div class="testimonial-card">\r
      <p>"Decorline ha trasformato la mia casa! Professionalità e creatività al top!"</p>\r
      <span>- Maria Rossi</span>\r
    </div>\r
    <div class="testimonial-card">\r
      <p>"Servizio impeccabile, risultati che superano le aspettative. Consigliatissimi!"</p>\r
      <span>- Luca Bianchi</span>\r
    </div>\r
    <div class="testimonial-card">\r
      <p>"Un team di veri artisti! Le pareti parlano da sole."</p>\r
      <span>- Elena Verdi</span>\r
    </div>\r
    <div class="testimonial-card">\r
      <p>"Veloci, precisi e sempre disponibili. Finalmente dei professionisti seri."</p>\r
      <span>- Marco Neri</span>\r
    </div>\r
    <div class="testimonial-card">\r
      <p>"Grazie Decorline! La camera dei miei figli è diventata un piccolo capolavoro."</p>\r
      <span>- Silvia Colombo</span>\r
    </div>\r
    <div class="testimonial-card">\r
      <p>"Colori fantastici e tanta cura nei dettagli. Li richiamerò sicuramente."</p>\r
      <span>- Gianni Riva</span>\r
    </div>\r
  </div>\r
</section>\r
`,u=`\r
\r
<section class="contact-section" id="contact">\r
  <h2>Contattaci</h2>\r
\r
  <div class="contact-wrapper">\r
    <!-- Contact Info -->\r
    <div class="contact-info">\r
      <p><strong>📍 Indirizzo:</strong> Via Roma 123, 00100 Roma</p>\r
      <p><strong>📞 Telefono:</strong> <a href="tel:+391234567890">+39 123 456 7890</a></p>    \r
      <p><strong>🕒 Orari:</strong> Lun–Ven: 9:00–18:00</p>\r
    </div>\r
\r
    <!-- Contact Form -->\r
    <form class="contact-form">\r
      <input type="text" name="name" placeholder="Il tuo nome" required>\r
      <input type="email" name="email" placeholder="La tua email" required>\r
      <input type="text" name="subject" placeholder="Oggetto" required>\r
      <textarea name="message" rows="5" placeholder="Messaggio" required></textarea>\r
      <button type="submit">Invia Messaggio</button>\r
    </form>\r
  </div>\r
</section>\r
`,g={home:l,about:d,products:p,gallery:m,testimonials:v,contact:u},o=document.getElementById("main-content");function c(n){o.innerHTML=g[n]||`<p style="padding:2rem;color:red">
    Contenuto non disponibile.
  </p>`;const e=o.querySelectorAll(".testimonial-item");if(e.length){let a=0;const t=i=>e.forEach((r,s)=>r.classList.toggle("active",i===s));t(a),setInterval(()=>t(a=(a+1)%e.length),5e3)}}document.addEventListener("DOMContentLoaded",()=>{c("home"),document.body.addEventListener("click",n=>{const e=n.target.closest("a[data-page]");e&&(n.preventDefault(),c(e.dataset.page),document.querySelector("nav")?.classList.remove("open"))}),document.getElementById("hamburger")?.addEventListener("click",()=>{document.querySelector("nav")?.classList.toggle("open")})});
