---
layout: page
sidenav: true
permalink: develop/sample-personas/
type: develop
title: "Sample Personas for Users With Disabilities"
description: Sample personas for users with disabilities to use in the research and design phase to improve Section 508 conformance and the overall end-user experience of a service, product, or website.
created: 2025-09-10
contributors: dhs
topic: "design"
sub-topic: "Design, Develop, Testing for Accessibility Training or Tools"
audience:
- "Developers and Testers (dev-test)"
- "Content Creators (creator)"
- "Federal employee (fedemp)"
- "Designer (design)"
resource-type: "Process/How-to"
format: "HTML (html)"
---
<style>
 /* Flex container for horizontal thumbnail cards */
 .thumbnail-card {
   display: flex;
   align-items: center;
   gap: 1rem;
   flex-wrap: wrap; /* Stacks on smaller screens */
 }


 .thumbnail-card .usa-card__media {
   flex-shrink: 0;
   width: 80px;
   height: 80px;
   overflow: hidden;
 }


 .thumbnail-card .usa-card__media img {
   width: auto;
   height: 100%;
   object-fit: cover;
   display: block;
 }


 /* Optional: Stack vertically on narrow screens */
 @media (max-width: 600px) {
   .thumbnail-card {
     flex-direction: column;
     align-items: flex-start;
   }
   .thumbnail-card .usa-card__media {
     width: 100%;
     height: auto;
   }
   .thumbnail-card .usa-card__media img {
     width: 100%;
     height: auto;
     object-fit: contain;
   }
 }
</style>

Personas are semi-fictional characters that portray a group of users within a user base. With respect to digital accessibility, personas are primarily used in the research and design project phase to improve Section 508 conformance and the overall end-user experience of a service, product, or website. Developing multiple and diverse personas helps identify the varying needs and expectations of different user types by understanding how individuals utilize assistive technologies or interact with content. This provides valuable insights into multiple user needs for development teams. Without personas that include users with disabilities, digital products and services risk overlooking barriers that impact users with disabilities. Including these personas during the planning and design phases ensures ICT accessibility is addressed proactively, not reactively—saving time and money.

To enhance Section 508 conformance, two different types of user personas may be developed:  those representing individuals with disabilities and those without disabilities who still benefit from ICT accessibility features and functions.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p>Personas provide the “who and why” behind Section 508 conformance and are used primarily in the research and design phases and in brainstorming design solutions for a specific user group.</p></div>

## How to Develop Personas

To develop effective personas that reflect people with disabilities:

1. **Start with real user research:** Interview users with disabilities or draw insights from accessibility studies, usability testing, or disability advocacy organizations. 
2. **Include functional attributes:** Describe how the person interacts with technology such as screen reader use, speech recognition, or keyboard navigation instead of only focusing on the medical diagnoses. 
3. **Highlight goals and barriers:** Focus on what the person is trying to accomplish and the digital challenges they face. 
4. **Balance specificity and breadth:** Create a range of personas that reflect diverse disabilities, assistive technologies, and levels of digital skill. 
5. **Keep them human:** Include a name, photo (optional), background, and personal motivations to make the persona relatable.


<ol class="usa-process-list">
 <li class="usa-process-list__item">
   <h3 class="usa-process-list__heading">Start With Real User Research</h3>
   <p class="margin-top-05">
Qualitative and quantitative research are useful in creating user personas. They help to understand groupings within a user base. Qualitative research can be used to create clusters or groupings of characteristics. Quantitative surveys can then be used to test groupings to see if the clusters behave similarly or need to be re-grouped. More about conducting User Research can be found in <a href="{{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play07/">Play 7: Integrate Accessibility Needs into Requirements and Design Processes</a>.</p></li>


<li class="usa-process-list__item">
   <h3 class="usa-process-list__heading">Include Functional Attributes</h3>
   <p class="margin-top-05">


Functional attributes are aligned with <a href="https://www.access-board.gov/ict/#302-functional-performance-criteria" target="_blank" class="usa-link--external"> functional performance criteria as defined in Section 508</a>. Create attributes that group performance criteria by the products and services they use to interact with technologies. Functional performance criteria include:
<br>
<ul>
<li>Without Vision</li> 
<li>Limited Vision</li> 
<li>Without Perception of Color</li> 
<li>Without Hearing</li> 
<li>Limited Hearing</li>
<li>Without Speech</li>
<li>Limited Manipulation</li> 
<li>Limited Reach and Strength</li>
<li>Limited Language, Cognitive, and Learning Abilities</li>
</ul>
<br>
Users who are without vision and those who have extremely limited vision may use the same product or service, such as a screen reader, to interact with technology. Those users may be grouped together but likely do not have similar experiences to people with limited or no hearing. On the other hand, someone who is using a wheelchair due to a broken leg may have similar functional needs to someone who is paralyzed from the waist down when interacting with technology such as a kiosk. This overlapping functional group could potentially be addressed in one persona. Clustering personas by their functional attributes can minimize the number of personas needed to understand the user experience.</p></li>


<li class="usa-process-list__item">
   <h3 class="usa-process-list__heading">Highlight Goals and Barriers</h3>
   <p class="margin-top-05">


When developing personas, focus on user goals and objectives first.
<br>
<ul>
<li> What are they trying to accomplish?</li>  
<li> What specific task or tasks are a part of that goal?</li>  
<li> How will they be interacting with technology to meet their goal?</li>  
<li> Where do they face obstacles or barriers that prevent them from completion?</li>
</ul>
<br>
These questions should be answered in each persona developed.</p></li>


<li class="usa-process-list__item">
   <h3 class="usa-process-list__heading">Balance Specificity and Breadth</h3>
   <p class="margin-top-05">


When creating personas, consider both demographic and psychographic differences and vary these qualities.


When possible, variations should include:
<br>
<ul>
<li>Age</li>
<li>When they became disabled (such as recently or from birth)</li> 
<li>Gender</li>
<li>Functional disability type</li> 
<li>Occupation</li> 
<li>Location type such as city, suburban, rural, city and state</li> 
<li>Education</li> 
<li>Salary</li> 
<li>Own or rent</li>
<li>Comfort with technology</li> 
<li> upport type such as family, spouse, single, or aide</li> 
<li>Language spoken at home</li>
</ul>
</p>
</li>


<li class="usa-process-list__item">
   <h3 class="usa-process-list__heading">Keep Them Human</h3>
   <p class="margin-top-05">


Developing a persona is much like creating a character for a book. Name them, describe their appearance or use a photo, provide an occupation or role, give them a place to live and a support system, and add other characteristics that will shape the experience that person has when they interact with the government. Remember that though the personas are semi-fictional, they are each composites of many users, built to better understand barriers and challenges that may be encountered by users when interacting with government technology.</p></li></ol>


<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p><strong>User Personas:</strong>
<ul>
<li>Help build understanding</li> 
<li>Provide a broad view of the user’s life</li> 
<li>Include longer narratives including context and Assistive Technology used</li></ul></p></div>


## Example Personas

<div class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable" data-allow-multiple >
 <h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="true"
     aria-controls="a-a1"
   >Example Template</button></h3>
 <div id="a-a1" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
 <li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img src="{{site.baseurl}}/assets/images/persona-enzo.jpg" alt="An african american man sitting on a park bench with dark sunglasses on. He is wearing a beige jacket, a gray scarf and plaid blue pants. He is putting headphones into his ears to listen to his phone while a white cane leans against the bench." style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
 <p>
<strong>Name</strong>: Enzo<br>
<strong>Age</strong>: 40 <br> 
<strong>Occupation</strong>: Program Analyst at a federal agency  <br>
<strong>Location</strong>: Billings, Montana  <br>
<strong>Disability</strong>: Blind since birth  <br>
<strong>Assistive Technology</strong>: Enzo uses a screen reader and Braille display.<br>  
<strong>Home life</strong>: Married with four children still at home  <br>
<strong>Goals</strong>: Complete forms, understand the information being presented, understand summary reports.  <br> 
<strong>Frustrations</strong>: Unable to determine what information is being asked by a form, difficulty reading charts due to missing labels, images that do not have description, things are out of order when navigating with a screen reader.  <br>
<strong>Quote</strong>: “If it's not properly labeled, I can only make a best guess as to what's on the screen.”  <br>
<strong>Design Considerations</strong>:
<ul>
<li>Ensure semantic HTML and ARIA labels for form fields.</li> 
<li>Provide Section 508 conformant data visualizations with text equivalents.</li> 
<li>Support keyboard and screen reader navigation.</li></ul>
</p></div></div>
</li></ul></div>
<hr class="breaker-bar-green margin-top-2 margin-bottom-2">

<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a1"
   >Without Vision</button></h3>
<div id="b-a1" class="usa-accordion__content">
<ul class="usa-card-group">
 <li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-john.jpg"
           alt="An older white male sitting on a couch, wearing dark sunglasses and  holding a white cane in front of him. He is wearing kakhi pants and a green sweater with a collared shirt underneath."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
<p>
<strong>Name:</strong> John <br>
<strong>Age</strong>: 51  <br>
<strong>Occupation</strong>: Therapist  <br>
<strong>Location</strong>: Orlando, Florida  <br>
<strong>Disability</strong>: Blind since 11 years old  <br>
<strong>Assistive Technology</strong>: John uses a VoiceOver screen reader and a refreshable braille display to read web content.  <br>
<strong>Home life</strong>: Widowed; has really gotten into using social media to keep up with friends and family.   <br>
<strong>Goals</strong>: To be able to use more of the internet because many sites are not well designed and he is not able to use them.  <br>
<strong>Frustrations</strong>:
<ul>
<li>Websites who don’t consider accessibility and who insist on using CAPTCHA tests.</li>  
<li>Having to ask for help from sighted friends when using inaccessible websites.</li></ul>


<strong>Quote</strong>: “Inaccessible content means I cannot independently engage with family and friends."  <br>
<strong>Design Considerations</strong>:
<ul>
<li> Ensure semantic HTML.</li>
<li>Ensure alternative forms of CAPTCHA are provided, at a minimum, for users without vision and users without hearing. </li>
<li>Ensure all interactive elements are keyboard accessible and in logical focus order. </li></ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a2"
   >With Limited Vision</button></h3>
 <div id="b-a2" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
  <li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-anna.jpg"
           alt="A middle aged white woman with red hair and brown eyes smiling."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
<p>
<strong>Name</strong>: Anna  <br>
<strong>Age</strong>: 54  <br>
<strong>Occupation</strong>: Retail Clerk  <br>
<strong>Location</strong>: San Francisco, California   <br>
<strong>Disability</strong>: Limited Vision due to cataracts resulting in cloudy and washed out vision.  <br>
<strong>Assistive Technology</strong>: Anna uses a screen reader and a software package called ZoomText, which magnifies the screen. She finds this really useful but sometimes the formatting doesn’t always look the same.  <br>
<strong>Home life</strong>: Married; When it comes to using technology or a website, she finds it hard to read. In most cases, she is not able to read the text or any of the navigation.   <br>
<strong>Goal</strong>: To build more tech skills and enjoy using her computer because she knows there’s a world out there that she’s missing out on.  <br>
<strong>Frustrations</strong>:<br>
<ul>
<li>Trying to be more Tech Savvy but without access to anyone who really knows the answers to her questions. </li>
<li>Having to ask for help from her husband or others when using inaccessible websites.</li></ul>


<strong>Quote</strong>: “I just want to be able to magnify text so I can easily read content on my computer screen or tablet."  <br>
<strong>Design Considerations</strong>:<br>
<ul>
<li>Ensure there is a mechanism to resize, scale, or zoom in on the content at least to 200% of original size without loss of content or functionality. </li>
<li>Ensure that the reading order and meaning of the content (in context) is correct without the CSS position property.</li></ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a3"
   >Without Perception of Color</button></h3>
 <div id="b-a3" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
<li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-cole.jpg"
           alt="A young white male with a start of a brown beard smiling. He has brown hair and is wearing a red polo shirt."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
<p>
<strong>Name: Cole </strong> <br>
<strong>Age: 22 </strong> <br>
<strong>Occupation:</strong> Engineer  <br>
<strong>Location:</strong> Spokane, Washington  <br>
<strong>Disability:</strong> Red-green color blindness  <br>
<strong>Assistive Technology:</strong> None  <br>
<strong>Home life:</strong> Single but is very social  <br>
<strong>Goals: </strong>To be able to understand charts without having to ask for help.   <br>
<strong>Frustrations:</strong>
<ul>
<li> Color is the only way data is communicated in charts and graphs. </li> 
<li> When error messages only appear in red, which Cole can’t discern.</li> 
<li> When color coding is used to convey information, such as red is overdue, green is on time. </li>
</ul>
<strong>Quote:</strong> “When red and green are used, I typically see greens and browns or reds and yellows which is really tough to make sense of in charts."  <br>
<strong>Design Considerations:</strong><br>
<ul>
<li> Ensure color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.</li></ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a4"
   >Without Hearing</button></h3>
 <div id="b-a4" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
<li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-amy.jpg"
           alt="A middle aged woman in an office wearing a black and white striped blazer. She has short wavy brown hair and is smiling."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
<p>
<strong>Name:</strong> Amy  <br>
<strong>Age:</strong> 42  <br>
<strong>Occupation:</strong> Accountant  <br>
<strong>Location:</strong> Telluride, Colorado  <br>
<strong>Disability:</strong> Deaf since her early 20s  <br>
<strong>Assistive Technology:</strong> Amy doesn’t use any assistive technologies but does rely on captions or transcripts for audio and video content. When these aren’t available she does try to lip read if there is a speaker. She uses American Sign Language.   <br>
<strong>Home life:</strong> Single and is very active in her community  <br>
<strong>Goals:</strong> To feel connected to what’s going on and not to miss out because of a lack of accessible content.  <br>
<strong>Frustrations:</strong>
<ul>
<li> Video content with subtitles or captioning that are not always available.</li> 
<li> Any audio content that often lacks captions or transcripts.</li></ul>


<strong>Quote:</strong> “I miss important information communicated audibly in videos when I don't have access to captions." <br>
<strong>Design Considerations:</strong>
<ul>
<li> Ensure captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.</li>
<li> Ensure captions are provided for all live audio content in synchronized media.</li> 
<li> Ensure prerecorded audio-only provides an alternative for time-based media that presents equivalent information for prerecorded audio-only content.</li></ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a5"
   >With Limited Hearing</button></h3>
 <div id="b-a5" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
<li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-apollo.jpg"
           alt="An older white man with white hair. He is wearing a pale yellow sweatshirt with a white collar shirt underneath and has a small diamond stud earring in his left ear."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
<p>


<strong>Name:</strong> Apollo <br>
<strong>Age:</strong> 71  <br>
<strong>Occupation:</strong> Retired, Grandfather  <br>
<strong>Location:</strong> Lexington, Kentucky  <br>
<strong>Disability:</strong> Age-related hearing loss  <br>
<strong>Assistive Technology:</strong> James uses hearing aids.  <br>
<strong>Home life:</strong> Windowed and to combat loneliness, likes to use the internet to stay connected  <br>
<strong>Goals:</strong> To be able to surf the internet, watch videos online, and easily communicate with his family.  <br> 
<strong>Frustrations:</strong>
<ul>
<li> Audio content that automatically plays on web pages.</li> 
<li> When sound is the only method used to communicate that an action online was successful. </li>
<li> Video content with subtitles or captioning is not always available.</li>
</ul>
<strong>Quote:</strong> “When sound is the only way to receive a notification, I may miss a video chat from my grandkids."  <br>
<strong>Design Considerations:</strong>
<ul>
<li> Ensure instructions provided for understanding and operating content do not rely solely on sound. </li>
<li> Ensure that any audio on a web page that plays automatically for more than 3 seconds offers either a mechanism to pause or stop the audio, or a mechanism to control audio volume independently from the overall system volume level.</li> 
<li> Ensure captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such. </li>
<li> Ensure captions are provided for all live audio content in synchronized media. </li>
<li> Ensure prerecorded audio-only provides an alternative for time-based media that presents equivalent information for prerecorded audio-only content.</li>
</ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a6"
   >Without Speech</button></h3>
 <div id="b-a6" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
 <li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-alma.jpg"
           alt="A younger middle aged woman with short black hair in a bob cut. She is wearing a white chunky sweater and big gold necklace."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
<p>


<strong>Name:</strong> Alma  <br>
<strong>Age:</strong> 44  <br>
<strong>Occupation:</strong> Painter  <br>
<strong>Location:</strong> Nashville, Tennessee  <br>
<strong>Disability:</strong> Loss of speech (aphasia) from a stroke last year  <br>
<strong>Assistive Technology:</strong> Alma uses a variety of augmentative and alternative communication (AAC) apps to make communication easier and speech to speech programs.  <br>
<strong>Home life:</strong> Single and is very involved in community gardening  <br>
<strong>Goals:</strong> To be able to communicate independently.  <br>
<strong>Frustrations:</strong>
<ul>
<li> Speech is required to make selections.</li>
<li> Lack of text-based communication methods.</li></ul>


<strong>Quote:</strong> “When someone requires me to speak to select a choice, it’s very challenging for me."  <br>
<strong>Design Considerations:</strong>
<ul>
<li> Ensure speech is not the only form of input.</li> 
<li> Offer multiple options for communication methods for users where speech may be challenging. </li>
</ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a7"
   >Limited Manipulation</button></h3>
 <div id="b-a7" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
<li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-kai.jpg"
           alt="An african american husband smiling and hugging his wife. He is wearing a black beanie and a green sweatshirt. He and his wife are posing outside of their home."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
       </div>
     <div class="usa-card__body">
<p>
<strong>Name:</strong> Kai <br>
<strong>Age:</strong>  37  <br>
<strong>Occupation:</strong>  Medical Coder  <br>
<strong>Location:</strong>  Reno, Nevada  <br>
<strong>Disability:</strong>  Rheumatoid Arthritis and Carpal Tunnel Syndrome  <br>
<strong>Assistive Technology:</strong>  Kai uses voice recognition software and an ergonomic keyboard and mouse.  <br>
<strong>Home life:</strong>  Married with three children who keep him busy with activities  <br>
<strong>Goals: </strong> To be able to efficiently perform his job which includes a significant amount of data input. <br>
<strong>Frustrations:</strong>
<ul>
<li> Software applications that do not interoperate with voice recognition software.</li>
<li> Websites that do not work well when using voice commands.</li> 
<li> Kiosks that use sensitive touchscreens without physical buttons</li>.
</ul>


<strong>Quotes:</strong> 
<ul>
<li> “I can work so much more efficiently if product developers ensured compatibility with commonly used assistive technology.”</li>
<li> “Sensitive touchscreens require precision movement that I just don’t have at the moment."</li>
</ul>


<strong>Design Considerations:</strong>
<ul>
<li> Ensure software interoperates with assistive technology.</li> 
<li> Ensure semantic HTML and ARIA labels for form fields.</li> 
<li> Ensure all interactive elements are keyboard accessible and in logical focus order. </li>
<li> For ICT hardware, ensure operable parts include physical, tactile navigation options.</li>
</ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a8"
   >Limited Reach and Strength</button></h3>
 <div id="b-a8" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
<li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-tina.jpg"
           alt="A younger middle aged woman with short read and white hair. She is wearing a blue ruffled shirt and is sitting in a wheelchair with neck support while looking at a tablet on the desk in front of her."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
<p>
<strong>Name:</strong> Tina  <br>
<strong>Age:</strong>  46  <br>
<strong>Occupation:</strong> Office Assistant  <br>
<strong>Location:</strong> Scottsdale, Arizona  <br>
<strong>Disability:</strong> Cerebral Palsy  <br>
<strong>Assistive Technology:</strong> Tina uses voice recognition software, mouse grids when sites are structured well enough to support the software, and a wheelchair.   <br>
<strong>Home life:</strong> Married with one child in college and enjoys cooking   <br>
<strong>Goals:</strong> To use the internet and her computer with less frustration because many parts are not accessible.  <br>
<strong>Frustrations:</strong>
<ul>
<li> Websites that are not developed to operate with voice recognition software. </li>
<li> When links are not identifiable.</li> 
<li> Physical accessibility of interactive ICT hardware, because using a wheelchair in some places can be difficult or impossible.</li>
</ul>


<strong>Quotes: </strong>
<ul>
<li> “I get so frustrated when voice recognition doesn't allow me to independently complete tasks because someone did not code the page for accessibility.” </li> 
<li> “Stationary interactive check in tablets on a tablet stand are fancy technology that is ridiculously unstable and unreachable for me when I’m using my wheelchair."</li>
</ul>
<strong>Design Considerations:</strong>
<ul>
<li> Ensure semantic HTML and ARIA labels for form fields.</li> 
<li> Ensure all interactive elements are keyboard accessible and in logical focus order. </li> 
<li>Ensure hardware meets all requirements for operable parts.</li> 
<li>Ensure hardware is stable and will not be knocked over by a wheelchair user.</li>
</ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a9"
   >Limited Language, Cognitive, and Learning Abilities</button></h3>
 <div id="b-a9" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
<li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-sam.jpg"
           alt="A white male with a serious look on his face standing outside of a building. He is wearing black framed glasses and a suit jacket with a white collared shirt."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
       </div>
     <div class="usa-card__body">
<p>
<strong>Name:</strong> Sam  <br>
<strong>Age:</strong> 26  <br>
<strong>Occupation:</strong> Chef  <br>
<strong>Location:</strong>Dallas, Texas  <br>
<strong>Disability:</strong> Dyslexia diagnosed at 14 years old  <br>
<strong>Assistive Technology:</strong> Sam uses a piece of assistive software to help him review and create written content on his laptop. He also uses software which highlights text as it reads it out.  <br>
<strong>Home life:</strong> Single; While he loves reading, when he is reading, the letters go out of focus or move around, and he gets headaches as a result.  <br>
<strong>Goals:</strong> To be able to access more content online which is easy to read and understand.  <br>
<strong>Frustrations:</strong>
<ul>
<li> Trying to complete tasks online which involve having to take in lots of information that isn’t well structured.</li> 
<li> Sites which have large chunks of text, with moving content or automatically playing videos, annoy him.</li>
</ul>
<strong>Quote:</strong> “I don’t work well with digital clutter or distraction while trying to understand content."  <br>
<strong>Design Considerations:</strong>
<ul>
<li> Allow users to pause, stop, or hide any moving, blinking, or scrolling information that starts automatically, lasts more than 5 seconds, is presented in parallel with other content, and moving, blinking, scrolling is not essential.</li>
<li> Ensure semantic HTML is used so that AT can read out content accurately.</li>
<li> For ICT hardware, simplify decisions on each screen for self ordering or check out.</li>
</ul>
</p></div></div></li></ul></div>


<h3 class="usa-accordion__heading">
   <button
     type="button"
     class="usa-accordion__button"
     aria-expanded="false"
     aria-controls="b-a10"
   >Photosensitive</button></h3>
 <div id="b-a10" class="usa-accordion__content usa-prose">
 <ul class="usa-card-group">
<li class="usa-card flex-1">
   <div class="usa-card__container thumbnail-card">
     <div class="usa-card__body">
         <img
           src="{{site.baseurl}}/assets/images/persona-miguel.jpg"
           alt="A latino male sitting in an office chair laughing while looking at printed documents in his hand. He is wearing a white collared shirt with a black tie."
           style="width:250px;height:250px;object-fit:cover;border-radius:4px;"
         />
     </div>
     <div class="usa-card__body">
<p>
<strong>Name:</strong> Miguel  <br>
<strong>Age:</strong> 38  <br>
<strong>Occupation:</strong> Business Analyst  <br>
<strong>Location:</strong> Burlington, Vermont  <br>
<strong>Disability:</strong> Epilepsy starting five years ago after surgery, severe headaches  <br>
<strong>Assistive Technology:</strong> None  <br>
<strong>Home life:</strong> Dating and access to the digital world is very important  <br>
<strong>Goals:</strong> To use the internet on his computer or phone and not have a seizure or feel ill.  <br>
<strong>Frustrations:</strong>
<ul>
<li> Seizures that are triggered by flickering or flashing light.</li> 
<li> Certain types of visual patterns, particularly those with high contrasting colors.</li>
</ul>
<strong>Quote:</strong> “Flickering content is the most distracting content a creator can use."  <br>
<strong>Design Considerations:</strong>
<ul>
<li> Ensure ICT does not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.</li></ul>
</p></div></div></li></ul></div>
</div>


## Related Resources

* [Design and Develop]({{site.baseurl}}/develop/) 
* <a href="https://digital.gov/2023/05/19/personas-learn-how-to-discover-your-audience-understand-them-and-pivot-to-address-their-needs/" target="_blank" class="usa-link--external">Digital.gov Personas: learn how to discover your audience, understand them, and pivot to address their needs</a>
* [Technology Accessibility Playbook—Play 7: Integrate Accessibility Needs into Requirements and Design Processes]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play07/) 
* [Universal Design]({{site.baseurl}}/develop/universal-design/) 


<strong>Reviewed/Updated:</strong> September 2025
