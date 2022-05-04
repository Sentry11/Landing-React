 
import mapInvansion from '../assets/img/MapInvansion.jpg'
import invasion from '../assets/img/Invasion.jpg'
import encroachment from '../assets/img/Еncroachment.jpg'
import destruction from '../assets/img/Destruction.jpg'
import des1 from '../assets/img/Des1.jpg'
import des2 from '../assets/img/Des2.jpg'
import des3 from '../assets/img/Des3.jpg'
import des4 from '../assets/img/Des4.jpg'
import victims1 from '../assets/img/Victims1.jpg'
import victims2 from '../assets/img/Victims2.jpg'
import victims3 from '../assets/img/Victims3.jpg'
import hope1 from '../assets/img/Hope1.jpg'
import hope2 from '../assets/img/Hope2.jpg'
import hope3 from '../assets/img/Hope3.jpg'
import hero1 from '../assets/img/Hero1.jpg'
import hero2 from '../assets/img/Hero2.jpg'
import hero3 from '../assets/img/Hero3.jpg'
import hero4 from '../assets/img/Hero4.jpg'
import freedom from '../assets/img/Freedom1.jpg'
import leader from '../assets/img/Leader1.jpg'


import CenterProjects from './center-projects'
import LeftSide from './left-side-projects'
import RightSide from './right-side-projects'

import '../style.css'



const Projects = () => {
    

    return(
        <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">
                        {/* Featured Project Row */}
                      
                <CenterProjects
                   img = {mapInvansion} 
                   title = {<span><strike>Special Operation  </strike> War</span> } 
                   desc = {"-Good morning! Words that not a single Ukrainian heard on February 24"} 
                        />
                <LeftSide 
                    img = {invasion}
                    title = {"Invansion"}
                    desc = {`"Only the dead have seen the end of war." ― Plato`}/>
                 <RightSide
                     img = {encroachment}
                     title = {"Еncroachment"}
                     desc = {`“There is a savage beast in every man, and when you hand that man a sword or spear and send him forth to war, the beast stirs.”
                        ― George R.R. Martin, A Storm of Swords`}/>
                 <LeftSide 
                     img = {destruction}
                     title = {"Shatter"}
                     desc = {"“All war is a symptom of man's failure as a thinking animal.”  ― John Steinbeck"}/>
                 <RightSide
                     img = {des1}
                     title = {"Destraction"}
                     desc = {"“The world is full enough of hurts and mischances without wars to multiply them.” ― J.R.R. Tolkien, The Return of the King "}/>
                <LeftSide 
                     img = {des2}
                     title = {"Ruin"}
                     desc = {"“There is no instance of a nation benefitting from prolonged warfare.”― Sun Tzu, The Art of War"}/>
                <RightSide
                     img = {des3}
                     title = {"Fracture"}
                     desc = {"“No one won the last war, and no one will win the next war.”― Eleanor Roosevelt, The Wisdom Of Eleanor Roosevelt "}/>
                 <LeftSide 
                     img = {des4}
                     title = {"Innocent"}
                     desc = {"“Cry havoc and let slip the dogs of war!” ― William Shakespeare, Julius Caesar "}/>
                <RightSide
                     img = {victims1}
                     title = {"Victim"}
                     desc = {"“Fighting for peace, is like f***ing for chastity”― Stephen King, Hearts in Atlantis"}/>     
                <LeftSide 
                     img = {victims2}
                     title = {"Pain"}
                     desc = {"“Show this Putin the eyes of this child” ........ “It was not possible to save the child” - Еhe doctor from this photo"}/> 
                <RightSide
                     img = {victims3}
                     title = {"Sadness"}
                     desc = {"“Mankind must put an end to war - or war will put an end to mankind.[Address before the United Nations, September 25 1961]” ― John F. Kennedy "}/>     
                <LeftSide 
                     img = {hope1}
                     title = {"Hope"}
                     desc = {"“May God have mercy for my enemies because I won't.”― George S. Patton Jr."}/>   
                <RightSide
                     img = {hope2}
                     title = {"Revenge"}
                     desc = {"“You ask, what is our aim? I can answer in one word. It is victory, victory at all costs, victory in spite of all terror, victory, however long and hard the road may be; for without victory, there is no survival.” ― Winston Churchill "}/>     
                <LeftSide 
                     img = {hope3}
                     title = {"People"}
                     desc = {"“In this world, whenever there is light, there are also shadows. As long as the concept of winners exist, there must also be losers. The selfish desire of wanting to maintain peace causes wars and hatred is born to protect love.”― Masashi Kishimoto"}/>   
                <RightSide
                     img = {hero1}
                     title = {"Soldier"}
                     desc = {"“Those with the least always lose the most in war.”― Joe Abercrombie, Before They Are Hanged "}/>     
                <LeftSide 
                     img = {hero2}
                     title = {"Аssistance"}
                     desc = {"“There is nothing that war has ever achieved that we could not better achieve without it.”― Havelock Ellis"}/>   
                <RightSide
                     img = {hero3}
                     title = {"Defender"}
                     desc = {"“War is always an adventure to those who've never seen it.”― Anthony Ryan, Blood Song"}/>     
                <LeftSide 
                     img = {hero4}
                     title = {"Faith"}
                     desc = {"“Bombardment, barrage, curtain-fire, mines, gas, tanks, machine-guns, hand-grenades - words, words, but they hold the horror of the world.”― Erich Maria Remarque, All Quiet on the Western Front"}/>
                <RightSide
                        img = {freedom}
                        title = {"Freedom"}
                        desc = {"“Україно, Україно! Серце моє, ненько! Як згадаю твою долю, заплаче серденько!” “Тарасова ніч ”; 6.XI 1838; С.-Петербург - Тарас Григорорич Шевченко "}/>
                            <div className='split'></div>     
                                <CenterProjects 
                                img = {leader}
                                title = {"Leader"}
                                desc = {"“And then life will conquer death, and the world - darkness. Glory to Ukraine! [Address before the European Parliament, February 28 2022]” - Volodymyr O. Zelenskyy"}/>              
                                                          
                    </div>
                </section>
            )
}

export default Projects;