'use client';

import Image from 'next/image';
import { InteractiveBlock } from '@/components/interactive-block';
import { FloatingBox } from '@/components/floating-box';
import { CloudBackground } from '@/components/cloud-background';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CloudBackground />
      {/* Header - Art Deco Banner */}
      <header className="relative overflow-hidden bg-[#1a2634]">
        {/* Background image - girl with gazelles on left */}
        <div className="absolute inset-0">
          <Image
            src="/images/art-deco-banner.jpg"
            alt="Illustration Art Deco en aplat vectoriel d'une jeune femme avec deux gazelles"
            fill
            className="object-cover object-[30%_center] sm:object-[25%_center]"
            priority
          />
          {/* Darken right side for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#1a2634]/90 via-[#1a2634]/50 to-[#1a2634]/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[72rem] px-4 sm:px-8 flex items-center min-h-[260px] sm:min-h-[320px]">
          {/* Spacer - image area on the left */}
          <div className="min-w-[30%] sm:min-w-[42%] flex-shrink-0" />

          {/* Title crammed to the right side */}
          <div className="flex-1 py-6 sm:py-8 text-right">
            <h1 className="font-serif leading-tight">
              <span
                className="block text-2xl sm:text-3xl lg:text-[2.6rem] font-bold uppercase"
                style={{
                  color: '#f0d8a0',
                  textShadow:
                    '1px 1px 0 #c8a050, 2px 2px 0 #a88040, 3px 3px 0 #886028, 4px 4px 0 #684818, 5px 5px 0 #483008, 6px 6px 16px rgba(0,0,0,0.7)',
                  letterSpacing: '0.06em',
                  lineHeight: '1.15',
                }}
              >
                {'Plus de meritocratie dans la politique partisane :'}
              </span>
              <span
                className="block text-sm sm:text-base lg:text-lg italic font-light mt-2"
                style={{
                  color: '#d8c090',
                  textShadow:
                    '1px 1px 0 #8a6830, 2px 2px 0 #5a4018, 3px 3px 8px rgba(0,0,0,0.6)',
                }}
              >
                {'Construire une robustesse contre les biais comportementaux, au sein d\'un parti politique'}
              </span>
            </h1>
          </div>
        </div>

        {/* Art Deco decorative bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c4935a] to-transparent" />
      </header>

      {/* Main Content */}
      <article className="mx-auto max-w-[42rem] px-4 py-12 sm:px-0">
        {/* First text block */}
        <FloatingBox index={0}>
          <section className="mb-10 rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <p className="font-sans text-base leading-relaxed text-foreground">
              {"Les modeles recents d'economie comportementale mettent en lumiere nos "}
              <strong>{'lacunes telles que l\'inattention et la vision limitee a long terme'}</strong>
              {'. '}<br /> <br />
              {"Contrairement a un citoyen pleinement rationnel qui effectuerait ses verifications avec soin et consacrerait du temps et de l'attention a evaluer differents candidats avant de voter, les etres humains reels sont plus sensibles aux \u00ab raccourcis \u00bb, tels que des signes tres visibles de succes ("}
              <em>{'appelons cela le charisme'}</em>
              {'), ou de competence ('}
              <em>{"appelons cela l'eloquence"}</em>
              {').'}
            </p>
          </section>
        </FloatingBox>

        {/* Second text block with image */}
        <FloatingBox index={1}>
          <section className="mb-10 rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <p className="font-sans text-base leading-relaxed text-foreground mb-6">
              {"Pour en savoir plus sur la facon dont l'attention est representee dans les modeles d'economie comportementale, voyez ci-dessous les differences visuelles entre un agent economique pleinement rationnel qui prete attention a chaque sujet potentiel, et une personne normale qui n'a suffisamment d'attention que pour certains sujets qui lui tiennent a coeur."}<br /> <br /> <em>{"Bien entendu, chacun d'entre nous aura une matrice d'attention differente (mais toutes les notres ont en commun d'etre "}</em>{'creuses'}<em>{", c'est-a-dire qu'elles contiennent plus de 0 que de 1)"}</em>{'.'}
            </p>
            <div className="rounded-xl overflow-hidden bg-white border border-border/40">
              <Image
                src="/images/imageMatrix2.png"
                alt="Comparaison de l'allocation de l'attention dans la prise de decision - matrice d'attention complete vs matrice d'attention creuse"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </section>
        </FloatingBox>

        {/* First interactive block */}
        <FloatingBox index={2}>
          <InteractiveBlock
            text={`Les modeles d'economie comportementale n'ont meme pas besoin de savoir a quels sujets exacts chacun d'entre nous prete attention individuellement ; agreger de nombreuses matrices aleatoires mais creuses produit deja des resultats economiques robustes.

Pour voir par vous-meme comment les matrices d'attention creuses modifient les theoremes economiques classiques, vous pouvez saisir dans la zone de texte ci-dessous un phenomene economique *(par exemple, comment les gens reagissent-ils lorsque le gouvernement baisse les impots aujourd'hui avec l'intention de les augmenter a l'avenir)*, et une IA vous repondra si l'attention creuse de nous autres humains affecte ce phenomene, et si oui, comment cela modifie les resultats economiques classiques associes.

*(L'exemple fiscal ci-dessus a ete decrit en economie classique comme une equivalence ricardienne, c'est-a-dire que *"les agents rationnels epargneront l'integralite de la baisse d'impot pour payer les impots futurs."* Cependant, avec des matrices d'attention creuses, cette equivalence ricardienne echoue car les humains reels ne pretent pas trop attention aux obligations fiscales futures. La complexite du calcul des charges fiscales futures est elevee, et l'impact immediat sur leur vie est faible ou percu comme tel. Par consequent, ils traitent une baisse d'impot comme une augmentation de la richesse nette et en depensent une partie, stimulant l'economie a court terme)*.`}
            placeholder="Saisissez un phenomene economique..."
            isDreamy={false}
            systemPrompt="Reponds en francais. Explique si la rationalite limitee et les matrices d'attention creuses pourraient affecter ce qui a ete decrit, en se basant notamment sur les recherches de Xavier Gabaix, sans avoir besoin d'expliquer ce que sont la rationalite limitee et les matrices d'attention creuses. Si rien de cette litterature academique ne s'applique a ce qui a ete dit, dis tres clairement que ce n'est pas quelque chose qui a ete etudie dans le contexte de l'economie comportementale. N'utilise jamais de tableaux dans tes reponses."
            temperature={0.3}
          />
        </FloatingBox>

        {/* Second interactive block */}
        <FloatingBox index={3}>
          <InteractiveBlock
            text={`**Passons maintenant a la politique** : on pourrait voir *(par exemple en posant la question dans la zone de texte ci-dessus)* comment l'agregation de nos comportements individuels inattentifs au niveau du groupe pourrait conduire les partis politiques a tomber dans des **pieges performatifs**, ou la maniere dont on plait a la direction du parti devient plus importante pour l'avancement de carriere que la poursuite de la meilleure mise en oeuvre des propositions politiques du parti.
            
En effet, meme au sein d'un parti politique, tous les membres ne peuvent pas evaluer soigneusement tous les candidats potentiels, et s'appuient donc sur quelques membres cles du parti (les dirigeants seniors) pour coopter des candidats prometteurs et les propulser sur le devant de la scene.
            
*Pour le constater par vous-meme, dans la zone de texte ci-dessous vous pouvez saisir le nom d'un homme ou d'une femme politique et une IA mettra en lumiere le role de la cooptation par la direction du parti dans la carriere de ce/cette politique*.`}
            placeholder="Saisissez le nom d'un(e) politique..."
            isDreamy={false}
            systemPrompt="Reponds en francais. Verifie d'abord si le texte saisi correspond a un(e) politique connu(e). Sinon, reponds tres clairement que tu ne connais pas de politique de ce nom. Si c'est un(e) politique, alors mets en lumiere le role de la cooptation par la direction du parti dans la carriere de ce/cette politique, avec des exemples concrets de moments ou cela a aide ce/cette politique. Rappelle aussi a chaque exemple ce que le/la politique a fait pour obtenir la faveur de la direction du parti. N'utilise jamais de tableaux dans tes reponses."
            temperature={0.1}
          />
        </FloatingBox>

        {/* Third interactive block */}
        <FloatingBox index={4}>
          <InteractiveBlock
            text={`La nature du pouvoir - en ce qu'il ne peut pas etre facilement partage - introduit en outre des biais de selection, car ceux qui sont les plus disposes a performer et a plaire constamment aux dirigeants seniors sont aussi souvent ceux les plus animes par le narcissisme et le desir de controle. Cela cree un cercle vicieux dans lequel les dirigeants du parti ne selectionnent alors que les collaborateurs les plus flatteurs, deformant davantage la culture du parti et les dynamiques entre ses membres.
            
  *Pour le constater par vous-meme, dans la zone de texte ci-dessous vous pouvez saisir le nom d'un(e) politique de votre choix, et une IA mettra en evidence des exemples dans la carriere de ce/cette politique ou il/elle a choisi des collaborateurs flatteurs plutot que des collaborateurs competents.* `}
            placeholder="Saisissez le nom d'un(e) politique..."
            isDreamy={false}
            systemPrompt="Reponds en francais. Verifie d'abord si le texte saisi correspond a un(e) politique connu(e). Sinon, reponds tres clairement que tu ne connais pas de politique de ce nom. Si c'est un(e) politique, alors mets en evidence des exemples dans la carriere de ce/cette politique ou il/elle aurait pu choisir un(e) collaborateur/trice plus competent(e) mais a opte pour un(e) collaborateur/trice plus flatteur/se. N'utilise jamais de tableaux dans tes reponses."
            temperature={0.1}
          />
        </FloatingBox>

        {/* Text block on democracy and protocols */}
        <FloatingBox index={5}>
          <section className="mb-10 rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <p className="font-sans text-base leading-relaxed text-foreground mb-4">
              {"Les constitutions democratiques ont ete baties sur la separation des pouvoirs, mais "}
              <strong>{"les partis politiques eux-memes ont souffert d'un manque de contre-pouvoirs et de representativite"}</strong>
              {". Peut-etre qu'une telle faille peut en partie expliquer la montee du populisme dans de nombreuses vieilles democraties."}
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground mb-4">
              {"Il convient de noter que plusieurs concepteurs de cryptomonnaies sont aussi et avant tout motives par de telles questions de choix social et de conception institutionnelle - je ferai reference ici aux nombreux ecrits et interventions publiques de Vitalik Buterin (le createur d'Ethereum) sur les mecanismes de vote, les monnaies sociales et communautaires, sur les reseaux sociaux et la polarisation, dans les democraties vs les autocraties..."}
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground">
              {"Les protocoles s'appliquant de maniere similaire a tous les participants (ce que les concepteurs crypto appellent des \u00ab mecanismes de consensus \u00bb) et s'appuyant sur un audit (validation) independant sont en fait des outils de conception de mecanismes qui pourraient aider a attenuer les biais comportementaux susmentionnes "}
              <em>{"(bien que l'attribution de valeurs monetaires aux jetons crypto exacerbe egalement la speculation et d'autres comportements nefastes)"}</em>
              {"."}
            </p>
          </section>
        </FloatingBox>

        {/* Dreamy text block - example protocol */}
        <FloatingBox index={6}>
          <section className="mb-10 rounded-2xl bg-[hsl(280,30%,96%)] border border-[hsl(280,40%,82%)] p-6 sm:p-8 shadow-sm backdrop-blur-sm font-cursive text-base leading-relaxed text-accent-foreground prose prose-sm prose-neutral max-w-none [&_strong]:font-bold [&_em]:italic [&_p]:mb-4 [&_p:last-child]:mb-0">
            <p>
              {"Sans aller aussi loin que la crypto, on peut deja imaginer un nouveau parti politique P cree en adherant au protocole suivant :"}
            </p>
            <p>
              {"- d'abord, chaque membre du parti P peut debattre et finalement s'accorde sur un ensemble d'objectifs politiques cles - "}
              <em>{"disons [A] attenuer le changement climatique, [B] reduire les inegalites et [C] promouvoir l'emploi."}</em>
            </p>
            <p>
              {"- ensuite, chaque membre du parti P peut debattre et finalement s'accorde sur un ensemble de KPI pour chaque objectif, "}
              <em>{"disons pour [A] les KPI sont la reduction des emissions de CO2, la reduction du methane et le recyclage des plastiques ; pour [B] les KPI sont l'ecart entre les salaires les plus eleves et les plus bas et la proportion de la population sous le seuil de pauvrete. Pour [C] les taux de chomage, les taux de chomage des jeunes et la duree du chomage sont les KPI."}</em>
              {" Chaque membre du parti P peut egalement debattre et finalement s'accorde sur un systeme de notation (c'est-a-dire comment differents KPI se traduisent en quel score total agrege), et sur un ensemble d'agences independantes ou d'auditeurs (validateurs) qui mesureront chacune de ces metriques."}
            </p>
            <p>
              <strong>{"Ce systeme de notation commence a definir un protocole politique promouvant la meritocratie."}</strong>
              {" On peut aussi ajouter a un tel protocole l'obligation pour tout candidat potentiel de commencer au bas de l'echelle, puis l'avancement entre candidats potentiels au meme niveau se fait par competition sur ces KPI, appliquee a l'ensemble du portefeuille de collectivites gouvernees par les membres du parti. Ce protocole est alors applique de maniere similaire et transparente a tous les membres du parti, y compris les dirigeants du parti candidats aux elections presidentielles."}
            </p>
            <p>
              <strong>{"Cette methode de selection garantit que l'attention du processus de selection *(desormais via un protocole collectif, plutot que par cooptation individuelle)* est concentree sur tous les KPI sur lesquels l'ensemble du parti s'est accorde"}</strong>
              {", plutot que sur des traits ou des recits plus subjectifs."}
            </p>
          </section>
        </FloatingBox>


        {/* Dreamy interactive block - China comparison */}
        <FloatingBox index={8}>
          <InteractiveBlock
            text={`Nulle part dans l'exemple ci-dessus on n'a besoin de cryptomonnaies ou de blockchain, mais l'extreme crypto de protocoles contraignants et transparents peut, esperons-le, convaincre les lecteurs du potentiel d'un tel parti politique base sur un protocole.
            
On pourrait aussi etre rappele, en lisant l'exemple ci-dessus, du modele de competition inter-juridictionnelle du Parti communiste chinois. **Nous soulignons cependant qu'un pays n'a pas besoin d'un systeme de parti unique pour qu'un parti politique du pays applique ce protocole**. Dans les pays avec peu de partis politiques comme l'Amerique bipartisane, il y a deja suffisamment de comtes, de villes et d'Etats gouvernes par les membres d'un parti politique pour commencer a organiser un tel protocole de promotion-competition.
            
*Pour le constater, dans la zone de texte ci-dessous vous pouvez saisir le nom d'un parti politique, et une IA listera le nombre de districts, de villes et d'Etats que ce parti politique detient. On peut alors imaginer a quoi pourrait ressembler une telle competition basee sur un protocole au sein du parti.* `}
            placeholder="Saisissez le nom d'un parti politique..."
            isDreamy={false}
            systemPrompt="Reponds en francais. Verifie d'abord si le texte saisi correspond a un parti politique connu. Sinon, reponds tres clairement que tu ne connais pas de parti politique de ce nom. Si c'est un parti politique, alors verifie et indique combien de districts, villes et Etats (ou equivalent dans d'autres pays) ce parti politique detient. N'utilise jamais de tableaux dans tes reponses."
            temperature={0.2}
          />
        </FloatingBox>

        {/* Interactive block on economic mechanisms */}
        <FloatingBox index={10}>
          <InteractiveBlock
            text={`En fait, la profession economique a eu un debat academique continu tout au long du XXe siecle opposant la critique de la planification centrale par l'Ecole autrichienne *(von Mises puis ses eleves dont Hayek)* au socialisme de marche *(Taylor, Lange, Lerner et leurs successeurs)*. Beaucoup dans le monde academique ont ete effectivement convaincus par les avantages d'avoir au moins un certain degre de planification centrale *(voir Samuelson 1989, ou Murphy, Schleifer, Vishny 1989)*, avant que la chute de l'URSS ne mette fin a ce debat academique.

Le modele chinois de competition inter-juridictionnelle peut etre interprete a travers le prisme de ce debat : la competition intra-parti peut etre vue comme une reponse implicite au "probleme de la connaissance" de Hayek.

Les reformateurs chinois, en particulier apres les echecs de l'ere maoiste, ont reconnu l'impossibilite pratique de planifier centralement une economie d'echelle et de complexite continentales. La decision de devolver une vaste autorite de gestion economique aux responsables locaux etait une reponse pragmatique a cette realite. Cette decentralisation place le pouvoir de decision entre les mains d'agents qui possedent la "connaissance locale" pertinente que Hayek considerait comme essentielle a l'action economique rationnelle.

La recherche empirique sur la decentralisation des entreprises d'Etat (SOE) chinoises fournit une confirmation directe de cette logique hayekienne. Les etudes montrent que plus la distance physique entre une SOE et son superviseur gouvernemental est grande - un indicateur de la faiblesse de la connaissance locale au centre - plus la probabilite que l'entreprise soit decentralisee vers un gouvernement de niveau inferieur geographiquement plus proche est elevee. Cela demontre une reconnaissance institutionnelle claire que la gestion efficace necessite de puiser dans la connaissance dispersee des conditions locales, un principe fondamental de la critique de Hayek sur la planification centrale.

Une autre reponse aux critiques de Hayek et de ses eleves contre la planification centrale est le processus d'"essai et erreur" d'Oskar Lange et Abba Lerner, qui peut etre vu comme une version academique de l'utilisation par la Chine de metriques de performance gerees centralement et de recompenses basees sur la promotion pour stimuler la croissance.
   
Pour en savoir plus sur ces debats academiques, et comment le systeme politique chinois actuel s'y rapporte, vous pouvez poser n'importe quelle question dans la zone de texte ci-dessous. Une IA fournira des reponses en utilisant ces concepts academiques, a savoir ceux de la conception de mecanismes, du socialisme de marche, de l'industrialisation Big Push. *Notez que l'IA pourrait se tromper, nous vous encourageons donc a copier votre question et a verifier les sources academiques si cela vous interesse*.`}
            placeholder="Posez une question sur la conception de mecanismes, le socialisme de marche ou le probleme de la connaissance de Hayek..."
            isDreamy={false}
            systemPrompt="Reponds en francais. Reponds en utilisant les concepts de (seulement si pertinent ou possible) la conception de mecanismes, le socialisme de marche, l'industrialisation Big Push, et encore seulement si pertinent ou possible en utilisant les travaux de Hayek, Von Mises, Lange-Lerner, Robert Allen. Pas besoin de resumer tous ces concepts, utilise-les simplement dans ta reponse et cite les chercheurs pertinents uniquement lorsqu'ils sont utilises. N'utilise jamais de tableaux dans tes reponses."
            temperature={0.3}
          />
        </FloatingBox>


        {/* Interactive block on industries */}
        <FloatingBox index={12}>
          <InteractiveBlock
            text={`L'evaluation relative entre responsables locaux pour l'avancement de carriere oblige les responsables locaux a etre tres conscients des politiques et des performances de leurs voisins, favorisant une diffusion rapide des politiques et un mimetisme strategique. Si une ville elabore une strategie reussie pour attirer les investissements, comme la creation d'un nouveau type de zone economique speciale, les villes voisines sont fortement incitees a la copier pour eviter de reculer dans le classement. Cette dynamique peut creer une vertueuse "course vers le haut", stimulant les ameliorations de la productivite totale des facteurs et l'innovation politique (cependant, elle peut aussi declencher une destructrice "course vers le bas" pour les objectifs non pris en compte dans les KPI choisis centralement, les juridictions rivalisant pour offrir des allegements fiscaux toujours plus importants, assouplir les reglementations environnementales pour attirer les industries polluantes, ou s'engager dans d'autres formes de competition de type "chacun pour soi").

            
Pour en savoir plus sur les effets d'une telle competition, vous pouvez poser des questions dans la zone de texte ci-dessous sur n'importe quelle industrie specifique (disons pharma/biotech, aeronautique, trains a grande vitesse, centrales nucleaires, chaines d'approvisionnement chimiques...). Une IA fournira des reponses en utilisant des exemples de politiques coordonnees et leurs effets sur le secteur prive et les chaines d'approvisionnement au sens large, tires du Commissariat General du Plan francais, et/ou des Etats-Unis d'apres-guerre avant Reagan, et/ou de la Chine contemporaine.`}
            placeholder="Saisissez le nom d'une industrie..."
            isDreamy={false}
            systemPrompt="Reponds en francais. Verifie d'abord si le texte saisi correspond a une industrie. Si ce n'est pas le cas, dis clairement que ce n'est pas une saisie liee a une industrie et que l'utilisateur devrait reessayer. Si oui, alors indique si le developpement de cette industrie a utilise des politiques planifiees centralement pour coordonner differents acteurs (entreprises, laboratoires de recherche, universites) afin de construire des capacites industrielles, dans n'importe quel pays, et si oui comment. N'utilise jamais de tableaux dans tes reponses."
            temperature={0.2}
          />
        </FloatingBox>


        {/* Final interactive block */}
        <FloatingBox index={14}>
          <InteractiveBlock
            text={`La proposition de parti politique base sur un protocole exposee ci-dessus tente donc de deriver les composantes reussies du modele francais (pre-Mitterrand) et chinois de developpement economique, mais dans un cadre democratique.
            
Bien sur, ce n'est qu'une premiere tentative, et une tentative simplifiee. Cependant, reconnaitre nos biais comportementaux, et comment ils ont deforme l'ensemble de la politique partisane pour la rendre performative plutot que meritocratique, peut esperons-le nous fournir la motivation pour des reformes. Un premier pas facile serait pour nous de tirer parti de la puissance de l'IA pour mieux filtrer les performances et evaluer differents candidats en fonction des objectifs politiques qui nous sont chers. Une prochaine etape pourrait etre de tirer parti de ce cadre d'inattention pour comparer les chaines d'approvisionnement coordonnees par le secteur public comme en France ou en Chine (avec la zone de saisie IA quelques blocs plus haut), vs la coordination par les marches de capitaux comme le boom de l'IA menant aux constructions de centres de donnees, projets energetiques, adoption par l'industrie, mais comportant peut-etre un cout d'inattention pour d'autres industries.

Ci-dessous dans la zone de texte vous pouvez par exemple nommer des objectifs politiques, et un pays, et une IA montrera a titre d'illustration quel candidat dans ce pays a performe de maniere constante sur ces objectifs politiques, vs quels candidats disent toujours se soucier de ces sujets, mais ratent systematiquement la cible. Bien sur, ces illustrations ne sont qu'indicatives, car l'IA qui alimente ce blog n'est pas a la pointe (openai/gpt-oss-120b de Groq). C'est davantage pour montrer quels outils nous pourrions utiliser dans notre vie quotidienne, et comment au sein d'un parti la performance devrait etre evaluee.`}
            placeholder="Saisissez des objectifs politiques et un pays..."
            isDreamy={true}
            systemPrompt="Reponds en francais. A partir des donnees fournies (objectifs politiques et pays), identifie quels candidats/politiques dans ce pays ont bien performe sur ces objectifs politiques vs lesquels ne l'ont pas fait, malgre leur affirmation de s'en soucier. N'utilise jamais de tableaux dans ta reponse."
            temperature={0.3}
          />
        </FloatingBox>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/40 px-6 py-8 sm:px-8 lg:px-12 mt-16">
        <div className="mx-auto max-w-[42rem] text-center">
          <p className="font-sans text-sm text-muted-foreground">
            {"Une exploration d'economie comportementale des protocoles de selection des partis politiques et de la gouvernance meritocratique"}
          </p>
        </div>
      </footer>
    </main>
  );
}
