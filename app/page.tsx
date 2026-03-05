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
            alt="Art Deco flat vector illustration of a girl with two gazelles"
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
                More Meritocracy in Party Politics:
              </span>
              <span
                className="block text-sm sm:text-base lg:text-lg italic font-light mt-2"
                style={{
                  color: '#d8c090',
                  textShadow:
                    '1px 1px 0 #8a6830, 2px 2px 0 #5a4018, 3px 3px 8px rgba(0,0,0,0.6)',
                }}
              >
                Building robustness against behavioral biases, within a political party
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
              Recent behavioral economic models highlight our <strong>shortcomings such as inattention and limited long-term vision</strong>. <br /> <br />In contrast to a fully rational citizen who will perform due diligence with care and spend time and attention to evaluate different candidates before voting, real life human beings are more sensitive to &quot;shorthands&quot;, such as highly visible signs of success (<em>call it charisma</em>), or of competence (<em>call it eloquence</em>).
            </p>
          </section>
        </FloatingBox>

        {/* Second text block with image */}
        <FloatingBox index={1}>
          <section className="mb-10 rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <p className="font-sans text-base leading-relaxed text-foreground mb-6">
              To learn more about how attention is represented in behavioral economic models, see below the visual differences between a fully rational economic agent paying attention to every potential topic, and a normal person with only enough attention for some topics dear to them.<br /> <br /> <em>Of course, every one of us will have a different attention matrix (but all of ours have in common that they are </em>sparse<em>, e.g. they are filled with more 0s than 1s</em>).
            </p>
            <div className="rounded-xl overflow-hidden bg-white border border-border/40">
              <Image
                src="/images/imageMatrix2.png"
                alt="Comparison of attention allocation in decision making - full attention matrix vs sparse attention matrix"
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
            text={`Behavioral economic models don't even need to know what exact topics we each individually pay attention to; aggregating many random but sparse matrices already produces robust economic results.

To see how for yourself sparse attention matrices change classic economic theorems, you can type in the text input box below some economic phenomenon *(for instance how do people react to government cutting taxes today with plans to raise them in the future)*, and an AI will respond to you if sparse attention from us humans is affecting that phenomenon, and if yes how it changes related classical economic findings.

*(The tax example above in classical economics has been described as a Ricardian equivalence, e.g. *"rational agents will save the entire tax cut to pay the future taxes."* However with sparse attention matrices, this Ricardian equivalence fails as real humans do not pay too much attention to future tax liabilities. The complexity of calculating future tax burdens is high, and the immediate impact on their life is low or perceived as such. Therefore, they treat a tax cut as an increase in net wealth and spend a portion of it, stimulating the economy in the short run)*.`}
            placeholder="Enter an economic phenomenon..."
            isDreamy={false}
            systemPrompt="explain if bounded rationality and sparse attention matrix could affect what has been described there, especially based on Xavier Gabaix's research, without needing to explain what bounded rationality and sparse attention matrix are. If nothing from this academic literature applies to what has been said, say very clearly that this is not something that has been studied in the context of behavioral economics. Never use tables in your responses."
            temperature={0.3}
          />
        </FloatingBox>

        {/* Second interactive block */}
        <FloatingBox index={3}>
          <InteractiveBlock
            text={`**Now turning to politics**, one could see *(for instance by asking the input text box above)* how aggregating our inattentive individual behaviors at a group level could lead political parties to fall into **performative traps**, where how one pleases senior party leadership becomes more important for one's career advancements then pursuing best implementation of the party's policy proposals. 
            
In fact, even within a political party all members cannot carefully evaluate all the potential candidates, hence rely on a few key party members (senior leaders) to co-opt promising candidates and propel them to the front stage. 
            
*To see this for yourself, in the text input box below you can type the name of a politician and an AI will highlight the role of senior party leadership co-optation in this politician's career*.`}
            placeholder="Enter a politician's name..."
            isDreamy={false}
            systemPrompt="first check if the text inputted there is a known politician. Else respond very clearly that you don't know any politician of that name. If a politician, then highlight the role of senior party leadership co-optation in this politician's career, with concrete examples of when it helped that politician. Also remind at each example what the politician do to get the favor of senior party leadership. Never use tables in your responses."
            temperature={0.1}
          />
        </FloatingBox>

        {/* Third interactive block */}
        <FloatingBox index={4}>
          <InteractiveBlock
            text={`The nature of power – in that it cannot be easily shared – further introduces selection biases, as the ones most willing to consistently perform and please senior leaders are also often the ones most driven by narcissism and a desire to control. This creates a vicious circle in which senior party leaders then only select the most flattering aides, further distorting a party's culture and the dynamics between its members. 
            
  *To see this for yourself, in the text input box below you can type the name of a politician of your choice, and an AI will highlight examples in the career of this politician where that politician selected flattering aides instead of capable aides.* `}
            placeholder="Enter a politician's name..."
            isDreamy={false}
            systemPrompt="first check if the text inputted there is a known politician. Else respond very clearly that you don't know any politician of that name. If a politician, then highlight examples in the career of this politician where that politician could have selected a more capable aide but went with a flattering one instead. Never use tables in your responses."
            temperature={0.1}
          />
        </FloatingBox>

        {/* Text block on democracy and protocols */}
        <FloatingBox index={5}>
          <section className="mb-10 rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <p className="font-sans text-base leading-relaxed text-foreground mb-4">
              Democratic constitutions have been built on the separation of powers, but <strong>political parties themselves have suffered from a lack of counterchecks and representation</strong>. Maybe such a flaw can partly explain rising populism in many old democracies.
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground mb-4">
              It is worth noting that several cryptocurrency designers are also first and foremost motivated by such social choice and institution design questions – I will refer here to Vitalik Buterin (the creator of Ethereum)'s many writings and public interventions on voting mechanisms, social and community currencies, on social media and polarization, in democracies vs autocracies…
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground">
              Protocols applying similarly to all participants (what crypto designers call "consensus mechanisms") and relaying on independent audit (validation) are in fact mechanism design tools that could help mitigate the aforementioned behavioral biases <em>(though attaching monetary values to crypto tokens also exacerbates speculation and other harmful behaviors)</em>.
            </p>
          </section>
        </FloatingBox>

        {/* Dreamy text block - example protocol */}
        <FloatingBox index={6}>
          <section className="mb-10 rounded-2xl bg-[hsl(280,30%,96%)] border border-[hsl(280,40%,82%)] p-6 sm:p-8 shadow-sm backdrop-blur-sm font-cursive text-base leading-relaxed text-accent-foreground prose prose-sm prose-neutral max-w-none [&_strong]:font-bold [&_em]:italic [&_p]:mb-4 [&_p:last-child]:mb-0">
            <p>
              Without going somewhere as complicated as crypto, we can already imagine a new political party P being created adhering to the following protocol:
            </p>
            <p>
              - first, every member of party P gets to debate and ultimately agrees to a set of key policy objectives - <em>say [A] mitigate climate change, [B] mitigate inequality and [C] promote employment.</em>
            </p>
            <p>
              - then, every member of party P gets to debate and ultimately agrees on a set of KPIs for each objective, <em>say for [A] the KPIs are CO2 emissions reduction, Methane reduction, and plastics recycling; for [B] the KPIs are spread between the top salaries and the bottom salaries and the proportion of the population below poverty line. For [C] unemployment rates, youth unemployment rates, and duration of unemployment are the KPIs.</em> Every member of party P also gets to debate and ultimately agrees to a scoring system (eg how different KPIs translate to how much total aggregated score), and to a set of independent agencies or auditors (validators) that will measure each of these metrics.
            </p>
            <p>
              <strong>This scoring system starts to define a political protocol promoting meritocracy.</strong> One can also add to such a protocol an obligation for any potential candidate to start at the bottom of the ladder, then advancement between potential candidates on the same level is done via competition along these KPIs, applied to the entire portfolio of localities governed by party members. This protocol then is applied similarly and transparently to all party members, including party leadership running for presidential elections.
            </p>
            <p>
              <strong>This selection method made sure that the attention of the selection process *(now via a collective protocol, rather than by individual co-optation)* is focused on all the KPIs the entire party agreed on</strong>, rather than just on more subjective traits or stories.
            </p>
          </section>
        </FloatingBox>


        {/* Dreamy interactive block - China comparison */}
        <FloatingBox index={8}>
          <InteractiveBlock
            text={`Nowhere in the example above does one need cryptocurrencies or blockchain, but the crypto extreme of binding and transparent protocols can hopefully convince readers of the potential for such a political protocol-based party.
            
One might also be reminded, when reading the example above, of the Chinese Communist Party's model of inter-jurisdictional competition. **We emphasize however that a country doesn't require a single party system for any political party in the country to apply this protocol**. In countries with few political parties such as bipartisan America, there are already plenty enough counties, cities and states governed by members of one political party to start organizing such a promotion-competition protocol. 
            
*To see this, in the text input box below you can type the name of a political party, and an AI will list the number of districts, cities and states that this political party holds. One can then imagine how such a protocol-based competition within the party could look like.* `}
            placeholder="Enter a political party name..."
            isDreamy={false}
            systemPrompt="first check if the text inputted there is a known political party. Else respond very clearly that you don't know any political party of this name. If a political party, then check and provide how many districts, cities and states (or equivalent in other countries) this political party hold. Never use tables in your responses."
            temperature={0.2}
          />
        </FloatingBox>

        {/* Interactive block on economic mechanisms */}
        <FloatingBox index={10}>
          <InteractiveBlock
            text={`In fact, the economics profession had an ongoing academic debate throughout the 20th-century pitting the Austrian School's critique of central planning *(von Mises then his students including Hayek)*against market socialism *(Taylor, Lange, Lerner and successors)*. Many in academia got actually convinced by the benefits of having at least some degree of central planning *(see Samuelson 1989, or Murphy, Schleifer, Vishny 1989)*, before the fall of the USSR ended this academic debate.

China's model of inter-jurisdictional competition can be interpreted through the lenses of this debate: intra-party competition can seen as an implicit answer to Hayek's "knowledge problem." 

Chinese reformers, particularly after the failures of the Maoist era, recognized the practical impossibility of centrally planning an economy of continental scale and complexity. The decision to devolve vast economic management authority to local officials was a pragmatic response to this reality. This decentralization places decision-making power in the hands of agents who possess the relevant "local knowledge" that Hayek deemed essential for rational economic action. 

Empirical research on the decentralization of China's state-owned enterprises (SOEs) provides direct confirmation of this Hayekian logic. Studies show that the greater the physical distance between an SOE and its government overseer—a proxy for the weakness of local knowledge at the center—the higher the probability that the enterprise will be decentralized to a lower-level government that is geographically closer. This demonstrates a clear institutional recognition that effective management requires tapping into the dispersed knowledge of local conditions, a core tenet of Hayek's critique of central planning. 

Another response to Hayek's and his students' criticism of central planning is Oskar Lange and Abba Lerner's "trial-and-error" process, which can be seen as an academic version of China's use of centrally managed performance metrics and promotion-based rewards to spur growth.
   
To learn more about these academic debates, and how today's Chinese political system relates to them, you can ask any question in the text box below. An AI will provide responses using these academic concepts, namely those of mechanism design, market socialism, Big Push industrialization. *Note that the AI could be wrong, so we encourage you to copy your question and check academic sources if interested*.`}
            placeholder="Ask about mechanism design, market socialism, or Hayek's knowledge problem..."
            isDreamy={false}
            systemPrompt="respond using concepts from (only if relevant or possible) mechanism design, market socialism, Big Push industrialization, and again only if relevant or possible using the work of Hayek, Von Mises, Lange-Lerner, Robert Allen. No need to summarize all these concepts, just use them in response and quote relevant researchers when used only. Never use tables in your responses."
            temperature={0.3}
          />
        </FloatingBox>


        {/* Interactive block on industries */}
        <FloatingBox index={12}>
          <InteractiveBlock
            text={`The relative evaluation among local officials for career advancement forces local officials to be acutely aware of the policies and performance of their neighbors, fostering rapid policy diffusion and strategic mimicry. If one city devises a successful strategy for attracting investment, such as creating a new type of special economic zone, neighboring cities are heavily incentivized to copy it to avoid falling behind in the rankings. This dynamic can create a virtuous 'race to the top,' driving improvements in total factor productivity and policy innovation (however, it can also trigger a destructive 'race to the bottom' for objectives not considered under the centrally chosen KPIs, as jurisdictions compete to offer ever-larger tax breaks, relax environmental regulations to attract polluting industries, or engage in other forms of beggar-thy-neighbor competition).

            
To learn more about the effects of such competition, you can ask in the text box below about any specific industry (say pharma/biotech, aeronautics, high speed trains, nuclear plants, chemical supply chains…). An AI will provide responses using examples of coordinated policies and their effects on private sector and supply chains at large from the centrally planned French 'Commissariat Général du Plan', and/or from postwar USA prior to Reagan, and/or contemporary China.`}
            placeholder="Enter an industry name..."
            isDreamy={false}
            systemPrompt="first check whether the text inputted correspond to some industry. If not say clearly that it's not an industry related input and the user should try again. If yes then say if this industry's development used centrally planned policies to coordinate different actors (firms, research labs, universities) to build industrial capabilities, in any countries, and if yes how. Never use tables in your responses."
            temperature={0.2}
          />
        </FloatingBox>


        {/* Final interactive block */}
        <FloatingBox index={14}>
          <InteractiveBlock
            text={`The protocol-based political party proposal laid out above is then trying to derive the successful components of the French (pre-Mitterrand) and Chinese model for economic development, but within a democratic framework. 
            
Of course, it is only a first attempt, and a simplified one. However, recognizing our behavioral biases, and how they distorted entire party politics into being performative rather than meritocratic, hopefully can provide us motivation for reforms. A first easy step would be for us to leverage the power of AI to better filter out performances and evaluate different candidates following policy goals dear to us. Another future step could be to leverage this inattention framework to compare public sector coordinated supply chains as in France or China (with the AI input box from a few boxes above), vs capital market led coordination such as the AI boom leading to data center buildups, energy projects, industry adoption, but maybe coming with an inattention cost to other industries.

Below in the text box you can for instance name some policy goals, and a country, and an AI will for illustration show which candidate in that country performed consistently well on these policy goals, vs which candidates always say they care about these topics, but consistently miss the mark on them. Of course, these are for illustration only, as the AI powering this blog is not state of the art (openai/gpt-oss-120b from Groq). This is more to show what tools we could be using in our daily lives, and how within a party performance should be evaluated.`}
            placeholder="Enter policy goals and a country..."
            isDreamy={true}
            systemPrompt="Based on the input provided (policy goals and country), identify which candidates/politicians in that country have performed well on those policy goals vs which ones have not, despite claiming to care about them. Never use tables in your response."
            temperature={0.3}
          />
        </FloatingBox>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/40 px-6 py-8 sm:px-8 lg:px-12 mt-16">
        <div className="mx-auto max-w-[42rem] text-center">
          <p className="font-sans text-sm text-muted-foreground">
            A behavioral economics exploration of political party selection protocols and meritocratic governance
          </p>
        </div>
      </footer>
    </main>
  );
}
