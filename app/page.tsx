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
            alt="Illustration Art Déco en aplat vectoriel d'une jeune femme avec deux gazelles"
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
                {'Plus de méritocratie dans la politique partisane\u00A0:'}
              </span>
              <span
                className="block text-sm sm:text-base lg:text-lg italic font-light mt-2"
                style={{
                  color: '#d8c090',
                  textShadow:
                    '1px 1px 0 #8a6830, 2px 2px 0 #5a4018, 3px 3px 8px rgba(0,0,0,0.6)',
                }}
              >
                {'Construire une robustesse contre les biais comportementaux, au sein d\u2019un parti politique'}
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
              {"Les modèles récents d\u2019économie comportementale mettent en lumière nos "}
              <strong>{'lacunes telles que l\u2019inattention et la vision limitée à long terme'}</strong>
              {'. '}<br /> <br />
              {"Contrairement à un citoyen pleinement rationnel qui effectuerait ses vérifications avec soin et consacrerait du temps et de l\u2019attention à évaluer différents candidats avant de voter, les êtres humains réels sont plus sensibles aux \u00AB\u00A0raccourcis\u00A0\u00BB, tels que des signes très visibles de succès ("}
              <em>{'appelons cela le charisme'}</em>
              {'), ou de compétence ('}
              <em>{"appelons cela l\u2019éloquence"}</em>
              {').'}
            </p>
          </section>
        </FloatingBox>

        {/* Second text block with image */}
        <FloatingBox index={1}>
          <section className="mb-10 rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <p className="font-sans text-base leading-relaxed text-foreground mb-6">
              {"Pour en savoir plus sur la façon dont l\u2019attention est représentée dans les modèles d\u2019économie comportementale, voyez ci-dessous les différences visuelles entre un agent économique pleinement rationnel qui prête attention à chaque sujet potentiel, et une personne normale qui n\u2019a suffisamment d\u2019attention que pour certains sujets qui lui tiennent à cœur."}<br /> <br /> <em>{"Bien entendu, chacun d\u2019entre nous aura une matrice d\u2019attention différente (mais toutes les nôtres ont en commun d\u2019être "}</em>{'creuses'}<em>{", c\u2019est-à-dire qu\u2019elles contiennent plus de 0 que de 1)"}</em>{'.'}
            </p>
            <div className="rounded-xl overflow-hidden bg-white border border-border/40">
              <Image
                src="/images/imageMatrix2.png"
                alt="Comparaison de l'allocation de l'attention dans la prise de décision — matrice d'attention complète vs matrice d'attention creuse"
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
            text={`Les modèles d'économie comportementale n'ont même pas besoin de savoir à quels sujets exacts chacun d'entre nous prête attention individuellement ; agréger de nombreuses matrices aléatoires mais creuses produit déjà des résultats économiques robustes.

Pour voir par vous-même comment les matrices d'attention creuses modifient les théorèmes économiques classiques, vous pouvez saisir dans la zone de texte ci-dessous un phénomène économique *(par exemple, comment les gens réagissent-ils lorsque le gouvernement baisse les impôts aujourd'hui avec l'intention de les augmenter à l'avenir)*, et une IA vous répondra si l'attention creuse de nous autres humains affecte ce phénomène, et si oui, comment cela modifie les résultats économiques classiques associés.

*(L'exemple fiscal ci-dessus a été décrit en économie classique comme une équivalence ricardienne, c'est-à-dire que *"les agents rationnels épargneront l'intégralité de la baisse d'impôt pour payer les impôts futurs."* Cependant, avec des matrices d'attention creuses, cette équivalence ricardienne échoue car les humains réels ne prêtent pas trop attention aux obligations fiscales futures. La complexité du calcul des charges fiscales futures est élevée, et l'impact immédiat sur leur vie est faible ou perçu comme tel. Par conséquent, ils traitent une baisse d'impôt comme une augmentation de la richesse nette et en dépensent une partie, stimulant l'économie à court terme)*.`}
            placeholder="Saisissez un phénomène économique..."
            isDreamy={false}
            systemPrompt="Réponds en français. Explique si la rationalité limitée et les matrices d'attention creuses pourraient affecter ce qui a été décrit, en se basant notamment sur les recherches de Xavier Gabaix, sans avoir besoin d'expliquer ce que sont la rationalité limitée et les matrices d'attention creuses. Si rien de cette littérature académique ne s'applique à ce qui a été dit, dis très clairement que ce n'est pas quelque chose qui a été étudié dans le contexte de l'économie comportementale. N'utilise jamais de tableaux dans tes réponses."
            temperature={0.3}
          />
        </FloatingBox>

        {/* Second interactive block */}
        <FloatingBox index={3}>
          <InteractiveBlock
            text={`**Passons maintenant à la politique** : on pourrait voir *(par exemple en posant la question dans la zone de texte ci-dessus)* comment l'agrégation de nos comportements individuels inattentifs au niveau du groupe pourrait conduire les partis politiques à tomber dans des **pièges performatifs**, où la manière dont on plaît à la direction du parti devient plus importante pour l'avancement de carrière que la poursuite de la meilleure mise en œuvre des propositions politiques du parti.
            
En effet, même au sein d'un parti politique, tous les membres ne peuvent pas évaluer soigneusement tous les candidats potentiels, et s'appuient donc sur quelques membres clés du parti (les dirigeants seniors) pour coopter des candidats prometteurs et les propulser sur le devant de la scène.
            
*Pour le constater par vous-même, dans la zone de texte ci-dessous vous pouvez saisir le nom d'un homme ou d'une femme politique et une IA mettra en lumière le rôle de la cooptation par la direction du parti dans la carrière de ce/cette politique*.`}
            placeholder="Saisissez le nom d'un(e) politique..."
            isDreamy={false}
            systemPrompt="Réponds en français. Vérifie d'abord si le texte saisi correspond à un(e) politique connu(e). Sinon, réponds très clairement que tu ne connais pas de politique de ce nom. Si c'est un(e) politique, alors mets en lumière le rôle de la cooptation par la direction du parti dans la carrière de ce/cette politique, avec des exemples concrets de moments où cela a aidé ce/cette politique. Rappelle aussi à chaque exemple ce que le/la politique a fait pour obtenir la faveur de la direction du parti. N'utilise jamais de tableaux dans tes réponses."
            temperature={0.1}
          />
        </FloatingBox>

        {/* Third interactive block */}
        <FloatingBox index={4}>
          <InteractiveBlock
            text={`La nature du pouvoir — en ce qu'il ne peut pas être facilement partagé — introduit en outre des biais de sélection, car ceux qui sont les plus disposés à performer et à plaire constamment aux dirigeants seniors sont aussi souvent ceux les plus animés par le narcissisme et le désir de contrôle. Cela crée un cercle vicieux dans lequel les dirigeants du parti ne sélectionnent alors que les collaborateurs les plus flatteurs, déformant davantage la culture du parti et les dynamiques entre ses membres.
            
  *Pour le constater par vous-même, dans la zone de texte ci-dessous vous pouvez saisir le nom d'un(e) politique de votre choix, et une IA mettra en évidence des exemples dans la carrière de ce/cette politique où il/elle a choisi des collaborateurs flatteurs plutôt que des collaborateurs compétents.* `}
            placeholder="Saisissez le nom d'un(e) politique..."
            isDreamy={false}
            systemPrompt="Réponds en français. Vérifie d'abord si le texte saisi correspond à un(e) politique connu(e). Sinon, réponds très clairement que tu ne connais pas de politique de ce nom. Si c'est un(e) politique, alors mets en évidence des exemples dans la carrière de ce/cette politique où il/elle aurait pu choisir un(e) collaborateur/trice plus compétent(e) mais a opté pour un(e) collaborateur/trice plus flatteur/se. N'utilise jamais de tableaux dans tes réponses."
            temperature={0.1}
          />
        </FloatingBox>

        {/* Text block on democracy and protocols */}
        <FloatingBox index={5}>
          <section className="mb-10 rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <p className="font-sans text-base leading-relaxed text-foreground mb-4">
              {"Les constitutions démocratiques ont été bâties sur la séparation des pouvoirs, mais "}
              <strong>{"les partis politiques eux-mêmes ont souffert d\u2019un manque de contre-pouvoirs et de représentativité"}</strong>
              {". Peut-être qu\u2019une telle faille peut en partie expliquer la montée du populisme dans de nombreuses vieilles démocraties."}
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground mb-4">
              {"Il convient de noter que plusieurs concepteurs de cryptomonnaies sont aussi et avant tout motivés par de telles questions de choix social et de conception institutionnelle — je ferai référence ici aux nombreux écrits et interventions publiques de Vitalik Buterin (le créateur d\u2019Ethereum) sur les mécanismes de vote, les monnaies sociales et communautaires, sur les réseaux sociaux et la polarisation, dans les démocraties vs les autocraties..."}
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground">
              {"Les protocoles s\u2019appliquant de manière similaire à tous les participants (ce que les concepteurs crypto appellent des \u00AB\u00A0mécanismes de consensus\u00A0\u00BB) et s\u2019appuyant sur un audit (validation) indépendant sont en fait des outils de conception de mécanismes qui pourraient aider à atténuer les biais comportementaux susmentionnés "}
              <em>{"(bien que l\u2019attribution de valeurs monétaires aux jetons crypto exacerbe également la spéculation et d\u2019autres comportements néfastes)"}</em>
              {"."}
            </p>
          </section>
        </FloatingBox>

        {/* Dreamy text block - example protocol */}
        <FloatingBox index={6}>
          <section className="mb-10 rounded-2xl bg-[hsl(280,30%,96%)] border border-[hsl(280,40%,82%)] p-6 sm:p-8 shadow-sm backdrop-blur-sm font-cursive text-base leading-relaxed text-accent-foreground prose prose-sm prose-neutral max-w-none [&_strong]:font-bold [&_em]:italic [&_p]:mb-4 [&_p:last-child]:mb-0">
            <p>
              {"Sans aller aussi loin que la crypto, on peut déjà imaginer un nouveau parti politique P créé en adhérant au protocole suivant\u00A0:"}
            </p>
            <p>
              {"- d\u2019abord, chaque membre du parti P peut débattre et finalement s\u2019accorde sur un ensemble d\u2019objectifs politiques clés — "}
              <em>{"disons [A] atténuer le changement climatique, [B] réduire les inégalités et [C] promouvoir l\u2019emploi."}
              </em>
            </p>
            <p>
              {"- ensuite, chaque membre du parti P peut débattre et finalement s\u2019accorde sur un ensemble de KPI pour chaque objectif, "}
              <em>{"disons pour [A] les KPI sont la réduction des émissions de CO2, la réduction du méthane et le recyclage des plastiques\u00A0; pour [B] les KPI sont l\u2019écart entre les salaires les plus élevés et les plus bas et la proportion de la population sous le seuil de pauvreté. Pour [C] les taux de chômage, les taux de chômage des jeunes et la durée du chômage sont les KPI."}
              </em>
              {" Chaque membre du parti P peut également débattre et finalement s\u2019accorde sur un système de notation (c\u2019est-à-dire comment différents KPI se traduisent en quel score total agrégé), et sur un ensemble d\u2019agences indépendantes ou d\u2019auditeurs (validateurs) qui mesureront chacune de ces métriques."}
            </p>
            <p>
              <strong>{"Ce système de notation commence à définir un protocole politique promouvant la méritocratie."}</strong>
              {" On peut aussi ajouter à un tel protocole l\u2019obligation pour tout candidat potentiel de commencer au bas de l\u2019échelle, puis l\u2019avancement entre candidats potentiels au même niveau se fait par compétition sur ces KPI, appliquée à l\u2019ensemble du portefeuille de collectivités gouvernées par les membres du parti. Ce protocole est alors appliqué de manière similaire et transparente à tous les membres du parti, y compris les dirigeants du parti candidats aux élections présidentielles."}
            </p>
            <p>
              <strong>{"Cette méthode de sélection garantit que l\u2019attention du processus de sélection *(désormais via un protocole collectif, plutôt que par cooptation individuelle)* est concentrée sur tous les KPI sur lesquels l\u2019ensemble du parti s\u2019est accordé"}</strong>
              {", plutôt que sur des traits ou des récits plus subjectifs."}
            </p>
          </section>
        </FloatingBox>


        {/* Dreamy interactive block - China comparison */}
        <FloatingBox index={8}>
          <InteractiveBlock
            text={`Nulle part dans l'exemple ci-dessus on n'a besoin de cryptomonnaies ou de blockchain, mais l'extrême crypto de protocoles contraignants et transparents peut, espérons-le, convaincre les lecteurs du potentiel d'un tel parti politique basé sur un protocole.
            
On pourrait aussi être rappelé, en lisant l'exemple ci-dessus, du modèle de compétition inter-juridictionnelle du Parti communiste chinois. **Nous soulignons cependant qu'un pays n'a pas besoin d'un système de parti unique pour qu'un parti politique du pays applique ce protocole**. Dans les pays avec peu de partis politiques comme l'Amérique bipartisane, il y a déjà suffisamment de comtés, de villes et d'États gouvernés par les membres d'un parti politique pour commencer à organiser un tel protocole de promotion-compétition.
            
*Pour le constater, dans la zone de texte ci-dessous vous pouvez saisir le nom d'un parti politique, et une IA listera le nombre de districts, de villes et d'États que ce parti politique détient. On peut alors imaginer à quoi pourrait ressembler une telle compétition basée sur un protocole au sein du parti.* `}
            placeholder="Saisissez le nom d'un parti politique..."
            isDreamy={false}
            systemPrompt="Réponds en français. Vérifie d'abord si le texte saisi correspond à un parti politique connu. Sinon, réponds très clairement que tu ne connais pas de parti politique de ce nom. Si c'est un parti politique, alors vérifie et indique combien de districts, villes et États (ou équivalent dans d'autres pays) ce parti politique détient. N'utilise jamais de tableaux dans tes réponses."
            temperature={0.2}
          />
        </FloatingBox>

        {/* Interactive block on economic mechanisms */}
        <FloatingBox index={10}>
          <InteractiveBlock
            text={`En fait, la profession économique a eu un débat académique continu tout au long du XXe siècle opposant la critique de la planification centrale par l'École autrichienne *(von Mises puis ses élèves dont Hayek)* au socialisme de marché *(Taylor, Lange, Lerner et leurs successeurs)*. Beaucoup dans le monde académique ont été effectivement convaincus par les avantages d'avoir au moins un certain degré de planification centrale *(voir Samuelson 1989, ou Murphy, Schleifer, Vishny 1989)*, avant que la chute de l'URSS ne mette fin à ce débat académique.

Le modèle chinois de compétition inter-juridictionnelle peut être interprété à travers le prisme de ce débat : la compétition intra-parti peut être vue comme une réponse implicite au "problème de la connaissance" de Hayek.

Les réformateurs chinois, en particulier après les échecs de l'ère maoïste, ont reconnu l'impossibilité pratique de planifier centralement une économie d'échelle et de complexité continentales. La décision de dévolver une vaste autorité de gestion économique aux responsables locaux était une réponse pragmatique à cette réalité. Cette décentralisation place le pouvoir de décision entre les mains d'agents qui possèdent la "connaissance locale" pertinente que Hayek considérait comme essentielle à l'action économique rationnelle.

La recherche empirique sur la décentralisation des entreprises d'État (SOE) chinoises fournit une confirmation directe de cette logique hayékienne. Les études montrent que plus la distance physique entre une SOE et son superviseur gouvernemental est grande — un indicateur de la faiblesse de la connaissance locale au centre — plus la probabilité que l'entreprise soit décentralisée vers un gouvernement de niveau inférieur géographiquement plus proche est élevée. Cela démontre une reconnaissance institutionnelle claire que la gestion efficace nécessite de puiser dans la connaissance dispersée des conditions locales, un principe fondamental de la critique de Hayek sur la planification centrale.

Une autre réponse aux critiques de Hayek et de ses élèves contre la planification centrale est le processus d'"essai et erreur" d'Oskar Lange et Abba Lerner, qui peut être vu comme une version académique de l'utilisation par la Chine de métriques de performance gérées centralement et de récompenses basées sur la promotion pour stimuler la croissance.
   
Pour en savoir plus sur ces débats académiques, et comment le système politique chinois actuel s'y rapporte, vous pouvez poser n'importe quelle question dans la zone de texte ci-dessous. Une IA fournira des réponses en utilisant ces concepts académiques, à savoir ceux de la conception de mécanismes, du socialisme de marché, de l'industrialisation Big Push. *Notez que l'IA pourrait se tromper, nous vous encourageons donc à copier votre question et à vérifier les sources académiques si cela vous intéresse*.`}
            placeholder="Posez une question sur la conception de mécanismes, le socialisme de marché ou le problème de la connaissance de Hayek..."
            isDreamy={false}
            systemPrompt="Réponds en français. Réponds en utilisant les concepts de (seulement si pertinent ou possible) la conception de mécanismes, le socialisme de marché, l'industrialisation Big Push, et encore seulement si pertinent ou possible en utilisant les travaux de Hayek, Von Mises, Lange-Lerner, Robert Allen. Pas besoin de résumer tous ces concepts, utilise-les simplement dans ta réponse et cite les chercheurs pertinents uniquement lorsqu'ils sont utilisés. N'utilise jamais de tableaux dans tes réponses."
            temperature={0.3}
          />
        </FloatingBox>


        {/* Interactive block on industries */}
        <FloatingBox index={12}>
          <InteractiveBlock
            text={`L'évaluation relative entre responsables locaux pour l'avancement de carrière oblige les responsables locaux à être très conscients des politiques et des performances de leurs voisins, favorisant une diffusion rapide des politiques et un mimétisme stratégique. Si une ville élabore une stratégie réussie pour attirer les investissements, comme la création d'un nouveau type de zone économique spéciale, les villes voisines sont fortement incitées à la copier pour éviter de reculer dans le classement. Cette dynamique peut créer une vertueuse "course vers le haut", stimulant les améliorations de la productivité totale des facteurs et l'innovation politique (cependant, elle peut aussi déclencher une destructrice "course vers le bas" pour les objectifs non pris en compte dans les KPI choisis centralement, les juridictions rivalisant pour offrir des allègements fiscaux toujours plus importants, assouplir les réglementations environnementales pour attirer les industries polluantes, ou s'engager dans d'autres formes de compétition de type "chacun pour soi").

            
Pour en savoir plus sur les effets d'une telle compétition, vous pouvez poser des questions dans la zone de texte ci-dessous sur n'importe quelle industrie spécifique (disons pharma/biotech, aéronautique, trains à grande vitesse, centrales nucléaires, chaînes d'approvisionnement chimiques...). Une IA fournira des réponses en utilisant des exemples de politiques coordonnées et leurs effets sur le secteur privé et les chaînes d'approvisionnement au sens large, tirés du Commissariat Général du Plan français, et/ou des États-Unis d'après-guerre avant Reagan, et/ou de la Chine contemporaine.`}
            placeholder="Saisissez le nom d'une industrie..."
            isDreamy={false}
            systemPrompt="Réponds en français. Vérifie d'abord si le texte saisi correspond à une industrie. Si ce n'est pas le cas, dis clairement que ce n'est pas une saisie liée à une industrie et que l'utilisateur devrait réessayer. Si oui, alors indique si le développement de cette industrie a utilisé des politiques planifiées centralement pour coordonner différents acteurs (entreprises, laboratoires de recherche, universités) afin de construire des capacités industrielles, dans n'importe quel pays, et si oui comment. N'utilise jamais de tableaux dans tes réponses."
            temperature={0.2}
          />
        </FloatingBox>


        {/* Final interactive block */}
        <FloatingBox index={14}>
          <InteractiveBlock
            text={`La proposition de parti politique basé sur un protocole exposée ci-dessus tente donc de dériver les composantes réussies du modèle français (pré-Mitterrand) et chinois de développement économique, mais dans un cadre démocratique.
            
Bien sûr, ce n'est qu'une première tentative, et une tentative simplifiée. Cependant, reconnaître nos biais comportementaux, et comment ils ont déformé l'ensemble de la politique partisane pour la rendre performative plutôt que méritocratique, peut espérons-le nous fournir la motivation pour des réformes. Un premier pas facile serait pour nous de tirer parti de la puissance de l'IA pour mieux filtrer les performances et évaluer différents candidats en fonction des objectifs politiques qui nous sont chers. Une prochaine étape pourrait être de tirer parti de ce cadre d'inattention pour comparer les chaînes d'approvisionnement coordonnées par le secteur public comme en France ou en Chine (avec la zone de saisie IA quelques blocs plus haut), vs la coordination par les marchés de capitaux comme le boom de l'IA menant aux constructions de centres de données, projets énergétiques, adoption par l'industrie, mais comportant peut-être un coût d'inattention pour d'autres industries.

Ci-dessous dans la zone de texte vous pouvez par exemple nommer des objectifs politiques, et un pays, et une IA montrera à titre d'illustration quel candidat dans ce pays a performé de manière constante sur ces objectifs politiques, vs quels candidats disent toujours se soucier de ces sujets, mais ratent systématiquement la cible. Bien sûr, ces illustrations ne sont qu'indicatives, car l'IA qui alimente ce blog n'est pas à la pointe (openai/gpt-oss-120b de Groq). C'est davantage pour montrer quels outils nous pourrions utiliser dans notre vie quotidienne, et comment au sein d'un parti la performance devrait être évaluée.`}
            placeholder="Saisissez des objectifs politiques et un pays..."
            isDreamy={true}
            systemPrompt="Réponds en français. À partir des données fournies (objectifs politiques et pays), identifie quels candidats/politiques dans ce pays ont bien performé sur ces objectifs politiques vs lesquels ne l'ont pas fait, malgré leur affirmation de s'en soucier. N'utilise jamais de tableaux dans ta réponse."
            temperature={0.3}
          />
        </FloatingBox>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/40 px-6 py-8 sm:px-8 lg:px-12 mt-16">
        <div className="mx-auto max-w-[42rem] text-center">
          <p className="font-sans text-sm text-muted-foreground">
            {"Une exploration d\u2019économie comportementale des protocoles de sélection des partis politiques et de la gouvernance méritocratique"}
          </p>
        </div>
      </footer>
    </main>
  );
}
