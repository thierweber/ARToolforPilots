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

## Video


https://github.com/user-attachments/assets/a99666e9-60ca-458a-a764-50fdaf1e8808

