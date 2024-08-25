# An In-Flight Extended Reality Tool for General Aviation Situation Awareness
![Teaser](Figures/Town_name_Screenshot.png)
Repository of MSc Thesis by Thierry Weber at ETH Zurich

## Abstract
Flights in General Aviation (GA) are commonly operated under Visual Flight Rules (VFR). Under VFR, pilots navigate by comparing features on the earth’s surface to a 2D map. This mental process entails a focus split between inside and outside the cockpit. The focus split decreases the mental capacity of the pilot. Other tasks, such as looking out for traffic, are neglected, thus the overall situational awareness of the pilot is reduced. Although paper maps are still encouraged to be used as a main navigation tool, 2D moving maps on mobile devices are getting more popular to support the pilot with digital information. However, displaying information in 2D in an attempt to capture the 3D world in which the flight takes place is still inadequate. Projecting flight-relevant information directly into the real world would be the logical next step. Despite Augmented Reality (AR) technology being already used in commercial aviation, no such tool exists to support GA pilots. This work explored the effect of AR technology on the situation-al awareness of a pilot in a GA aircraft operation under VFR. While the main focus of the still sparse research for AR technology in the GA sector lies either on highlighting traffic or implementing an ap-proach guidance tool, this work expanded the possibility of more geographically relevant information during different phases of VFR flight. An AR application was developed for Microsoft HoloLens 2, featur-ing six scenarios set in Switzerland, integrating non-visible aeronautical information, VFR navigation fea-tures, and hard-to-see hazards. A user study with 19 pilots in a flight simulator was conducted to evalu-ate the tool’s effect on situational awareness. The results indicated that the AR tool positively influenced situational awareness, particularly in disorientation scenarios during cruise flight in unfamiliar areas. The novel 3D visualization of airspace structures and the tool’s ability to identify and display the current and upcoming airspace were found to enhance situational awareness. However, the effect of AR during ap-proach phases was less conclusive, likely due to the early development stage of the application and limitations of the flight simulator. Participants raised concerns about the potential occlusion and distrac-tion from real-world environment due to the AR content, which could negatively impact situational aware-ness. Moreover, an AR menu was evaluated as an interaction method within the application but found not optimal for a cockpit environment. 
## Goals
The goal for this thesis is to develop an Augmented Reality (AR) tool to support the situational aware-ness of general aviation (GA) pilots and test it in a user study. During the development, the focus should be on visualizing non-visible aeronautical information (e.g., airspace structures, advisory points, way-points, approach procedures, etc.) and hard-to-see hazards (e.g., antenna towers, traffic, wires, cable cars, etc.). Additionally, displaying information aiding pilots with their tactical decisions during flight under VFR could be beneficial for situational awareness in flight (e.g., airports, villages, mountain peaks, etc.). To be able to measure the performance of the application, the following research question and hypothe-ses were formulated: 
- RQ: What are the effects of an augmented reality tool to the situational awareness of the pilot in a gen-eral aviation cockpit? <br />
- H1: AR will allow the pilot to raise the situational awareness by noticing hazards faster.
- H2: AR will increase situational awareness by increasing awareness of nearby airspace structures.
- H3: AR can support regaining location awareness in case of disorientation.
- H4: AR will allow to fly the planned flight more accurately and precisely.



## Vision
With the goal in mind, a vision of what the application could look like was created by overlaying digital content as sketches on photographs taken inflight. The photographs were taken by the author. Figure 4 shows the vision for two different flight phases. In the left image, a cruise flight scenario is captured, while on the right image, an approach is depicted. The information displayed was already selected to support finding an answer to the research question however, the exact information types to be displayed were evaluated more thoroughly before starting the development of the application. 
During cruise flight, the task of orientation is imagined to be supported by highlighting town names, ob-stacles like power lines, and points of interest such as power plants and monasteries. Another idea in the vision was to display the surrounding airspace structure to raise the awareness of the pilot on where the boundaries of airspace sectors are. Some sort of menu should be included to toggle different information.
During an approach, the circuit layout is envisioned to be projected into the real-world as gates to fly through (green gates in Figure 4). Information about the destination airport should be displayed near the airport to make the pilot aware of radio frequencies, runway directions, runway length and elevation of the airport.

![Teaser](Figures/Vision.jpg)


## Application Development
### Software Architecture
![Software Architecture](Figures/SoftwareArchitecture.png)
### Visualization
<p float="left">
  <img src="Figures/POI_Visualization.png" /> </br>
  <img src="Figures/CTR.png" width="250" /> 
  <img src="Figures/TMA.png" width="250" /> 
  <img src="Figures/LS_DR.png" width="250" /> 
  
  
</p>

### Interaction
<img src="Figures/NearMenuV2_transparent_BG.png" width="250" /> 

## Video


https://github.com/user-attachments/assets/a99666e9-60ca-458a-a764-50fdaf1e8808

## Results 

### Task 1 (Orientation)
<p float="left">
  <img src="Figures/POI_Visualization.png" /> </br>
  <img src="Figures/CTR.png" width="250" /> 
  <img src="Figures/TMA.png" width="250" /> 
  <img src="Figures/LS_DR.png" width="250" /> 
  <\p>
    
### Task 2 (Airspace)

### Task 3 (Approach)
<p float="left">

  <img src="Figures/Alt_profil_Gren_with.png" width="250" /> 
  <img src="Figures/Alt_profil_Gren_without.png" width="250" /> </br>
  <img src="Figures/flightpaths_gren_AR_stadia_arrow.png" width="250" /> 
  <img src="Figures/flightpaths_Gren_withouAR_stadia_arrow.png" width="250" />  </br>
  <img src="Figures/Height_Profil_Buochs_withAR_reds_int.png" width="250" /> 
  <img src="Figures/Height_Profil_Buochs_withoutAR_blues_in.png" width="250" /></br>
  <img src="Figures/flightpaths_Buochs_AR_stadia_arrow.png" width="250" /> 
  <img src="Figures/flightpaths_Buochs_withouAR_stadia_arrow.png" width="250" /> 
  
</p>
<p>The following link leads to a 3D web map displaying the recorder flight paths: </p>
<a href="https://n.ethz.ch/~weberth/FlightPATH3DWebmap">3D Web Map</a>


## Conclusion and Future Work

<p> This work explored the effect of AR on the situational awareness of a pilot in a General Aviation (GA) aircraft operation under Visual Flight Rules (VFR). While the main focus of the still sparse research for AR technology in the GA sector lays either on highlighting traffic or implementing an approach guidance tool, this work expanded the possibility of more geographically relevant information during different phases of VFR flight. As the related work, this thesis was able to prove a positive effect of AR tools on situational awareness. However, this effect turned out to be highly dependent on the scenario, visualiza-tion and individual preference of the subject. An application for the Microsoft HoloLens 2 was developed, to evaluate the hypotheses. It included six scenes linked to different regions in Switzerland. The infor-mation integrated consisted of non-visible aeronautical information (airspace structures, advisory points, waypoints, approach procedures etc.), features used in VFR navigation (town names, POIs, etc.) and hard-to-see hazards (e.g., antenna towers, wires, power lines, etc.). The application was used in a user study conducted with 19 pilots in a flight simulator setup. The study was built to be a with-subject design and was tailored to the hypotheses. Three main tasks allowed to get detailed results on the difference between solving navigational challenges with and without an AR tool as an aid. Qualitative and quantita-tive measures were taken and analyzed. A short post-study interview aimed to gather opinions on the idea of using AR technology in GA cockpits.</p>
<p>The mental process of conventional map reading involves the search for features on the map and cross-referencing them in the real world. Especially in regions with less dominant terrestrial characteristics, the identification of a position is challenging and can be misleading. The study has shown that the AR tool was able to benefit this process of regaining location awareness in case of disorientation inflight. Project-ing information about terrestrial features (e.g., the names of towns), reduces the workload for cross-referencing (if even needed) on a map and therefore improves the situational awareness of the pilot. It was found that such a tool is especially helpful during cruise flight in unfamiliar areas</p>
<p>Another novelty of this thesis is the 3D visualization of airspace structures in AR. Additionally, the appli-cation is aware of what airspace structure the airplane is currently in and what airspace is 5 nm mile ahead. This information is presented to the user in text form within the application, allowing them to ef-fortlessly identify what airspace structure they are in, hence increasing situational awareness. This was proven throughout the user study by letting the participants state the airspace section in the simulation and comparing the results of both conditions (with and without AR). </p>
<p>A third task of the study assessed the advantages of AR in an approach scenario, similar to Katins (2023a). Although the results were not favoring the with AR condition as clearly as in the study by Kat-ins, the analysis showed indications on positive effects of augmented information during an approach. The dampened effect is believed to be due to the development state of the application, but also the physics of the flight simulator setup used in this study. The stated factors led to a decrease in trust in the quality of the information presented. When comparing the recoded flight paths, it can be said that the AR tool especially helps flying approaches more accurately in areas with less terrestrial features. During the post-study interview, this tool was found to be most useful for approaches into unfamiliar airports. Look-ing at the results of a self-rated situational awareness scale, the scores favor the without AR condition. The task load was rated with no significant difference between the conditions. Here, the application has to be developed further and tested with more participants to make a profound general statement about the effect of AR on situational awareness in an approach scenario. Additionally, more thoughts have to be put into the visualization of the circuits.</p>
<p>To summarize, this work picks up on the current state of research for AR technology in the GA sector by studying the effect of AR on the situational awareness of pilots. It does so by presenting novel, world-referenced visualizations of flight-relevant information for different flight phases. The results were com-parable to those from the related work. Although the AR aid was proven to have a positive effect on situational awareness, there are some indications that new challenges arise by using this new technology as a navigation aid. For example, a concern raised by the participants is the potential of distraction from real-world information by the projected information. This can cause negative effects on the situational awareness. The majority of the participants were excited to test this new to them technology and stated that such a tool has huge potential as a next step in the evolution from moving maps. Nevertheless, it was mentioned that pilots could be tempted to rely on this tool so much that they unlearn to navigate without digital aids. This could lead to potentially dangerous situations in case of malfunctions of the electronic device. </p>
<p>Finally, it has to be said that the results have to be interpreted with caution, as statistical significance for the majority of the results was not reached with a group of 19 pilots. Adding to that, in the authors opin-ion, the hardware (smart glasses/AR devices) has to evolve in order to raise the usability of such a tool to a level where it is widely accepted by the public. </p>
<p>As suggested by Katins (2023b), this work included research on interaction with AR applications for the GA sector. However, following the results and feedback of the users, the research has to be extended in future work. As suggested in the previous chapter, evaluating the requirements of a touch-pad interac-tion for an AR tool in the GA cockpit turns out to be an interesting topic to study further. Maybe, com-pare it with other modes of interaction, such as mouse interaction or gaze interaction.</p>
<p>Furthermore, expanding the research on the distraction and occlusion caused by AR content in a GA cockpit is necessary to better understand its effects on the situational awareness. Hereby, a study on optimal adaptability of the projected information in different phases of the flight could stand in focus. Putting more thoughts into the optimal visualization of flight relevant information in a cockpit environment is another topic to look into in future work. As the digital content is projected on transparent glasses, the effects of various environmental factors such as sunlight, vibrations, or g-forces have to be tested in a real world aircraft. This is the only way to make sure the projections are usable in a real cockpit envi-ronment. </p>
<p>Throughout the user study of this work, no significant weather was programmed into the scenarios. Fu-ture studies could involve assessing the use of AR in adverse weather conditions. The author believes that further adaptation of the projected content to the surrounding weather is needed to support the situational awareness of a pilot most effectively. </p>
<p>Last but not least, implementing the functionalities and integrating the information suggested by partici-pants during the post-study interview in an AR application will help the still young field of research. </p>


## Acknolegement
I would like to thank my supervisor, Adrian Sarbach, for the well-structured guidance throughout this project and the lively discussions. Additionally, I thank all the participants of my user study, whose valu-able time, insights, and feedback were crucial in shaping the outcomes of this research. Further, I ex-press my gratitude to the “Zentrum für Aviatik” (ZAV) at ZHAW for showing me their flight simulator and the exchange in current research topics between the ZAV and the Chair or Geoinformation Engineering at ETH Zurich . Finally, I would like to thank Prof. Dr. Martin Raubal for the opportunity to work on this thesis in the Chair of Geoinformation Engineering at ETH Zurich. 
