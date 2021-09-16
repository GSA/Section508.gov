var xhr = $.ajax({
    url: "index.html",
    success: function(response)
    {
        var str = xhr.getResponseHeader("Last-Modified");
        str = new Date(str);
        var string = str.toString();
        string = string.replace("GMT-0400", "");
        string = string.replace("GMT-0500", "");
        string = string.replace("(Eastern Standard Time)", "EST");
        $("#timeupdated").html("Updated: " + string);
    }
});
var currentselection = "";
var allexceptionsapplied = false;
var isthishardware = false;
var lightgreenbackground = '';
var lightyellowbackground = '#ffffe0';
var yellow = "#FFFF00";
var capturedInputStep1Question1;
var unique_array = [];
var doineedtoredoStep2 = false;
var remaining_array = [];
var capturedICT = [];
var TempList = "";
var compare_array = [];
var arrayA = [];
var arrayB = [];
var countingICTadd = 0;
var movingnumber = 0;
var count = 0;
var numbering = 1;
var ExceptionCount = 0;
var ExceptionCount1 = 0;
var ElectronicContentCount = 0;
var SoftwareCount = 0;
var HardwareCount = 0;
var OutputHTML = "";
var counter1 = false;
var counter2 = false;
var counter3 = false;
var counter4 = false;
var Exceptionnumbernotice = false;
var OfficialCommunicationsExamplesHTML = '<style>body button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block; font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555; }</style><button onclick="window.close()">Go Back</button><p>Examples of agency communications that must conform to the Revised Section 508 Standards:</p><ul><li><strong>An emergency notification</strong> (For example:&nbsp; evacuation notifications, active shooter alerts, fire alerts, weather alerts, hazardous materials alerts, and most likely operational alerts regarding facilities availability, e.g. office closures etc.)</li><li><strong>An initial or final decision adjudicating an administrative claim or proceeding</strong>. (For example: an electronic notice or alert of an approved, denied, or pending sent to an individual regarding a claim they have made that requires a government-decision on their behalf.)</li><li><strong>An internal or external program or policy announcement. </strong>(For example:&nbsp; an electronic notification of a new or changed agency policy, or an official announcement regarding an agency program.)</li><li><strong>A notice of benefits, program eligibility, employment opportunity, or personnel action</strong>. (For example:&nbsp; an electronic notice sent to a private citizen or employee describing the government benefits they are entitled to, information on whether an individual is eligible for benefits or participation in a government program, information on status of a submission for employment, a notification of an official personnel action indicating a promotion or other action for a government employee.)</li><li><strong>A formal acknowledgement of receipt.</strong> (For example:&nbsp; an email attachment that as is used to demonstrate that an application for benefits or employment has been received.)&nbsp;</li><li><strong>A survey or questionnaire. </strong>(For example:&nbsp; a training survey, employee survey, a program survey, a questionnaire used to gather information related to gauging satisfaction with a government program.&nbsp; Includes surveys created using electronic document authoring tools &ndash; such as Microsoft Word and Adobe PDF, but also surveys created by automated survey tools.)</li><li><strong>A template or form</strong> (For example: an electronic document template used to create official agency documents, presentations, a web page template created to establish a common look and feel for a website, or an official agency form that must be completed by employees or members of the public.)</li><li><strong>Educational or training materials</strong>. (For example: interactive online training courses, electronic training materials that support online or instructor led training &ndash; such as PowerPoint Training Presentations, Worksheets, Tests, Surveys)</li><li><strong>Intranet content designed as a Web page. </strong>(This is primarily intended for html web pages distributed internally via an agency Intranet.&nbsp; Downloadable video files and documents that are distributed via these sites but do not meet any of the above categories would not fall under this category.</li></ul><p /><button onclick="window.close()">Go Back</button>';
var ICTSolicationExampleHTML = '<style>body button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block; font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555; }</style><button onclick="window.close()">Go Back</button><h1>Information and Communications Technology Examples</h1><p>The Revised 508 Standards apply to when federal departments and agencies develop, procure, maintain, or use Information and Communications Technology (ICT). ICT is defined in <a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines">Section E103.4 of the Revised 508 Standards</a> as:</p><p><em>&ldquo;Information technology and other equipment, systems, technologies, or processes, for which the principal function is the creation, manipulation, storage, display, receipt, or transmission of electronic data and information, as well as any associated content&rdquo;</em></p><p>ICT can be obtained directly as a commercially available product, or through a service deliverable that will result in the delivery of new ICT or changes to existing ICT, including:</p><ul><li>ICT that will be provided to the public &amp; internally</li><li>ICT COTS/GOTS licenses</li><li>ICT approved on the TRM</li><li>ICT proof of concepts, pilot efforts, and MVPs</li><li>ICT provided as a service (example &ndash; SaaS, PaaS)</li><li>ICT provided through open source arrangements</li><li>ICT that has an authorized 508 exception</li></ul><p>Note:&nbsp; Contract Services deliverables may result in new ICT being obtained by the agency, including:</p><ul><li>Services to develop, modify, configure, install, maintain, and host ICT</li><li>Services that produce ICT in support of other deliverables (ex. Electronic forms)</li></ul></p><h3>ICT Electronic Content Examples</h3><ul><li>Internet or Intranet websites</li><li>Electronic documents</li><li>Electronic forms</li><li>Electronic document templates</li><li>Electronic emergency notifications</li><li>Electronic surveys</li><li>Electronic reports</li><li>Electronic training materials</li><li>Multimedia (video/audio)</li><li>Interactive maps</li></ul><h3>ICT Software Examples</h3><p>Examples of software that must conform to the Revised Section 508 Standards</p><p><strong>Web, desktop, server, mobile client applications</strong></p><ul><li>Time and attendance software</li><li>Web forms/applications</li><li>Call Center Support applications</li><li>Workflow applications</li><li>Content management systems</li><li>Learning management systems</li></ul><p><strong>Electronic content and software authoring tools and platforms</strong></p><ul><li>Microsoft Office</li><li>Adobe Acrobat Professional</li><li>Adobe InDesign</li><li>PDF Generators and Converters</li><li>Graphing and Charting Programs</li></ul><p><strong>Software infrastructure</strong></p><ul><li>Operating Systems</li><li>Browsers</li><li>Systems/network administration software</li><li>Collaboration environments</li><li>Remote access software</li><li>User Authentication Software</li><li>Virtual meeting tools (e.g., VOIP, screen shares, remote meetings)</li><li>Cloud Services & Administrative/Reporting Interfaces</li></ul><p><h3>ICT Hardware Examples</h3><p>Examples of hardware that must conform to the Revised Section 508 Standards</p><ul><li>Computers &amp; laptops</li><li>Servers</li><li>Tablets</li><li>Printers and Copiers</li><li>Document Scanners</li><li>Multi-function office machines</li><li>Peripheral Equipment (ex. keyboards)</li><li>Information kiosks and transaction machines</li><li>Mobile phones</li><li>Video Teleconferencing Equipment</li><li>Video Displays & Monitors</li></ul><p /><button onclick="window.close()">Go Back</button>';
var SolicitationLanguageOverviewHTML = '<style>body button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block; font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555; }</style><button onclick="window.close()">Go Back</button><h1>Section 508 Solicitation Language Overview</h1>Text placeholder here...<p /><button onclick="window.close()">Go Back</button>';
var ARTFAQSHTML = '<style>body button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block; font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555; }</style><button onclick="window.close()">Go Back</button><h1>Frequently Asked Questions</h1><h2>When do I need to use ART?</h2><p>You may use ART when your solicitation requires information and communications technology (ICT).&nbsp;</p><p> ART  must be used to generate Section 508 Requirements language when a contract will be used to obtain information and communications technology (ICT), either directly as a commercially available product, or through a service deliverable that will result in the delivery of new ICT or changes to existing ICT.&nbsp;</p><p>Tip: Even if you are not sure whether you need to include 508 language in your solicitation, the ART Tool is designed to help you figure this out. A ten-minute investment of your time using ART can help you avoid untimely delays when attempting to obtain approval later to issue your solicitation:</p><p>Common situations include:</p><ul><li>New Solicitations</li><li>Task Orders under existing contracts (including contracts managed by other agencies)</li><li>ICT that will be provided to the public &amp; internally</li><li>ICT COTS/GOTS licenses</li><li>ICT approved on the TRM</li><li>ICT proof of concepts, pilot efforts, and MVPs</li><li>ICT provided as a service (example &ndash; SaaS, PaaS)</li><li>ICT provided through open source arrangements</li><li>ICT that has an authorized 508 exception</li><li>Services to develop, modify, configure, install, maintain, and host ICT</li><li>Services that produce ICT in support of other deliverables (ex. Electronic forms)</li></ul><h2>Do I need to have any knowledge of the Section 508 Standards to use ART?</h2><p>No. You do not need any knowledge of Section 508 to answer the questions. ART only asks you to answer questions about what technology products and services you are buying.</p><h2>How should ART be used if a 508 exception applies?</h2><p> ART will ask if any of the technology products have an authorized exception. </p><h2>How should ART be used for task and delivery order contract or agreements?</h2><p>You can use ART to create 508 language for task and delivery order contracts and agreements (e.g. blank purchase agreements, indefinite delivery/indefinite quantity agreements) when applicable section 508 requirements can be identified at the contract/agreement level.</p><p>If Section 508 requirements cannot be identified because multiple types of ICT and/or ICT services will be available for purchase under the contract or agreement, the ordering procedures for the contract/agreement must require that the section 508 requirements be identified using ART before placing any order.</p><h2>Can I continue to use the 508 language from previous solicitations?</h2><p>No. DO NOT copy and paste the 508 language used in a previous solicitation. If the Section 508 language in your solicitation refers to&nbsp;Electronic Information Technology (EIT), it will be out of date.&nbsp;</p><p>Continued use of the old language runs the risk of introducing ambiguity into your solicitation and resulting contract.&nbsp;</p><p>The new 508 language generated by <a href="https://section508.gov/art">ART</a> provides:</p><ul><li>Tailored requirements based on the type of technology products and services being procured.</li></ul><h2>How was the ART Tool created?</h2><ul><li> The language and business logic were based on recommendations established through a joint effort by the Federal CIO Council Accessibility Community of Practice, the US Access Board, and the General Services Administration to provide government-wide guidance on how to implement the Revised 508 standards.</li></ul><h2>Where do I go for assistance with using ART?</h2> <p><strong>For help using ART</strong> <br /> <a href=\'mailto:Section.508@gsa.gov\' class=\'mailto\'>Section.508@gsa.gov </a> <br /> <p><strong>For help understanding the Section 508 requirements </strong><br />contact your <a href="https://www.section508.gov/tools/coordinator-listing" target="_blank"><u> Section 508 Program Manager</p></u></a></p></div><p /><button onclick="window.close()">Go Back</button>';
var Requirements508InfoHTML = '<style>body button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block; font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555; }</style><button onclick="window.close()">Go Back</button><h2>When do I need to include Section 508 requirements in my solicitation?</h2> <p>You must include Section 508 requirements in your statement of work when your solicitation requires the purchase of information and communications technology (ICT)</a>. &nbsp;</p><p>Common situations include:</p><ul><li>New Solicitations</li><li>Task Orders under existing contracts (including contracts managed by other agencies)</li><li>ICT that will be provided to the public &amp; internally</li><li>ICT COTS/GOTS licenses</li><li>ICT approved on the TRM</li><li>ICT proof of concepts, pilot efforts, and MVPs</li><li>ICT provided as a service (example &ndash; SaaS, PaaS)</li><li>ICT provided through open source arrangements</li><li>Services to develop, modify, configure, install, maintain, and host ICT</li><li>Services that produce ICT in support of other deliverables (ex.&nbsp; Electronic forms)&nbsp;</li></ul></p><button onclick="window.close()">Go Back</button>';
var Requirement508OverviewPageHTML = '<style>body button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block;font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555; }</style><button onclick="window.close()">Go Back</button><h2>Guide to Section 508 requirements generated by ART</h2> <p> The purpose of this guide is to introduce you to the Section 508 requirements and instructions on the output generated by the Accessibility Requirements Tool (ART).</p><h3>In ART, the following updates were made to the Section 508 requirements output:</h3></p><ul><li>Added Section 508 Deliverables Section 508 recommended solicitation language</li><li> Deleted Instructions to Offerors and Acceptance Criteria Sections</li><li> Revised requirements related to contractor validation for 508 conformance</li><li>Added requirements for cloud services, kiosks, and hardware</li></ul></p> <p>Review this document to become familiar with the potential Section 508 requirements that may apply to your solicitation for technology products and services.</p> <h3> ART Output: </h3><p><ul> <li>Section 508 Solicitation Language Instructions</li><li>Section 508 Introductory Paragraphs </li><li>Section 508 Requirements for Products </li><li>Section 508 Requirements for Services </li><li>Section 508 Deliverables</li></ul></p>  <h2>Section 508 Solicitation Language Instructions Generated by ART</h2><p> The first section of the output is the” Instructions to Procurement Officials”. These instructions will always be provided in the output generated by ART. The instructions explain how the remaining output should be included in the solicitation. These instructions are not to be copied into the solicitation.Instructions to Procurement Officials<h2></p><h3>Instructions</h3><p> <ul><li>Ensure this entire ART output is shared with the Contracting Official.<li>If you copied and pasted Section 508 language from an earlier contract or solicitation, remove this old language in its entirety and replace it with the language generated by ART.</li><li>Include the Section 508 requirements generated by ART in your Statement of Work, Performance Work Statement, or Statement of Objectives. These requirements apply to the specific technology products and services you are buying.(Do not copy the instructions into the solicitation).</li><li>Review the Section 508 requirements.</li><li>If you have any questions about the requirements, contact your section 508 Program Manager.</li> </ul> </p><p> <h3>Why is this important?</h3> </p><p> By including Section 508 requirements in the solicitation, you are ensuring potential Offerors know which Section 508 standards apply to commercially available technology products required to be offered by the vendor in their proposals, as well as requirements to ensure technology services provided will support the agency’s ability to comply with the Section 508 law.</p><p>Thank you for using the ART tool.</p> <h2>Section 508 Introductory Paragraphs</h2><p> The purpose of this section is to clearly state that the Section 508 Law and Standards apply to the technology product and service deliverables required in the solicitation. This section also clarifies that only the agency can determine whether a Section 508 exception applies (not the vendor, contractor, offeror).</p> <p> In accordance with the on-screen instructions – this section in its entirety should always be copied into the SOW, PWS, or SOO.</p><h2> Section 508 Requirements (include in the SOW, PWS, or SOO)</h2><p>Section 508 of the Rehabilitation Act (classified to 29 U.S.C. § 794d) requires that when Federal agencies develop, procure, maintain, or use information and communications technology (ICT), it shall be accessible to people with disabilities. Federal employees and members of the public with disabilities must be afforded access to and use of information and data comparable to that of Federal employees and members of the public without disabilities.</p> <p>All products, platforms and services delivered as part of this work statement that, by definition, are deemed ICT shall conform to the revised regulatory implementation of Section 508 Standards, which are located at 36 C.F.R. § 1194.1 & Appendixes A, C & D, and available at <a href> https://www.ecfr.gov/cgi-bin/text-idx?SID=e1c6735e25593339a9db63534259d8ec&mc=true&node=pt36.3.1194&rgn=div5 </a href>. In the revised regulation, ICT replaced the term electronic and information technology (EIT) used in the original 508 standards.  ICT includes IT and other equipment.</p> <h2>Section 508 Requirements related to technology products being acquired</h2><p>This section will only appear if the agency is buying technology products for which there are applicable Section 508 standards. ART will make this determination based on the answers you provided to the ART questions.</p> <p>The purpose of this section is to clearly state what Section 508 standards are applicable to each technology product. The applicability statements to point specific sections in the Section 508 standards where each individual standard is described in more detail. The section above provides the official location of the published Section 508 standards where they can get more information. After the contract is awarded, the awardee will be responsible for ensuring the technology products they provide conform to the applicable Section 508 standards.</p> <p> In accordance with the on-screen instructions – if this section appears in the output generated by ART it should always be copied in its entirety into the SOW, PWS, or SOO.</p><h2> 1.1 Section 508 Requirements for Technology Products (include in the SOW, PWS, or SOO)</h2><ul> <li>Section 508 applicability to Information and Communications Technology (ICT): Sample IT Solution<ul> <li> Applicable Functional Performance Criteria: All functional performance criteria in Chapter 3 apply to when using an alternative design or technology that results in substantially equivalent or greater accessibility and usability by individuals with disabilities than would be provided by conformance to one or more of the requirements in Chapters 4 and 5 of the Revised 508 Standards, or when Chapters 4 or 5 do not address one or more functions of ICT.</li> <li>Applicable 508 requirements for electronic content features and components (including but not limited to Internet and Intranet website; Electronic documents; Electronic forms; Electronic document templates; Electronic emergency notifications; Electronic surveys; Electronic reports; Electronic training materials; Multi-media (video/audio); Interactive maps): All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205.</li><li>Applicable 508 requirements for software features and components (including but not limited to Web, desktop, server, mobile client applications; Electronic content and software authoring tools and platforms; Software infrastructure; Service Offerings): All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria, 502 Interoperability with Assistive Technology, 503 Application, 504 Authoring Tools</li><li>Applicable 508 requirements for hardware features and components (including but not limited to Computers & laptops; Servers; Printers and Copiers): All requirements in Chapter 4 apply</li><li> Applicable 508 requirements for support services and documentation: All requirements in Chapter 6 apply </li> </ul></li></ul> <h2>Section 508 Requirements related to technology services being acquired</h2><p>The requirements in this section will only appear if the agency is buying technology services that will produce deliverables that must conform to the Section 508 standards. ART will determine which requirements apply based on the answers you provided to the ART questions.</p><p>The purpose of this section is to clearly state what contractors must do to ensure Section 508 compliance throughout the life of the contract.</p><p>After the contract is awarded, the awardee will be responsible for ensuring these requirements are met.</p><p> In accordance with the on-screen instructions – if this section appears in the output generated by ART it should always be copied in its entirety into the SOW, PWS, or SOO.</p><h3> 1.2 Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h3> Applies when modifying, installing, configuring, integrating or maintaining technology.<p> <h3>Purpose of the following requirements:</h3> Ensure contractors do not reduce the level of accessibility already achieved when modifying, installing, configuring, integrating or maintaining information and communications technology (ICT) that the agency already owns or is procured through a solicitation.When providing installation, configuration or integration services for ICT, the Contractor shall not reduce the original ICT item’s level of Section 508 conformance prior to the services being performed.When modifying, installing, configuring or integrating commercially available or government-owned ICT, the Contractor shall not reduce the original ICT Item’s level of Section 508 conformance.When providing maintenance upgrades, substitutions, and replacements to ICT, the Contractor shall not reduce the original ICT’s level of Section 508 conformance prior to upgrade, substitution or replacement. The agency reserves the right to request an Accessibility Conformance Report (ACR) for proposed upgrades, substitutions and replacements prior to acceptance. The ACR should be created using the Voluntary Product Accessibility Template Version 2.2 508 (or successor versions).The template can be located at <a href="https://www.itic.org/policy/accessibility/vpat"> https://www.itic.org/policy/accessibility/vpat </a>  applies to Cloud Services.</p><p> <h3> Purpose of the following requirements:</h3> Ensure technology services provided through the cloud (for example: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS) or other cloud services) conform to the applicable Section 508 standards.When providing Platform as a Service (PaaS) or Software as a Service (SaaS), the contractor shall ensure services conform to the applicable Section 508 standards (including the requirements in Chapter 5 for software and WCAG Level A and AA Level 2.0 success criteria for web and software.  When the requirements in Chapter 5 do not address one or more software functions, the Contractor shall ensure conformance to the Functional Performance Criteria specified in Chapter 3.)  The agency reserves the right to request an Accessibility Conformance Report (ACR) for PaaS and SaaS offerings. The ACR shall be created using the Voluntary Product Accessibility Template Version 2.2 508 (or successor versions). The template can be located at https://www.itic.org/policy/accessibility/vpat.When providing cloud hosting services (Infrastructure as a Service, Platform as a Service, Software as a Service, etc.) the Contractor shall ensure user administrative screens, dashboards and portals used to configure and monitor cloud services conform to the applicable Section 508 standards.The Contractor shall ensure cloud hosting services do not reduce the level of Section 508 conformance for ICT migrated to the cloud hosting environment.Applies to contractor services to develop or modify technology. </p><p> <h3> Purpose of the following requirements:</h3> Ensure potential offerors are aware what Section 508 standards apply to the deliverables in the contract, and the agency’s requirement for the contractor to ensure their deliverables fully conform to the applicable Section 508 standards. Included with this expectation is a requirement for the contractor to validate their deliverables using agency approved Section 508 test conformance processes.</p><p> These requirements are supported through Section 508 deliverables that appear later in the output, including Section 508 Test Plans, Section 508 Test Results, and Accessibility Conformance Reports to document Section 508 conformance claims for deliverables. Contracting Officer should require these deliverables prior to contract acceptance. When issues arise, the Contracting Officer should reach out to their Section 508 Manager for guidance on risk mitigation and remediation.</p><p>When developing or modifying ICT, the Contractor is required to validate ICT deliverables for conformance to the applicable Section 508 requirements. Validation shall occur on a frequency that ensures Section 508 requirements is evaluated within each iteration and release that contains user interface functionality.</p><p>When developing or modifying web based and electronic content components, except for electronic documents and non-fillable forms provided in a Microsoft Office or Adobe PDF format, the Contractor shall demonstrate conformance to the applicable Section 508 standards (including WCAG 2.0 Level A and AA Success Criteria). </p><p>When developing or modifying electronic documents and non-fillable forms provided in a Microsoft Office or Adobe PDF format, the Contractor shall demonstrate conformance to the applicable Section 508 standards (including WCAG Level A and AA Level 2.0 Success Criteria).When developing or modifying ICT deliverables that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or when the capability is provided to enable end users to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.), the Contractor shall demonstrate the ability to ensure electronic content outputs conform to the applicable Section 508 standards (including WCAG 2.0 Level A and AA Success Criteria).</p><p>When developing or modifying software functions of ICT, the Contractor shall demonstrate conformance to the applicable Section 508 standards (including the requirements in Chapter 5 and WCAG 2.0 Level A and AA Success Criteria).  When the requirements in Chapter 5 do not address one or more software functions, the Contractor shall demonstrate conformance to the Functional Performance Criteria specified in Chapter 3. The Contractor shall use a test process capable of validating conformance to all applicable Section 508 standards for software functionality delivered pursuant to this contract. When developing or modifying hardware components of ICT, including closed systems (for example – kiosks), the Contractor shall demonstrate conformance to the applicable Section 508 standards (including the Chapter 4 hardware requirements).  Where the requirements in Chapters 4 do not address one or more functions of ICT, the Contractor shall demonstrate conformance to the Functional Performance Criteria specified in Chapter 3.  The Contractor shall use a test process capable of validating conformance to all applicable Section 508 standards for hardware functionality delivered pursuant to this contract.Applies to Contractor Personnel</p><p> <h3> Purpose of the following requirement:</h3> Ensure potential offerors are aware that contractor personnel assigned to the contract must have the knowledge, skills and abilities to perform the work required to meet the Section 508 requirements.</p><p> Contractor personnel shall possess the knowledge, skills and abilities necessary to address the accessibility requirements in this work statement.</p> <button onclick="window.close()">Go Back</button>';

var ICTSolicationExampleHardwareHTML = '<style>body button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block; font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555; }</style><button onclick="window.close()">Go Back</button><h1>Information and Communications Technology Examples</h1><p>The Revised 508 Standards apply to when federal departments and agencies develop, procure, maintain, or use Information and Communications Technology (ICT). ICT is defined in <a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines">Section E103.4 of the Revised 508 Standards</a> as:</p><p><em>&ldquo;Information technology and other equipment, systems, technologies, or processes, for which the principal function is the creation, manipulation, storage, display, receipt, or transmission of electronic data and information, as well as any associated content&rdquo;</em></p><h3>ICT Hardware Examples</h3><p>Examples of hardware that must conform to the Revised Section 508 Standards</p><ul><li>Computers &amp; laptops</li><li>Servers</li><li>Tablets</li><li>Printers and Copiers</li><li>Document Scanners</li><li>Multi-function office machines</li><li>Peripheral Equipment (ex. keyboards)</li><li>Information kiosks and transaction machines</li><li>Mobile phones</li></ul><p /><button onclick="window.close()">Go Back</button>';
var ICTSolicationExampleSoftwareHTML = '<style>body button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block; font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555; }</style><button onclick="window.close()">Go Back</button><h1>Information and Communications Technology Examples</h1><p>The Revised 508 Standards apply to when federal departments and agencies develop, procure, maintain, or use Information and Communications Technology (ICT). ICT is defined in <a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines">Section E103.4 of the Revised 508 Standards</a> as:</p><p><em>&ldquo;Information technology and other equipment, systems, technologies, or processes, for which the principal function is the creation, manipulation, storage, display, receipt, or transmission of electronic data and information, as well as any associated content&rdquo;</em></p><h3>ICT Software Examples</h3><p>Examples of software that must conform to the Revised Section 508 Standards</p><p><strong>Web, desktop, server, mobile client applications</strong></p><ul><li>Time and attendance software</li><li>Web forms/applications</li><li>Call Center Support applications</li><li>Workflow applications</li><li>Content management systems</li><li>Learning management systems</li></ul><p><strong>Electronic content and software authoring tools and platforms</strong></p><ul><li>Microsoft Office</li><li>Adobe Acrobat Professional</li><li>Adobe InDesign</li><li>PDF Generators and Converters</li><li>Graphing and Charting Programs</li></ul><p><strong>Software infrastructure</strong></p><ul><li>Operating Systems</li><li>Browsers</li><li>Systems/network administration software</li><li>Collaboration environments</li><li>Remote access software</li><li>User Authentication Software</li><li>Virtual meeting tools (e.g., VOIP, screen shares, remote meetings)</li><li>Cloud Services & Administrative/Reporting Interfaces</li></ul><p /><button onclick="window.close()">Go Back</button>';
var addICTbuttonHTML = '<button type="button" id="addICTbutton" onClick="addICTInput()">Add</button>';
var addICThtml = document.createElement('div');
addICThtml.setAttribute("id", "addICTdiv");
addICThtml.innerHTML = '<hr /><p class="ictdesc">Note that authorized 508 exceptions apply to specific ICT.&nbsp; If your solicitation contains ICT that is only partially covered by an exception, you must enter one name for the ICT that is covered, and one name for the ICT that is not covered.<br /><br />If you choose to group more than one ICT items under a single generic name (for example &ndash; XYZ system &ndash; which includes COTS software and customization. software development, electronic content provided through the tool &ndash; such as forms and documents) &ndash; make sure you address all of the subsequent questions for all of the ICT covered under the generic title you provide.&nbsp;</p><div id="dynamicInput"><form method="POST"><fieldset><legend>Please list items or deliverables that contain ICT. You may add more than one ICT item. You may also use one name for multiple ICT items providing an overall solution (for example: Security Equipment). </legend><label for="capturedICTfield">  <input type="text" id="capturedICTfield" name="capturedICT[]" class="capturedICTclass"> <span>' + addICTbuttonHTML + '</span>  </label> </fieldset> </form>';

var Step1ICTInputHTML = document.createElement('div');
Step1ICTInputHTML.innerHTML = '<div class="module"><ol class="custom-bullet custom-bullet-b" id="ICTList"></ol></div>';
var Step1Question1HTML = document.createElement('div');
Step1Question1HTML.innerHTML = '<div id="Step1Q1Error" class="error"></div><div id="Step1Question1"><div class="ictdesc">ICT includes web and non-web based software, websites, electronic content (including multi-media content and electronic documents, surveys, forms, templates, publications, reports, etc.), and computer hardware and telecommunications equipment. (see <a href="javascript:ICTSolicationsExample()">ICT definitions and more examples</a>)<br /><br /><p>Please identify all ICT to be acquired under a new or existing contract or agreement, either directly as a commercially available product, or through a service deliverable that will result in the delivery of new ICT or changes to existing ICT.</p></div><fieldset> <legend>Please check all that apply: </legend>  <input class="Step1Q1Class" id="Step1Q1-0" type="checkbox" name="Step1Q1[]" value="ICTproducts" onclick="Step1Q1Checkboxes()"><label for="Step1Q1-0">I am purchasing ICT Products (example: web and non-web based electronic content, software licenses, hardware)</label><br><input class="Step1Q1Class" id="Step1Q1-1" type="checkbox" name="Step1Q1[]" value="ICTservices" onclick="Step1Q1Checkboxes()"><label for="Step1Q1-1">I am purchasing ICT Services (example:  cloud services; contractor services to develop, modify, install, configure, integrate, maintain, or host ICT)</label><br><input class="Step1Q1Class" id="Step1Q1-2" type="checkbox" name="Step1Q1[]" value="ICTnone" onclick="Step1Q1CheckboxesNoneoftheAbove()"><label for="Step1Q1-2">None of the above</label></fieldset></div>';

var ExceptionsIntroHTML = document.createElement('div');
ExceptionsIntroHTML.innerHTML = '<div class="col-lg-2"><div class="NavList" id="ExceptionsNavigationBar"></div></div><div class="col-lg-11"><div class="NavPane" id="Step2NavPane"></div>';
var Step3Question = document.createElement('div');
Step3Question.innerHTML = '<hr /><div class="row" id="Step3Question6div"> <fieldset><legend>Does your acquisition require any of the following IT services? (Check all that apply)</legend><input class="Step3Q6Class" id="step3q6-0" type="checkbox" name="step3q6[]" value="devmodweborsoftware" onclick="Step3Answers6Checkboxes()"><label for="step3q6-0">Developing or modifying web-based content and applications (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts.</label><br><input class="Step3Q6Class" id="step3q6-11" type="checkbox" name="step3q6[]" value="devmodsoftware" onclick="Step3Answers6Checkboxes()"><label for="step3q6-11">Developing or modifying software (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts).</label><br><input class="Step3Q6Class" id="step3q6-1" type="checkbox" name="step3q6[]" value="devmoditemsasdocs" onclick="Step3Answers6Checkboxes()"><label for="step3q6-1">Developing or modifying electronic documents and forms provided in a Microsoft Office or Adobe PDF format</label><br><input class="Step3Q6Class" id="step3q6-2" type="checkbox" name="step3q6[]" value="devmodelectroniccontent" onclick="Step3Answers6Checkboxes()"><label for="step3q6-2">Developing or modifying technology that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.)</label><br><input class="Step3Q6Class" id="step3q6-10" type="checkbox" name="step3q6[]" value="hardware" onclick="Step3Answers6Checkboxes()"><label for="step3q6-10">Developing or modifying hardware, including closed systems (for example – kiosks)</label><br><input class="Step3Q6Class" id="step3q6-3" type="checkbox" name="step3q6[]" value="installconfigintegservices" onclick="Step3Answers6Checkboxes()"><label for="step3q6-3">Installation, configuration, or integration services</label><br><input class="Step3Q6Class" id="step3q6-4" type="checkbox" name="step3q6[]" value="maintenance" onclick="Step3Answers6Checkboxes()"><label for="step3q6-4">Maintenance</label><br><input class="Step3Q6Class" id="step3q6-5" type="checkbox" name="step3q6[]" value="Infrastructure as a Service (IaaS)" onclick="Step3Answers6Checkboxes()"><label for="step3q6-5">Infrastructure as a Service (IaaS)</label><br><input class="Step3Q6Class" id="step3q6-6" type="checkbox" name="step3q6[]" value="Platform as a Service (PaaS)" onclick="Step3Answers6Checkboxes()"><label for="step3q6-6">Platform as a Service (PaaS)</label><br><input class="Step3Q6Class" id="step3q6-8" type="checkbox" name="step3q6[]" value="Software as a Service (SaaS)" onclick="Step3Answers6Checkboxes()"><label for="step3q6-8">Software as a Service (SaaS)</label><br><input class="Step3Q6Class" id="step3q6-9" type="checkbox" name="step3q6[]" value="Other Cloud Services" onclick="Step3Answers6Checkboxes()"><label for="step3q6-9">Other Cloud Services</label><br><input class="Step3Q6Class" id="step3q6-7" type="checkbox" name="step3q6[]" value="noneoftheabovestep3question6" onclick="Step3Answers6CheckboxesNoneoftheAbove()"><label for="step3q6-7">None of the above</label><br></fieldset>';

var Step4Question = document.createElement('div');
Step4Question.innerHTML = '<hr /><div class="row" id="step4question7"> <div class="ictdesc">This information is used to determine whether the level of 508 conformance documentation needed for projects with high potential accessibility risks.</div><fieldset><legend>Select all that apply to the ICT deliverables in your solicitation. </legend><input class="step4q7Class" id="step4q7-0" type="checkbox" name="step4q7[]" value="public" onclick="Step4Answers7Checkboxes()"><label for="step4q7-0">Will be used by members of the public</label><br><input class="step4q7Class" id="step4q7-1" type="checkbox" name="step4q7[]" value="enterprise"><label for="step4q7-1">Will be deployed across the enterprise / component</label><br><input class="step4q7Class" id="step4q7-2" type="checkbox" name="step4q7[]" value="over1000users" onclick="Step4Answers7Checkboxes()"><label for="step4q7-2">Anticipated usage more than 1,000 employees, or more than 25 percent of employees</label><br><input class="step4q7Class" id="step4q7-3" type="checkbox" name="step4q7[]" value="mandatory" onclick="Step4Answers7Checkboxes()"><label for="step4q7-3">Employees are required to use the product </label><br><input class="step4q7Class" id="step4q7-4" type="checkbox" name="step4q7[]" value="authoringtool" onclick="Step4Answers7Checkboxes()"><label for="step4q7-4">The technology includes authoring platforms or tools that create electronic content</label><br><input class="step4q7Class" id="step4q7-5" type="checkbox" name="step4q7[]" value="emergingtech" onclick="Step4Answers7Checkboxes()"><label for="step4q7-5">The technology is new and little is known about the product’s accessibility</label><br><input class="step4q7Class" id="step4q7-6" type="checkbox" name="step4q7[]" value="noneoftheabovestep4question7" onclick="Step4Answers7CheckboxesNoneoftheAbove()"><label for="step4q7-6">None of the above</label><br></fieldset>';

var ballotx = document.createTextNode(" &#x2718");
var checkmark = document.createTextNode(" &#x2713");
var counter = 0;
var currentlocation = "";
var selectedoption = "";
String.prototype.includes = function (str)
{
    var returnValue = false;
    if(this.indexOf(str) !== -1)
    {
        returnValue = true;
    }
    
    return returnValue;
}
function ICTSolicationsExample()
{
	var detailsWindow = window.open('', '');
  
	detailsWindow.document.write(ICTSolicationExampleHTML);
	detailsWindow.focus();
	detailsWindow.document.documentElement.setAttribute('lang','en');
  var h1nstart = ICTSolicationExampleHTML.search("<h1>");
  var h1nend = ICTSolicationExampleHTML.search("</h1>");
  var titlename = ICTSolicationExampleHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | " + titlename;
detailsWindow.document.close();
}
function ARTFAQS()
{
    var detailsWindow = window.open ('', '');
    
    detailsWindow.document.write(ARTFAQSHTML);
    detailsWindow.focus();
    detailsWindow.document.documentElement.setAttribute('lang','en');
    var h1nstart = ARTFAQSHTML.search("<h1>");
  var h1nend = ARTFAQSHTML.search("</h1>");
  var titlename = ARTFAQSHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | " + titlename;
detailsWindow.document.close();
}
function SolicitationLanguageOverview()
{
    var detailsWindow = window.open ('', '');
    
    detailsWindow.document.write(SolicitationLanguageOverviewHTML);
    detailsWindow.focus();
    detailsWindow.document.documentElement.setAttribute('lang','en');
    var h1nstart = SolicitationLanguageOverviewHTML.search("<h1>");
  var h1nend = SolicitationLanguageOverviewHTML.search("</h1>");
  var titlename = SolicitationLanguageOverviewHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | " + titlename;
detailsWindow.document.close();
}
function UpdateLog()
{
  document.getElementById("myBtn").click();
}
function Requirements508Info()
{
    var detailsWindow = window.open ('', '');
    
    detailsWindow.document.write(Requirements508InfoHTML);
    detailsWindow.focus();
    detailsWindow.document.documentElement.setAttribute('lang','en');
    var h1nstart = Requirements508InfoHTML.search("<h1>");
  var h1nend = Requirements508InfoHTML.search("</h1>");
  var titlename = Requirements508InfoHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | When do I need to include Section 508 requirements in my solicitation?";
detailsWindow.document.close();
}
function Requirement508OverviewPage()
{
  var detailsWindow = window.open ('', '');
  detailsWindow.document.write(Requirement508OverviewPageHTML);
    detailsWindow.focus();
    detailsWindow.document.documentElement.setAttribute('lang','en');
    var h1nstart = Requirement508OverviewPageHTML.search("<h1>");
  var h1nend = Requirement508OverviewPageHTML.search("</h1>");
  var titlename = Requirement508OverviewPageHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | + Section 508 Solicitation Language Overview";
detailsWindow.document.close();
}

function ICTSolicationsExampleSoftware()
{
	var detailsWindow = window.open('', '');
  
	detailsWindow.document.write(ICTSolicationExampleSoftwareHTML);
	detailsWindow.focus();
	detailsWindow.document.documentElement.setAttribute('lang','en');
  var h1nstart = ICTSolicationExampleSoftwareHTML.search("<h1>");
  var h1nend = ICTSolicationExampleSoftwareHTML.search("</h1>");
  var titlename = ICTSolicationExampleSoftwareHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | " + titlename;
detailsWindow.document.close();
}
function ICTSolicationsExampleHardware()
{
	var detailsWindow = window.open('', '');
  
	detailsWindow.document.write(ICTSolicationExampleHardwareHTML);
	detailsWindow.focus();
	detailsWindow.document.documentElement.setAttribute('lang','en');
  var h1nstart = ICTSolicationExampleHardwareHTML.search("<h1>");
  var h1nend = ICTSolicationExampleHardwareHTML.search("</h1>");
  var titlename = ICTSolicationExampleHardwareHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | " + titlename;
detailsWindow.document.close();
}
function goStep2Question2()
{
    $("#Step1Q1Error").html("");
	if (document.getElementById('Step1Q1-0').checked === true || document.getElementById('Step1Q1-1').checked === true)
	{
        capturedInputStep1Question1 = "Step1Question1Yes";
        // document.getElementById("Step1Question1").style.backgroundColor = lightgreenbackground;
    		if(unique_array.length == 0)
    		{
    		    document.getElementById('body-p-0').appendChild(addICThtml);
    		}
    		else
    		{
    		    navButtons(null, "goStep2Exceptions()");
    		}
        // document.getElementById("nav").innerHTML = "";
    		var inputICTfield = document.getElementById("capturedICTfield");
    		inputICTfield.addEventListener("keypress", function(event) {
        const keyName = event.key;
        if(keyName === "Enter"){
          event.preventDefault();
          document.getElementById("addICTbutton").click();
          // $('html,body').scrollTop(document.body.scrollHeight);
        }
        else {
            }
        });
    		$('#capturedICTfield').focus();
    		$("#dynamicInput").css("background-color", lightyellowbackground);
           setTimeout(function(){$("#dynamicInput").css("background-color", "");}, 2000);
        // document.getElementById("dynamicInput").style.backgroundColor = lightyellowbackground;
        // $('html,body').scrollTop(document.body.scrollHeight);
	}
    else
    {
        Step1Question1NoButton();
    }
}
function Step1Question1NoButton()
{
	if(unique_array.length > 0)
	{
		if(confirm("All ICT items you have entered will be deleted. Do you want to continue?"))
		{
			for(i = 0; i < unique_array.length; i++)
			{
				removeName(i);
			}
			document.getElementById("Step1Question1").style.backgroundColor = lightgreenbackground;
			move(100);
			// navButtonswithExit("returnStep1ICT()", "goStep5()");
			$('#ICTList').remove();
			$('#addICTdiv').remove();
      goStep5();
			$('#dynamicInput').remove();
		}
		else
		{
			document.getElementById('Step1Question1Yes').click();
		}
	}
  else if(document.getElementById('Step1Q1-0').checked === false && document.getElementById('Step1Q1-1').checked === false && document.getElementById('Step1Q1-2').checked === false)
  {
      $("#Step1Q1Error").html("ERROR: Please answer this question first");
      $("#Step1Question1").css("background-color", lightyellowbackground);
       setTimeout(function(){$("#Step1Question1").css("background-color", "");}, 2000);
       alert("ERROR: Please answer this question first. (Error # S1Q1)");
       $("#Step1Question1").focus();
  }
  else {
    // document.getElementById("Step1Question1").style.backgroundColor = lightgreenbackground;
    // move(100);
    $("#Step1Q1Error").html("");
    goStep5();
  }
}
function goStep1()
{
  $("#body").steps("setStep", 0);
  navButtons(null, "goStep2Exceptions()");
}
function goStep3()
{

      var allexceptionsapplied = false;
      var fruits = [];
      for(i = 0; i < unique_array.length; i++)
      {
          var str = unique_array[i].replace(/\s/g, '');
          if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
          {
              fruits.push("true");
          }
          else
          {
              fruits.push("false");
          }
      }
        if(fruits.length > 0)
        {
            if(fruits.indexOf("false") < 0)
            {
                allexceptionsapplied = true;
            }
            else
            {
                allexceptionsapplied = false;
            }
        }
      var branditems = false;
      var brand = [];
      for(i = 0; i < unique_array.length; i++)
      {
          var str = unique_array[i].replace(/\s/g, '');

          if($("input[name='Step2Q31RadioButtons-"+str+"']:checked").val() == "Step2Q31Yes-"+str)
          {
            brand.push("true");
          }
          else if($("input[name='Step2Q401RadioButtons-"+str+"']:checked").val() == "Step2Q401Yes-"+str)
          {
            brand.push("true");
          }
          else if($("input[name='Step2Q51RadioButtons-"+str+"']:checked").val() == "Step2Q51Yes-"+str)
          {
            brand.push("true");
          }
          else
          {
            brand.push("false");
          }
      }
        if(brand.length > 0)
        {
            if(brand.indexOf("false") < 0)
            {
              branditems = true;
            }
            else
            {
              branditems = false;
            }
        }
      
      for(i = 0; i < unique_array.length; i++)
      {
        var SWCloud = [];
        var str = unique_array[i].replace(/\s/g, '');
        $.each($("input[name='SoftwareCloudAgreements-"+str+"']:checked"), function()
        {
          SWCloud.push($(this).val());
        });
      }
      for(i = 0; i < unique_array.length; i++)
      {
        var HWIaaS = [];
        var str = unique_array[i].replace(/\s/g, '');
        if($("input[name='Step2Q50RadioButtons-"+str+"']:checked").val() === "Step2Q50Yes-"+str)
        {
          HWIaaS.push("Yes");
        }
      }
      
      document.getElementById("body-t-2").setAttribute("href", "#body-h-2");
      $("#body").steps("setStep", 2);
      navButtons("goStep2Exceptions()", "goStep4()");
      document.getElementById('body-p-2').appendChild(Step3Question);
      if(unique_array.length === 1)
      {
            var str = unique_array[0].replace(/\s/g, '');
          if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA") // && branditems == false)
          {
            if(document.getElementById("step3q6-7").checked == false)
              {
                  document.getElementById("step3q6-7").click();
                  goStep4();
              }
              else
              {
                  goStep4();
              }
              if(document.getElementById("step4q7-6").checked == false)
              {
                  document.getElementById("step4q7-6").click();
                  goStep5();
                  return false;
                  
              }
              else
              {
                  goStep5();
                  return false;
              }
          }
      }
      else if(allexceptionsapplied == true)
      {
          if(document.getElementById("step3q6-7").checked == false)
          {
              document.getElementById("step3q6-7").click();
              goStep4();
          }
          else
          {
              goStep4();
          }
          if(document.getElementById("step4q7-6").checked == false)
          {
              document.getElementById("step4q7-6").click();
              goStep5();
              return false;
          }
          else
          {
              goStep5();
              return false;
          }
      }
      else
      {
        // if(document.getElementById("step3q6-7").checked == true)
        // {
        //     document.getElementById("step3q6-7").click();

        // }
        // if(document.getElementById("step4q7-6").checked == true)
        // {
        //     document.getElementById("step4q7-6").click();
        // }
      }
      if(document.getElementById('Step1Q1-0').checked === true && document.getElementById('Step1Q1-1').checked === false) // && branditems == false)
      {
        if(document.getElementById("step3q6-7").checked === false)
        {
            document.getElementById("step3q6-7").click();
            goStep4();
        }
        else
        {
            document.getElementById("body-t-2").click();
        }
      }
      if(document.getElementById('Step1Q1-0').checked === false && document.getElementById('Step1Q1-1').checked === true)
      {
          // goStep3();
          document.getElementById("body-t-2").click();
      }
      if(SWCloud.length > 0)
      {
        if(SWCloud.indexOf("Software as a Service (SaaS)") >= 0)
        {
          document.getElementById("step3q6-8").click();
        }
        if(SWCloud.indexOf("Platform as a Service (PaaS)") >= 0)
        {
          document.getElementById("step3q6-6").click();
        }
        if(SWCloud.indexOf("Other Cloud Services arrangement") >= 0)
        {
          document.getElementById("step3q6-9").click();
        }
      } 
      if(HWIaaS.length > 0)
      {
        if(HWIaaS.indexOf("Yes") >= 0)
        {
          document.getElementById("step3q6-5").click();
        }
      }
      if(currentselection == "RFI")
      {
        document.getElementById("step3q6-4").click();
        goStep4();
      }
}
function Step3Answers6Checkboxes()
   {
		if(document.getElementById("step3q6-0").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
		}
		if(document.getElementById("step3q6-1").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
		}
		if(document.getElementById("step3q6-2").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
		}
		if(document.getElementById("step3q6-3").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
		}
		if(document.getElementById("step3q6-4").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
		}
		if(document.getElementById("step3q6-5").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
    }
    if(document.getElementById("step3q6-6").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
    }
    if(document.getElementById("step3q6-8").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
    }
    if(document.getElementById("step3q6-9").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
    }
    if(document.getElementById("step3q6-10").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
		}
    if(document.getElementById("step3q6-11").checked == true)
		{
			document.getElementById("step3q6-7").checked = false;
		}
// 		if(document.getElementById("step3q6-6").checked == true)
// 		{
// 			document.getElementById("step3q6-7").checked = false;
// 		}

   }
      function Step3Answers6CheckboxesNoneoftheAbove()
   {
			document.getElementById("step3q6-0").checked = false;
			document.getElementById("step3q6-1").checked = false;
			document.getElementById("step3q6-2").checked = false;
			document.getElementById("step3q6-3").checked = false;
			document.getElementById("step3q6-4").checked = false;
      document.getElementById("step3q6-5").checked = false;
      document.getElementById("step3q6-6").checked = false;
      document.getElementById("step3q6-8").checked = false;
      document.getElementById("step3q6-9").checked = false;
      document.getElementById("step3q6-10").checked = false;
      document.getElementById("step3q6-11").checked = false;
   }
   function Step1Q1Checkboxes()
   {
		if(document.getElementById("Step1Q1-0").checked == true)
		{
			document.getElementById("Step1Q1-2").checked = false;
		}
		if(document.getElementById("Step1Q1-1").checked == true)
		{
			document.getElementById("Step1Q1-2").checked = false;
		}
		
    }
function Step1Q1CheckboxesNoneoftheAbove()
{
    if(document.getElementById("Step1Q1-2").checked == true)
		{
			document.getElementById("Step1Q1-0").checked = false;
			document.getElementById("Step1Q1-1").checked = false;
		}
   }
function goStep4()
{
 if($('.Step3Q6Class:checked').length == 0)
  {
    // document.getElementById('step3question6').style.backgroundColor = lightyellowbackground;
    alert("Please answer the question on Step 3");
    document.getElementById('body-t-2').click();

    return false;
  }


    var yesorno = false;
    var fruits = [];
    for(i = 0; i < unique_array.length; i++)
    {
        var str = unique_array[i].replace(/\s/g, '');
        var str1 = $("input[name='Step2Q32RadioButtons-"+str+"']:checked").val();
        var str2 = $("input[name='Step2Q33RadioButtons-"+str+"']:checked").val();
        var str3 = $("input[name='Step2Q34RadioButtons-"+str+"']:checked").val();

        if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() === "NEA")
        {
            if(document.getElementById("electroniccontentlist-11-"+str).checked == true)
            {
                if(document.getElementById("softwarelist-5-"+str).checked || document.getElementById("SoftwareCriteria-0-"+str).checked || document.getElementById("SoftwareCriteria-1-"+str).checked || document.getElementById("SoftwareCriteria-2-"+str).checked)
                {
                    if(document.getElementById("hardwarelist-10-"+str).checked == true)
                    {
                        if(document.getElementById("step3q6-7").checked == true)
                        {
                            // yesorno = true;
                            fruits.push("true");
                        }
                        else
                        {
                            // yesorno = false;
                            fruits.push("false");
                        }
                    }
                    else
                    {
                        // yesorno = false;
                        fruits.push("false");
                    }
                }
                else
                {
                    // yesorno = false;
                    fruits.push("false");
                }
            }
            else if(str1 === "Step2Q32No-"+str && str2 === "Step2Q33No-"+str && str3 === "Step2Q34No-"+str && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
            {
                fruits.push("true");
            }
            else
            {
                // yesorno = false;
                fruits.push("false");
            }
        }
        else
        {
           // yesorno = false;
            fruits.push("false");
        }
    }
    if(fruits.length > 0)
    {
        if(fruits.indexOf("false") < 0)
        {
            yesorno = true;
        }
        else
        {
            yesorno = false;
        }
    }
  if(yesorno == true)
  {
      document.getElementById("body-t-3").setAttribute("href", "#body-h-3");
    //   document.getElementById("body-t-4").removeAttribute("href");
    //   $("#body").steps("remove", 0);
    //   $("#body").steps("remove", 0);
    //   $("#body").steps("remove", 0);
    //   $("#body").steps("remove", 0);
    //   $("#body").steps("next");
      document.getElementById('body-p-3').innerHTML = "<section id='NotApplicable'><h2>Section 508 does not apply to your deliverables.</h2>You indicated that you do not have any items that include ICT in your solicitation.<p /><button onclick='location.reload()'>Exit</button></section>";
      document.getElementById('nav').innerHTML = "";
        $("#body").steps("setStep", 3);
      return false;
  }
  else {
    document.getElementById("body-t-3").setAttribute("href", "#body-h-3");
    navButtons("goStep3()", "goStep5()");
    // document.getElementById('step3question6').style.backgroundColor = "";
    $("#body").steps("setStep", 3);
    // document.getElementById('body-p-3').innerHTML = "";
    document.getElementById('body-p-3').innerHTML = '<div><hr /><div class="row" id="step4question7"> <div class="ictdesc">This information is used to determine whether the level of 508 conformance documentation needed for projects with high potential accessibility risks.</div><fieldset><legend>Select all that apply to the ICT deliverables in your solicitation. </legend><input class="step4q7Class" id="step4q7-0" type="checkbox" name="step4q7[]" value="public" onclick="Step4Answers7Checkboxes()"><label for="step4q7-0">Will be used by members of the public</label><br><input class="step4q7Class" id="step4q7-1" type="checkbox" name="step4q7[]" value="enterprise"><label for="step4q7-1">Will be deployed across the enterprise / component</label><br><input class="step4q7Class" id="step4q7-2" type="checkbox" name="step4q7[]" value="over1000users" onclick="Step4Answers7Checkboxes()"><label for="step4q7-2">Anticipated usage more than 1,000 employees, or more than 25 percent of employees</label><br><input class="step4q7Class" id="step4q7-3" type="checkbox" name="step4q7[]" value="mandatory" onclick="Step4Answers7Checkboxes()"><label for="step4q7-3">Employees are required to use the product </label><br><input class="step4q7Class" id="step4q7-4" type="checkbox" name="step4q7[]" value="authoringtool" onclick="Step4Answers7Checkboxes()"><label for="step4q7-4">The technology includes authoring platforms or tools that create electronic content</label><br><input class="step4q7Class" id="step4q7-5" type="checkbox" name="step4q7[]" value="emergingtech" onclick="Step4Answers7Checkboxes()"><label for="step4q7-5">The technology is new and little is known about the product’s accessibility</label><br><input class="step4q7Class" id="step4q7-7" type="checkbox" name="step4q7[]" value="previousversions" onclick="Step4Answers7Checkboxes()"><label for="step4q7-7">Previous versions of the technology have accessibility issues</label><br><input class="step4q7Class" id="step4q7-8" type="checkbox" name="step4q7[]" value="disabledusers" onclick="Step4Answers7Checkboxes()"><label for="step4q7-8">Specific individuals with a disability are the technology’s intended users</label><br><input class="step4q7Class" id="step4q7-6" type="checkbox" name="step4q7[]" value="noneoftheabovestep4question7" onclick="Step4Answers7CheckboxesNoneoftheAbove()"><label for="step4q7-6">None of the above</label><br></fieldset></div>';
  }

  if(currentselection == 'requirements' || currentselection == 'RFI')
  {
    document.getElementById('step4q7-6').click();
    goStep5();
  } 

  //brand name products
  // if(document.getElementById("Step1Q1-0").checked && document.getElementById("Step1Q1-1").checked == false && document.getElementById("electroniccontentlist-11-"+str).checked && document.getElementById("softwarelist-0-"+str).checked && document.getElementById("Step2Q401Yes-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
  // {
  //   // if(document.getElementById("step3q6-4").checked == false)
	// 	// {
  //   //   document.getElementById("step3q6-4").checked = true;
  //   //   document.getElementById("step3q6-7").checked = false;
  //   // }
  //   // if(document.getElementById("step4q7-6").checked == false)
  //   // {
  //   //   document.getElementById("step4q7-6").checked = true;
  //   // }
  //   // goStep5();
  // }
}
function Step4Answers7Checkboxes()
   {
		if(document.getElementById("step4q7-0").checked == true)
		{
			document.getElementById("step4q7-6").checked = false;
		}
		if(document.getElementById("step4q7-1").checked == true)
		{
			document.getElementById("step4q7-6").checked = false;
		}
		if(document.getElementById("step4q7-2").checked == true)
		{
			document.getElementById("step4q7-6").checked = false;
		}
		if(document.getElementById("step4q7-3").checked == true)
		{
			document.getElementById("step4q7-6").checked = false;
		}
		if(document.getElementById("step4q7-4").checked == true)
		{
			document.getElementById("step4q7-6").checked = false;
		}
		if(document.getElementById("step4q7-5").checked == true)
		{
			document.getElementById("step4q7-6").checked = false;
		}
    if(document.getElementById("step4q7-7").checked == true)
		{
			document.getElementById("step4q7-6").checked = false;
		}
    if(document.getElementById("step4q7-8").checked == true)
		{
			document.getElementById("step4q7-6").checked = false;
		}

   }
      function Step4Answers7CheckboxesNoneoftheAbove()
   {
			document.getElementById("step4q7-0").checked = false;
			document.getElementById("step4q7-1").checked = false;
			document.getElementById("step4q7-2").checked = false;
			document.getElementById("step4q7-3").checked = false;
			document.getElementById("step4q7-4").checked = false;
			document.getElementById("step4q7-5").checked = false;
      document.getElementById("step4q7-7").checked = false;
      document.getElementById("step4q7-8").checked = false;
   }
function goStep5()
{
  var noapplicabilitytrueorfalse = false;
  if(document.getElementById('Step1Q1-2').checked === true)
  {
      document.getElementById("body-t-1").setAttribute("href", "#body-h-1");
      document.getElementById("body-t-0").removeAttribute("href");
      $("#body").steps("remove", 0);
      $("#body").steps("remove", 0);
      $("#body").steps("remove", 0);
      $("#body").steps("remove", 0);
    //   $("#body").steps("next");
      $("#body").steps("setStep", 1);
      document.getElementById('body-p-1').innerHTML = "<section id='NotApplicable'><h2>Section 508 does not apply to your deliverables.</h2>You indicated that you do not have any items that include ICT in your solicitation.<p /><button onclick='location.reload()'>Exit</button></section>";
      document.getElementById('nav').innerHTML = "";
        // $("#body").steps("setStep", 1);
      return false;
  }
  else if(noapplicabilitytrueorfalse === true)
  {
    document.getElementById("body-t-1").setAttribute("href", "#body-h-1");
      document.getElementById("body-t-0").removeAttribute("href");
      $("#body").steps("remove", 0);
      $("#body").steps("remove", 0);
      $("#body").steps("remove", 0);
      $("#body").steps("remove", 0);
      $("#body").steps("next");
      document.getElementById('body-p-1').innerHTML = "<section id='NotApplicable'><h2>Section 508 does not apply to your deliverables.</h2>You indicated that you do not have any items that include ICT in your solicitation.<p /><button onclick='location.reload()'>Exit</button></section>";
      document.getElementById('nav').innerHTML = "";
      return false;
  }
  else {
        document.getElementById("body-t-4").setAttribute("href", "#body-h-4");
        if($('.step4q7Class:checked').length == 0)
        {
          document.getElementById('step4question7').style.backgroundColor = lightyellowbackground;
          alert("Please answer the question on Step 4");
          document.getElementById('body-t-3').click();
          return false;
        }
        else if(currentselection == 'requirements')
        {
          $("#body").steps("setStep", 4);
          document.getElementById('nav').innerHTML = "";
          document.getElementById('step4question7').style.backgroundColor = "";
          document.getElementById('body-p-4').innerHTML = "<hr><h2>Generate Applicable Section 508 Standards Report</h2><p>This list of applicable 508 standards is only provided to assist with project planning, market research, and alternatives analysis.  By selecting ok, you acknowledge that this language will not be used for solicitation purposes.</p><p><button onclick='write508Standards()'>Generate Applicable Section 508 Standards Report</button></p><hr><p>Thank you for using the ART tool.</p> <p><strong>For help using ART:</strong><br/><a href='mailto:Section.508@gsa.gov' class='mailto'>Section.508@gsa.gov </a> <br /> <p><strong>For help understanding the Section 508 requirements </strong><br /> contact your <a href='https://www.section508.gov/tools/coordinator-listing' target='blank'> <u> Section 508 Program Manager</u></a></p> <button onclick='location.reload()'>Exit</button>";
          document.getElementById('nav').innerHTML = "";
        }
        else if(currentselection == 'marketresearch')
        {
          $("#body").steps("setStep", 4);
          document.getElementById('nav').innerHTML = "";
          document.getElementById('step4question7').style.backgroundColor = "";
          document.getElementById('body-p-4').innerHTML = "<hr><h2>Generate list of applicable Section 508 Standards for commercially available products</h2><p>Use this resource to help determine what Section 508 standards apply to commercially available technology products.&nbsp; This information can be helpful with evaluating Accessibility Conformance Reports (ACRs) provided by vendors.</p><p>This information can also be helpful with</p><ul><li>Developing user stories</li><li>Developing test plans</li><li>Selecting Section 508 testing tools</li></ul><button id='508standardsbutton' onclick='write508Standards()'>Generate Applicable Section 508 Standards</button><p><hr><p />Thank you for using the ART tool.<p><strong>For help using ART</strong> <br/><a href='mailto:Section.508@gsa.gov' class='mailto'>Section.508@gsa.gov </a><br /><p><strong>For help understanding the Section 508 requirements </strong><br />contact your <a href='https://www.section508.gov/tools/coordinator-listing'><u> Section 508 Program Manager</p></u></a></p><hr><button onclick='location.reload()'>Exit</button>";
          document.getElementById('nav').innerHTML = "";
        }
        else if(currentselection == 'RFI')
        {
          $("#body").steps("setStep", 4);
          document.getElementById('nav').innerHTML = "";
          document.getElementById('step4question7').style.backgroundColor = "";
          document.getElementById('body-p-4').innerHTML = "<hr><p><h2>Generate Section 508 Language for Requests for Information (RFI)</h2><p>Use this resource to help with obtaining Section 508 information on technology products and services from potential offerors.</p><button id='508RFIbutton' onclick='write508RFI()'>Generate Section 508 RFI Language</button><hr><p />Thank you for using the ART tool.<p><strong>For help using ART</strong><br/> <a href='mailto:Section.508@gsa.gov' class='mailto'>Section.508@gsa.gov </a> <br /> <p><strong>For help understanding the Section 508 requirements </strong><br />contact your <a href='https://www.section508.gov/tools/coordinator-listing' target='_blank'><u> Section 508 Program Manager</p></u></a> </p> <hr> <button onclick='location.reload()'>Exit</button>";
          // <button onclick='writeRequirements()'>Generate Section 508 Requirements List</button>
          document.getElementById('nav').innerHTML = "";
        }
        else if(currentselection == 'solication')
        {
          $("#body").steps("setStep", 4);
          document.getElementById('nav').innerHTML = "";
          document.getElementById('step4question7').style.backgroundColor = "";
          document.getElementById('body-p-4').innerHTML = "<hr><h2>Section 508 Requirements for Your Solicitation</h2><p>For help with understanding these requirements, refer to the <a href='https://assets.section508.gov/files/ART+User+Guide.pptx' target='_blank'>Section 508 Solicitation Language Overview.</a></p><p><strong><u>Instructions</u></strong></p><ol><li>Ensure this entire ART output is shared with the Contracting Official.</li><li>If you copied and pasted Section 508 language from an earlier contract or solicitation, remove this old language in its entirety and replace it with the language generated by ART.</li><li>Include the Section 508 requirements generated by ART in your Statement of Work, Performance Work Statement, or Statement of Objectives.These requirements apply to the specific technology products and services you are buying.&nbsp;&nbsp;(<em>do not copy the instructions into the solicitation</em>).</li><li>Review the Section 508 requirements.If you have any questions about the requirements, contact your <a href='https://www.section508.gov/tools/coordinator-listing' target='_blank'><u>Section 508 Program Manager.</u></a></li></ol><p><strong><u>Why is this important?</u></strong></p><p>By including Section 508 requirements in the solicitation, you are ensuring potential Offerors know which Section 508 standards apply to commercially available technology products required to be offered by the vendor in their proposals, as well as requirements to ensure technology services provided will support the agency&rsquo;s ability to comply with the Section 508 law.</p><button id='508contractbutton' onclick='writeContractLanguage()'>Generate Section 508 Requirements</button><hr><p>Thank you for using the ART tool.</p><p><strong>For help using ART</strong><br/><a href='mailto:Section.508@gsa.gov' class='mailto'>Section.508@gsa.gov</a><br/></p><p><strong>For help understanding the Section 508 requirements </strong><br/>contact your <a href='https://www.section508.gov/tools/coordinator-listing' target='_blank'><u> Section 508 Program Manager</u></a></p><hr><button onclick='location.reload()'>Exit</button>";

          document.getElementById('nav').innerHTML = "";
        }
    }
  }
function navButtons(back, next, exit)
{
  if(next == null && exit == null)
  {
    return document.getElementById("nav").innerHTML = '<div class="prevButton"><button onclick="' + back + '">Previous</button></div>';
  }
  if(back == null && next == null)
  {
    return document.getElementById("nav").innerHTML = '<div class="prevButton"><button onclick="reloadPage()">Exit</button></div>';
  }
  if(back == null && next != null)
  {
    return document.getElementById("nav").innerHTML = '<div class="prevButton"><button onclick="reloadPage()">Exit</button></div><div class="nextButton"><button class="nextButton" onclick=' + next + '>Next</button></div>';
  }
  if(exit == null)
  {
    return document.getElementById("nav").innerHTML = '<div class="prevButton"><button onclick="' + back + '">Previous</button></div><div class="nextButton"><button class="nextButton" onclick=' + next + '>Next</button></div>';
  }
}
function addICTInput()
{
	move(7);
	document.getElementById('body-p-0').appendChild(Step1ICTInputHTML);
	var capturedInput = document.getElementById('capturedICTfield').value;
	var list = document.getElementById('ICTList');
	if(capturedInput.length < 1)
	{
		alert("ICT text field is blank");
		document.getElementById("dynamicInput").style.backgroundColor = lightyellowbackground;
    $('#capturedICTfield').focus();
	}
	else {
	    if(capturedInput.length > 0)
	{
        var iChars = "!@#$%^&*()+=~-[]\\\';,./{}|\":<>?";
        for (var i = 0; i < capturedInput.length; i++) {
        if (iChars.indexOf(capturedInput.charAt(i)) != -1) {
        alert ("The ICT name has special characters. \nThese are not allowed.\n Please remove them and try again.");
        $('#capturedICTfield').focus();
        return false;
            }
        }
	}
		if(unique_array.indexOf(capturedInput) == -1)
		{
			unique_array.push(capturedInput);
      var str = capturedInput.replace(/\s/g, '');
      remaining_array.push(str);
  		var text = capturedInput;
  		var entry = document.createElement('li');
      entry.setAttribute('id','item'+countingICTadd);
  		entry.setAttribute('class', 'ICTListClass');
      text = text + ' <br /><button title="Delete '+text+'" onclick="removeName('+countingICTadd+')">Delete</button>';
      entry.innerHTML = text;
      countingICTadd+=1;
      list.appendChild(entry);
			$('#capturedICTfield').val("");
			$('#capturedICTfield').focus();
			document.getElementById("dynamicInput").style.backgroundColor = lightgreenbackground;
		}
		else {
			alert('This item "'+capturedInput+'" exists!');
			document.getElementById("dynamicInput").style.backgroundColor = lightyellowbackground;
      $('#capturedICTfield').val("");
			$('#capturedICTfield').focus();
		}
  }
  if(unique_array.length > 0)
  {
      navButtons(null, 'goStep2Exceptions()', 'reloadPage()');
  }
}
function resetError(location, str)
{
  count = 0;
  $("#"+location+"-"+str).html("");
}
function goStep2Exceptions()
{
  // if(currentselection == "RFI")
  // {
  //   goStep5();
  // }
  if (document.getElementById('Step1Q1-2').checked === true)
  {
      Step1Question1NoButton();
  }
  else
  {
    document.getElementById("body-t-1").setAttribute("href", "#body-h-1");
    $("#body").steps("setStep", 1);
    $("#NotApplicable").remove();
    document.getElementById("nav").innerHTML = '<div class="prevButton"><button onclick="goStep1()">Return to Step 1</button></div><div class="nextButton"><button class="nextButton" onclick="validateStep2()">Next</button></div>';
    document.getElementById('body-p-1').appendChild(ExceptionsIntroHTML);
    var ExceptionNavList = NavListGeneration('exception');
    document.getElementById('ExceptionsNavigationBar').appendChild(ExceptionNavList);
    for(i = 0; i < unique_array.length; i++)
    {
      var str = unique_array[i].replace(/\s/g, '');
      if(currentselection == "requirements" || currentselection == "RFI")
      {
        document.getElementById('ictexceptionsradiobuttonsfor'+str+'-NEA').click();
      }
    }
  }
  validateStep2();
}
function validateStep2()
{
  if(remaining_array.length > 0)
  {
    for(i = 0; i < unique_array.length; i++)
    {
      if(currentlocation == "")
      {
        var str = remaining_array[0];
        checkStep2(str);
      }
      else {
        var str = currentlocation;
        checkStep2(str);
      }

      if(i+1 == unique_array.length)
      {
          if(isthishardware == true)
          {
              goStep3();
          }
      }
    } // end of for loop
  }
  else {
    goStep3();
  }
}
function checkStep2(str)
{
    var link = document.getElementById('ExceptionsLinkfor'+str);
    var pane = document.getElementById('ExceptionsPanefor'+str);
    if(!$("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val()) // EXCEPTION VALIDATION
    {
      var str50 = unique_array[0].replace(/\s/g, '');
       link.click();
       link.innerHTML = "✘ Exceptions";
       if(currentlocation == "")
       {
         $("#ExceptionsPanefor"+str).css("background-color", lightyellowbackground);
       setTimeout(function(){$("#ExceptionsPanefor"+str).css("background-color", "");}, 2000);
        if(ExceptionCount > 0 || str50 === str){$("#ExceptionsErrorfor-"+str).html("ERROR: Please answer this question first."); alert("ERROR: Please answer this question first. (Error # S2E)"); }
       }
        $("#ExceptionsPanefor"+str).focus();
        currentlocation = str;
        isthishardware = false;
        ExceptionCount++;
        ExceptionCount1++;
        exit;
    }
    else
    {
        ExceptionCount = 0;
    }
    if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
      {
        ExceptionCount = 0;
          ExceptionCount1 = 0;
          currentlocation = "";
          clickedbuttonsaveExceptionNumber(str);
          var index = remaining_array.indexOf(str);
          if (index !== -1) {
                remaining_array.splice(index, 1);
                if(remaining_array.length === 0)
                {
                    validateStep2();
                }
            }
        //}
      }
    else {
        resetError('ExceptionInputErrorfor', str);
        var link = document.getElementById('ExceptionsLinkfor'+str);
        var pane = document.getElementById('ExceptionsPanefor'+str);
        link.innerHTML = "✓ Exceptions";
        pane.style.backgroundColor = '';
        currentlocation = str;
        ExceptionCount1 = 0;
        ExceptionCount = 0;
        count = 0;
    }
    if (document.getElementById('Step1Q1-0').checked === false && document.getElementById('Step1Q1-1').checked === true)
    {
        
        if (index !== -1) 
        {
            if($('input[name="ElectronicContentList-'+str+'"]:checked').val() != "none")
            {
                document.getElementById("electroniccontentlist-11-"+str).click();
            }
            if($('input[name="SoftwareList-'+str+'"]:checked').val() != "none")
            {
                document.getElementById("softwarelist-5-"+str).click();
            }
            if($('input[name="HardwareList-'+str+'"]:checked').val() != "none")
            {
                document.getElementById("hardwarelist-10-"+str).click();
            }
            remaining_array.splice(index, 1);
            if(remaining_array.length > 0) 
            {
                var str = remaining_array[0];
                checkStep2(str);
            }
            else
            {
                goStep3();
            }
        }
    }
    else
    {
        if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() === "NEA") // ELECTRONIC CONTENT VALIDATION
        {
          var index = remaining_array.indexOf(str);
          if (index == -1) {
                remaining_array.push(str);
                // alert("NEA: " + remaining_array);
            }
          if(currentselection == "RFI")
          {
            document.getElementById("electroniccontentlist-11-"+str).click();
            document.getElementById("softwarelist-5-"+str).click();
            document.getElementById("hardwarelist-10-"+str).click();
            // checkStep2(str);

          }
          if(!$("input[name='ElectronicContentList-"+str+"']:checked").val())
          {
            var link = document.getElementById('ElectronicContentLinkfor'+str);
            var pane = document.getElementById('ElectronicContentPanefor'+str);
            link.innerHTML = "✘ Electronic Content";
            $("#Step2Question3div-"+str).css("background-color", lightyellowbackground);
            setTimeout(function(){$("#Step2Question3div-"+str).css("background-color", "");}, 2000);
            if(ElectronicContentCount > 1)
            {
                alert("ERROR: Please answer this question first. (Error # S2EC)");
    
            }
            pane.style.backgroundColor = '';
            link.click();
            $("#ElectronicContentPanefor"+str).focus();
            ElectronicContentCount++;
            currentlocation = str;
            isthishardware = false;
            return false;
          }
          if($("input[name='ElectronicContentList-"+str+"']:checked"))
          {
          
            if($('input[name="ElectronicContentList-'+str+'"]:checked').val() === "none")
            {
    
                var link = document.getElementById('ElectronicContentLinkfor'+str);
                var pane = document.getElementById('ElectronicContentPanefor'+str);
                link.innerHTML = "✓ Electronic Content";
                ElectronicContentCount = 0;
                // var link = document.getElementById('SoftwareLinkfor'+str);
                // link.click();
                currentlocation = str;
                // return false;
            }
            else
            {
                ElectronicContentCount = 0;
                currentlocation = str;
                // skip brand name question in Electronic Content section throughout all ART workflows
                if(currentselection != "requirements" && currentselection != "RFI" && currentselection != "solication")
                {
                  if(!$("input[name='Step2Q31RadioButtons-"+str+"']:checked").val())
                  {
                    var link = document.getElementById('ElectronicContentLinkfor'+str);
                    var pane = document.getElementById('ElectronicContentPanefor'+str);
                    link.innerHTML = "✘ Electronic Content";
                    link.click();
                    // $('html,body').scrollTop(document.body.scrollHeight);
                    alert("ERROR: Please answer this question first. (Error # S2Q31)");
                    $("#Step2Q31div-"+str).focus();
                    return false;
                  }
                }
                
                if(!$("input[name='Step2Q32RadioButtons-"+str+"']:checked").val())
                {
                  var link = document.getElementById('ElectronicContentLinkfor'+str);
                  var pane = document.getElementById('ElectronicContentPanefor'+str);
                  link.innerHTML = "✘ Electronic Content";
                  link.click();
                  document.getElementById('Step2Q32div-'+str).style.backgroundColor = lightyellowbackground;
                  currentlocation = str;
                   // $('html,body').scrollTop(document.body.scrollHeight);
                  alert("ERROR: Please answer this question first. (Error # S2Q32)");
                  $("#Step2Q32div-"+str).focus();
                  return false;
                }
                if(!$("input[name='Step2Q33RadioButtons-"+str+"']:checked").val())
                {
                  var link = document.getElementById('ElectronicContentLinkfor'+str);
                  var pane = document.getElementById('ElectronicContentPanefor'+str);
                  link.innerHTML = "✘ Electronic Content";
                  link.click();
                  document.getElementById('Step2Q33div-'+str).style.backgroundColor = lightyellowbackground;
                  currentlocation = str;
                   // $('html,body').scrollTop(document.body.scrollHeight);
                  alert("ERROR: Please answer this question first. (Error # S2Q33)");
                  $("#Step2Q33div-"+str).focus();
                  return false;
                }
                if(document.getElementById('Step2Q33No-'+str).checked)
                {
                  if(!$("input[name='Step2Q34RadioButtons-"+str+"']:checked").val())
                  {
                    var link = document.getElementById('ElectronicContentLinkfor'+str);
                    var pane = document.getElementById('ElectronicContentPanefor'+str);
                    link.innerHTML = "✘ Electronic Content";
                    link.click();
                    document.getElementById('Step2Q34div-'+str).style.backgroundColor = lightyellowbackground;
                    currentlocation = str;
                     // $('html,body').scrollTop(document.body.scrollHeight);
                    alert("ERROR: Please answer this question first. (Error # S2Q34)");
                    $("#Step2Q34div-"+str).focus();
                    return false;
                  }
                }
            } //end of else
    
            move(25);
            var link = document.getElementById('ElectronicContentLinkfor'+str);
            var pane = document.getElementById('ElectronicContentPanefor'+str);
            link.innerHTML = "✓ Electronic Content";
            ElectronicContentCount = 0;
            document.getElementById('Step2Question3div-'+str).style.backgroundColor = "";
          }
    
          if($('input[name="ElectronicContentList-'+str+'"]:checked').val() === "none")
          {
            move(25);
            var link = document.getElementById('ElectronicContentLinkfor'+str);
            var pane = document.getElementById('ElectronicContentPanefor'+str);
            link.innerHTML = "✓ Electronic Content";
            ElectronicContentCount = 0;
            document.getElementById('Step2Question3div-'+str).style.backgroundColor = "";
          }

        // ==========================
    
        if(!$("input[name='SoftwareList-"+str+"']:checked").val()) // SOFTWARE VALIDATION
         {
            var link = document.getElementById('SoftwareLinkfor'+str);
            var pane = document.getElementById('SoftwarePanefor'+str);
            link.innerHTML = "✘ Software";
            $("#Step2Question4div-"+str).css("background-color", lightyellowbackground);
            setTimeout(function(){$("#Step2Question4div-"+str).css("background-color", "");}, 2000);
            if(SoftwareCount > 1)
            {
                alert("ERROR: Please answer this question first. (Error # S2Q4)");
            }
            pane.style.backgroundColor = '';
            link.click();
            SoftwareCount++;
            currentlocation = str;
            isthishardware = false;
            $("#SoftwarePanefor"+str).focus();
            return false;
         }
         if($("input[name='SoftwareList-"+str+"']:checked").val() !== "none")
         {
          if(!$("input[name='SoftwareCriteria-"+str+"']:checked").val())
          {
            var link = document.getElementById('SoftwareLinkfor'+str);
            var pane = document.getElementById('SoftwarePanefor'+str);
            link.innerHTML = "✘ Software";
            $("#Step2Q40rowdiv-"+str).css("background-color", lightyellowbackground);
            setTimeout(function(){$("#Step2Q40rowdiv-"+str).css("background-color", "");}, 2000);
            if(SoftwareCount > 1)
            {
                alert("ERROR: Please answer this question first. (Error # S2Q40)");
            }
            pane.style.backgroundColor = '';
            link.click();
            currentlocation = str;
            isthishardware = false;
            $("#Step2Q40div-"+str).focus();
             // $('html,body').scrollTop(document.body.scrollHeight);
            return false;
          }
          if($("input[name='SoftwareCriteria-"+str+"']:checked").val() == "none" || $("input[name='SoftwareCriteria-"+str+"']:checked").val() == "I do not know")
          {
            if(!$("input[name='SoftwareCloudAgreements-"+str+"']:checked").val())
            {
              var link = document.getElementById('SoftwareLinkfor'+str);
              var pane = document.getElementById('SoftwarePanefor'+str);
              link.innerHTML = "✘ Software";
              $("#Step2Q400rowdiv-"+str).css("background-color", lightyellowbackground);
              setTimeout(function(){$("#Step2Q400rowdiv-"+str).css("background-color", "");}, 2000);
              if(SoftwareCount > 1)
              {
                  alert("ERROR: Please answer this question first. (Error # S2Q400)");
              }
              pane.style.backgroundColor = '';
              link.click();
              currentlocation = str;
              isthishardware = false;
              $("#Step2Q400div-"+str).focus();
               // $('html,body').scrollTop(document.body.scrollHeight);
              return false;
            }
            
            // skip this brand name question throughout all ART workflows
            if(currentselection != "requirements" && currentselection != "RFI" && currentselection != "solication")
            {
              if(!$("input[name='Step2Q401RadioButtons-"+str+"']:checked").val())
              {
                var link = document.getElementById('SoftwareLinkfor'+str);
                var pane = document.getElementById('SoftwarePanefor'+str);
                link.innerHTML = "✘ Software";
                link.click();
                $("#Step2Q401error-"+str).html("ERROR: Please answer this question first");
                $("#Step2Q401div-"+str).css("background-color", lightyellowbackground);
                setTimeout(function(){$("#Step2Q401div-"+str).css("background-color", "");}, 2000);
                alert("ERROR: Please answer this question first. (Error # Step2Q401)");
                document.getElementById('Step2Q401div-'+str).style.backgroundColor = lightyellowbackground;
                currentlocation = str;
              // $('html,body').scrollTop(document.body.scrollHeight);
              $("#Step2Q401rowdiv-"+str).focus();
                return false;
              }
            }
            if(document.getElementById("SoftwareCloudAgreements-3-"+str).checked || document.getElementById("SoftwareCloudAgreements-4-"+str).checked)
            {
              if(!$("input[name='Step2Q41RadioButtons-"+str+"']:checked").val())
              {
                var link = document.getElementById('SoftwareLinkfor'+str);
                var pane = document.getElementById('SoftwarePanefor'+str);
                link.innerHTML = "✘ Software";
                link.click();
                $("#Step2Q41error-"+str).html("ERROR: Please answer this question first");
                $("#Step2Q41div-"+str).css("background-color", lightyellowbackground);
                setTimeout(function(){$("#Step2Q41div-"+str).css("background-color", "");}, 2000);
                alert("ERROR: Please answer this question first. (Error # S2Q41)");
                document.getElementById('Step2Q41div-'+str).style.backgroundColor = lightyellowbackground;
                currentlocation = str;
              // $('html,body').scrollTop(document.body.scrollHeight);
              $("#Step2Q41div-"+str).focus();
                return false;
              }
              if(!$("input[name='Step2Q42RadioButtons-"+str+"']:checked").val())
              {
                var link = document.getElementById('SoftwareLinkfor'+str);
                var pane = document.getElementById('SoftwarePanefor'+str);
                link.innerHTML = "✘ Software";
                link.click();
                $("#Step2Q42error-"+str).html("ERROR: Please answer this question first");
                $("#Step2Q42div-"+str).css("background-color", lightyellowbackground);
                setTimeout(function(){$("#Step2Q42div-"+str).css("background-color", "");}, 2000);
                alert("ERROR: Please answer this question first. (Error # S2Q42)");
                document.getElementById('Step2Q42div-'+str).style.backgroundColor = lightyellowbackground;
                currentlocation = str;
                // $('html,body').scrollTop(document.body.scrollHeight);
                $("#Step2Q42div-"+str).focus();
                return false;
              }
            }
          }
          var link = document.getElementById('SoftwareLinkfor'+str);
          link.innerHTML = "✓ Software"; // end of multiple functions after Software Criteria question
         } // end of Software validation 
      
// =================================
        if(!$("input[name='HardwareList-"+str+"']:checked").val()) // HARDWARE VALIDATION -- this works
        {
          var link = document.getElementById('HardwareLinkfor'+str);
          var pane = document.getElementById('HardwarePanefor'+str);
          link.innerHTML = "✘ Hardware";
          link.click();
          $("#Step2Question5div-"+str).css("background-color", lightyellowbackground);
          setTimeout(function(){$("#Step2Question5div-"+str).css("background-color", "");}, 2000);
          if(HardwareCount > 1){alert("ERROR: Please answer this question first. (Error # S2Q5)");}
          HardwareCount++;
          currentlocation = str;
          isthishardware = false;
          $("#HardwarePanefor"+str).focus();
          return false;
        }
        else // if anything else other than none has been checked
        {
          if($("input[name='HardwareList-"+str+"']:checked").val() != "none")
          {
            if(document.getElementById("hardwarelist-1-"+str).checked == true)
            {
              if(!$("input[name='Step2Q50RadioButtons-"+str+"']:checked").val())
              {
                var link = document.getElementById('HardwareLinkfor'+str);
                var pane = document.getElementById('HardwarePanefor'+str);
                link.innerHTML = "✘ Hardware";
                link.click();
                $("#Step2Q50div-"+str).css("background-color", lightyellowbackground);
                if(HardwareCount > 1){alert("ERROR: Please answer this question first. (Error # S2Q50)");}
                HardwareCount++;
                currentlocation = str;
                isthishardware = false;
                // $('html,body').scrollTop(document.body.scrollHeight);
                $("#Step2Q50div"+str).focus();
                setTimeout(function(){$("#Step2Q50div-"+str).css("background-color", "");}, 2000);
                return false;
              }
            }
            else
            {
              // skip brand new question throughout all ART workflows
              if(currentselection != "requirements" && currentselection != "RFI" && currentselection != "solication")
              {
                if(!$("input[name='Step2Q51RadioButtons-"+str+"']:checked").val())
                {
                  var link = document.getElementById('HardwareLinkfor'+str);
                  var pane = document.getElementById('HardwarePanefor'+str);
                  link.innerHTML = "✘ Hardware";
                  link.click();
                  $("#Step2Q51div-"+str).css("background-color", lightyellowbackground);
                  if(HardwareCount > 1){alert("ERROR: Please answer this question first. (Error # S2Q51)");}
                  HardwareCount++;
                  currentlocation = str;
                  isthishardware = false;
                  // $('html,body').scrollTop(document.body.scrollHeight);
                  $("#Step2Q51div"+str).focus();
                  setTimeout(function(){$("#Step2Q51div-"+str).css("background-color", "");}, 2000);
                  return false;
                }
              }
            }
            move(40);
            var link = document.getElementById('HardwareLinkfor'+str);
            var pane = document.getElementById('HardwarePanefor'+str);
            link.innerHTML = "✓ Hardware";
            document.getElementById('Step2Question5div-'+str).style.backgroundColor = "";
            currentlocation = "";
            isthishardware = true;
            HardwareCount = 0;
            var index = remaining_array.indexOf(str);
            if (index !== -1) 
            {
              remaining_array.splice(index, 1);
            } 
          }
          else
          {
            move(40);
            var link = document.getElementById('HardwareLinkfor'+str);
            var pane = document.getElementById('HardwarePanefor'+str);
            link.innerHTML = "✓ Hardware";
            document.getElementById('Step2Question5div-'+str).style.backgroundColor = "";
            currentlocation = "";
            isthishardware = true;
            HardwareCount = 0;
            var index = remaining_array.indexOf(str);
            if (index !== -1) 
            {
              remaining_array.splice(index, 1);
            } 
          }
        }
      } // end of if after validating NEA
    }
} // end of function
function NavListGeneration(location)
{
  TempList = document.createElement('ul');
  TempList.setAttribute('id', 'navigationListID'+location);
  for(var i = 0; i < unique_array.length; i++)
  {
        if(compare_array.indexOf(unique_array[i]) == -1)
		{
			// Create the list item:
			var item = document.createElement('li');
			var a = document.createElement("a");
			// Set its contents:
			var x = unique_array[i].replace(/\s/g, '');
			a.textContent = unique_array[i];
			a.setAttribute('href', '#');
			item.appendChild(a);
			item.setAttribute("id", location+"-link-"+x);
			item.setAttribute("class", "navlinksclass");

				var substeps = document.createElement('ul');
				var subitem = document.createElement('li');
				var aa = document.createElement('a');
				aa.textContent = "Exceptions";
				aa.setAttribute('href', '#');
				aa.setAttribute('class', 'NavList');
        aa.setAttribute('id', 'ExceptionsLinkfor'+x);
        aa.setAttribute('onclick','show("'+x+'", "Exceptions")');
				subitem.appendChild(aa);
				substeps.appendChild(subitem);
				item.appendChild(substeps);

				var substeps = document.createElement('ul');
				var subitem = document.createElement('li');
				var aa = document.createElement('a');
				aa.textContent = "Electronic Content";
				// aa.setAttribute('href', '#');
				aa.removeAttribute("href");
				aa.setAttribute('class', 'NavListDisabled');
        aa.setAttribute('id', 'ElectronicContentLinkfor'+x);
        aa.setAttribute('onclick','show("'+x+'", "ElectronicContent")');
        aa.setAttribute("aria-disabled", "true");
				subitem.appendChild(aa);
				substeps.appendChild(subitem);
				item.appendChild(substeps);

				var substeps = document.createElement('ul');
				var subitem = document.createElement('li');
				var aa = document.createElement('a');
				aa.textContent = "Software";
				// aa.setAttribute('href', '#');
				aa.removeAttribute("href");
				aa.setAttribute('class', 'NavListDisabled');
        aa.setAttribute('id', 'SoftwareLinkfor'+x);
        aa.setAttribute('onclick','show("'+x+'", "Software")');
        aa.setAttribute("aria-disabled", "true");
				subitem.appendChild(aa);
				substeps.appendChild(subitem);
				item.appendChild(substeps);

				var substeps = document.createElement('ul');
				var subitem = document.createElement('li');
				var aa = document.createElement('a');
				aa.textContent = "Hardware";
				// aa.setAttribute('href', '#');
				aa.removeAttribute("href");
				aa.setAttribute('class', 'NavListDisabled');
        aa.setAttribute('id', 'HardwareLinkfor'+x);
        aa.setAttribute('onclick','show("'+x+'", "Hardware")');
        aa.setAttribute("aria-disabled", "true");
				subitem.appendChild(aa);
				substeps.appendChild(subitem);
				item.appendChild(substeps);

			// item.setAttribute('a href', '#');
			// Add it to the list:
			TempList.appendChild(item);
			generateNavPane(unique_array[i], "Exceptions");
      generateNavPane(unique_array[i], "ElectronicContent");
      generateNavPane(unique_array[i], "Software");
      generateNavPane(unique_array[i], "Hardware");
			compare_array.push(unique_array[i]);
		}
  }
  return TempList;
}
function generateNavPane(name, location)
{
  var str = name.replace(/\s/g, '');
  var createDiv = document.createElement('div');
  createDiv.setAttribute("id", location+"Panefor"+str); //ExceptionsPaneforTest
  createDiv.setAttribute("class", "page");
  createDiv.setAttribute("tabindex","-1");
  if(location === "Exceptions")
  {
      createDiv.innerHTML = '<div class="error" id="ExceptionsErrorfor-'+str+'"></div><h2>'+name+' - Exceptions Applicability</h2><fieldset> <legend>Select any of the following exceptions that may apply to this ICT deliverable.</legend><p><span style="background-color: #ffff00; font-size:125%;"><strong><span style="background-color: #ffff00;">Important:  When claiming an exception - be sure to verify your agencies policies for handling exceptions and document your exception.</span></strong></span></p><div class="line"></div><label for="ictexceptionsradiobuttonsfor'+str+'-NEA"><div class="ictdesc1">This ICT is expected to meet the applicable Revised Section 508 Standards.  No exceptions apply to this item. </div><input type="radio" value="NEA" name="ictexceptionsradiobuttonsfor'+str+'" id="ictexceptionsradiobuttonsfor'+str+'-NEA" onclick="ExceptionsClick(\''+name+'\', \''+str+'\', \'NEA\')"><span>No Exceptions Apply</span></label><div class="line"></div><label for="ictexceptionsradiobuttonsfor'+str+'-4105"><div class="ictdesc1"> The National Security Exception only applies to ICT that is related to a system that is designated and monitored as a National Security System .</div><input type="radio" value="4105" name="ictexceptionsradiobuttonsfor'+str+'" id="ictexceptionsradiobuttonsfor'+str+'-4105" onclick="ExceptionsClick(\''+name+'\', \''+str+'\', \'4105\')"><span>National Security Exception </span></label><div class="line"></div><label for="ictexceptionsradiobuttonsfor'+str+'-4109"><div class="ictdesc1">The ICT Functions Located in Maintenance and Monitoring Spaces Exception only applies to ICT that have status indicators or operable parts (i.e. physical controls), and is located in spaces that are frequented only by service personnel for maintenance, repair, or occasional monitoring of equipment (i.e., on a rack mounted in a wiring closet). This exception does not apply to software or operating systems.</div><input type="radio" value="4109" name="ictexceptionsradiobuttonsfor'+str+'" id="ictexceptionsradiobuttonsfor'+str+'-4109" onclick="ExceptionsClick(\''+name+'\', \''+str+'\', \'4109\')"><span>ICT Functions Located in Maintenance and Monitoring Spaces Exception </span></label><div class="line"></div><label for="ictexceptionsradiobuttonsfor'+str+'-4108"><div class="ictdesc1">The Fundamental Alteration Exception only applies to ICT when a fundamental alteration to the features and functions of the ICT would be required to conform to the Revised Section 508 Standards. Making these changes would result in a product that no longer meets the agency business needs.</div><input type="radio" value="4108" name="ictexceptionsradiobuttonsfor'+str+'" id="ictexceptionsradiobuttonsfor'+str+'-4108" onclick="ExceptionsClick(\''+name+'\', \''+str+'\', \'4108\')"><span>Fundamental Alteration Exception </span></label><div class="line"></div><label for="ictexceptionsradiobuttonsfor'+str+'-4107"><div class="ictdesc1">The Federal Contracts Exception only applies to ICT that is acquired by a contractor incidental to a contract. It does not apply to ICT that will be procured by the government or used by the government.</div><input type="radio" value="4107" name="ictexceptionsradiobuttonsfor'+str+'" id="ictexceptionsradiobuttonsfor'+str+'-4107" onclick="ExceptionsClick(\''+name+'\', \''+str+'\', \'4107\')"><span>Federal Contracts Exception </span></label><div class="line"></div><label for="ictexceptionsradiobuttonsfor'+str+'-4103"><div class="ictdesc1">The Undue Burden Exception only applies to the specific features or functions of the ICT that cannot be made to conform to the Revised 508 Standards without imposing an undue burden on the agency or component. An Undue Burden is a defined as significant expense or difficulty. The threshold for supporting this claim is very high and is rarely used.</div><input type="radio" value="4103" name="ictexceptionsradiobuttonsfor'+str+'" id="ictexceptionsradiobuttonsfor'+str+'-4103" onclick="ExceptionsClick(\''+name+'\', \''+str+'\', \'4103\')"><span>Undue Burden Exception </span></label><div id="exceptioninputnumber'+str+'"></div></fieldset>';
  }
  if(location === "ElectronicContent")
  {
    createDiv.innerHTML = '<h2>'+name+' - Electronic Content Applicability</h2><p class="ictdesc1">Only select the items you are obtaining, or will be provided through the ICT you are obtaining. Do not check all unless it is appropriate.</p><div class="row" id="Step2Question3div-'+str+'"><fieldset><legend>Are you purchasing any of the following <u>electronic</u> items, deliverables, or licenses? (Check all that apply)</legend><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-0-'+str+'" type="checkbox" value="Internet or Intranet website" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-0-'+str+'"> Internet or Intranet website</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-1-'+str+'" type="checkbox" value="Electronic documents" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-1-'+str+'"> Electronic documents</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-2-'+str+'" type="checkbox" value="Electronic forms" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-2-'+str+'"> Electronic forms</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-3-'+str+'" type="checkbox" value="Electronic document templates" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-3-'+str+'"> Electronic document templates</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-4-'+str+'" type="checkbox" value="Electronic emergency notifications" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-4-'+str+'"> Electronic emergency notifications</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-5-'+str+'" type="checkbox" value="Electronic surveys" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-5-'+str+'"> Electronic surveys</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-6-'+str+'" type="checkbox" value="Electronic reports" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-6-'+str+'"> Electronic reports</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-7-'+str+'" type="checkbox" value="Electronic training materials" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-7-'+str+'"> Electronic training materials</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-8-'+str+'" type="checkbox" value="Multimedia (video/audio)" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-8-'+str+'"> Multimedia (video/audio)</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-9-'+str+'" type="checkbox" value="Interactive maps" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-9-'+str+'"> Interactive maps</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-10-'+str+'" type="checkbox" value="Other" onclick="electroniccontentlistcheckboxes(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-10-'+str+'"> Other</label><br><input class="ElectronicContentClass" name="ElectronicContentList-'+str+'" id="electroniccontentlist-11-'+str+'" type="checkbox" value="none" onclick="electroniccontentlistcheckboxesna(\''+name+'\', \''+str+'\')"><label for="electroniccontentlist-11-'+str+'"> None of the above</label></fieldset></div>';

        // createDiv.innerHTML = '<h2>'+name+' - Electronic Content Applicability</h2><div class="row" id="Step2Question3div-'+str+'"><fieldset><legend>Does this item contain electronic content?</legend><div class="col-lg-10"><div class="ictdesc"><p>Electronic content is an official agency communication sent to members of the public or employees.</p><p>Examples:</p><ul><li>Internet or Intranet website</li><li>Electronic documents</li><li>Electronic forms</li><li>Electronic document templates</li><li>Electronic emergency notifications</li><li>Electronic surveys</li><li>Electronic reports</li><li>Electronic training materials</li><li>Multimedia (video/audio)</li><li>Interactive maps</li></ul></div></div><div class="col-lg-2"><label for="Step2Question3Yes-'+str+'"><input type="radio" value="Step2Question3Yes-'+str+'" name="Step2Question3RadioButtons-'+str+'" id="Step2Question3Yes-'+str+'" onclick="goStep2Question31(\''+name+'\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Question3No-'+str+'">    <input type="radio" value="Step2Question3No-'+str+'" name="Step2Question3RadioButtons-'+str+'" id="Step2Question3No-'+str+'" onclick="Step2Question3NoButton(\''+name+'\', \''+str+'\')"> <span>No</span></label></div></div></fieldset>';

    // <label for="step2question3radiobuttons-'+str+'">Does this item contain electronic content?</label><div class="ictdesc"><ul><li>Electronic content is an official agency communication sent to members of the public or employees.</li><li>Electronic content can be provided through web pages, social media sites, electronic documents, multimedia files, emails, or any other electronic format.</li><li>Interactive applications, operating systems, development platforms, and &ldquo;as a service&rdquo; offerings are not official agency communications, and therefore not electronic content (these items fall under the software category, which will be handled in the next section).</li></ul></div></div><div class="col-lg-2"> <input id="Step2Question3Yes-'+str+'" class="toggle toggle-left" name="Step2Question3RadioButtons-'+str+'" value="Step2Question3Yes-'+str+'" type="radio" onclick="goStep2Question31(\''+name+'\', \''+str+'\')"><label for="Step2Question3Yes-'+str+'" class="btn">Yes</label><input id="Step2Question3No-'+str+'" class="toggle toggle-right" name="Step2Question3RadioButtons-'+str+'" value="Step2Question3No-'+str+'" type="radio" onclick="Step2Question3NoButton(\''+name+'\', \''+str+'\')"><label for="Step2Question3No-'+str+'" class="btn">No</label></div></div>';
    // createDiv.innerHTML = '<h2>'+name+' - Electronic Content</h2><div class="row" id="Step2Question3div-'+str+'"><div class="col-lg-10"><label for="step2question3radiobuttons-'+str+'">Does this item contain electronic content?</label><div class="ictdesc"><ul><li>Electronic content is an official agency communication sent to members of the public or employees.</li><li>Electronic content can be provided through web pages, social media sites, electronic documents, multimedia files, emails, or any other electronic format.</li><li>Interactive applications, operating systems, development platforms, and &ldquo;as a service&rdquo; offerings are not official agency communications, and therefore not electronic content (these items fall under the software category, which will be handled in the next section).</li></ul></div></div><div class="col-lg-2"><input id="Step2Question3Yes-'+str+'" class="toggle toggle-left" name="Step2Question3RadioButtons-'+str+'" value="Step2Question3Yes-'+str+'" type="radio" onclick="goStep2Question31(\''+name+'\', \''+str+'\')"><label for="Step2Question3Yes-'+str+'" class="btn">Yes</label><input id="Step2Question3No-'+str+'" class="toggle toggle-right" name="Step2Question3RadioButtons-'+str+'" value="Step2Question3No-'+str+'" type="radio" onclick="Step2Question3NoButton(\''+name+'\', \''+str+'\')"><label for="Step2Question3No-'+str+'" class="btn">No</label></div></div>';
  }
  if(location === "Software")
  {
        createDiv.innerHTML = '<h2>'+name+' - Software Applicability</h2><div class="row" id="Step2Question4div-'+str+'"><div class="ictdesc">Software is comprised of applications that are deployed most commonly through web, desktop, or mobile devices. Software includes applications designed to perform, or help a user perform, specific tasks. From a Section 508 compliance perspective, the following types of software generally do not need to be included addressed below. Software that does not have an end user interface, assistive technology, mainframe software, emulators, and algorithms.</div><fieldset><legend>Are you purchasing any of the following <u>software</u> items, deliverables, or licenses? (Check all that apply) </legend><input class="SoftwareClass" name="SoftwareList-'+str+'" id="softwarelist-0-'+str+'" type="checkbox" value="Web, desktop, server, mobile client applications" onclick="softwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="softwarelist-0-'+str+'"> Web, desktop, server, mobile client applications <br><ul class="softwareexamples"><li>Time and attendance software </li><li>Web forms/applications </li><li>Call Center Support applications </li><li>Workflow applications </li><li>Content management systems </li><li>Learning management systems </li></ul></label><input class="SoftwareClass" name="SoftwareList-'+str+'" id="softwarelist-1-'+str+'" type="checkbox" value="Electronic content and software authoring tools and platforms" onclick="softwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="softwarelist-1-'+str+'"> Electronic content and software authoring tools and platforms <br><ul class="softwareexamples"><li>Microsoft Office </li><li>Adobe Acrobat Professional </li><li>Adobe InDesign </li><li>PDF Generators and Converters </li><li>Graphing and Charting Programs </li></ul></label><input class="SoftwareClass" name="SoftwareList-'+str+'" id="softwarelist-2-'+str+'" type="checkbox" value="Software infrastructure" onclick="softwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="softwarelist-2-'+str+'"> Software infrastructure <br><ul class="softwareexamples"><li>Operating Systems </li><li>Browsers </li><li>Systems/network administration software </li><li>Collaboration environments </li><li>Remote access software </li><li>User Authentication Software </li><li>Virtual meeting tools (e.g., VOIP, screen shares, remote meetings) </li></ul></label><input class="SoftwareClass" name="SoftwareList-'+str+'" id="softwarelist-4-'+str+'" type="checkbox" value="Other" onclick="softwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="softwarelist-4-'+str+'"> Other</label><br><input class="SoftwareClass" name="SoftwareList-'+str+'" id="softwarelist-5-'+str+'" type="checkbox" value="none" onclick="softwarelistcheckboxesna(\''+name+'\', \''+str+'\')"><label for="softwarelist-5-'+str+'"> None of the above</label></fieldset></div>';
  }
  if(location === "Hardware")
  {
    createDiv.innerHTML = '<h2>'+name+' - Hardware Applicability</h2><div class="row" id="Step2Question5div-'+str+'"><fieldset><legend>Are you purchasing any of the following <u>hardware</u> items, deliverables, or licenses? (Check all that apply)</legend><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-0-'+str+'" type="checkbox" value="Computers & laptops" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-0-'+str+'"> Computers & laptops</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-1-'+str+'" type="checkbox" value="Servers" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-1-'+str+'"> Servers</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-2-'+str+'" type="checkbox" value="Tablets" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-2-'+str+'"> Tablets</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-3-'+str+'" type="checkbox" value="Printers and Copiers" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-3-'+str+'"> Printers and Copiers</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-4-'+str+'" type="checkbox" value="Document scanners" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-4-'+str+'"> Document scanners</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-5-'+str+'" type="checkbox" value="Multi-function office machines" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-5-'+str+'"> Multi-function office machines</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-6-'+str+'" type="checkbox" value="Peripheral Equipment (ex. keyboards)" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-6-'+str+'"> Peripheral Equipment (ex. keyboards)</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-7-'+str+'" type="checkbox" value="Information kiosks and transaction machines" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-7-'+str+'"> Information kiosks and transaction machines</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-8-'+str+'" type="checkbox" value="Mobile phones" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-8-'+str+'"> Mobile phones</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-11-'+str+'" type="checkbox" value="Video Teleconferencing Equipment" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-11-'+str+'"> Video Teleconferencing Equipment</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-12-'+str+'" type="checkbox" value="Video Displays and Monitors" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-12-'+str+'"> Video Displays & Monitors</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-9-'+str+'" type="checkbox" value="Other" onclick="hardwarelistcheckboxes(\''+name+'\', \''+str+'\')"><label for="hardwarelist-9-'+str+'"> Other</label><br><input class="HardwareClass" name="HardwareList-'+str+'" id="hardwarelist-10-'+str+'" type="checkbox" value="none" onclick="hardwarelistcheckboxesna(\''+name+'\', \''+str+'\')"><label for="hardwarelist-10-'+str+'"> None of the above</label></fieldset></div>';

    // createDiv.innerHTML = '<h2>'+name+' - Hardware Applicability</h2><div class="row" id="Step2Question5div-'+str+'"><fieldset><legend>Does this item contain hardware?</legend><div class="col-lg-10"><div class="ictdesc"><p>Examples:</p><ul><li>Computers &amp; laptops</li><li>Servers</li><li>Tablets</li><li>Printers and Copiers</li><li>Document Scanners</li><li>Multi-function office machines</li><li>Peripheral Equipment (ex. keyboards)</li><li>Information kiosks and transaction machines</li><li>Mobile phones</li></ul></div></div><div class="col-lg-2"><label for="step2question5Yes-'+str+'"><input type="radio" value="step2question5Yes-'+str+'" name="step2question5RadioButtons-'+str+'" id="step2question5Yes-'+str+'" onclick="gostep2question51(\''+name+'\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Question5No-'+str+'">    <input type="radio" value="Step2Question5No-'+str+'" name="step2question5RadioButtons-'+str+'" id="Step2Question5No-'+str+'" onclick="step2question5NoButton(\''+name+'\', \''+str+'\')"> <span>No</span></label></div></div></fieldset>';
    // createDiv.innerHTML = '<h2>'+name+' - Hardware</h2><div class="row" id="Step2Question5div-'+str+'"><div class="col-lg-10"><div class="error" id="Step2Question5error-'+str+'"></div><label for="step2question5radiobuttons-'+str+'">Does this item contain hardware? <a href="javascript:ICTSolicationsExampleHardware()">See examples:</a></label></div><div class="col-lg-2"><input id="step2question5Yes-'+str+'" class="toggle toggle-left" name="step2question5RadioButtons-'+str+'" value="step2question5Yes-'+str+'" type="radio" onclick="gostep2question51(\''+name+'\', \''+str+'\')"><label for="step2question5Yes-'+str+'" class="btn">Yes</label><input id="step2question5No-'+str+'" class="toggle toggle-right" name="step2question5RadioButtons-'+str+'" value="step2question5No-'+str+'" type="radio" onclick="step2question5NoButton(\''+name+'\', \''+str+'\')"><label for="step2question5No-'+str+'" class="btn">No</label></div></div>';
  }
  document.getElementById('Step2NavPane').appendChild(createDiv);
  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
  }
}
function electroniccontentlistcheckboxes(name, str)
{
        if(document.getElementById("electroniccontentlist-0-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-1-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-2-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-3-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-4-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-5-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-6-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-7-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-8-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-9-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		if(document.getElementById("electroniccontentlist-10-"+str).checked == true)
		{
			document.getElementById("electroniccontentlist-11-"+str).checked = false;
		}
		goStep2Question31(name, str);
}
function electroniccontentlistcheckboxesna(name, str)
{
    if(document.getElementById("electroniccontentlist-11-"+str).checked == true)
	{
		    document.getElementById("electroniccontentlist-0-"+str).checked = false;
			document.getElementById("electroniccontentlist-1-"+str).checked = false;
			document.getElementById("electroniccontentlist-2-"+str).checked = false;
			document.getElementById("electroniccontentlist-3-"+str).checked = false;
			document.getElementById("electroniccontentlist-4-"+str).checked = false;
			document.getElementById("electroniccontentlist-5-"+str).checked = false;
			document.getElementById("electroniccontentlist-6-"+str).checked = false;
			document.getElementById("electroniccontentlist-7-"+str).checked = false;
			document.getElementById("electroniccontentlist-8-"+str).checked = false;
			document.getElementById("electroniccontentlist-9-"+str).checked = false;
			document.getElementById("electroniccontentlist-10-"+str).checked = false;
			Step2Question3NoButton(name, str);
	}
}
function softwarelistcheckboxes(name, str)
{
    if(document.getElementById("softwarelist-0-"+str).checked == true)
		{
			document.getElementById("softwarelist-5-"+str).checked = false;
		}
		if(document.getElementById("softwarelist-1-"+str).checked == true)
		{
			document.getElementById("softwarelist-5-"+str).checked = false;
		}
		if(document.getElementById("softwarelist-2-"+str).checked == true)
		{
			document.getElementById("softwarelist-5-"+str).checked = false;
		}
		// if(document.getElementById("softwarelist-3-"+str).checked == true)
		// {
		// 	document.getElementById("softwarelist-5-"+str).checked = false;
		// }
		if(document.getElementById("softwarelist-4-"+str).checked == true)
		{
			document.getElementById("softwarelist-5-"+str).checked = false;
		}
		goStep2Question40(name, str);
}
function softwarelistcheckboxesna(name, str)
{
    if(document.getElementById("softwarelist-5-"+str).checked == true)
	{
		    document.getElementById("softwarelist-0-"+str).checked = false;
			document.getElementById("softwarelist-1-"+str).checked = false;
			document.getElementById("softwarelist-2-"+str).checked = false;
			// document.getElementById("softwarelist-3-"+str).checked = false;
			document.getElementById("softwarelist-4-"+str).checked = false;
			Step2Question4NoButton(name, str);
	}
}
function SoftwareCriteriacheckboxes(name, str)
{
  if(document.getElementById("SoftwareCriteria-0-"+str).checked == true)
  {
    document.getElementById("SoftwareCriteria-3-"+str).checked = false;
    document.getElementById("SoftwareCriteria-4-"+str).checked = false;
    Step2SoftwareCriteria(name, str);
  }
  if(document.getElementById("SoftwareCriteria-1-"+str).checked == true)
  {
    document.getElementById("SoftwareCriteria-3-"+str).checked = false;
    document.getElementById("SoftwareCriteria-4-"+str).checked = false;
    Step2SoftwareCriteria(name, str);
  }
  if(document.getElementById("SoftwareCriteria-2-"+str).checked == true)
  {
    document.getElementById("SoftwareCriteria-3-"+str).checked = false;
    document.getElementById("SoftwareCriteria-4-"+str).checked = false;
    Step2SoftwareCriteria(name, str);
  }
}
function SoftwareCriteriacheckboxesna(name, str)
{
  if(document.getElementById("SoftwareCriteria-4-"+str).checked)
	{
    document.getElementById("SoftwareCriteria-0-"+str).checked = false;
    document.getElementById("SoftwareCriteria-1-"+str).checked = false;
    document.getElementById("SoftwareCriteria-2-"+str).checked = false;
    document.getElementById("SoftwareCriteria-3-"+str).checked = false;
	}
  goStep2Question400(name, str);
}
function SoftwareCriteriacheckboxesidk(name, str)
{
  if(document.getElementById("SoftwareCriteria-3-"+str).checked)
  {
    document.getElementById("SoftwareCriteria-0-"+str).checked = false;
    document.getElementById("SoftwareCriteria-1-"+str).checked = false;
    document.getElementById("SoftwareCriteria-2-"+str).checked = false;
    document.getElementById("SoftwareCriteria-4-"+str).checked = false;
  }
  goStep2Question400(name, str);
}
function SoftwareCloudAgreementscheckboxes(name, str)
{
  if(document.getElementById("SoftwareCloudAgreements-0-"+str).checked == true)
  {
    document.getElementById("SoftwareCloudAgreements-3-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-4-"+str).checked = false;
    $("input[name='Step2Q41RadioButtons-"+str+"']:checked").prop('checked', false);
    $("#Step2Q41div-"+str).remove();
    $("input[name='Step2Q42RadioButtons-"+str+"']:checked").prop('checked', false);
    $("#Step2Q42div-"+str).remove();
  }
  if(document.getElementById("SoftwareCloudAgreements-1-"+str).checked == true)
  {
    document.getElementById("SoftwareCloudAgreements-3-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-4-"+str).checked = false;
    $("input[name='Step2Q41RadioButtons-"+str+"']:checked").prop('checked', false);
    $("#Step2Q41div-"+str).remove();
    $("input[name='Step2Q42RadioButtons-"+str+"']:checked").prop('checked', false);
    $("#Step2Q42div-"+str).remove();
  }
  if(document.getElementById("SoftwareCloudAgreements-2-"+str).checked == true)
  {
    document.getElementById("SoftwareCloudAgreements-3-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-4-"+str).checked = false;
    $("input[name='Step2Q41RadioButtons-"+str+"']:checked").prop('checked', false);
    $("#Step2Q41div-"+str).remove();
    $("input[name='Step2Q42RadioButtons-"+str+"']:checked").prop('checked', false);
    $("#Step2Q42div-"+str).remove();
  }
}
function SoftwareCloudAgreementscheckboxesna(name, str)
{
  if(document.getElementById("SoftwareCloudAgreements-4-"+str).checked)
	{
    document.getElementById("SoftwareCloudAgreements-0-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-1-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-2-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-3-"+str).checked = false;
	}
  goStep2Question401(name, str);
}
function SoftwareCloudAgreementscheckboxesidk(name, str)
{
  if(document.getElementById("SoftwareCloudAgreements-3-"+str).checked)
  {
    document.getElementById("SoftwareCloudAgreements-0-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-1-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-2-"+str).checked = false;
    document.getElementById("SoftwareCloudAgreements-4-"+str).checked = false;
  }
  goStep2Question401(name, str);
}
function hardwarelistcheckboxes(name, str)
{
        if(document.getElementById("hardwarelist-0-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-1-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-2-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-3-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-4-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-5-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-6-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-7-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-8-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-9-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-11-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		if(document.getElementById("hardwarelist-12-"+str).checked == true)
		{
			document.getElementById("hardwarelist-10-"+str).checked = false;
		}
		gostep2question50(name, str);
}
function hardwarelistcheckboxesna(name, str)
{
    if(document.getElementById("hardwarelist-10-"+str).checked == true)
	{
		  document.getElementById("hardwarelist-0-"+str).checked = false;
			document.getElementById("hardwarelist-1-"+str).checked = false;
			document.getElementById("hardwarelist-2-"+str).checked = false;
			document.getElementById("hardwarelist-3-"+str).checked = false;
			document.getElementById("hardwarelist-4-"+str).checked = false;
			document.getElementById("hardwarelist-5-"+str).checked = false;
			document.getElementById("hardwarelist-6-"+str).checked = false;
			document.getElementById("hardwarelist-7-"+str).checked = false;
			document.getElementById("hardwarelist-8-"+str).checked = false;
			document.getElementById("hardwarelist-9-"+str).checked = false;
			document.getElementById("hardwarelist-11-"+str).checked = false;
			document.getElementById("hardwarelist-12-"+str).checked = false;
			step2question5NoButton(name, str);
	}
}
function gostep2question50(name, str)
{
  count = 0;
  resetError("Step2Question5error", str);
  var Step2Q50Question = document.createElement('div');
  Step2Q50Question.setAttribute("id", "Step2Q50div-"+str);
  Step2Q50Question.setAttribute("tabindex", "-1");
  Step2Q50Question.innerHTML = '<hr /><div class="row" id="Step2Q50rowdiv-'+str+'"><fieldset><legend>Will server capacity be provided through an Infrastructure as a Service (IaaS) agreement?</legend><label for="Step2Q50Yes-'+str+'"><input type="radio" onclick="goStep2Question50Yes(\''+name+'\', \''+str+'\')" value="Step2Q50Yes-'+str+'" name="Step2Q50RadioButtons-'+str+'" id="Step2Q50Yes-'+str+'"> <span>Yes</span></label><label for="Step2Q50No-'+str+'">    <input type="radio" value="Step2Q50No-'+str+'" name="Step2Q50RadioButtons-'+str+'" id="Step2Q50No-'+str+'"> <span>No</span></label>     <label for="Step2Q50IDK-'+str+'">    <input type="radio" value="Step2Q50IDK-'+str+'" name="Step2Q50RadioButtons-'+str+'" id="Step2Q50IDK-'+str+'"> <span>I do not know</span></label></fieldset></div>';
  var Step2Q50display = document.getElementById('Step2Q50div-'+str);
  
    if(document.getElementById("hardwarelist-1-"+str).checked == true)
    {
      if(!Step2Q50display)
      {
        document.getElementById('HardwarePanefor'+str).appendChild(Step2Q50Question);
        $("#Step2Q50rowdiv-"+str).css("background-color", lightyellowbackground);
        setTimeout(function(){$("#Step2Q50rowdiv-"+str).css("background-color", "");}, 2000);
        // $('html,body').scrollTop(document.body.scrollHeight);
      }
      for(x = 0; x < 12; x++)
      {
        if(x == 1 || x == 10)
        {
          continue;
        }
        if(document.getElementById("hardwarelist-"+x+"-"+str).checked)
        {
          if(currentselection != "requirements" && currentselection != "RFI" && currentselection != "solication")
          {
            gostep2question51(name, str);
          }
        }
      }
    }
    else if(currentselection != "requirements" && currentselection != "RFI" && currentselection != "solication")
    {
      var display = document.getElementById('Step2Q50div-'+str);
      if(display)
      {
        $('.Step2Q50Class-'+str).prop("checked", false);
        $("#Step2Q50div-"+str).remove();
      }
      gostep2question51(name, str);
    }
}
function goStep2Question50Yes(name, str)
{
  isthishardware = false;
  $("input[name='Step2Q51RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q51div-"+str).remove();
}
function gostep2question51(name, str)
{
  count = 0;
  resetError("Step2Question5error", str);
  var Step2Q51Question = document.createElement('div');
  Step2Q51Question.setAttribute("id", "Step2Q51div-"+str);
  Step2Q51Question.setAttribute("tabindex", "-1");
  Step2Q51Question.innerHTML = '<hr /><div class="row" id="Step2Q51rowdiv-'+str+'"><div class="ictdesc">The following question should be answered “yes” when the agency is seeking a price quote for a specific, named product(s).</div><fieldset><legend>Is this solicitation a request for quote for a specific “brand name” product only?</legend><label for="Step2Q51Yes-'+str+'"><input type="radio" value="Step2Q51Yes-'+str+'" name="Step2Q51RadioButtons-'+str+'" id="Step2Q51Yes-'+str+'" onclick="gostep2question50(\''+name+'\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Q51No-'+str+'">    <input type="radio" value="Step2Q51No-'+str+'" name="Step2Q51RadioButtons-'+str+'" id="Step2Q51No-'+str+'" onclick="gostep2question50(\''+name+'\', \''+str+'\')"> <span>No</span></label></div></fieldset>';
  var display = document.getElementById('Step2Q51div-'+str);
  if(!display)
  {
    document.getElementById('HardwarePanefor'+str).appendChild(Step2Q51Question);
    $("#Step2Q51rowdiv-"+str).css("background-color", lightyellowbackground);
    setTimeout(function(){$("#Step2Q51rowdiv-"+str).css("background-color", "");}, 2000);
    // $('html,body').scrollTop(document.body.scrollHeight);
  }
  // gostep2question50(name, str);
}
function goStep2Question40(name, str)
{
  if(document.getElementById("softwarelist-0-"+str).checked || document.getElementById("softwarelist-1-"+str).checked || document.getElementById("softwarelist-2-"+str).checked || document.getElementById("softwarelist-4-"+str).checked) // if [Web, Desktop, Server, Mobile Clients Applications] OR [Electronic Content and Software Authoring Tools] OR [Software Infrastructure] OR [Other] checkboxes are ticked
	{
          count = 0;
          resetError("Step2Question4error", str);
          var Step2Q40Question = document.createElement('div');
          Step2Q40Question.setAttribute("id", "Step2Q40div-"+str);
          Step2Q40Question.setAttribute("tabindex", "-1");
          Step2Q40Question.innerHTML = '<hr /><div class="row" id="Step2Q40rowdiv-'+str+'"><fieldset><legend>Does the software meet any of the following criteria?</legend><input class="SoftwareCriteriaClass" name="SoftwareCriteria-'+str+'" id="SoftwareCriteria-0-'+str+'" type="checkbox" value="Does not have an end user interface (i.e. user screens)" onclick="SoftwareCriteriacheckboxes(\''+name+'\', \''+str+'\')"><label for="SoftwareCriteria-0-'+str+'"> Does not have an end user interface (i.e. user screens)</label><br /><input class="SoftwareCriteriaClass" name="SoftwareCriteria-'+str+'" id="SoftwareCriteria-1-'+str+'" type="checkbox" value="Principal function is assistive technology" onclick="SoftwareCriteriacheckboxes(\''+name+'\', \''+str+'\')"><label for="SoftwareCriteria-1-'+str+'"> Principal function is assistive technology </label><br /><input class="SoftwareCriteriaClass" name="SoftwareCriteria-'+str+'" id="SoftwareCriteria-2-'+str+'" type="checkbox" value="Mainframe software or emulator" onclick="SoftwareCriteriacheckboxes(\''+name+'\', \''+str+'\')"><label for="SoftwareCriteria-2-'+str+'"> Mainframe software or emulator </label><br /><input class="SoftwareCriteriaClass" name="SoftwareCriteria-'+str+'" id="SoftwareCriteria-3-'+str+'" type="checkbox" value="I do not know" onclick="SoftwareCriteriacheckboxesidk(\''+name+'\', \''+str+'\')"><label for="SoftwareCriteria-3-'+str+'"> I do not know</label><br /><input class="SoftwareCriteriaClass" name="SoftwareCriteria-'+str+'" id="SoftwareCriteria-4-'+str+'" type="checkbox" value="none" onclick="SoftwareCriteriacheckboxesna(\''+name+'\', \''+str+'\')"><label for="SoftwareCriteria-4-'+str+'"> None of the above</label></fieldset></div>';
          var display = document.getElementById('Step2Q40div-'+str);
          if(!display)
          {
            document.getElementById('SoftwarePanefor'+str).appendChild(Step2Q40Question);
            $("#Step2Q40rowdiv-"+str).css("background-color", lightyellowbackground);
        setTimeout(function(){$("#Step2Q40rowdiv-"+str).css("background-color", "");}, 2000);
        // $('html,body').scrollTop(document.body.scrollHeight);
          }
	}
	else
	{
        $("input[name='Step2Q40RadioButtons-"+str+"']:checked").prop('checked', false);
        $("#Step2Q40div-"+str).remove();
	      goStep2Question400(name, str);
	}
}
function goStep2Question400(name, str) // Will the software be provided through any of the following types of cloud services agreements? (Check all that apply)
{
  if(document.getElementById("SoftwareCriteria-3-"+str).checked || document.getElementById("SoftwareCriteria-4-"+str).checked) // If any of the last 2 options are ticked in Software Criteria
	{
    count = 0;
    resetError("Step2Question4error", str);
    var Step2Q400Question = document.createElement('div');
    Step2Q400Question.setAttribute("id", "Step2Q400div-"+str);
    Step2Q400Question.setAttribute("tabindex", "-1");
    Step2Q400Question.innerHTML = '<hr /><div class="row" id="Step2Q400rowdiv-'+str+'"><fieldset><legend>Will the software be provided through any of the following types of cloud services agreements? (Check all that apply)</legend><input class="SoftwareCloudAgreementsClass" name="SoftwareCloudAgreements-'+str+'" id="SoftwareCloudAgreements-0-'+str+'" type="checkbox" value="Software as a Service (SaaS)" onclick="SoftwareCloudAgreementscheckboxes(\''+name+'\', \''+str+'\')"><label for="SoftwareCloudAgreements-0-'+str+'"> Software as a Service (SaaS)</label><br /><input class="SoftwareCloudAgreementsClass" name="SoftwareCloudAgreements-'+str+'" id="SoftwareCloudAgreements-1-'+str+'" type="checkbox" value="Platform as a Service (PaaS)" onclick="SoftwareCloudAgreementscheckboxes(\''+name+'\', \''+str+'\')"><label for="SoftwareCloudAgreements-1-'+str+'"> Platform as a Service (PaaS) </label><br /><input class="SoftwareCloudAgreementsClass" name="SoftwareCloudAgreements-'+str+'" id="SoftwareCloudAgreements-2-'+str+'" type="checkbox" value="Other Cloud Services arrangement" onclick="SoftwareCloudAgreementscheckboxes(\''+name+'\', \''+str+'\')"><label for="SoftwareCloudAgreements-2-'+str+'"> Other Cloud Services arrangement </label><br /><input class="SoftwareCloudAgreementsClass" name="SoftwareCloudAgreements-'+str+'" id="SoftwareCloudAgreements-3-'+str+'" type="checkbox" value="I do not know" onclick="SoftwareCloudAgreementscheckboxesidk(\''+name+'\', \''+str+'\')"><label for="SoftwareCloudAgreements-3-'+str+'"> I do not know</label><br /><input class="SoftwareCloudAgreementsClass" name="SoftwareCloudAgreements-'+str+'" id="SoftwareCloudAgreements-4-'+str+'" type="checkbox" value="none" onclick="SoftwareCloudAgreementscheckboxesna(\''+name+'\', \''+str+'\')"><label for="SoftwareCloudAgreements-4-'+str+'"> None of the above</label></fieldset></div>';
    var display = document.getElementById('Step2Q400div-'+str);
    if(!display)
    {
      document.getElementById('SoftwarePanefor'+str).appendChild(Step2Q400Question);
      $("#Step2Q400rowdiv-"+str).css("background-color", lightyellowbackground);
      setTimeout(function(){$("#Step2Q400rowdiv-"+str).css("background-color", "");}, 2000);
      // $('html,body').scrollTop(document.body.scrollHeight);
    } 
	}
	else
	{
    $("input[name='Step2Q400RadioButtons-"+str+"']:checked").prop('checked', false);
            $("#Step2Q400div-"+str).remove();
            goStep2Question401(name, str);
	}
}
function goStep2Question401(name, str)
{
  if(currentselection == "requirements" || currentselection == "RFI" || currentselection == "solication")
  {
    goStep2Question41(name, str);
  }
  else if(document.getElementById("softwarelist-0-"+str).checked || document.getElementById("softwarelist-1-"+str).checked || document.getElementById("softwarelist-2-"+str).checked)
	{
      count = 0;
      resetError("Step2Question4error", str);
      var Step2Q401Question = document.createElement('div');
      Step2Q401Question.setAttribute("id", "Step2Q401div-"+str);
      Step2Q401Question.setAttribute("tabindex", "-1");
      Step2Q401Question.innerHTML = '<hr /><div class="row" id="Step2Q401rowdiv-'+str+'"><div class="ictdesc">The following question should be answered “yes” when the agency is seeking a price quote for a specific, named product(s) or license(s).</div><fieldset><legend>Is this solicitation a request for quote for a specific “brand name” product only?</legend><label for="Step2Q401Yes-'+str+'"><input type="radio" value="Step2Q401Yes-'+str+'" name="Step2Q401RadioButtons-'+str+'" id="Step2Q401Yes-'+str+'" onclick="goStep2Question41(\''+name+'\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Q401No-'+str+'">    <input type="radio" value="Step2Q401No-'+str+'" name="Step2Q401RadioButtons-'+str+'" id="Step2Q401No-'+str+'" onclick="goStep2Question41(\''+name+'\', \''+str+'\')"> <span>No</span></label></div></fieldset>';
      var display = document.getElementById('Step2Q401div-'+str);
      if(!display)
      {
        document.getElementById('SoftwarePanefor'+str).appendChild(Step2Q401Question);
        $("#Step2Q401rowdiv-"+str).css("background-color", lightyellowbackground);
        setTimeout(function(){$("#Step2Q401rowdiv-"+str).css("background-color", "");}, 2000);
        // $('html,body').scrollTop(document.body.scrollHeight);
      }
	}
	else
	{
        $("input[name='Step2Q401RadioButtons-"+str+"']:checked").prop('checked', false);
        $("#Step2Q401div-"+str).remove();
	      goStep2Question41(name, str);
	}
}
function goStep2Question41(name, str)
{
  // document.getElementById('Step2Question4div-'+str).style.backgroundColor = "";
  count = 0;
  resetError("Step2Question4error", str);
  var Step2Q41Question = document.createElement('div');
  Step2Q41Question.setAttribute("id", "Step2Q41div-"+str);
  Step2Q41Question.setAttribute("tabindex", "-1");
  Step2Q41Question.innerHTML = '<hr /><div class="row" id="Step2Q41rowdiv-'+str+'"><fieldset><legend>Will this software be accessible through a web browser?</legend><label for="Step2Q41Yes-'+str+'"><input type="radio" value="Step2Q41Yes-'+str+'" name="Step2Q41RadioButtons-'+str+'" id="Step2Q41Yes-'+str+'" onclick="goStep2Question42(\''+name+'\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Q41No-'+str+'">    <input type="radio" value="Step2Q41No-'+str+'" name="Step2Q41RadioButtons-'+str+'" id="Step2Q41No-'+str+'" onclick="goStep2Question42(\''+name+'\', \''+str+'\')"> <span>No</span></label></div></fieldset>';

//   '<hr /><div class="row"><div class="col-lg-10"><div class="error" id="Step2Q41error-'+str+'"></div><label for="Step2Q41RadioButtons-'+str+'">Will this software be accessible through a web browser?</label></div><div class="col-lg-2"><input id="Step2Q41Yes-'+str+'" class="toggle toggle-left" name="Step2Q41RadioButtons-'+str+'" value="Step2Q41Yes-'+str+'" type="radio" onclick="goStep2Question42(\''+name+'\', \''+str+'\')"><label for="Step2Q41Yes-'+str+'" class="btn">Yes</label><input id="Step2Q41No-'+str+'" class="toggle toggle-right" name="Step2Q41RadioButtons-'+str+'" value="Step2Q41No-'+str+'" type="radio" onclick="goStep2Question42(\''+name+'\', \''+str+'\')"><label for="Step2Q41No-'+str+'" class="btn">No</label></div></div>';
  var display = document.getElementById('Step2Q41div-'+str);
  if(!display)
  {
    document.getElementById('SoftwarePanefor'+str).appendChild(Step2Q41Question);
    $("#Step2Q41rowdiv-"+str).css("background-color", lightyellowbackground);
setTimeout(function(){$("#Step2Q41rowdiv-"+str).css("background-color", "");}, 2000);
// $('html,body').scrollTop(document.body.scrollHeight);
  }
}
function goStep2Question42(name, str)
{
  // document.getElementById('Step2Q41div-'+str).style.backgroundColor = '';
  resetError("Step2Q41error", str);
  var Step2Q42Question = document.createElement('div');
  Step2Q42Question.setAttribute("id", "Step2Q42div-"+str);
   Step2Q42Question.setAttribute("tabindex", "-1");
  Step2Q42Question.innerHTML = '<hr /><div class="row" id="Step2Q42rowdiv-'+str+'"><fieldset><legend>Will this software be used to create electronic content (e.g. an authoring tool that is used to create HTML pages, reports, surveys, charts, dashboards, etc.)?</legend><label for="Step2Q42Yes-'+str+'"><input type="radio" value="Step2Q42Yes-'+str+'" name="Step2Q42RadioButtons-'+str+'" id="Step2Q42Yes-'+str+'" onclick="resetError(\'Step2Q42error\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Q42No-'+str+'">    <input type="radio" value="Step2Q42No-'+str+'" name="Step2Q42RadioButtons-'+str+'" id="Step2Q42No-'+str+'" onclick="resetError(\'Step2Q42error\', \''+str+'\')"> <span>No</span></label></div></fieldset>';


//   '<hr /><div class="row" id="Step2Q42rowdiv-'+str+'"><div class="col-lg-10"><div class="error" id="Step2Q42error-'+str+'"></div><label for="Step2Q42RadioButtons-'+str+'">Will this software be used to create electronic content (e.g. an authoring tool that is used to create HTML pages, reports, surveys, charts, dashboards, etc.)?</label></div><div class="col-lg-2"><input id="Step2Q42Yes-'+str+'" class="toggle toggle-left" name="Step2Q42RadioButtons-'+str+'" value="Step2Q42Yes-'+str+'" type="radio" onclick="resetError(\'Step2Q42error\', \''+str+'\')"><label for="Step2Q42Yes-'+str+'" class="btn">Yes</label><input id="Step2Q42No-'+str+'" class="toggle toggle-right" name="Step2Q42RadioButtons-'+str+'" value="Step2Q42No-'+str+'" type="radio" onclick="resetError(\'Step2Q42error\', \''+str+'\')"><label for="Step2Q42No-'+str+'" class="btn">No</label></div></div>';
  var display = document.getElementById('Step2Q42div-'+str);
  if(!display)
  {
    document.getElementById('SoftwarePanefor'+str).appendChild(Step2Q42Question);
    $("#Step2Q42rowdiv-"+str).css("background-color", lightyellowbackground);
setTimeout(function(){$("#Step2Q42rowdiv-"+str).css("background-color", "");}, 2000);
// $('html,body').scrollTop(document.body.scrollHeight);
  }
}
function goStep2Question31(name, str)
{
  if(currentselection != "requirements" && currentselection != "RFI" && currentselection != "solication")
  {
    var Step2Q31Question = document.createElement('div');
    Step2Q31Question.setAttribute("id", "Step2Q31div-"+str);
    Step2Q31Question.innerHTML = '<hr /><div class="row" id="Step2Q31rowdiv-'+str+'"><div class="ictdesc">The following question should be answered “yes” when the agency is seeking a price quote for a specific, named product(s) or license(s).</div><fieldset><legend>Is this solicitation a request for quote for a specific “brand name” product only?</legend><div class="col-lg-10"></div><div class="col-lg-2"><label for="Step2Q31Yes-'+str+'"><input type="radio" value="Step2Q31Yes-'+str+'" name="Step2Q31RadioButtons-'+str+'" id="Step2Q31Yes-'+str+'" onclick="goStep2Question32(\''+name+'\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Q31No-'+str+'">    <input type="radio" value="Step2Q31No-'+str+'" name="Step2Q31RadioButtons-'+str+'" id="Step2Q31No-'+str+'" onclick="goStep2Question32(\''+name+'\', \''+str+'\')"> <span>No</span></label></div></div></fieldset>';
    var display = document.getElementById('Step2Q31div-'+str);
    if(!display)
    {
      document.getElementById('ElectronicContentPanefor'+str).appendChild(Step2Q31Question);
      $("#Step2Q31rowdiv-"+str).css("background-color", lightyellowbackground);
      setTimeout(function(){$("#Step2Q31rowdiv-"+str).css("background-color", "");}, 2000);
      // $('html,body').scrollTop(document.body.scrollHeight);
    }
    // goStep2Question32(name, str);
  }
  else
  {
    goStep2Question32(name, str);
  }
}
function goStep2Question32(name, str)
{
  var Step2Q32Question = document.createElement('div');
  Step2Q32Question.setAttribute("id", "Step2Q32div-"+str);
  Step2Q32Question.setAttribute("tabindex", "-1");
  Step2Q32Question.innerHTML = '<hr /><div class="row" id="Step2Q32rowdiv-'+str+'"><fieldset><legend>Will this electronic content be made available through a website?</legend><div class="col-lg-10"></div><div class="col-lg-2"><label for="Step2Q32Yes-'+str+'"><input type="radio" value="Step2Q32Yes-'+str+'" name="Step2Q32RadioButtons-'+str+'" id="Step2Q32Yes-'+str+'" onclick="goStep2Question33(\''+name+'\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Q32No-'+str+'">    <input type="radio" value="Step2Q32No-'+str+'" name="Step2Q32RadioButtons-'+str+'" id="Step2Q32No-'+str+'" onclick="goStep2Question33(\''+name+'\', \''+str+'\')"> <span>No</span></label></div></div></fieldset>';

  var display = document.getElementById('Step2Q32div-'+str);
  if(!display)
  {
    document.getElementById('ElectronicContentPanefor'+str).appendChild(Step2Q32Question);
    $("#Step2Q32rowdiv-"+str).css("background-color", lightyellowbackground);
setTimeout(function(){$("#Step2Q32rowdiv-"+str).css("background-color", "");}, 2000);
// $('html,body').scrollTop(document.body.scrollHeight);
  }
}
function goStep2Question33(name, str)
{
  document.getElementById('Step2Q32div-'+str).style.backgroundColor = "";
  var Step2Q33Question = document.createElement('div');
  Step2Q33Question.setAttribute("id", "Step2Q33div-"+str);
  Step2Q33Question.setAttribute("tabindex", "-1");
    Step2Q33Question.innerHTML = '<hr /><div class="row" id="Step2Q33rowdiv-'+str+'"><div class="ictdesc">Public facing content is electronic information and data that a Federal agency makes available to the general public. Public facing content can be published on the web (for example: an agency web site, blog post, or social media page), and it could also be made available via non-web methods - (for example: information screens in waiting areas via kiosks). If you don’t know this for certain then err on the side of caution and respond YES to this prompt.</div><fieldset><legend>Will this electronic content be shared with members of the public? </legend><div class="col-lg-10"></div><div class="col-lg-2"><label for="Step2Q33Yes-'+str+'"><input type="radio" value="Step2Q33Yes-'+str+'" name="Step2Q33RadioButtons-'+str+'" id="Step2Q33Yes-'+str+'" onclick="goStep2Question34(\''+name+'\', \''+str+'\')"> <span>Yes</span></label><label for="Step2Q33No-'+str+'">    <input type="radio" value="Step2Q33No-'+str+'" name="Step2Q33RadioButtons-'+str+'" id="Step2Q33No-'+str+'" onclick="goStep2Question34(\''+name+'\', \''+str+'\')"> <span>No</span></label></div></div></fieldset>';

  var display = document.getElementById('Step2Q33div-'+str);
  if(!display)
  {
    document.getElementById('ElectronicContentPanefor'+str).appendChild(Step2Q33Question);
    $("#Step2Q33rowdiv-"+str).css("background-color", lightyellowbackground);
    setTimeout(function(){$("#Step2Q33rowdiv-"+str).css("background-color", "");}, 2000);
    // $('html,body').scrollTop(document.body.scrollHeight);
  }
}
function goStep2Question34(name, str)
{
  document.getElementById('Step2Q33div-'+str).style.backgroundColor = "";
  if(document.getElementById('Step2Q33No-'+str).checked)
  {
    var Step2Q34Question = document.createElement('div');
    Step2Q34Question.setAttribute("id", "Step2Q34div-"+str);
    Step2Q34Question.setAttribute("tabindex", "-1");
    Step2Q34Question.innerHTML = '<hr /><div class="row" id="Step2Q34rowdiv-'+str+'"><fieldset><legend>Will this electronic content be communicated through any of the following options?</legend><div class="col-lg-10"><ul><li>An emergency notification</li><li>An initial or final decision adjudicating an administrative claim or proceeding</li><li>An internal or external program or policy announcement</li><li>A notice of benefits, program eligibility, employment opportunity, or personnel action</li><li>A formal acknowledgement of receipt</li><li>A survey or questionnaire</li><li>A template or form</li><li>Educational or training materials</li><li>Intranet content designed as a Web page</li></ul></div><div class="col-lg-2"><label for="Step2Q34Yes-'+str+'"><input type="radio" value="Step2Q34Yes-'+str+'" name="Step2Q34RadioButtons-'+str+'" id="Step2Q34Yes-'+str+'"> <span>Yes</span></label><label for="Step2Q34No-'+str+'">    <input type="radio" value="Step2Q34No-'+str+'" name="Step2Q34RadioButtons-'+str+'" id="Step2Q34No-'+str+'"> <span>No</span></label></div></div></fieldset>';

    // Step2Q34Question.innerHTML = '<hr /><div class="row"><div class="col-lg-10"><label for="Step2Q34RadioButtons-'+str+'">Will this electronic content be an official communication communicated through any of the categories below?</label><div id="officialcommunicationlist"><ul><li>An emergency notification</li><li>An initial or final decision adjudicating an administrative claim or proceeding</li><li>An internal or external program or policy announcement</li><li>A notice of benefits, program eligibility, employment opportunity, or personnel action</li><li>A formal acknowledgement of receipt</li><li>A survey or questionnaire</li><li>A template or form</li><li>Educational or training materials</li><li>Intranet content designed as a Web page</li></ul></div></div><div class="col-lg-2"><input id="Step2Q34Yes-'+str+'" class="toggle toggle-left" name="Step2Q34RadioButtons-'+str+'" value="Step2Q34Yes-'+str+'" type="radio" onclick=""><label for="Step2Q34Yes-'+str+'" class="btn">Yes</label><input id="Step2Q34No-'+str+'" class="toggle toggle-right" name="Step2Q34RadioButtons-'+str+'" value="Step2Q34No-'+str+'" type="radio" onclick=""><label for="Step2Q34No-'+str+'" class="btn">No</label></div></div>';
    // <!-- (<a href="javascript:OfficialCommunicationsExample()">see examples</a>) -->
    var display = document.getElementById('Step2Q34div-'+str);
    if(!display)
    {
        document.getElementById('ElectronicContentPanefor'+str).appendChild(Step2Q34Question);
        $("#Step2Q34rowdiv-"+str).css("background-color", lightyellowbackground);
setTimeout(function(){$("#Step2Q34rowdiv-"+str).css("background-color", "");}, 2000);
// $('html,body').scrollTop(document.body.scrollHeight);
    }
  }
  else
  {
    $('#Step2Q34div-'+str).remove();
  }
}
function Step2Question3NoButton(name, str)
{
  var aa = document.getElementById('SoftwareLinkfor'+str);
  aa.setAttribute('class', 'NavList');
  aa.setAttribute("aria-disabled", "false");
  document.getElementById('ElectronicContentLinkfor'+str).style.backgroundColor = "#006400";
  document.getElementById('ElectronicContentLinkfor'+str).innerHTML = "✓ Electronic Content";
  document.getElementById('Step2Question3div-'+str).style.backgroundColor = lightgreenbackground;
  $("#Step2Q31div-"+str).remove();
  $("#Step2Q32div-"+str).remove();
  $("#Step2Q33div-"+str).remove();
  $("#Step2Q34div-"+str).remove();
}
function Step2Question4NoButton(name, str)
{
  var aa = document.getElementById('HardwareLinkfor'+str);
  aa.setAttribute('class', 'NavList');
  aa.setAttribute("aria-disabled", "false");
  resetError("Step2Question4error", str);
  document.getElementById('SoftwareLinkfor'+str).style.backgroundColor = "#006400";
  document.getElementById('SoftwareLinkfor'+str).innerHTML = "✓ Software";

  $("input[name='Step2Q40RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q40div-"+str).remove();
  $("input[name='Step2Q400RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q400div-"+str).remove();
  $("input[name='Step2Q401RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q401div-"+str).remove();
  $("input[name='Step2Q41RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q41div-"+str).remove();
  $("input[name='Step2Q42RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q42div-"+str).remove();
}
function Step2SoftwareCriteria(name, str)
{
  var aa = document.getElementById('HardwareLinkfor'+str);
  aa.setAttribute('class', 'NavList');
  aa.setAttribute("aria-disabled", "false");
  resetError("Step2Question4error", str);
  document.getElementById('SoftwareLinkfor'+str).style.backgroundColor = "#006400";
  document.getElementById('SoftwareLinkfor'+str).innerHTML = "✓ Software";

  $("input[name='Step2Q400RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q400div-"+str).remove();
  $("input[name='Step2Q401RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q401div-"+str).remove();
  $("input[name='Step2Q41RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q41div-"+str).remove();
  $("input[name='Step2Q42RadioButtons-"+str+"']:checked").prop('checked', false);
  $("#Step2Q42div-"+str).remove();
}
function step2question5NoButton(name, str)
{
  count = 0;
  resetError("Step2Question5error", str);
  document.getElementById('Step2Question5div-'+str).style.backgroundColor = '';
  document.getElementById('HardwareLinkfor'+str).style.backgroundColor = "#006400";
  document.getElementById('HardwareLinkfor'+str).innerHTML = "✓ Hardware";
  $('.Step2Q50Class-'+str).prop("checked", false);
  $("#Step2Q50div-"+str).remove();
  $('.Step2Q51Class-'+str).prop("checked", false);
  $("#Step2Q51div-"+str).remove();
}
function ExceptionsClick(name, str, option)
{
  count = 0;
  resetError("ExceptionsErrorfor", str);
  document.getElementById('ExceptionsPanefor'+str).style.backgroundColor = "";
  var aa = document.getElementById('ElectronicContentLinkfor'+str);
  if(option === "NEA")
  {
    move(10);
    var index = remaining_array.indexOf(str);
    if (index == -1) {
          remaining_array.push(str);
          // alert(remaining_array);
      }
    aa.setAttribute('class', 'NavList');
    aa.setAttribute('href', '#');
    aa.setAttribute("aria-disabled", "false");
    var bb = document.getElementById('SoftwareLinkfor'+str);
    bb.setAttribute('class', 'NavList');
    bb.setAttribute('href', '#');
    bb.setAttribute("aria-disabled", "false");
    var cc = document.getElementById('HardwareLinkfor'+str);
    cc.setAttribute('class', 'NavList');
    cc.setAttribute('href', '#');
    cc.setAttribute("aria-disabled", "false");
    document.getElementById('ExceptionsLinkfor'+str).style.backgroundColor = "#006400";
    document.getElementById('ExceptionsLinkfor'+str).innerHTML = "✓ Exceptions";
	   document.getElementById('ElectronicContentLinkfor'+str).style.backgroundColor = "";
	    document.getElementById('SoftwareLinkfor'+str).style.backgroundColor = "";
	     document.getElementById('HardwareLinkfor'+str).style.backgroundColor = "";
    document.getElementById('exceptioninputnumber'+str).innerHTML = "";
    if(unique_array.length > 1)
    {
      document.getElementById('exceptioninputnumber'+str).innerHTML = "<p />Do you want to answer \"No Exceptions Apply\" to all other items/deliverables? (optional) <button id='ApplyAllButton' onclick=\"ApplyAll(\'"+str+"\')\">Apply to All</button>";
      document.getElementById('exceptioninputnumber'+str).style.backgroundColor = lightyellowbackground;
    }
  }
  else {
    var exceptionname = "";
    switch (option)
    {
      case "4105":
        exceptionname = "National Security Exception";
        break;
      case "4109":
        exceptionname = "ICT Functions Located in Maintenance and Monitoring Spaces Exception";
        break;
      case "4108":
        exceptionname = "Fundamental Alteration Exception";
        break;
      case "4107":
        exceptionname = "Federal Contracts Exception";
        break;
      case "4103":
        exceptionname = "Undue Burden Exception";
        break;
    }
    // document.getElementById('exceptioninputnumber'+str).innerHTML = "<div class='error' id='ExceptionInputErrorfor-"+str+"'></div><div id='ExceptionInputQuestionfor-"+str+"'><div class='line'></div><label for='InputExceptionNumberfor" + str + "'>What is the " + exceptionname + " Authorization Number for " + name + "?</label><br><input type='text' name='ArrayExceptionNumbers[]' class='ArrayExceptionNumbersClass' id='InputExceptionNumberfor" + str + "'> <button onclick='clickedbuttonsaveExceptionNumber(\""+str+"\")'>Save</button></div><div id='exceptionnote'>Contact the <a href='mailto:accessibility@hq.dhs.gov'>Accessibility Help Desk</a> to request authorization.</div><br /><section id='exceptionnbrstatus-"+str+"'></section>";
            // $('#InputExceptionNumberfor'+str).focus();
    // 		 $('#exceptioninputnumber'+str).css("background-color", lightyellowbackground);
    //       setTimeout(function(){$('#exceptioninputnumber'+str).css("background-color", "");}, 2000);
           
     document.getElementById('exceptioninputnumber'+str).innerHTML = "<div class='error' id='ExceptionInputErrorfor-"+str+"'></div><div id='ExceptionInputQuestionfor-"+str+"'><div class='line'></div><label for='InputExceptionNumberfor" + str + "'>Provide Exception Authorization #</label><br><input type='text' name='ArrayExceptionNumbers[]' class='ArrayExceptionNumbersClass' id='InputExceptionNumberfor" + str + "'> <button onclick='clickedbuttonsaveExceptionNumber(\""+str+"\")'>Save</button></div><br /><section id='exceptionnbrstatus-"+str+"'></section>";
            // $('#InputExceptionNumberfor'+str).focus();
    		 $('#exceptioninputnumber'+str).css("background-color", lightyellowbackground);
           setTimeout(function(){$('#exceptioninputnumber'+str).css("background-color", "");}, 2000);
           
    // $('#InputExceptionNumberfor'+str).focus();
    // document.getElementById('exceptioninputnumber'+str).style.backgroundColor = lightyellowbackground;
    move(50);
    // document.getElementById('ExceptionsLinkfor'+str).innerHTML = "✘ Exceptions";
    aa.setAttribute('class', 'NavListDisabled');
    aa.setAttribute("aria-disabled", "true");
    aa.removeAttribute('href', '#');
    var bb = document.getElementById('SoftwareLinkfor'+str);
    bb.setAttribute('class', 'NavListDisabled');
    bb.setAttribute("aria-disabled", "true");
    bb.removeAttribute('href', '#');
    var cc = document.getElementById('HardwareLinkfor'+str);
    cc.setAttribute('class', 'NavListDisabled');
    cc.setAttribute("aria-disabled", "true");
    cc.removeAttribute('href', '#');
    document.getElementById('ExceptionsLinkfor'+str).style.backgroundColor = "";
    document.getElementById('ElectronicContentLinkfor'+str).style.backgroundColor = "";
    // document.getElementById('HardwareContentLinkfor'+str).style.backgroundColor = "";
    // document.getElementById('SoftwareContentLinkfor'+str).style.backgroundColor = "";
  }
}
function clickedbuttonsaveExceptionNumber(str)
{
  var z = document.getElementById('InputExceptionNumberfor'+str);
  /*if(z.value === "")
  {
    // alert("Exception number is blank");
    // document.getElementById('exceptioninputnumber'+str).style.backgroundColor = lightyellowbackground;
    $("#ExceptionInputErrorfor-"+str).html("ERROR: Please answer this question first");
    $("#ExceptionInputQuestionfor-"+str).css("background-color", yellow);
    setTimeout(function(){$("#ExceptionInputQuestionfor-"+str).css("background-color", "");}, 2000);
    if(count > 0)
    {
      alert("Exception number is blank");
    }
    count++;
    return false;
  }
  else {*/
    resetError("ExceptionInputErrorfor", str);
    //document.getElementById('exceptioninputnumber'+str).style.backgroundColor = lightgreenbackground;
    //document.getElementById('ExceptionsLinkfor'+str).style.backgroundColor = "#006400";
    //document.getElementById('exceptionnbrstatus-'+str).innerHTML = "Exception # " + z.value + " saved";
    //document.getElementById('exceptionnbrstatus-'+str).style.textAlign = "right";
    var link = document.getElementById('ExceptionsLinkfor'+str);
    var pane = document.getElementById('ExceptionsPanefor'+str);
    link.innerHTML = "✓ Exceptions";
    pane.style.backgroundColor = '';
  //}
}
function OfficialCommunicationsExample()
{
	var detailsWindow = window.open('', '');
  
	detailsWindow.document.write(OfficialCommunicationsExamplesHTML);
	detailsWindow.focus();
	detailsWindow.document.documentElement.setAttribute('lang','en');
  var h1nstart = OfficialCommunicationsExamplesHTML.search("<h1>");
  var h1nend = OfficialCommunicationsExamplesHTML.search("</h1>");
  var titlename = OfficialCommunicationsExamplesHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | " + titlename;
detailsWindow.document.close();
}
function ApplyAll(string)
{
  var str = string.replace(/\s/g, '');
  document.getElementById('exceptioninputnumber'+str).style.backgroundColor = '';
	var ArrayICTExceptionsRadioButtons = [];
	alert("No Exceptions has been applied to all ICT items/deliverables.");
	for (var i = 0; i < unique_array.length; i++)
	{
		var str = unique_array[i].replace(/\s/g, '');
		var ahh = "ictexceptionsradiobuttonsfor" + str + "-NEA";
		ArrayICTExceptionsRadioButtons.push(ahh);
	}
	for (var c = 0; c < ArrayICTExceptionsRadioButtons.length; c++)
	{
		$('input[id=' + ArrayICTExceptionsRadioButtons[c] + ']').prop('checked', true);
	}
	for (var c = 0; c < ArrayICTExceptionsRadioButtons.length; c++)
	{
		$('input[id=' + ArrayICTExceptionsRadioButtons[c] + ']').trigger("click");
	}
	$("#ApplyAllButton").focus();
}
function show(name, location) {
    var pan = document.getElementById(location+"Panefor"+name); //ExceptionsPaneforTest
    var link = document.getElementById(location+"Linkfor"+name);
    if (!pan) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    var allnavlinksclass = document.getElementsByClassName('NavList');
    for(var i = 0; i < allnavlinksclass.length; i++) {
          allnavlinksclass[i].style.backgroundColor = '';
    }
    link.style.backgroundColor = '#9900cc';
    pan.style.display = 'block';
    currentlocation = name;
}
function returnStep1ICT()
{
  $("#body").steps("previous");
  navButtons('reloadPage()', 'goStep2Exceptions()');
}
function removeName(x){
	var list = document.getElementById('ICTList');
	var item = document.getElementById("item"+x);
	var searchThis = item.innerHTML;
	searchThis = searchThis.substring(0, searchThis.indexOf('<')-1);
	var str = searchThis.replace(/\s/g, '');
	var index = unique_array.indexOf(searchThis);
	if (index !== -1) {
				list.removeChild(item);
				unique_array.splice(index, 1);
        remaining_array.splice(index, 1);
        // alert(remaining_array);
				compare_array.splice(index, 1);
				alert("Deleted: " + searchThis)
        $('#exception-link-'+str).remove();
    }
	if(unique_array.length < 1)
	{
		document.getElementById("dynamicInput").style.backgroundColor = lightyellowbackground;
		document.getElementById("nav").innerHTML = '<button onclick="reloadPage()">Exit</button>';
	}
	// removeNav(searchThis, 'exception');
	$('#capturedICTfield').val("");
	$('#capturedICTfield').focus();
	return;
}
function reloadPage()
{
	if(confirm("You will lose all data. Are you sure you want to do it?"))
	{
		location.reload();
	}
	else
	{

	}
}
function goHome()
{
  // document.getElementById("myBar").innerHTML = '0%';
  // document.getElementById("body").innerHTML = '<iframe src ="homepage.html" title="ART Home Page" width="100%" height="100%" style="border:none;"></iframe>';
  document.getElementById("body").innerHTML = '<div class="dart"></div><div class="row">  <div class="column" style="border-right: 5px solid white;"><h2 style="padding-bottom:10px; background-color: #02356a;color: white;text-align: center;padding: 5px; margin-top: 0px;">What to Expect</h2><ul><li> ART will ask you a few simple questions about what IT products and services you are buying or building. No knowledge of Section 508 or accessibility is required.</li><li>After you answer the questions, ART will determine how the Section 508 standards apply to the activity you are performing, and provide you with tailored language along with instructions.</li><li>On the output page, ART will provide you the option to copy the language or export it to a Microsoft Word document.</li></ul></div><div class="column" style=""> <h2 style="padding-bottom:10px; background-color: #02356a;color: white;text-align: center;padding: 5px; margin-top: 0px;">Resources</h2><ul><li><a href="javascript:UpdateLog()">What’s New in ART?</a></li><li><a href="https://assets.section508.gov/files/ART+User+Guide.pptx">ART User Guide</a></li><li><a href="javascript:Requirements508Info()">When do I need to include Section 508 requirements in my solicitation?</a></li><li><a href="javascript:ICTSolicationsExample()">What is information and communications technology (ICT)?</a></li><li><a href="JavaScript:Requirement508OverviewPage()">Section 508 Solicitation Language Overview</a></li><li><a href="javascript:ARTFAQS()">Frequently Asked Questions</a></li></ul></div><div class="column" style="border-left: 5px solid white;"><h2 style="padding-bottom:10px; background-color: #02356a;color: white;text-align: center;padding: 5px; margin-top: 0px;"<h2>Get Help</h2><div id="gethelp"><p><strong>For help using ART</strong><br/> <a href=\'mailto:Section.508@gsa.gov\' class=\'mailto\'>Section.508@gsa.gov </a> <br /><p><strong>For help understanding the Section 508 requirements </strong><br />contact your <a href="https://www.section508.gov/tools/coordinator-listing" target="_blank"><u> Section 508 Program Manager</p></u></a></p></div></div></div><hr>';
  document.getElementById("body").innerHTML += '<div class="dart"><fieldset><legend><h2>How can ART help you?</h2></legend>Click one of the options below and then click the [START] button.<section><div class="radio-wrapper"><input type="radio" id="control_01" name="select" value="requirements"><label for="control_01"><h3>Project Planning</h3><p>I want to identify the applicable Section 508 standards I need to address during project planning.</p></label></div><div class="radio-wrapper"><input type="radio" id="control_03" name="select" value="RFI"><label for="control_03"><h3>Market Research</h3><p>I want to obtain product documentation and/or capability statements to determine the availability of accessible products and services using a Request for Information (RFI).</p></label></div><div class="radio-wrapper"><input type="radio" id="control_05" name="select" value="solication"><label for="control_05"><h3>Solicitation Development</h3><p>I want to obtain Section 508 requirements to include in my statement of work.</p></label></div></section><div class="startButton"><button onclick="startART()">Start</button></div></fieldset></div>';
  // <li><a href="http://section508testing.org/playbook/conduct_market_research.html" target="_blank">View Market Research Guidelines</a></li><li><a href="javascript:ARTUserGuide()">User Guide</a></li>

  // document.getElementById("body").innerHTML += '<div class="dart"><h1>How can ART help you?</h1><section><div><input type="radio" id="control_01" name="select" value="requirements"><label for="control_01"><h2>Section 508 Solicitation Requirements</h2><p>I want to identify what Section 508 requirements I need to address in my project or acquisition plan.</p></label></div><div><input type="radio" id="control_02" name="select" value="marketresearch"><label for="control_02"><h2>Market Research</h2><p>I want help getting Section 508 information to conduct market research.</p></label></div><div><input type="radio" id="control_03" name="select" value="RFI"><label for="control_03"><h2>Request for Information (RFI)</h2><p>I want sample Section 508 language to include in my request for information (RFI)</p></label></div><div><input type="radio" id="control_05" name="select" value="solication" checked><label for="control_05"><h2>Generate Section 508 Solication Language</h2><p>I want to get Section 508 language to include in my solication.</p></label></div></section><div class="startButton"><button onclick="startART()">Start</button></div>';
  // document.getElementById("body").innerHTML += '<div class="dart"><h1>Welcome to the updated ART Accessibility Requirements Tool (ART).</h1><p><strong>What to Expect:</strong></p><p><ul><li>You will answer a few simple questions about what IT products and services you are buying or building.</li><li>The tool will determine what 508 standards apply to each IT product and service you are buying based on your answers.</li><li>After completing the questions, ART will provide tailored 508 language to include in your solicitation, along with instructions on next steps.</li></ul><p><strong>Good to know:</strong><br /><a href="javascript:ARTUserGuide()">User Guide</a><br /><a href="javascript:ICTSolicationsExample()">What is information and communications technology (ICT)?</a><br /><a href="javascript:ARTFAQS()">Frequently Asked Questions</a></p><h1>How can ART help you?</h1><section><div><input type="radio" id="control_01" name="select" value="1" checked><label for="control_01"><h2>Section 508 Solicitation Requirements</h2><p>I want to identify what Section 508 requirements I need to address in my project or acquisition plan.</p></label></div><div><input type="radio" id="control_02" name="select" value="2"><label for="control_02"><h2>Market Research</h2><p>I want help getting Section 508 information to conduct market research.</p></label></div><div><input type="radio" id="control_03" name="select" value="3"><label for="control_03"><h2>Request for Information (RFI)</h2><p>I want sample Section 508 language to include in my request for information (RFI)</p></label></div><div><input type="radio" id="control_05" name="select" value="5"><label for="control_05"><h2>Generate Section 508 Solication Language</h2><p>I want to get Section 508 language to include in my solication.</p></label></div></section><div class="startButton"><button onclick="startART()">Start</button></div><h1>Where can I get help?</h1>Accessibility Help Desk:<br />202-447-0440 (voice)<br />202-447-0582 (fax)<br /><a href="mailto:accessibility@hq.dhs.gov">accessibility@hq.dhs.gov</a></div>';
  // document.getElementById("body").innerHTML += '<div id="bodyfirstpage">';
    // document.getElementById("body").innerHTML += '<div class="row">  <div class="column" style="border-right: 5px solid white;">  <h2 style="padding-bottom:10px; background-color: #02356a;color: white;text-align: center;padding: 5px; margin-top: 0px;">What to Expect</h2><p>Welcome to the updated Accessibility Requirements Tool (ART).</p><p><strong>What to Expect:</strong></p><p><ul><li>You will answer a few simple questions about what IT products and services you are buying or building.</li><li>The tool will determine what 508 standards apply to each IT product and service you are buying based on your answers.</li><li>After completing the questions, ART will provide tailored 508 language to include in your solicitation, along with instructions on next steps.</li></ul></p> <div class="centerButton"><button onclick="ARTUserGuide()">User Guide</button></div><p><strong>Where can I get help?</strong></p><p>Accessibility Help Desk:<br /> 202-447-0440 (voice)<br /> 202-447-0582 (fax)<br /> <a href="mailto:accessibility@hq.dhs.gov">accessibility@hq.dhs.gov</a></p></div>     <div class="column" style="">    <h2 style="padding-bottom:10px; background-color: #02356a;color: white;text-align: center;padding: 5px; margin-top: 0px;">Market Research</h2><p>Use this job aid during project planning and market research:</p><ul><li>Identify what Section 508 requirements may apply to your project&rsquo;s technology deliverables.</li><li>Guidelines on how to obtain Section 508 documentation from potential vendors and contractors.</li><li>Sample Section 508 language to include in a Request for Information (RFI).</li></ul><div class="centerButton"><button onclick="startQuestionnareMarketResearch()">Start Questionnaire for Market Research</button></div> </div>     <div class="column" style="border-left: 5px solid white;">    <h2 style="padding-bottom:10px; background-color: #02356a;color: white;text-align: center;padding: 5px; margin-top: 0px;">Obtain Section 508 Solicitation Language</h2><p>Use this job aid when preparing solicitations for technology products and services. <strong>Section 508 solicitation language</strong> is required when purchasing <a href="javascript:ICTSolicationsExample()">information and communications technology (ICT)</a>. &nbsp;</p><p>Common situations include:</p><ul><li>New Solicitations</li><li>Task Orders under existing contracts (including contracts managed by other agencies)</li><li>ICT that will be provided to the public &amp; internally</li><li>ICT COTS/GOTS licenses</li><li>ICT approved on the TRM</li><li>ICT proof of concepts, pilot efforts, and MVPs</li><li>ICT provided as a service (example &ndash; SaaS, PaaS)</li><li>ICT provided through open source arrangements</li><li>ICT that  has an authorized 508 exception</li><li>Services to develop, modify, configure, install, maintain, and host ICT</li><li>Services that produce ICT in support of other deliverables (ex.&nbsp; Electronic forms)&nbsp;</li></ul></p><p><a href="javascript:ARTFAQS()">Frequently Asked Questions</a></p> <div class="centerButton"><button onclick="startQuestionnareSolication()">Start Questionnaire for Solication</button></div></div>';

}
function startART()
{
  var selection = document.getElementsByName('select');
  for(i = 0; i < selection.length; i++)
  {
    if(selection[i].checked)
    {
      currentselection = selection[i].value;
      break;
    }
  }
  if(typeof currentselection !== 'undefined')
  {
    if(currentselection == "requirements")
    {
      startQuestionnare();
    }
    else if(currentselection == "marketresearch")
    {
      startQuestionnare();
    }
    else if(currentselection == "RFI")
    {
      startQuestionnare();
    }
    else if(currentselection == "solication")
    {
      startQuestionnare();
    }
  }
  else
  {
    alert("Please select an option first.");
  }
  
}
// function startQuestionnareSolication()
// {
//   startQuestionnare();
// }
// function startQuestionnareMarketResearch()
// {
//   currentselection = "marketresearch";
//   startQuestionnare();
// }
function ARTUserGuide()
{
   window.location.href='ART User Guide.docx';
}
function move(number)
{
  /*if(number > movingnumber)
  {
    // var elem = document.getElementById("myBar");
  	var width = 10;
  	var id = setInterval(frame, 10);

  	function frame()
  	{
  		if (width >= 100)
  		{
  			clearInterval(id);
  		}
  		else if(number > movingnumber)
  		{
          width++;
          elem.style.width = number + '%';
          elem.innerHTML = number * 1 + '%';
          movingnumber = number;
  		}
  	}
  }*/
}
function startQuestionnare()
{
  
  window.onbeforeunload = function() {
    return "This page is asking you to confirm that you want to leave - data you have entered may not be saved.";
};
  document.title = "ART | Identify Products and Services";
  document.getElementById('body').innerHTML = "";
	document.getElementById('nav').innerHTML = "";
	move(3);
	document.getElementById('body').innerHTML = '<h2>Identify Products and Services</h2><section id="step1sectionid"><h3>Identify Products and Services</h3><hr /></section><h2>Section 508 Applicability</h2><section id="step2sectionid"></section><h2>Service Requirements</h2> <section id="step3sectionid"></section><h2>Project Accessibility Risk</h2><section id="step4sectionid"> </section><h2>Output</h2><section id="step5sectionid"></section>';
  document.getElementById('step1sectionid').appendChild(Step1Question1HTML);
  navButtons(null, "goStep2Question2()")
//   navButtons(null, null, 'reloadPage()');
$(function ()
	{
		$("#body").steps({
			headerTag: "h2",
			bodyTag: "section",
			enableAllSteps: false,
			enablePagination: false,
			transitionEffect: "none",
      onStepChanged: function (event, currentIndex, priorIndex) {
        if(currentIndex === 0)
        {
          goStep1();
          document.title = "ART  | Identify Products and Services";
          navButtons(null, "goStep2Question2()")
        }
        else if(currentIndex === 1)
        {
        //   goStep2Exceptions();
          document.title = "ART | Section 508 Applicability";
          document.getElementById("nav").innerHTML = '<div class="prevButton"><button onclick="goStep1()">Return to Step 1</button></div><div class="nextButton"><button class="nextButton" onclick="validateStep2()">Next</button></div>';
        }
        else if(currentIndex === 2)
        {
        //   goStep3();
          document.title = "ART  | Service Requirements";
          navButtons("goStep2Exceptions()", "goStep4()");
        }
        else if(currentIndex === 3)
        {
        //   goStep4();
          document.title = "ART  | Project Accessibility Risk";
          navButtons("goStep3()", "goStep5()");
        }
        else if(currentIndex === 4)
        {
            // goStep5();
            document.title = "ART | Output";
        }
      }
		});
	});
	document.getElementById("body-t-1").removeAttribute("href");
	document.getElementById("body-t-2").removeAttribute("href");
	document.getElementById("body-t-3").removeAttribute("href");
	document.getElementById("body-t-4").removeAttribute("href");
}
   function writeContractLanguage()
   {
     generateGoBackButton();
      generateContractHTML();
      var detailsWindow = window.open('', '');
      detailsWindow.document.write(OutputHTML);
      detailsWindow.focus();
      detailsWindow.document.documentElement.setAttribute('lang','en');
      var h1nstart = OutputHTML.search("<h1>");
  var h1nend = OutputHTML.search("</h1>");
  var titlename = OutputHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | Section 508 Solicitation Language Output";
detailsWindow.document.close();
   }
   function writeRequirements()
   {
       var DisclaimerHTML = '<style>#disclaimer{ color:white; font-size: 24px; text-align: center; font-weight: bold; background-color: red; padding: 5px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; margin-bottom: 10px;}</style><div id="disclaimer">Not approved for use in solicitation language</div>';
     if (confirm("This list of applicable 508 standards is only provided to assist with project planning, market research, and alternatives analysis.  By selecting ok, you acknowledge that this language will not be used for solicitation purposes.")) {
        generateGoBackButton();
        OutputHTML += "<button onclick='SelectAllandCopy()'>Select all solicitation language and copy</button><button onclick='Export2Doc(\"ABC123\");'>Export Solicitation language as .doc</button><button onclick='printDiv(\"noselect\")'>Print Instructions to Procurement Officials</button>";
        OutputHTML += "<div id='ABC123'><p /><h2><strong>Section 508 Requirements</strong></h2><p>The Section 508 standards may apply to the following ICT items:</p>";
        
      generateRequirements1();
      OutputHTML += "</div>";
      // OutputHTML += "<hr>";
      // OutputHTML += "<p /><h1>Recommended language for inclusion in a Request for Information:</h1><p /><h2><strong>Section 508 Requirements</strong></h2><p> ART has determined that the following Section 508 standards may apply to the following ICT items:</p>";
      // generateRequirements1();
      // OutputHTML += '<ol><li>For each commercially available ICT item addressed in your response, please provide an Accessibility Conformance Report (ACR).&nbsp; The ACR should be created using the Voluntary Product Accessibility Template Version 2.0 508 (or later). The template can be found at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a>.</li><li>Describe your approach to ensuring ICT conforms to the applicable Section 508 requirements. Your response may include:<ul><li>Your organization&rsquo;s accessibility policy (provide a link if publicly available)</li><li>The life cycle processes used to ensure accessibility.</li><li>The testing approach(s) your organization used to validate conformance to the Section 508 requirements, including the test methodologies and tools.</li><li>Prior experience supporting Section 508 in government contracts of a similar nature</li><li>Description of known Section 508 issues and constraints with technology components that would be used in a solution that meets the requirements in this RFI.</li></ul></li></ol>';

      OutputHTML += '<script> function SelectAllandCopy(){ var x = document.getElementById("ABC123").innerText;  var range = document.createRange(); range.selectNode(document.getElementById("ABC123"));   window.getSelection().addRange(range);    document.execCommand("copy");     alert("text copied, go ahead and paste!") }  <\/script>';

      //print instructions only
      OutputHTML += '<script> function printDiv(divName) {     var printContents = document.getElementById(divName).innerHTML;     var originalContents = document.body.innerHTML;     document.body.innerHTML = printContents;     window.print();     document.body.innerHTML = originalContents;}  <\/script>';

           //export to doc 
      OutputHTML += '<script>function getFormattedTime() {    var today = new Date();    var y = today.getFullYear();    var m = today.getMonth() + 1;    var d = today.getDate();    var h = today.getHours();    var mi = today.getMinutes();    var s = today.getSeconds();    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;}<\/script>';
      OutputHTML += '<script> function Export2Doc(element, filename = ""){    var preHtml = "<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'><title>Export HTML To Doc</title></head><body>";    var postHtml = "</body></html>";    var html = preHtml+document.getElementById("ABC123").innerHTML+postHtml;     var blob = new Blob([\'ufeff\', html], {        type: \'application/msword\'    });         var url = \'data:application/vnd.ms-word;charset=utf-8,\' + encodeURIComponent(html); filename = filename?filename+\'.doc\':\'ART 508 Standards Applicability Report.doc\'; var downloadLink = document.createElement("a");   document.body.appendChild(downloadLink);     if(navigator.msSaveOrOpenBlob ){        navigator.msSaveOrOpenBlob(blob, filename);    }else{ downloadLink.href = url;        downloadLink.download = filename;        downloadLink.click();    }   document.body.removeChild(downloadLink);} <\/script>';

      var detailsWindow = window.open('', '');
      detailsWindow.document.write(DisclaimerHTML);
      detailsWindow.document.write(OutputHTML);
      detailsWindow.document.write(DisclaimerHTML);
      detailsWindow.focus();
      detailsWindow.document.documentElement.setAttribute('lang','en');
      var h1nstart = OutputHTML.search("<h1>");
  var h1nend = OutputHTML.search("</h1>");
  var titlename = OutputHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | " + titlename;
      detailsWindow.document.close(); 
} else {
    
} 
     
   }

   function write508Standards()
   {
    var DisclaimerHTML = '<style>#disclaimer{ color:white; font-size: 24px; text-align: center; font-weight: bold; background-color: red; padding: 5px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; margin-bottom: 10px;} h3,a{margin-left:30px;}h3{font-size:16px;}#nocss{margin-left:0px;}</style><div id="disclaimer">Not approved for use in solicitation language</div>';
    if (confirm("This list of applicable 508 standards is only provided to assist with project planning, market research, and alternatives analysis.  By selecting ok, you acknowledge that this language will not be used for solicitation purposes.")) 
    {
      generateGoBackButton();
      OutputHTML += "<button onclick='SelectAllandCopy()'>Select all and copy</button><button onclick='Export2Doc(\"ABC123\");'>Export this report as .doc</button>";
      OutputHTML += "<div id='ABC123'><p /><h1>Section 508 Standards Applicability Report</h1><p>This Section 508 Standards Applicability Report is provided to help you identify, early in your project or acquisition, what Section 508 standards may apply to your technology products and service deliverables.&nbsp; This report can be included in an overall list of project requirements and can be used to inform user story development.</p><p>Section 508 of the Rehabilitation Act (classified to <a id='nocss' href='https://uscode.house.gov/view.xhtml?req=(title:29%20section:794d%20edition:prelim)%20OR%20(granuleid:USC-prelim-title29-section794d)&amp;f=treesort&amp;edition=prelim&amp;num=0&amp;jumpTo=true' target='_blank'>29 U.S.C. &sect; 794d</a>) requires that when Federal agencies develop, procure, maintain, or use information and communications technology (ICT), it shall be accessible to people with disabilities. Federal employees and members of the public with disabilities must be afforded access to and use of information and data comparable to that of Federal employees and members of the public without disabilities.</p><p>The Section 508 standards are defined in 36&nbsp;C.F.R.&nbsp;&sect;&nbsp;1194.1 &amp; Appendixes A, C &amp; D, and available at <a id='nocss' href='https://www.ecfr.gov/cgi-bin/text-idx?SID=e1c6735e25593339a9db63534259d8ec&mc=true&node=pt36.3.1194&rgn=div5' target='_blank'>https://www.ecfr.gov/cgi-bin/text-idx?SID=e1c6735e25593339a9db63534259d8ec&mc=true&node=pt36.3.1194&rgn=div5</a>. &nbsp;&nbsp;</p><p>The applicable standards listed below are based on the answers you provided in the Accessibility Requirements Tool (ART).&nbsp; They are a subset of all the standards defined in the Section 508 regulations.</p><p><span style='color:red;''>CAUTION:&nbsp; This report should not be used in a solicitation.</span>&nbsp; Use the Solicitation Development section of ART Home page to obtain solicitation language.</p><hr>";
      generate508Standards();
      OutputHTML += '</div>';
      OutputHTML += '<script> function SelectAllandCopy(){ var x = document.getElementById("ABC123").innerText;  var range = document.createRange(); range.selectNode(document.getElementById("ABC123"));   window.getSelection().addRange(range);    document.execCommand("copy");     alert("text copied, go ahead and paste!") }  <\/script>';
                //export to doc 
                OutputHTML += '<script>function getFormattedTime() {    var today = new Date();    var y = today.getFullYear();    var m = today.getMonth() + 1;    var d = today.getDate();    var h = today.getHours();    var mi = today.getMinutes();    var s = today.getSeconds();    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;}<\/script>';
                      //print instructions only
      OutputHTML += '<script> function printDiv(divName) {     var printContents = document.getElementById(divName).innerHTML;     var originalContents = document.body.innerHTML;     document.body.innerHTML = printContents;     window.print();     document.body.innerHTML = originalContents;}  <\/script>';
      OutputHTML += '<script> function Export2Doc(element, filename = ""){    var preHtml = "<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'><title>Export HTML To Doc</title></head><body>";    var postHtml = "</body></html>";    var html = preHtml+document.getElementById("ABC123").innerHTML+postHtml;     var blob = new Blob([\'ufeff\', html], {        type: \'application/msword\'    });         var url = \'data:application/vnd.ms-word;charset=utf-8,\' + encodeURIComponent(html); filename = filename?filename+\'.doc\':\'ART Section 508 Standards Applicability Report.doc\'; var downloadLink = document.createElement("a");   document.body.appendChild(downloadLink);     if(navigator.msSaveOrOpenBlob ){        navigator.msSaveOrOpenBlob(blob, filename);    }else{ downloadLink.href = url;        downloadLink.download = filename;        downloadLink.click();    }   document.body.removeChild(downloadLink);} <\/script>';

      var detailsWindow = window.open('', '');
      detailsWindow.document.write(DisclaimerHTML);
      detailsWindow.document.write(OutputHTML);
      detailsWindow.document.write(DisclaimerHTML);
      detailsWindow.focus();
      detailsWindow.document.documentElement.setAttribute('lang','en');
      var h1nstart = OutputHTML.search("<h1>");
  var h1nend = OutputHTML.search("</h1>");
  var titlename = OutputHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | " + titlename;
      detailsWindow.document.close(); 
    } else  {}     
  }

  function write508RFI()
   {
       var DisclaimerHTML = '<style>#disclaimer{ color:white; font-size: 24px; text-align: center; font-weight: bold; background-color: red; padding: 5px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; margin-bottom: 10px;} #noselect{ -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} </style><div id="disclaimer">Not approved for use in solicitation language</div>';
     if (confirm("This recommended output is solely for use in a Request for Information. By selecting OK, you acknowledge that this language will not be used for solicitation purposes.")) {
        generateGoBackButton();
        OutputHTML += "<style>#dart-li{margin-bottom: 20px;} li{margin-bottom:2px;}</style>";
        OutputHTML += "<button onclick='SelectAllandCopy()'>Select all and copy</button><button onclick='Export2Doc(\"ABC123\");'>Export as .doc</button>";
        // OutputHTML += "<p /><h2><strong>Section 508 Requirements</strong></h2><p>The Section 508 standards may apply to the following ICT items:</p>";
      // generateRequirements1();
      // OutputHTML += "<hr>";
      // OutputHTML += "<div id='ABC123'><p /><h1 id='noselect'>Recommended language for inclusion in a Request for Information:</h1><p /><h2><strong>Section 508 Requirements</strong></h2><p>ART has determined that the following Section 508 standards may apply to the following ICT items:</p>";
      OutputHTML += "<div id='ABC123'><p /><h1 id='noselect'>Recommended language for inclusion in a Request for Information:</h1><p /><h2><strong>Section 508 Requirements</strong></h2>";
      // generateRequirements1();
      OutputHTML += '<ol>';
      if(document.getElementById("Step1Q1-0").checked)
      {
        OutputHTML += '<li id="dart-li">For each commercially available technology product or service addressed in your response, please provide an Accessibility Conformance Report (ACR) to document how the product conforms to the Section 508 standards. The ACR should be created using the Voluntary Product Accessibility Template Version 2.0 508 (or later). The template can be found at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a>.</li>';
      } 
      if(document.getElementById("Step1Q1-1").checked)
      {
        OutputHTML += ' <li>Describe your approach to ensuring ICT conforms to the applicable Section 508 requirements. Your response may include:<ul><li>Your organization&rsquo;s accessibility policy (provide a link if publicly available)</li><li>The life cycle processes used to ensure accessibility.</li><li>The testing approach(s) your organization uses to validate conformance to the Section 508 requirements, including the test methodologies and tools.</li><li>Prior experience supporting Section 508 in government contracts of a similar nature</li><li>Description of known Section 508 issues and constraints with technology components that would be used in a solution that meets the requirements in this RFI.</li></ul></li>';
      }
      OutputHTML += '</ol>';
      
      OutputHTML += '</div>';
      OutputHTML += '<script> function SelectAllandCopy(){ var x = document.getElementById("ABC123").innerText;  var range = document.createRange(); range.selectNode(document.getElementById("ABC123"));   window.getSelection().addRange(range);    document.execCommand("copy");     alert("text copied, go ahead and paste!") }  <\/script>';
              //print instructions only
      OutputHTML += '<script> function printDiv(divName) {     var printContents = document.getElementById(divName).innerHTML;     var originalContents = document.body.innerHTML;     document.body.innerHTML = printContents;     window.print();     document.body.innerHTML = originalContents;}  <\/script>';

        //export to doc 
        OutputHTML += '<script>function getFormattedTime() {    var today = new Date();    var y = today.getFullYear();    var m = today.getMonth() + 1;    var d = today.getDate();    var h = today.getHours();    var mi = today.getMinutes();    var s = today.getSeconds();    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;}<\/script>';
      OutputHTML += '<script> function Export2Doc(element, filename = ""){    var preHtml = "<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'><title>Export HTML To Doc</title></head><body>";    var postHtml = "</body></html>";    var html = preHtml+document.getElementById("ABC123").innerHTML+postHtml;     var blob = new Blob([\'ufeff\', html], {        type: \'application/msword\'    });         var url = \'data:application/vnd.ms-word;charset=utf-8,\' + encodeURIComponent(html); filename = filename?filename+\'.doc\':\'ART 508 RFI Language.doc\'; var downloadLink = document.createElement("a");   document.body.appendChild(downloadLink);     if(navigator.msSaveOrOpenBlob ){        navigator.msSaveOrOpenBlob(blob, filename);    }else{ downloadLink.href = url;        downloadLink.download = filename;        downloadLink.click();    }   document.body.removeChild(downloadLink);} <\/script>';

      var detailsWindow = window.open('', '');
      // detailsWindow.document.write(DisclaimerHTML);
      detailsWindow.document.write(OutputHTML);
      // detailsWindow.document.write(DisclaimerHTML);
      detailsWindow.focus();
      detailsWindow.document.documentElement.setAttribute('lang','en');
      var h1nstart = OutputHTML.search("<h1>");
  var h1nend = OutputHTML.search("</h1>");
  var titlename = OutputHTML.substring(h1nstart+4,h1nend);
  detailsWindow.document.title = "ART | Recommended language for inclusion in a Request for Information (RFI)";
detailsWindow.document.close(); 
} else {
    
} 
     
   }

   function generate508Standards()
   {
     var ServicesCheckboxes = $("input[name='step3q6[]']:checked").map(function () {return this.value;}).get().join(",");
     var ElectronicCheckboxes = [];
     var SoftwareYesorNo = false;
     var SoftwareCheckboxes = [];
     var HardwareCheckboxes = [];
     // collecting electronic content, software, and hardware data
     if(document.getElementById("Step1Q1-0").checked)
     {
     for(i = 0; i < unique_array.length; i++)
    {
      var str = unique_array[i].replace(/\s/g, '');
      // Electronic Content
      if($("input[name='ElectronicContentList-"+str+"']:checked").val() !== "none")
      {
        var def123 = $("input[name='ElectronicContentList-"+str+"']:checked").map(function(){
          return $(this).val();
        });
        for(i = 0; i < def123.length; i++)
        {
          if (ElectronicCheckboxes.indexOf(def123[i]) === -1) // prevent duplicates
          {
            ElectronicCheckboxes.push(def123[i]);
          }
        }
      } // end of Electronic Content
      // Software
      if($("input[name='SoftwareList-"+str+"']:checked").val() !== "none")
      {
        if(document.getElementById("SoftwareCloudAgreements-3-"+str).checked || document.getElementById("SoftwareCloudAgreements-4-"+str).checked)
        {
          var def123 = $("input[name='SoftwareList-"+str+"']:checked").map(function(){
          return $(this).val();
          });
          for(i = 0; i < def123.length; i++)
          {
            if (SoftwareCheckboxes.indexOf(def123[i]) === -1) // prevent duplicates
            {
              SoftwareCheckboxes.push(def123[i]);
              SoftwareYesorNo = true;
            }
          }
        }
      } // end of Software
      // Hardware
      if($("input[name='HardwareList-"+str+"']:checked").val() !== "none")
      {
        var def123 = $("input[name='HardwareList-"+str+"']:checked").map(function(){
          return $(this).val();
        });
        for(i = 0; i < def123.length; i++)
        {
          if (HardwareCheckboxes.indexOf(def123[i]) === -1) // prevent duplicates
          {
            HardwareCheckboxes.push(def123[i]);
          }
        }
      } // end of Hardware
    } // end of collecting data
     } 

    OutputHTML += "<style>#ICTItemsList {  font-weight: bold;  text-decoration: underline;} .detailsunderh2{font-style: italic; font-size: small;} h2, h3{margin-bottom: 0px;}</style>";
    OutputHTML += "<p>The following Section 508 standards may apply to these ICT Items: <span id='ICTItemsList'>";
    OutputHTML += unique_array.join(", ");
    OutputHTML += "</span></p>";
    if($("input[name='ElectronicContentList-"+str+"']:checked").val() !== "none" || 
    ServicesCheckboxes.search("devmodelectroniccontent") > 0 
    || ServicesCheckboxes.search("devmodweborsoftware") >= 0 || 
    ServicesCheckboxes.search("devmodsoftware") >= 0 || 
    ServicesCheckboxes.search("devmoditemsasdocs") >= 0 || 
    ServicesCheckboxes.search("devmodelectroniccontent") >= 0 || 
    ServicesCheckboxes.search("installconfigintegservices") >= 0 ||
    ServicesCheckboxes.search("maintenance") >= 0) // ELECTRONIC CONTENT STANDARDS GENERATOR 
    {
      OutputHTML += "<h2>Web Content Accessibility Guidelines Success Criteria (WCAG 2.0)</h2><div class='detailsunderh2'>Incorporated by reference in Chapter 7 of the Section 508 standards</div>";
    OutputHTML += "<p>The following WCAG 2.0 success criteria may apply to any electronic content features and components you are developing or buying, including but not limited to: <ul>";
      if($("input[name='ElectronicContentList-"+str+"']:checked").val() !== "none" )
      {
        OutputHTML += "<li>Electronic content: " + ElectronicCheckboxes.join("; ") + "</li>";
      }
    if(SoftwareYesorNo) 
    {
        OutputHTML += "<li>Software: " + SoftwareCheckboxes.join("; ") + "</li>";
    }
    if(ServicesCheckboxes.search("devmodelectroniccontent") > 0)   
    {
      OutputHTML += "<li>Electronic content produced by an Authoring Tool, including electronic documents and forms in Microsoft Office and Adobe formats, surveys, dashboards, charts, data visualizations, etc.</li>";
    }
    // -------------------------------
    //  Cloud Services for Electronic Content //
    // -------------------------------
    var CloudServices = $("input[name='step3q6[]']:checked").map(function(){
      return $(this).val();
      });
      arrayA = [];
      arrayB = [];
    for(i = 0; i < CloudServices.length; i++)
    {
      if(CloudServices[i].search("IaaS") >= 0)
      {
        // arrayA.push(CloudServices[i]);
        arrayB.push(CloudServices[i]);
      }
      if(CloudServices[i].search("PaaS") >= 0)
      {
        arrayA.push(CloudServices[i]);
        arrayB.push(CloudServices[i]);
      }
      if(CloudServices[i].search("SaaS") >= 0)
      {
        arrayA.push(CloudServices[i]);
        arrayB.push(CloudServices[i]);
      }
      if(CloudServices[i].search("Other") >= 0)
      {
        arrayB.push(CloudServices[i]);
      }
    }
    if(ServicesCheckboxes.search("PaaS") >= 0 || ServicesCheckboxes.search("SaaS") >= 0)
    {
      OutputHTML += "<li>Cloud Services: " + arrayA.join(" or ") + "</li>";
    }
    if(ServicesCheckboxes.search("IaaS") >= 0 || ServicesCheckboxes.search("PaaS") >= 0 || ServicesCheckboxes.search("SaaS") >= 0 || ServicesCheckboxes.search("Other") >= 0)
    {
      if(arrayB.length > 0)
      {
        OutputHTML += "<li>User administrative screens, dashboards and portals used to configure, and monitor cloud services (" + arrayB.join(' or ') + ")</li>";
      }
      else
      {
        OutputHTML += "<li>User administrative screens, dashboards and portals used to configure, and monitor cloud services</li>";
      }
    }

    // -------------------------------
    // Third party service deliverables //
    // -------------------------------
    if(ServicesCheckboxes.search("devmodweborsoftware") >= 0 || 
    ServicesCheckboxes.search("devmodsoftware") >= 0 || 
    ServicesCheckboxes.search("devmoditemsasdocs") >= 0 || 
    ServicesCheckboxes.search("devmodelectroniccontent") >= 0 || 
    ServicesCheckboxes.search("installconfigintegservices") >= 0 ||
    ServicesCheckboxes.search("maintenance") >= 0)
    {
      OutputHTML += "<li>Third party service deliverables to develop, modify, configure, install, integrate, and maintain electronic content and software.</li>";
    }

    OutputHTML += "</ul></p>";

    var hideWeb = [];
    var shouldhideWeb = false;
    var hideSoftware = [];
    var shouldhideSoftware = false;

    for(i = 0; i < unique_array.length; i++)
    {
      var str = unique_array[i].replace(/\s/g, '');
      //Checking non-web electronic content
      if(document.getElementById("Step1Q1-0").checked && $("input[name='ElectronicContentList-"+str+"']:checked").val() !== "none")
      {
        if(document.getElementById("Step2Q32Yes-"+str).checked === true && document.getElementById("Step2Q33Yes-"+str).checked === true)
        {
          hideWeb.push("false");
        }
        else if(document.getElementById("Step2Q32No-"+str).checked === true && document.getElementById("Step2Q33Yes-"+str).checked === true)
        {
          hideWeb.push("true");
        }
        else if(document.getElementById("Step2Q32Yes-"+str).checked === true && document.getElementById("Step2Q33No-"+str).checked === true && document.getElementById("Step2Q34Yes-"+str).checked === true)
        {
          hideWeb.push("false");
        }
        else if(document.getElementById("Step2Q32No-"+str).checked === true && document.getElementById("Step2Q33No-"+str).checked === true && document.getElementById("Step2Q34Yes-"+str).checked === true)
        {
          hideWeb.push("true");
        }
      }

      //Checking for Software
      if(document.getElementById("Step1Q1-0").checked && $("input[name='SoftwareList-"+str+"']:checked").val() !== "none") // Software screen - product the language for any options selected other than NONE
      {
        if(document.getElementById("SoftwareCloudAgreements-3-"+str).checked || document.getElementById("SoftwareCloudAgreements-4-"+str).checked)
        {
          if(document.getElementById("Step2Q41Yes-"+str).checked && document.getElementById("Step2Q42Yes-"+str).checked)
          {
            hideWeb.push("false");
            hideSoftware.push("false");
          }
          else if(document.getElementById("Step2Q41Yes-"+str).checked && document.getElementById("Step2Q42No-"+str).checked)
          {
            hideWeb.push("false");
            hideSoftware.push("false");
          }
          else if(document.getElementById("Step2Q41No-"+str).checked && document.getElementById("Step2Q42Yes-"+str).checked)
          {
            hideWeb.push("true");
            hideSoftware.push("true");
          }
          else if(document.getElementById("Step2Q41No-"+str).checked && document.getElementById("Step2Q42No-"+str).checked)
          {
            hideWeb.push("true");
            hideSoftware.push("true");
          }
        }
      } // end of Software
    } // end of FOR loop 
    if(hideWeb.indexOf("true") >= 0)
    {
      shouldhideWeb = true;
    }
    if(hideSoftware.indexOf("true") >= 0)
    {
      shouldhideSoftware = true;
    }
    
    // -------------------------------
    // WCAG Level A Requirements //
    // -------------------------------
    OutputHTML += '<h3>WCAG Level A Requirements</h3><a href="http://www.w3.org/TR/WCAG20/#text-equiv-all" target="_blank">1.1.1 Non-text Content</a><br><a href="http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt" target="_blank">1.2.1 Audio-only and Video-only (Prerecorded)</a><br><a href="http://www.w3.org/TR/WCAG20/#media-equiv-captions" target="_blank">1.2.2 Captions (Prerecorded)</a><br><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic" target="_blank">1.3.1 Info and Relationships</a><br><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-sequence" target="_blank">1.3.2 Meaningful Sequence</a><br><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-understanding" target="_blank">1.3.3 Sensory Characteristics</a><br><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color" target="_blank">1.4.1 Use of Color</a><br><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio" target="_blank">1.4.2 Audio Control</a><br><a href="http://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable" target="_blank">2.1.1 Keyboard</a><br><a href="http://www.w3.org/TR/WCAG20/#keyboard-operation-trapping" target="_blank">2.1.2 No Keyboard Trap</a><br><a href="http://www.w3.org/TR/WCAG20/#time-limits-required-behaviors" target="_blank">2.2.1 Timing Adjustable</a><br><a href="http://www.w3.org/TR/WCAG20/#time-limits-pause" target="_blank">2.2.2 Pause, Stop, Hide</a><br><a href="http://www.w3.org/TR/WCAG20/#seizure-does-not-violate" target="_blank">2.3.1 Three Flashes or Below Threshold</a><br>';
    if(shouldhideWeb == false)
    {
      OutputHTML += '<span class="HideThis1" target="_blank"><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip" target="_blank">2.4.1 Bypass Blocks</a> (not required for non-web documents and software)<br></span>';
    }
    OutputHTML += '<a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title" target="_blank">2.4.2 Page Titled</a><br><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order" target="_blank">2.4.3 Focus Order</a><br><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs" target="_blank">2.4.4 Link Purpose (In Context)</a><br><a href="http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id" target="_blank">3.1.1 Language of Page</a><br><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus" target="_blank">3.2.1 On Focus</a><br><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change" target="_blank">3.2.2 On Input</a><br><a href="http://www.w3.org/TR/WCAG20/#minimize-error-identified" target="_blank">3.3.1 Error Identification</a><br><a href="http://www.w3.org/TR/WCAG20/#minimize-error-cues" target="_blank">3.3.2 Labels or Instructions</a><br><a href="http://www.w3.org/TR/WCAG20/#ensure-compat-parses" target="_blank">4.1.1 Parsing</a><br><a href="http://www.w3.org/TR/WCAG20/#ensure-compat-rsv" target="_blank">4.1.2 Name, Role, Value</a>';

    // -------------------------------
    // WCAG Level AA Requirements //
    // -------------------------------
    OutputHTML += '<h3>WCAG Level AA Requirements</h3><a href="http://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions" target="_blank">1.2.4 Captions (Live)<br /></a><a href="http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only" target="_blank">1.2.5 Audio Description (Prerecorded)<br /></a><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast" target="_blank">1.4.3 Contrast (Minimum)<br /></a><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio" target="_blank">1.4.4 Resize Text<br /></a><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation" target="_blank">1.4.5 Images of Text<br /></a>';
    if(shouldhideWeb == false)
    {
      OutputHTML +=  '<span class="HideThis1" target="_blank"><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc" target="_blank">2.4.5 Multiple Ways</a> (not required for non-web documents and software)<br /></span>';
    }
    OutputHTML += '<a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive" target="_blank">2.4.6 Headings and Labels<br /></a><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible" target="_blank">2.4.7 Focus Visible<br /></a><a href="http://www.w3.org/TR/WCAG20/#meaning-other-lang-id" target="_blank">3.1.2 Language of Parts<br /></a>';
    if(shouldhideWeb == false)
    {
      OutputHTML += '<span class="HideThis1" target="_blank"><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations" target="_blank">3.2.3 Consistent Navigation</a> (not required for non-web documents and software)<br /><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality" target="_blank">3.2.4 Consistent Identification</a> (not required for non-web documents and software)<br /></span>';
    }
    OutputHTML += '<a href="http://www.w3.org/TR/WCAG20/#minimize-error-suggestions" target="_blank">3.3.3 Error Suggestion<br /></a><a href="http://www.w3.org/TR/WCAG20/#minimize-error-reversible" target="_blank">3.3.4 Error Prevention (Legal, Financial, Data)</a>';
  }
  
  {
      // -------------------------------
      // Software Standards //
      // -------------------------------
      if($("input[name='SoftwareList-"+str+"']:checked").val() !== "none" || ServicesCheckboxes.search("IaaS") >= 0 || 
      ServicesCheckboxes.search("devmodweborsoftware") >= 0 || 
    ServicesCheckboxes.search("devmodsoftware") >= 0 || 
    ServicesCheckboxes.search("devmoditemsasdocs") >= 0 || 
    ServicesCheckboxes.search("devmodelectroniccontent") >= 0 || 
    ServicesCheckboxes.search("installconfigintegservices") >= 0 ||
    ServicesCheckboxes.search("maintenance") >= 0) // USE THIS IF YOU NEED TO HIDE SOFTWARE STANDARDS SECTION 
      {
      OutputHTML += "<h2>Software Standards</h2><div class='detailsunderh2'>From Chapter 5 of the Section 508 standards</div>";
      OutputHTML += "<p>The following Section 508 software standards may apply to any software features and components you are buying or procuring, including but not limited to: <ul>";
      // -------------------------------
      //  Cloud Services for Software //
      // -------------------------------
      var CloudServices = $("input[name='step3q6[]']:checked").map(function(){
        return $(this).val();
        });
        arrayA = [];
        arrayB = [];
      for(i = 0; i < CloudServices.length; i++)
      {
        if(CloudServices[i].search("PaaS") >= 0)
        {
          arrayA.push(CloudServices[i]);
          arrayB.push(CloudServices[i]);
          shouldhideSoftware = false;
        }
        if(CloudServices[i].search("SaaS") >= 0)
        {
          arrayA.push(CloudServices[i]);
          arrayB.push(CloudServices[i]);
          shouldhideSoftware = false;
        }
        if(CloudServices[i].search("IaaS") >= 0)
        {
          shouldhideSoftware = false;
          arrayB.push(CloudServices[i]);
        }
        if(CloudServices[i].search("Other") >= 0)
        {
          arrayB.push(CloudServices[i]);
        }
      }
        if(SoftwareYesorNo) 
      {
          OutputHTML += "<li>Software: " + SoftwareCheckboxes.join("; ") + "</li>";
      }
          // Cloud Services section 
      if(ServicesCheckboxes.search("PaaS") >= 0 || ServicesCheckboxes.search("SaaS") >= 0)
      {
        OutputHTML += "<li>Cloud Services: " + arrayA.join(" or ") + "</li>";
      }
      if(ServicesCheckboxes.search("IaaS") >= 0 || ServicesCheckboxes.search("PaaS") >= 0 || ServicesCheckboxes.search("SaaS") >= 0 || ServicesCheckboxes.search("Other") >= 0)
      {
        if(arrayB.length > 0)
        {
          OutputHTML += "<li>User administrative screens, dashboards and portals used to configure, and monitor cloud services (" + arrayB.join(' or ') + ")</li>";
        }
        else
        {
          OutputHTML += "<li>User administrative screens, dashboards and portals used to configure, and monitor cloud services</li>";
        }
      }
      // Third Party services under Software Standards
      if(ServicesCheckboxes.search("devmodweborsoftware") >= 0 || 
      ServicesCheckboxes.search("devmodsoftware") >= 0 || 
      ServicesCheckboxes.search("devmoditemsasdocs") >= 0 || 
      ServicesCheckboxes.search("devmodelectroniccontent") >= 0 || 
      ServicesCheckboxes.search("installconfigintegservices") >= 0 ||
      ServicesCheckboxes.search("maintenance") >= 0)
      {
        OutputHTML += "<li>Third party service deliverables to develop, modify, configure, install, integrate, and maintain electronic content and software.</li>";
      }
      OutputHTML += "</ul>";
      if(shouldhideSoftware == false)
      {
        OutputHTML += '<a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#502-interoperability-assistive-technology" target="_blank">502 Interoperability with Assistive Technology<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#503-applications" target="_blank">503 Application<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#504-authoring-tools" target="_blank">504 Authoring Tools</a>';
      }
    }
      // -------------------------------
      // Hardware Standards //
      // -------------------------------
      if($("input[name='HardwareList-"+str+"']:checked").val() !== "none")// && $("input[name='Step2Q50RadioButtons-"+str+"']:checked").val() !== "Step2Q50Yes-"+str)
      {
        if(HardwareCheckboxes.length == 1)
        {
          if(HardwareCheckboxes.includes("Servers"))
          {
            
          }
          else
          {
            OutputHTML += "<h2>Hardware Standards</h2><div class='detailsunderh2'>From Chapter 4 of the Section 508 standards</div>";
          OutputHTML += "<p>The following Section 508 software standards may apply to any software features and components you are buying or procuring, including but not limited to: <ul>";
        if(HardwareCheckboxes.length > 0)
        {
          OutputHTML += "<li> " + HardwareCheckboxes.join("; ") + "</li>";
        }
      // Third Party services under Hardware Standards
      if(ServicesCheckboxes.search("hardware") >= 0)
      {
        OutputHTML += "<li>Third party service deliverables to develop, modify, configure, install, integrate, and maintain hardware</li>";
      }
      OutputHTML += "</ul>";

      OutputHTML += '<a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#402-closed-functionality" target="_blank">402 Closed Functionality</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#403-biometrics" target="_blank">403 Biometrics</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#404-preservation-information" target="_blank">404 Preservation of Information Provided for Accessibility</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#405-privacy" target="_blank">405 Privacy</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#406-standard-connections" target="_blank">406 Standard Connections</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#407-operable-parts" target="_blank">407 Operable Parts</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#408-display-screens" target="_blank">408 Display Screens</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#409-status-indicators" target="_blank">409 Status Indicators</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#410-color-coding" target="_blank">410 Color Coding</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#411-audible-signals" target="_blank">411 Audible Signals</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#412-two-way-communication" target="_blank">412 ICT with Two Way Voice Communications</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#413-closed-caption" target="_blank">413 Closed Caption Processing Technologies</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#414-audio-description" target="_blank">414 Audio Description Processing Technologies</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#415-user-controls-captions-audio-descriptions" target="_blank">415 User Controls for Captions and Audio Descriptions</a>';
          }
        }
        else
        {
        OutputHTML += "<h2>Hardware Standards</h2><div class='detailsunderh2'>From Chapter 4 of the Section 508 standards</div>";
          OutputHTML += "<p>The following Section 508 software standards may apply to any software features and components you are buying or procuring, including but not limited to: <ul>";
        if(HardwareCheckboxes.length > 0)
        {
          OutputHTML += "<li> " + HardwareCheckboxes.join("; ") + "</li>";
        }
      // Third Party services under Hardware Standards
      if(ServicesCheckboxes.search("hardware") >= 0)
      {
        OutputHTML += "<li>Third party service deliverables to develop, modify, configure, install, integrate, and maintain hardware</li>";
      }
      OutputHTML += "</ul>";

      OutputHTML += '<a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#402-closed-functionality" target="_blank">402 Closed Functionality</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#403-biometrics" target="_blank">403 Biometrics</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#404-preservation-information" target="_blank">404 Preservation of Information Provided for Accessibility</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#405-privacy" target="_blank">405 Privacy</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#406-standard-connections" target="_blank">406 Standard Connections</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#407-operable-parts" target="_blank">407 Operable Parts</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#408-display-screens" target="_blank">408 Display Screens</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#409-status-indicators" target="_blank">409 Status Indicators</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#410-color-coding" target="_blank">410 Color Coding</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#411-audible-signals" target="_blank">411 Audible Signals</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#412-two-way-communication" target="_blank">412 ICT with Two Way Voice Communications</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#413-closed-caption" target="_blank">413 Closed Caption Processing Technologies</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#414-audio-description" target="_blank">414 Audio Description Processing Technologies</a><br><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#415-user-controls-captions-audio-descriptions" target="_blank">415 User Controls for Captions and Audio Descriptions</a>';
        }
      }
    }
    // -------------------------------
    // Support Services & Documentation Standards //
    // -------------------------------
    OutputHTML += "<h2>Support Services & Documentation Standards</h2><div class='detailsunderh2'>From Chapter 5 of the Section 508 standards</div>";
    OutputHTML += '<p><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#602-support-documentation" target="_blank">602 Support Documentation</a><br /><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#603-support-services" target="_blank">603 Support Services</a></p>'

    // -------------------------------
    // Functional Performance Requirements //
    // -------------------------------
    if($("input[name='HardwareList-"+str+"']:checked").val() !== "none" || 
    $("input[name='SoftwareList-"+str+"']:checked").val() !== "none" || 
    ServicesCheckboxes.search("devmodweborsoftware") >= 0 || 
      ServicesCheckboxes.search("devmodsoftware") >= 0 || 
      ServicesCheckboxes.search("devmoditemsasdocs") >= 0 || 
      ServicesCheckboxes.search("devmodelectroniccontent") >= 0 || 
      ServicesCheckboxes.search("hardware") >= 0)
    {
      OutputHTML += "<h2>Functional Performance Requirements</h2><div class='detailsunderh2'>From Chapter 3 of the Section 508 standards</div>";
      OutputHTML += '<p>The following apply when the Section 508 software and hardware do not address one or more functions of the ICT, or when determining &ldquo;equivalent facilitation.&rdquo;</p><p><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.1 Without Vision<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.2 With Limited Vision<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.3 Without Perception of Color<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.4 Without Hearing<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.5 With Limited Hearing<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.6 Without Speech<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.7 With Limited Manipulation<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.8 With Limited Reach and Strength<br /></a><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria" target="_blank">302.9 With Limited Language, Cognitive, and Learning Abilities</a></p>';

    }      
   } // end of generate508Standards

   function generateRequirements1()
   {
       for(i = 1; i <= unique_array.length; i++)
       {
         var str = unique_array[i-1].replace(/\s/g, '');
         //OutputHTML += "<h3>ICT Item # "+ i +": "+unique_array[i-1]+"</h3>";
         if(document.getElementById("ictexceptionsradiobuttonsfor"+str+"-NEA").checked && document.getElementById("electroniccontentlist-11-"+str).checked && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
         {}
         else
         {
         OutputHTML += "";
        //  OutputHTML += "<p id='ictitemssection'><strong>Section 508 applicability to Information and Communications Technology (ICT):</strong> "+ unique_array[i-1]+"</p>";
         //OutputHTML += "<ul>";

         //------------------------------------------------------------
         //       EXCEPTION NAME AND NUMBER
         //------------------------------------------------------------
         var exceptionname = "";
         var exceptionnbr = "N/A";
         var ICTExceptionAnswer = $("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val();
         switch(ICTExceptionAnswer)
         {
            case "NEA":
               exceptionname = "N/A";
               exceptionnbr = "N/A";
               break;
            case "4105":
               exceptionname = "National Security";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
            case "4109":
               exceptionname = "ICT Functions Located in Maintenance and Monitoring Spaces";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
            case "4108":
               exceptionname = "Fundamental Alteration";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
            case "4107":
               exceptionname = "Federal Contracts";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
            case "4103":
               exceptionname = "Undue Burden";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
         }
         //------------------------------------------------------------
         //       FUNCTIONAL PERFORMANCE CRITERIA
         //------------------------------------------------------------
         if(ICTExceptionAnswer === "NEA")
         {
            if(document.getElementById("softwarelist-0-"+str).checked || document.getElementById("softwarelist-1-"+str).checked || document.getElementById("softwarelist-2-"+str).checked || document.getElementById("softwarelist-4-"+str).checked) // Software
            {
               OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> All functional performance criteria in Chapter 3 apply to when using an alternative design or technology that results substantially equivalent or greater accessibility and usability by individuals with disabilities than would be provided by conformance to one or more of the requirements in Chapters 4 and 5 of the Revised 508 Standards, or when Chapters 4 or 5 do not address one or more functions of ICT.</p>";
            }
            else if(document.getElementById("hardwarelist-0-"+str).checked || document.getElementById("hardwarelist-1-"+str).checked || document.getElementById("hardwarelist-2-"+str).checked || document.getElementById("hardwarelist-3-"+str).checked || document.getElementById("hardwarelist-4-"+str).checked || document.getElementById("hardwarelist-5-"+str).checked || document.getElementById("hardwarelist-6-"+str).checked || document.getElementById("hardwarelist-7-"+str).checked || document.getElementById("hardwarelist-8-"+str).checked || document.getElementById("hardwarelist-9-"+str).checked) // Hardware
            {
               OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> All functional performance criteria in Chapter 3 apply to when using an alternative design or technology that results substantially equivalent or greater accessibility and usability by individuals with disabilities than would be provided by conformance to one or more of the requirements in Chapters 4 and 5 of the Revised 508 Standards, or when Chapters 4 or 5 do not address one or more functions of ICT.</p>";
            }
            else
            {
                if(unique_array.length == 1)
                {
                    var str = unique_array[0].replace(/\s/g, '');
                  if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
                  {
                      OutputHTML += "</div>";
                      return false;
                  }
                  else
                  {
                      OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> Does not apply</p>";
                  }
                }
                else
                {
                    OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> Does not apply</p>";
                }
            }
         }
         else
         {
                if(unique_array.length == 1)
                {
                    var str = unique_array[0].replace(/\s/g, '');
                  if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
                  {
                      OutputHTML += "</div>";
                      return false;
                  }
                  else
                  {
                      OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> Does not apply</p>";
                  }
                }
                else
                {
                    OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> Does not apply</p>";
                }
            }

          //------------------------------------------------------------
          //       WCAG LEVEL AA SUCCESS CRITERIA
          //------------------------------------------------------------
          if(ICTExceptionAnswer === "NEA")
          {
            if($("input[name='ElectronicContentList-"+str+"']:checked").val() !== "none")
            {
               OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for electronic content features and components</strong>";
                if($("input[name='ElectronicContentList-"+str+"']:checked").val() !== "other")
                {
                    OutputHTML += " (including but not limited to ";
                    var long = $("input[name='ElectronicContentList-"+str+"']:checked").length;
                    // alert(long);
                    var countelectronic = 1;
                    $("input[name='ElectronicContentList-"+str+"']:checked").each(function()
                    {
                        if(countelectronic == long)
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val());
                            }
                        }
                        else
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val()) + "; ";
                            }
                        }
                        countelectronic++;
                    });

                    OutputHTML += "): ";
                }
                else
                {
                    OutputHTML += ":";
                }

                if(document.getElementById("Step2Q32Yes-"+str).checked === true && document.getElementById("Step2Q33Yes-"+str).checked === true)
                {
                   OutputHTML += "All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205</p>";
                }
                else if(document.getElementById("Step2Q32No-"+str).checked === true && document.getElementById("Step2Q33Yes-"+str).checked === true)
                {
                   OutputHTML += "All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205, except 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, and 3.2.4 Consistent Identification</p>";
                }
                else if(document.getElementById("Step2Q32Yes-"+str).checked === true && document.getElementById("Step2Q34Yes-"+str).checked === true)
                {
                   OutputHTML += "All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205</p>";
                }
                else if(document.getElementById("Step2Q32No-"+str).checked === true && document.getElementById("Step2Q34Yes-"+str).checked === true)
                {
                   OutputHTML += "All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205, except 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, and 3.2.4 Consistent Identification</p>";
                }
                else
                {
                    OutputHTML += "Does not apply</p>";
                }
            }
            else //if "None of the Above" was checked
              {
                 OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for electronic content features and components:</strong> Does not apply</p>";
              }
          }
          else //if exception applies to the deliverable
          {
             OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for electronic content features and components:</strong> Does not apply</p>";
          }

          //------------------------------------------------------------
         //       SOFTWARE REQUIREMENTS
         //------------------------------------------------------------
         if(ICTExceptionAnswer === "NEA")
         {
            if($("input[name='SoftwareList-"+str+"']:checked").val() !== "none") // Software screen - product the language for any options selected other than NONE
            {
                OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for software features and components</strong>";
                if($("input[name='SoftwareList-"+str+"']:checked").val() !== "other")
                {
                    OutputHTML += " (including but not limited to ";
                    var long = $("input[name='SoftwareList-"+str+"']:checked").length;
                    // alert(long);
                    var countsoftware = 1;
                    $("input[name='SoftwareList-"+str+"']:checked").each(function()
                    {
                        if(countsoftware == long)
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val());
                            }
                        }
                        else
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val()) + "; ";
                            }
                        }
                        countsoftware++;
                    });

                    OutputHTML += ")";
                }
                  if(document.getElementById("Step2Q41Yes-"+str).checked && document.getElementById("Step2Q42Yes-"+str).checked)
                  {
                     OutputHTML += ": All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria, 502 Interoperability with Assistive Technology, 503 Application, 504 Authoring Tools</p>";
                  }
                  else if(document.getElementById("Step2Q41Yes-"+str).checked && document.getElementById("Step2Q42No-"+str).checked)
                  {
                     OutputHTML += ": All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria, 502 Interoperability with Assistive Technology, 503 Application</p>";
                  }
                  else if(document.getElementById("Step2Q41No-"+str).checked && document.getElementById("Step2Q42Yes-"+str).checked)
                  {
                     OutputHTML += ": All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria Apply except 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 502 Interoperability with Assistive Technology, 503 Application, 504 Authoring Tools</p>";
                  }
                  else if(document.getElementById("Step2Q41No-"+str).checked && document.getElementById("Step2Q42No-"+str).checked)
                  {
                     OutputHTML += ": All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria Apply except 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 502 Interoperability with Assistive Technology, 503 Application</p>";
                  }
                  else
                  {
                    OutputHTML += ": Does not apply</p>";
                  }
            }
            else
            {
                  OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for software features and components:</strong> Does not apply</p>";
            }
         }
         else //if exception applies to the deliverable
         {
            OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for software features and components:</strong> Does not apply</p>";
         }
         //------------------------------------------------------------
         //       HARDWARE REQUIREMENTS
         //------------------------------------------------------------
         if(ICTExceptionAnswer === "NEA")
         {
            if($("input[name='HardwareList-"+str+"']:checked").val() !== "none" )
            {
               OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for hardware features and components</strong>";
                if($("input[name='HardwareList-"+str+"']:checked").val() !== "other")
                {
                    OutputHTML += " (including but not limited to ";
                    var long = $("input[name='HardwareList-"+str+"']:checked").length;
                    // alert(long);
                    var counthardware = 1;
                    $("input[name='HardwareList-"+str+"']:checked").each(function()
                    {
                        if(counthardware == long)
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val());
                            }
                        }
                        else
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val()) + "; ";
                            }
                        }
                        counthardware++;
                    });

                    OutputHTML += "): All requirements in Chapter 4 apply</p>";
                }
                else
                {
                    OutputHTML += ": All requirements in Chapter 4 apply</p>";
                }

            }
            else
            {
                  OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for hardware features and components:</strong> Does not apply</p>";
            }
         }
         else //if exception applies to the deliverable
         {
            OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for hardware features and components:</strong> Does not apply</p>";
         }

         //------------------------------------------------------------
         //       SUPPORT SERVICES AND DOCUMENTATION REQUIREMENTS
         //------------------------------------------------------------
         var trueorfalseforItOitem11 = false;
         var fruits1 = [];
        for(z = 0; z < unique_array.length; z++)
      {
          var str = unique_array[z].replace(/\s/g, '');
          if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() == "NEA")
          {
            var str1 = $("input[name='Step2Q32RadioButtons-"+str+"']:checked").val();
            var str2 = $("input[name='Step2Q33RadioButtons-"+str+"']:checked").val();
            var str3 = $("input[name='Step2Q34RadioButtons-"+str+"']:checked").val();
            if(document.getElementById("electroniccontentlist-11-"+str).checked && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
            {
                fruits1.push("true");
            }
            else if(str1 === "Step2Q32No-"+str && str2 === "Step2Q33No-"+str && str3 === "Step2Q34No-"+str && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
            {
                fruits1.push("true");
            }
            else
            {
                fruits1.push("false");
            }
          }
          else
          {
              
          }
      }
        if(fruits1.length > 0)
        {
            if(fruits1.indexOf("false") < 0)
            {
                trueorfalseforItOitem11 = true;
            }
            else
            {
                trueorfalseforItOitem11 = false;
            }
        }
         if(ICTExceptionAnswer === "NEA" && trueorfalseforItOitem11 != true)
         {
            OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for support services and documentation:</strong> All requirements in Chapter 6 apply</p>";
         }
         else
         {
            OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for support services and documentation requirements:</strong> Does not apply</p>";
         }
         OutputHTML += '</p>';
        }
       } // end of for loop
    //   OutputHTML += '</section>';
   } // end of generateRequirements1
   function generateGoBackButton()
   {
     OutputHTML = '<style>body #noselect{-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} #ictitemssection {margin-left: 100px;} #ict1itemssection {margin-left: 150px;} #numberingspace li {margin: 0 0 15px 0px;} #numberingspace1 li {margin: 0 0 0px 0px;} button:hover, button:focus, input[type=button]{background-color: white; color: black;}button, input[type=button]{padding: 5px 10px; text-align: center;text-decoration: none; display: inline-block; font-size: 16px; margin: 2px 2px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;  cursor: pointer;  background-color: black;  color: white;  border: 2px solid #555555;}</style><button onclick="window.close()">Go Back</button>';
   }
   function generateRequirements()
   {
     numbering = 1;
    OutputHTML += "<button onclick='SelectAllandCopy()'>Select all solicitation language and copy</button><button onclick='Export2Doc(\"ABC123\");'>Export Solicitation language as .doc</button><button onclick='printDiv(\"noselect\")'>Print Instructions to Procurement Officials</button>";
    
    OutputHTML += '<style>#noselect{ -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; background-color:lightyellow;  padding-left: 20px; padding-right: 20px; margin-top: 15px;} </style>';
    OutputHTML += "<div id='noselect'><h2>Instructions to Procurement Officials</h2><p>For help with understanding these requirements, refer to the <a href='https://assets.section508.gov/files/ART+User+Guide.pptx' target='_blank'>Section 508 Solicitation Language Overview.</a></p><p><strong><u>Instructions</u></strong></p><ul><li>Ensure this entire ART output is shared with the Contracting Official.</li><li>If you copied and pasted Section 508 language from an earlier contract or solicitation, remove this old language in its entirety and replace it with the language generated by ART.</li><li>Include the Section 508 requirements generated by ART in your Statement of Work, Performance Work Statement, or Statement of Objectives. These requirements apply to the specific technology products and services you are buying.&nbsp;&nbsp; (<em>do not copy the instructions into the solicitation</em>).</li></ul><p><strong><u>Why is this important?</u></strong></p><p>By including Section 508 requirements in the solicitation, you are ensuring potential Offerors know which Section 508 standards apply to commercially available technology producxts offered in the solicitation, as well as requirements to ensure technology services provided will support the agency&rsquo;s ability to comply with the Section 508 law.</p><p>Thank you for using the ART tool.</p><p><strong>For help using ART</strong> <br/><a href='mailto:Section.508@gsa.gov' class='mailto'> Section.508@gsa.gov </a></p><p><strong>For help understanding the Section 508 requirements </strong><br/> contact your <a href='https://www.section508.gov/tools/coordinator-listing' target='blank'><u> Section 508 Program Manager</u></a></p></div>";
    OutputHTML += "<div id='ABC123'><h1><strong>1.&nbsp;Section 508 Requirements (include in the SOW, PWS, or SOO)</strong></h1><p>Section 508 of the Rehabilitation Act (classified to <a id='nocss' href='https://uscode.house.gov/view.xhtml?req=(title:29%20section:794d%20edition:prelim)%20OR%20(granuleid:USC-prelim-title29-section794d)&amp;f=treesort&amp;edition=prelim&amp;num=0&amp;jumpTo=true' target='_blank'>29 U.S.C. &sect; 794d</a>) requires that when Federal agencies develop, procure, maintain, or use information and communications technology (ICT), it shall be accessible to people with disabilities. Federal employees and members of the public with disabilities must be afforded access to and use of information and data comparable to that of Federal employees and members of the public without disabilities.</p><p>All products, platforms and services delivered as part of this work statement that, by definition, are deemed ICT shall conform to the revised regulatory implementation of Section 508 Standards, which are located at 36&nbsp;C.F.R.&nbsp;&sect;&nbsp;1194.1 &amp; Appendixes A, C &amp; D, and available at <a href='https://www.ecfr.gov/cgi-bin/text-idx?SID=e1c6735e25593339a9db63534259d8ec&mc=true&node=pt36.3.1194&rgn=div5' target='_blank'>https://www.ecfr.gov/cgi-bin/text-idx?SID=e1c6735e25593339a9db63534259d8ec&mc=true&node=pt36.3.1194&rgn=div5</a>.In the revised regulation, ICT replaced the term electronic and information technology (EIT) used in the original 508 standards.&nbsp; ICT includes IT and other equipment.</p></div>";

    //   OutputHTML += '<section id="ictitemssection">';

       for(i = 1; i <= unique_array.length; i++)
       {
         var str = unique_array[i-1].replace(/\s/g, '');
         //OutputHTML += "<h3>ICT Item # "+ i +": "+unique_array[i-1]+"</h3>";
         if(document.getElementById("ictexceptionsradiobuttonsfor"+str+"-NEA").checked && document.getElementById("electroniccontentlist-11-"+str).checked && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
         {}
         else
         {
        // Section 508 Requirements for Technology Products
        OutputHTML +="<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Products (include in the SOW, PWS, or SOO)</h2>";
        numbering++;
        //  OutputHTML += "<p id='ictitemssection' style='margin-left: 40px;'><strong>Section 508 applicability to Information and Communications Technology (ICT):</strong> "+ unique_array[i-1]+"</p>";
         //OutputHTML += "<ul>";

         //------------------------------------------------------------
         //       EXCEPTION NAME AND NUMBER
         //------------------------------------------------------------
         var exceptionname = "";
         var exceptionnbr = "N/A";
         var ICTExceptionAnswer = $("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val();
         switch(ICTExceptionAnswer)
         {
            case "NEA":
               exceptionname = "N/A";
               exceptionnbr = "N/A";
               break;
            case "4105":
               exceptionname = "National Security";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
            case "4109":
               exceptionname = "ICT Functions Located in Maintenance and Monitoring Spaces";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
            case "4108":
               exceptionname = "Fundamental Alteration";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
            case "4107":
               exceptionname = "Federal Contracts";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
            case "4103":
               exceptionname = "Undue Burden";
               exceptionnbr = document.getElementById("InputExceptionNumberfor"+str).value;
               if(exceptionnbr === "")
               {
                   Exceptionnumbernotice = true;
               }
               break;
         }
         OutputHTML += "";
        //  OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Exception:</strong> " + exceptionname + " &emsp; <strong>Authorization #: </strong>" + exceptionnbr + "</p>";

         //------------------------------------------------------------
         //       FUNCTIONAL PERFORMANCE CRITERIA
         //------------------------------------------------------------
         if(ICTExceptionAnswer === "NEA")
         {
            if(document.getElementById("softwarelist-0-"+str).checked || document.getElementById("softwarelist-1-"+str).checked || document.getElementById("softwarelist-2-"+str).checked || document.getElementById("softwarelist-4-"+str).checked) // Software
            {
               OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> All functional performance criteria in Chapter 3 apply to when using an alternative design or technology that results substantially equivalent or greater accessibility and usability by individuals with disabilities than would be provided by conformance to one or more of the requirements in Chapters 4 and 5 of the Revised 508 Standards, or when Chapters 4 or 5 do not address one or more functions of ICT.</p>";
            }
            else if(document.getElementById("hardwarelist-0-"+str).checked || document.getElementById("hardwarelist-1-"+str).checked || document.getElementById("hardwarelist-2-"+str).checked || document.getElementById("hardwarelist-3-"+str).checked || document.getElementById("hardwarelist-4-"+str).checked || document.getElementById("hardwarelist-5-"+str).checked || document.getElementById("hardwarelist-6-"+str).checked || document.getElementById("hardwarelist-7-"+str).checked || document.getElementById("hardwarelist-8-"+str).checked || document.getElementById("hardwarelist-9-"+str).checked) // Hardware
            {
               OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> All functional performance criteria in Chapter 3 apply to when using an alternative design or technology that results substantially equivalent or greater accessibility and usability by individuals with disabilities than would be provided by conformance to one or more of the requirements in Chapters 4 and 5 of the Revised 508 Standards, or when Chapters 4 or 5 do not address one or more functions of ICT.</p>";
            }
            else
            {
                if(unique_array.length == 1)
                {
                    var str = unique_array[0].replace(/\s/g, '');
                  if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
                  {
                      OutputHTML += "</div>";
                      return false;
                  }
                  else
                  {
                      OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> Does not apply</p>";
                  }
                }
                else
                {
                    OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> Does not apply</p>";
                }
            }
         }
         else
         {
                if(unique_array.length == 1)
                {
                    var str = unique_array[0].replace(/\s/g, '');
                  if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
                  {
                      OutputHTML += "</div>";
                      return false;
                  }
                  else
                  {
                      OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> Does not apply</p>";
                  }
                }
                else
                {
                    OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable Functional Performance Criteria:</strong> Does not apply</p>";
                }
            }

          //------------------------------------------------------------
          //       WCAG LEVEL AA SUCCESS CRITERIA
          //------------------------------------------------------------
          if(ICTExceptionAnswer === "NEA")
          {
            if($("input[name='ElectronicContentList-"+str+"']:checked").val() !== "none")
            {
               OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for electronic content features and components</strong>";
                if($("input[name='ElectronicContentList-"+str+"']:checked").val() !== "other")
                {
                    OutputHTML += " (including but not limited to ";
                    var long = $("input[name='ElectronicContentList-"+str+"']:checked").length;
                    // alert(long);
                    var countelectronic = 1;
                    $("input[name='ElectronicContentList-"+str+"']:checked").each(function()
                    {
                        if(countelectronic == long)
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val());
                            }
                        }
                        else
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val()) + "; ";
                            }
                        }
                        countelectronic++;
                    });

                    OutputHTML += "): ";
                }
                else
                {
                    OutputHTML += ":";
                }

                if(document.getElementById("Step2Q32Yes-"+str).checked === true && document.getElementById("Step2Q33Yes-"+str).checked === true)
                {
                   OutputHTML += "All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205</p>";
                }
                else if(document.getElementById("Step2Q32No-"+str).checked === true && document.getElementById("Step2Q33Yes-"+str).checked === true)
                {
                   OutputHTML += "All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205, except 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, and 3.2.4 Consistent Identification</p>";
                }
                else if(document.getElementById("Step2Q32Yes-"+str).checked === true && document.getElementById("Step2Q34Yes-"+str).checked === true)
                {
                   OutputHTML += "All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205</p>";
                }
                else if(document.getElementById("Step2Q32No-"+str).checked === true && document.getElementById("Step2Q34Yes-"+str).checked === true)
                {
                   OutputHTML += "All requirements in E205 apply, including all WCAG 2.0 Level A and AA Success Criteria apply as specified in E205, except 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, and 3.2.4 Consistent Identification</p>";
                }
                else
                {
                    OutputHTML += "Does not apply</p>";
                }
            }
            else //if "None of the Above" was checked
              {
                 OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for electronic content features and components:</strong> Does not apply</p>";
              }
          }
          else //if exception applies to the deliverable
          {
             OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for electronic content features and components:</strong> Does not apply</p>";
          }

          //------------------------------------------------------------
         //       SOFTWARE REQUIREMENTS
         //------------------------------------------------------------
         if(ICTExceptionAnswer === "NEA")
         {
            if($("input[name='SoftwareList-"+str+"']:checked").val() !== "none") // Software screen - product the language for any options selected other than NONE
            {
                OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for software features and components</strong>";
                if($("input[name='SoftwareList-"+str+"']:checked").val() !== "other")
                {
                    OutputHTML += " (including but not limited to ";
                    var long = $("input[name='SoftwareList-"+str+"']:checked").length;
                    // alert(long);
                    var countsoftware = 1;
                    $("input[name='SoftwareList-"+str+"']:checked").each(function()
                    {
                        if(countsoftware == long)
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val());
                            }
                        }
                        else
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val()) + "; ";
                            }
                        }
                        countsoftware++;
                    });

                    OutputHTML += ")";
                }
                  if(document.getElementById("SoftwareCriteria-3-"+str).checked || document.getElementById("SoftwareCriteria-4-"+str).checked)
                  {
                    if(document.getElementById("SoftwareCloudAgreements-3-"+str).checked || document.getElementById("SoftwareCloudAgreements-4-"+str).checked)
                    {
                      if(document.getElementById("Step2Q41Yes-"+str).checked && document.getElementById("Step2Q42Yes-"+str).checked)
                      {
                        OutputHTML += ": All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria, 502 Interoperability with Assistive Technology, 503 Application, 504 Authoring Tools</p>";
                      }
                      else if(document.getElementById("Step2Q41Yes-"+str).checked && document.getElementById("Step2Q42No-"+str).checked)
                      {
                        OutputHTML += ": All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria, 502 Interoperability with Assistive Technology, 503 Application</p>";
                      }
                      else if(document.getElementById("Step2Q41No-"+str).checked && document.getElementById("Step2Q42Yes-"+str).checked)
                      {
                        OutputHTML += ": All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria Apply except 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 502 Interoperability with Assistive Technology, 503 Application, 504 Authoring Tools</p>";
                      }
                      else if(document.getElementById("Step2Q41No-"+str).checked && document.getElementById("Step2Q42No-"+str).checked)
                      {
                        OutputHTML += ": All requirements in Chapter 5 apply, including all WCAG 2.0 Level A and AA Success Criteria Apply except 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 502 Interoperability with Assistive Technology, 503 Application</p>";
                      }
                    }
                  }
            }
            else
            {
                  OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for software features and components:</strong> Does not apply</p>";
            }
         }
         else //if exception applies to the deliverable
         {
            OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for software features and components:</strong> Does not apply</p>";
         }
         //------------------------------------------------------------
         //       HARDWARE REQUIREMENTS
         //------------------------------------------------------------
         if(ICTExceptionAnswer === "NEA")
         {
            if($("input[name='HardwareList-"+str+"']:checked").val() !== "none")
            {
               OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for hardware features and components</strong>";
                if($("input[name='HardwareList-"+str+"']:checked").val() !== "other")
                {
                    OutputHTML += " (including but not limited to ";
                    var long = $("input[name='HardwareList-"+str+"']:checked").length;
                    // alert(long);
                    var counthardware = 1;
                    $("input[name='HardwareList-"+str+"']:checked").each(function()
                    {
                        if(counthardware == long)
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val());
                            }
                        }
                        else
                        {
                            if($(this).val() !== "other")
                            {
                                OutputHTML += ($(this).val()) + "; ";
                            }
                        }
                        counthardware++;
                    });

                    OutputHTML += "): All requirements in Chapter 4 apply</p>";
                }
                else
                {
                    OutputHTML += ": All requirements in Chapter 4 apply</p>";
                }

            }
            else
            {
                  OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for hardware features and components:</strong> Does not apply</p>";
            }
         }
         else //if exception applies to the deliverable
         {
            OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for hardware features and components:</strong> Does not apply</p>";
         }

         //------------------------------------------------------------
         //       SUPPORT SERVICES AND DOCUMENTATION REQUIREMENTS
         //------------------------------------------------------------
         var trueorfalseforItOitem11 = false;
         var fruits1 = [];
        for(z = 0; z < unique_array.length; z++)
      {
          var str = unique_array[z].replace(/\s/g, '');
          if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() == "NEA")
          {
            var str1 = $("input[name='Step2Q32RadioButtons-"+str+"']:checked").val();
            var str2 = $("input[name='Step2Q33RadioButtons-"+str+"']:checked").val();
            var str3 = $("input[name='Step2Q34RadioButtons-"+str+"']:checked").val();
            if(document.getElementById("electroniccontentlist-11-"+str).checked && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
            {
                fruits1.push("true");
            }
            else if(str1 === "Step2Q32No-"+str && str2 === "Step2Q33No-"+str && str3 === "Step2Q34No-"+str && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
            {
                fruits1.push("true");
            }
            else
            {
                fruits1.push("false");
            }
          }
          else
          {
              
          }
      }
        if(fruits1.length > 0)
        {
            if(fruits1.indexOf("false") < 0)
            {
                trueorfalseforItOitem11 = true;
            }
            else
            {
                trueorfalseforItOitem11 = false;
            }
        }
         if(ICTExceptionAnswer === "NEA" && trueorfalseforItOitem11 != true)
         {
            OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for support services and documentation:</strong> All requirements in Chapter 6 apply</p>";
         }
         else
         {
            OutputHTML += "<p id='ict1itemssection' style='margin-left: 60px;'><strong>Applicable 508 requirements for support services and documentation requirements:</strong> Does not apply</p>";
         }
         OutputHTML += '</p>';
        }
       } // end of for loop
    //   OutputHTML += '</section>';
   } // end of generateRequirements
   function generateContractHTML()
   {
      var exceptiontoallICT = false;
      var branditems = false;
      var fruits = [];
      var brand = [];
      for(i = 0; i < unique_array.length; i++)
      {
          var str = unique_array[i].replace(/\s/g, '');
          if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
          {
              fruits.push("true");
          }
          else
          {
              fruits.push("false");
          }

          if($("input[name='Step2Q31RadioButtons-"+str+"']:checked").val() == "Step2Q31Yes-"+str)
          {
            brand.push("true");
          }
          else if($("input[name='Step2Q401RadioButtons-"+str+"']:checked").val() == "Step2Q401Yes-"+str)
          {
            brand.push("true");
          }
          else if($("input[name='Step2Q51RadioButtons-"+str+"']:checked").val() == "Step2Q51Yes-"+str)
          {
            brand.push("true");
          }
          else
          {
            brand.push("false");
          }
      }
        if(fruits.length > 0)
        {
            if(fruits.indexOf("false") < 0)
            {
                exceptiontoallICT = true;
            }
            else
            {
                exceptiontoallICT = false;
            }
        }
        if(brand.length > 0)
        {
            if(brand.indexOf("false") < 0)
            {
              branditems = true;
            }
            else
            {
              branditems = false;
            }
        }

       generateRequirements();
       if(exceptiontoallICT == true)
       {
        OutputHTML += "<div id='numberingspace'><ol start='2'>";
       }
       if(document.getElementById("Step1Q1-1").checked || document.getElementById("step3q6-0").checked || document.getElementById("step3q6-11").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-10").checked || document.getElementById("step3q6-3").checked || document.getElementById("step3q6-4").checked || document.getElementById("step3q6-5").checked || document.getElementById("step3q6-6").checked || document.getElementById("step3q6-8").checked || document.getElementById("step3q6-9").checked) // services
       {
          OutputHTML += "<div id='techservices'></div><p />";
       }
       OutputHTML += "<div id='numberingspace'><ol start='1'>";
       
       /// NEW 508 REQUIREMENTS FOR TECHNOLOGY SERVICES PER APRIL 24 2020 FOR ART 2.1
       if(document.getElementById("step3q6-3").checked) // installation, configuraitno or integration services 
       {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += "<li>When providing installation, configuration or integration services for ICT, the Contractor shall not reduce the original ICT item's level of Section 508 conformance prior to the services being performed.</li>";
       }
       if(document.getElementById("step3q6-4").checked) // && branditems == false) // maintenance as long as it is NOT brand name
       {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += '<li>When providing maintenance upgrades, substitutions, and replacements to ICT, the contractor shall not reduce the original ICT’s level of Section 508 conformance prior to upgrade, substitution or replacement. The agency reserves the right to request an Accessibility Conformance Report (ACR) for proposed upgrades, substitutions and replacements prior to acceptance. The ACR should be created using the on the Voluntary Product Accessibility Template Version 2.2 508 (or successor versions).  The template can be located at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a></li>';
       }
       if(document.getElementById("step3q6-6").checked || document.getElementById("step3q6-8").checked) // PaaS or SaaS (not IaaS)
       {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
         OutputHTML += '<li>When providing Platform as a Service (PaaS) or Software as a Service (SaaS), the contractor shall ensure services conform to the applicable Section 508 standards (including the requirements in Chapter 5 for software and WCAG Level A and AA Level 2.0 success criteria for web and software.&nbsp; When the requirements in Chapter 5 do not address one or more software functions, the Contractor shall ensure conformance to the Functional Performance Criteria specified in Chapter 3.)&nbsp; The agency reserves the right to request an Accessibility Conformance Report (ACR) for PaaS and SaaS offerings. The ACR should be created using the Voluntary Product Accessibility Template Version 2.2 508 (or later). The template can be located at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a></li>';
       }
       if(document.getElementById("step3q6-5").checked || document.getElementById("step3q6-6").checked || document.getElementById("step3q6-8").checked || document.getElementById("step3q6-9").checked) // Appears whenever IaaS, PaaS, SaaS, or other cloud services is checked
       {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += '<li>When providing cloud hosting services (Infrastructure as a Service, Platform as a Service, Software as a Service, etc.) the Contractor shall ensure user administrative screens, dashboards and portals used to configure, and monitor cloud services conform to the Section 508 standards.</li>';
        OutputHTML += '<li>The Contractor shall ensure cloud hosting services shall not reduce the level of Section 508 conformance for ICT migrated to the cloud hosting environment. </li>'; 
       }
       if(document.getElementById("step3q6-0").checked || document.getElementById("step3q6-11").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-10").checked) // Appears if web-based content, software, electronic docs, technology, or hardware are checked
       {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
         OutputHTML += '<li>When developing or modifying ICT, the Contractor is required to validate ICT deliverables for conformance to the applicable Section 508 requirements.  Validation shall occur on a frequency that ensures Section 508 requirements is evaluated within each iteration and release that contains user interface functionality.</li>';
       }
       if(document.getElementById("step3q6-3").checked || document.getElementById("step3q6-0").checked || document.getElementById("step3q6-11").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-10").checked) // Developing or modifying web-based content and applications (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts. OR Developing or modifying software (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts). OR Developing or modifying electronic documents and forms provided in a Microsoft Office or Adobe PDF format OR Developing or modifying technology that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.) OR Developing or modifying hardware, including closed systems (for example – kiosks) OR Installation, configuration, or integration services
      {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += "<li>When modifying, installing, configuring or integrating commercially available or government-owned ICT, the Contractor shall not reduce the original ICT Item’s level of Section 508 conformance.</li>";
      }
      if(document.getElementById("step3q6-0").checked) // Developing or modifying web
      {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += '<li>When developing or modifying web based and electronic content components, except for electronic documents and non-fillable forms provided in a Microsoft Office or Adobe PDF format, the Contractor shall demonstrate conformance to the applicable Section 508 standards (including WCAG 2.0 Level A and AA Success Criteria).</li>';
      }
      if(document.getElementById("step3q6-1").checked) // Developing or modifying electronic documents and forms provided in a Microsoft Office or Adobe PDF format
      {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += '<li>When developing or modifying electronic documents and forms provided in a Microsoft Office or Adobe PDF format, the Contractor shall demonstrate conformance to the applicable to the applicable Section 508 standards (including WCAG Level A and AA Level 2.0 Success Criteria) by conducting testing.</li>';
      }
      if(document.getElementById("step3q6-2").checked) // Developing or modifying technology that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.)
      {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += '<li>When developing or modifying ICT deliverables that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or when the capability is provided to enable end users to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.), the Contractor shall demonstrate the ability to ensure these outputs conform to the applicable Section 508 standards (including WCAG 2.0 Level A and AA Success Criteria).&nbsp; The Contractor shall demonstrate conformance by conducting testing and reporting test results based on representative sample outputs.</li>';
      }
      if(document.getElementById("step3q6-11").checked) // Developing or modifying software (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts).
      {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += '<li>When developing or modifying software functions of ICT, the Contractor shall demonstrate conformance to the applicable Section 508 standards (including the requirements in Chapter 5 and WCAG 2.0 Level A and AA Success Criteria). When the requirements in Chapter 5 do not address one or more software functions, the Contractor shall demonstrate conformance to the Functional Performance Criteria specified in Chapter 3. The Contractor shall use a test process capable of validating conformance to all applicable Section 508 standards for software functionality delivered pursuant to this contract. </li>';
      }
      if(document.getElementById("step3q6-10").checked) // hardware
      {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
      OutputHTML += '<li>When developing or modifying hardware components of ICT, including closed systems (for example &ndash; kiosks), the Contractor shall demonstrate conformance to the applicable Section 508 standards (including the Chapter 4 hardware requirements).&nbsp; Where the requirements in Chapters 4 do not address one or more functions of ICT, the Contractor shall demonstrate conformance to the Functional Performance Criteria specified in Chapter 3.&nbsp; The Contractor shall use a test process capable of validating conformance to all applicable Section 508 standards for hardware functionality delivered pursuant to this contract.</li>';
      }
      if(document.getElementById("step4q7-6").checked==false && document.getElementById("step3q6-7").checked == false)
      {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='techservices'></div>", "<div id='techservices'><h2>1."+numbering+"&nbsp;Section 508 Requirements for Technology Services (include in the SOW, PWS, or SOO)</h2></div>");
        }
          OutputHTML += '<li>Contractor personnel shall possess the knowledge, skills and abilities necessary to address the accessibility requirements in this work statement.</li>';
      }
      OutputHTML += "</ol></div>";
      numbering++;
      var allexceptionsapplied = false;
      var fruits = [];
      for(i = 0; i < unique_array.length; i++)
      {
          var str = unique_array[i].replace(/\s/g, '');
          if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
          {
              fruits.push("true");
          }
          else
          {
              fruits.push("false");
          }
      }
        if(fruits.length > 0)
        {
            if(fruits.indexOf("false") < 0)
            {
                allexceptionsapplied = true;
            }
            else
            {
                allexceptionsapplied = false;
            }
        }
      
      var DeliverablesHeader = false;
      OutputHTML += "<div id='Deliverables508Header'></div>";
      OutputHTML += "<div id='numberingspace'><ol>";
      if(document.getElementById("step3q6-0").checked || document.getElementById("step3q6-11").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-10").checked) // Developing or modifying web-based content and applications (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts. OR Developing or modifying software (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts). OR Developing or modifying electronic documents and forms provided in a Microsoft Office or Adobe PDF format OR Developing or modifying technology that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.) OR Developing or modifying hardware, including closed systems (for example – kiosks) 
      {
        DeliverablesHeader = true;
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Deliverables (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='Deliverables508Header'></div>", "<div id='Deliverables508Header'><h2>1."+numbering+"&nbsp;Section 508 Deliverables (include in the SOW, PWS, or SOO)</h2></div>");
        }
        OutputHTML += "<li><strong>Section 508 Test Plans</strong>: When developing or modifying ICT pursuant to this contract, the Contractor shall provide a detailed Section 508 Conformance Test Plan. The Test Plan shall describe the scope of components that will be tested, an explanation of the test process that will be used, when testing will be conducted during the project development life cycle, who will conduct the testing, how test results will be reported, and any key assumptions.</li><li><strong>Section 508 Test Results</strong>: When developing or modifying ICT pursuant to this contract, the Contractor shall provide test results in accordance with the Section 508 Requirements for Technology Services provided in this solicitation.</li>";
      }

      var oranges = [];
      var trueorfalseforACR = false;
      for(i = 0; i < unique_array.length; i++)
      {
          var str = unique_array[i].replace(/\s/g, ''); // get product name

          //is this product checked off in Electronic Content?
          for(x = 0; x <= 10; x++)
          {
            if(document.getElementById("electroniccontentlist-"+x+"-"+str).checked)
            {
              oranges.push("true");
            }
          }
          //is this product checked off in Software?
          for(x = 0; x <= 4; x++)
          {
            if(x == 3)
            {
              continue;
            }
            if(document.getElementById("softwarelist-"+x+"-"+str).checked)
            {
              oranges.push("true");
            }
          }
          //is this product checked off in Hardware?
          for(x = 0; x <= 12; x++)
          {
            if(x == 10)
            {
              continue;
            }
            if(document.getElementById("hardwarelist-"+x+"-"+str).checked)
            {
              oranges.push("true");
            }
          }
      }
      if(oranges.length > 0)
        {
            if(oranges.indexOf("false") < 0)
            {
              trueorfalseforACR = true;
            }
            else
            {
              trueorfalseforACR = false;
            }
        }
      if(trueorfalseforACR == true || document.getElementById("step3q6-0").checked || document.getElementById("step3q6-11").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-10").checked) 
      {
        if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Deliverables (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='Deliverables508Header'></div>", "<div id='Deliverables508Header'><h2>1."+numbering+"&nbsp;Section 508 Deliverables (include in the SOW, PWS, or SOO)</h2></div>");
        }
        DeliverablesHeader = true;
        OutputHTML += "<li><strong>Section 508 Accessibility Conformance Reports</strong>: For each ICT item offered through this contract (including commercially available products, and solutions consisting of ICT that are developed or modified pursuant to this contract), the Offeror shall provide an Accessibility Conformance Report (ACR) to document conformance claims against the applicable Section 508 standards. &nbsp;The ACR shall be based on the Voluntary Product Accessibility Template Version 2.0 508 (or successor versions). The template can be found at <a href='https://www.itic.org/policy/accessibility/vpat'>https://www.itic.org/policy/accessibility/vpat</a>. Each ACR shall be completed by following all of the instructions provided in the template, including an explanation of the validation method used as a basis for the conformance claims in the report.</li>";
      }

      var apples = [];
      var trueorfalseforOther508Documentation = false;
      for(i = 0; i < unique_array.length; i++)
      {
          var str = unique_array[i].replace(/\s/g, ''); // get product name

          //is one of the High Risk Criteria checked?
          for(x = 0; x <= 8; x++)
          {
            if(x == 6)
            {
              continue;
            }
            if(document.getElementById("step4q7-"+x).checked)
            {
              apples.push("true");
            }
          }
      }
      if(apples.length > 0)
        {
            if(apples.indexOf("false") < 0)
            {
              trueorfalseforOther508Documentation = true;
            }
            else
            {
              trueorfalseforOther508Documentation = false;
            }
        }
      if(trueorfalseforOther508Documentation == true && document.getElementById("step3q6-0").checked || trueorfalseforOther508Documentation == true && document.getElementById("step3q6-11").checked || trueorfalseforOther508Documentation == true && document.getElementById("step3q6-1").checked || trueorfalseforOther508Documentation == true && document.getElementById("step3q6-2").checked || trueorfalseforOther508Documentation == true && document.getElementById("step3q6-10").checked) 
      {
      OutputHTML += "<li><strong>Other Section 508 Documentation: </strong>The following documentation shall be provided upon request for ICT items offered through this contract:<span id='numberingspace1'><ul><li>Documentation of features provided to help achieve accessibility and usability for people with disabilities.</li><li>Documentation on how to configure and install the ICT Item to support accessibility.</li><li>Documentation of core functions that cannot be accessed by persons with disabilities.</li><li>Documentation of remediation plans to address non-conformance to the Section 508 standards</li></ul></span></li>";
      if(OutputHTML.search("<h2>1."+numbering+"&nbsp;Section 508 Deliverables (include in the SOW, PWS, or SOO)</h2>") < 0)
        {
          OutputHTML = OutputHTML.replace("<div id='Deliverables508Header'></div>", "<div id='Deliverables508Header'><h2>1."+numbering+"&nbsp;Section 508 Deliverables (include in the SOW, PWS, or SOO)</h2></div>");
        }
      DeliverablesHeader = true;
      }

      OutputHTML += "</ol></div>";
       
       /* ------- APRIL 24 2020 THIS HAS BEEN COMMENTED OUT PER ART 2.1 REQUIREMENTS TO INSERT NEW 508 REQUIREMENTS FOR TECHNOLOGY SERVICES ----- I'M SAVING THIS IN CASE IF I NEED TO REVERSE BACK TO ORIGINAL REQUIREMENTS ----
       if(document.getElementById("step3q6-5").checked) // hosting
         {
            // THIS HAS BEEN REPLACED IN LINE 3104 // OutputHTML += "<li>When providing and managing hosting services for ICT, the contractor shall ensure the hosting service does not reduce the item&rsquo;s original level of Section 508 conformance before providing the hosting service.</li>";
         }
         if(document.getElementById("step3q6-3").checked || document.getElementById("step3q6-0").checked || document.getElementById("step3q6-11").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-10").checked) // Developing or modifying web-based content and applications (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts. OR Developing or modifying software (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts). OR Developing or modifying electronic documents and forms provided in a Microsoft Office or Adobe PDF format OR Developing or modifying technology that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.) OR Developing or modifying hardware, including closed systems (for example – kiosks) OR Installation, configuration, or integration services

         {
            OutputHTML += "<li>When modifying, installing, configuring or integrating commercially available or government-owned ICT, the Contractor shall not reduce the original ICT Item’s level of Section 508 conformance.</li>";
         }
         if(document.getElementById("step3q6-11").checked) // Developing or modifying software (including pilot, proof of concept efforts, and minimal viable product (MVP) efforts).
         {
            OutputHTML += '<li>When developing or modifying software functions of ICT, the Contractor shall demonstrate conformance to the applicable Section 508 standards (including the requirements in Chapter 5 and WCAG 2.0 Level A and AA Success Criteria). When the requirements in Chapter 5 do not address one or more software functions, the Contractor shall demonstrate conformance to the Functional Performance Criteria specified in Chapter 3. The Contractor shall use a test process capable of validating conformance to all applicable Section 508 standards for software functionality delivered pursuant to this contract.</li>';
         }
         if(document.getElementById("step3q6-4").checked) // Maintenance
         {
            OutputHTML += '<li>When providing maintenance upgrades, substitutions, and replacements to ICT, the contractor shall not reduce the original ICT’s level of Section 508 conformance prior to upgrade, substitution or replacement. The agency reserves the right to request an Accessibility Conformance Report (ACR) for proposed upgrades, substitutions and replacements prior to acceptance. The ACR should be created using the on the Voluntary Product Accessibility Template Version 2.2 508 (or successor versions).  The template can be located at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a></li>';
         }
         if(document.getElementById("step3q6-0").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked) // developing or modifying 3 items (web/software, delivered as Office or PDF docs, or software that generates electronic content)
         {
            OutputHTML += '<li>When developing or modifying ICT, the Contractor is required to validate ICT deliverables for conformance to the applicable Section 508 requirements.  Validation shall occur on a frequency that ensures Section 508 requirements is evaluated within each iteration and release that contains user interface functionality.</li>';
            OutputHTML += '<li>The Contractor shall provide a Section 508 Conformance Test Plan for the ICT deliverables developed and modified pursuant to this contract. The Test Plan shall describe the scope of components that will be tested, an explanation of the test process that will be used, when testing will be conducted during the project development life cycle, who will conduct the testing, how test results will be reported, and any key assumptions. </li>';
            OutputHTML += '<li>The Contractor shall validate deliverables and report conformance to the Section 508 standards on a frequency that ensures validation is performed within each iteration and release that contains user interface functionality.</li>';
         }
         if(document.getElementById("step3q6-0").checked) // Developing or modifying web and software
         {
            OutputHTML += '<li>When developing or modifying web based and electronic content components, except for electronic documents and non-fillable forms provided in a Microsoft Office or Adobe PDF format, the Contractor shall demonstrate conformance to the applicable Section 508 standards (including WCAG 2.0 Level A and AA Success Criteria).</li>';
            OutputHTML += '<li>When developing or modifying software functions of ICT, the Contractor shall demonstrate conformance to the applicable Section 508 standards (including the requirements in Chapter 5 and WCAG 2.0 Level A and AA Success Criteria).&nbsp; When the requirements in Chapter 5 do not address one or more software functions, the Contractor shall demonstrate conformance to the Functional Performance Criteria specified in Chapter 3.&nbsp;<ul><li>The Contractor shall use a test process capable of validating conformance to all applicable Section 508 standards for software functionality delivered pursuant to this contract.</li></ul></li>';
         }
         if(document.getElementById("step3q6-1").checked) // Developing or modifying electronic documents and forms provided in a Microsoft Office or Adobe PDF format
         {
            OutputHTML += '<li>When developing or modifying electronic documents and non-fillable forms provided in a Microsoft Office or Adobe PDF format, the Contractor shall demonstrate conformance to the applicable to the applicable Section 508 standards (including WCAG Level A and AA Level 2.0 Success Criteria) by conducting testing. </li>';
         }
         if(document.getElementById("step3q6-2").checked) // Developing or modifying technology that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.)
         {
            OutputHTML += '<li>When developing or modifying ICT deliverables that contain the ability to automatically generate electronic documents and forms in Microsoft Office and Adobe formats, or when the capability is provided to enable end users to design and author web based electronic content (i.e. surveys, dashboards, charts, data visualizations, etc.), the Contractor shall demonstrate the ability to ensure these outputs conform to the applicable Section 508 standards (including WCAG 2.0 Level A and AA Success Criteria).&nbsp; The Contractor shall demonstrate conformance by conducting testing and reporting test results based on representative sample outputs. For outputs produced as Microsoft Office and Adobe PDF file formats, the Contractor shall use the test methods published under &ldquo;Accessibility Tests for Documents&rdquo;, which are published at&nbsp; <a href="https://www.dhs.gov/compliance-test-processes">https://www.dhs.gov/compliance-test-processes</a>.&nbsp; For outputs produced as web based electronic content.</li>';
         }
         if(document.getElementById("step3q6-0").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-3").checked || document.getElementById("step3q6-4").checked || document.getElementById("step3q6-5").checked || document.getElementById("step3q6-6").checked || document.getElementById("step3q6-8").checked || document.getElementById("step3q6-9").checked || document.getElementById("step3q6-10").checked)
         {
             OutputHTML += '<li>Contractor personnel shall possess the knowledge, skills and abilities necessary to address the applicable revised Section 508 Standards for each ICT.</li>';
         }
         if(document.getElementById("step3q6-10").checked) // hardware
         {
          OutputHTML += '<li>When developing or modifying hardware components of ICT, including closed systems (for example &ndash; kiosks), the Contractor shall demonstrate conformance to the applicable Section 508 standards (including the Chapter 4 hardware requirements).&nbsp; Where the requirements in Chapters 4 do not address one or more functions of ICT, the Contractor shall demonstrate conformance to the Functional Performance Criteria specified in Chapter 3.&nbsp; The Contractor shall use a test process capable of validating conformance to all applicable Section 508 standards for hardware functionality delivered pursuant to this contract.<ul><li>The Contractor shall report on the level of conformance achieved with the applicable Section 508 standards using an Accessibility Conformance Report (ACR) based on the Voluntary Product Accessibility Template Version 2.0 508 (or later). The Voluntary Product Accessibility Template is published at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a>.</li></ul></li>';
         }
         if(document.getElementById("step3q6-6").checked || document.getElementById("step3q6-8").checked) // if PaaS or SaaS
         {
          OutputHTML += '<li>When providing Platform as a Service (PaaS) or Software as a Service (SaaS), the contractor shall ensure services confirm to the applicable Section 508 standards (including the requirements in Chapter 5 for software and WCAG Level A and AA Level 2.0 success criteria for web and software.&nbsp; When the requirements in Chapter 5 do not address one or more software functions, the Contractor shall ensure conformance to the Functional Performance Criteria specified in Chapter 3.)&nbsp; The agency reserves the right to request an Accessibility Conformance Report (ACR) for PaaS and SaaS offerings. The ACR should be created using the Voluntary Product Accessibility Template Version 2.2 508 (or later). The template can be located at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a></li>'
            if(document.getElementById("step3q6-6").checked == false || document.getElementById("step3q6-8").checked == false)
            {
              OutputHTML += '<li>When providing cloud hosting services (Infrastructure as a Service, Platform as a Service, Software as a Service, etc.) the Contractor shall ensure user administrative screens, dashboards and portals used to configure, and monitor cloud services conform to the Section 508 standards.</li>';
              OutputHTML += '<li>The Contractor shall ensure cloud hosting services shall not reduce the level of Section 508 conformance for ICT migrated to the cloud hosting environment. </li>'; 
            }
         }
         if(document.getElementById("step3q6-5").checked || document.getElementById("step3q6-9").checked) // if IaaS or other cloud services
         {
          OutputHTML += '<li>When providing cloud hosting services (Infrastructure as a Service, Platform as a Service, Software as a Service, etc.) the Contractor shall ensure user administrative screens, dashboards and portals used to configure, and monitor cloud services conform to the Section 508 standards.</li>';
          OutputHTML += '<li>The Contractor shall ensure cloud hosting services shall not reduce the level of Section 508 conformance for ICT migrated  to the cloud hosting environment. </li>'; 
         }
          OutputHTML += '<li>Exceptions for this work statement  and only the exceptions described herein may be applied. Exceptions for this work statement have been determined only the exceptions described herein may be applied.</li>';
          if(unique_array.length === 1)
         {
                var str = unique_array[0].replace(/\s/g, '');
              if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() != "NEA")
              {
                  return false;
              }
        }
        else if(exceptiontoallICT == true)
        {
          return false;
        }
         var trueorfalseforItOitem11 = false;
         
         var fruits1 = [];
        for(i = 0; i < unique_array.length; i++)
      {
          var str = unique_array[i].replace(/\s/g, '');
          if($("input[name='ictexceptionsradiobuttonsfor"+str+"']:checked").val() == "NEA")
          {
            var str1 = $("input[name='Step2Q32RadioButtons-"+str+"']:checked").val();
            var str2 = $("input[name='Step2Q33RadioButtons-"+str+"']:checked").val();
            var str3 = $("input[name='Step2Q34RadioButtons-"+str+"']:checked").val();
            if(document.getElementById("electroniccontentlist-11-"+str).checked && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
            {
                if(document.getElementById("step3q6-0").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-3").checked || document.getElementById("step3q6-4").checked || document.getElementById("step3q6-5").checked)
                {
                    fruits1.push("true");
                }
            }
            else if(str1 === "Step2Q32No-"+str && str2 === "Step2Q33No-"+str && str3 === "Step2Q34No-"+str && document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
            {
                fruits1.push("true");
            }
            else
            {
                fruits1.push("false");
            }
          }
          else
          {
              
          }
      }
        if(fruits1.length > 0)
        {
            if(fruits1.indexOf("false") < 0)
            {
                trueorfalseforItOitem11 = true;
            }
            else
            {
                trueorfalseforItOitem11 = false;
            }
        }
         
         if(exceptiontoallICT != true && trueorfalseforItOitem11 != true)
         {
        //   OutputHTML += '<li>Where ICT conforming to one or more requirements in the Revised 508 Standards is not commercially available, the agency shall procure the ICT that best meets the Revised 508 Standards consistent with the agency’s business needs, in accordance with 36 CFR E202.7. Any selection of a product or service that meets less accessibility standards due to a significant difficulty or expense shall only be permitted under an undue burden claim and requires authorization.</li>';
         }
         OutputHTML += "</ol>";

        if(trueorfalseforItOitem11 == true)
        {
            if(document.getElementById("step3q6-7").checked)
            {
                return false; 
            }
        }
*/ 
/* OLD ART 2.0 INSTRUCTIONS TO OFFERORS AND ACCEPTANCE CRITERIA STARTS HERE --- SAVING THIS IN CASE IF I NEED TO RE-ENABLE IT
         //------------------------------------------------------
         // INSTRUCTIONS TO OFFERORS SECTION
         //------------------------------------------------------
        //  OutputHTML += "<hr /><strong>Instructions:</strong> Please include the following language in your solicitation package, and include with any associated ITAR approval requests.  If you do not include this language in your package, you will not receive information from vendors needed to determine if they meet the accessibility requirements. This language can be included in the SOW or in other parts of the solicitation package based on the solicitation type. The following instructions are intended to provide offerors guidance on how to document the manner in which their proposed solution addressed the Section 508 requirements outlined in the previous section.  This documentation shall be included with their proposal.  These instructions shall also be included with any other instructions provided to potential offerors on how to respond to the solicitation. <strong>Caution</strong>:  Do not misconstrue these instructions to be Section 508 requirements, evaluation factors, or acceptance criteria.<hr />";
         
            var instructionstoofferors = "<h2 id='iot'><strong>Proposal Instructions to Offerors</strong></h2><ol>";
         var trueorfalseforItOitem1 = false;
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-11-"+str).checked)
         {
             trueorfalseforItOitem1 = true;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-1-"+str).checked)
         {
             trueorfalseforItOitem1 = true;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-2-"+str).checked)
         {
             trueorfalseforItOitem1 = true;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-3-"+str).checked)
         {
             trueorfalseforItOitem1 = true;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-4-"+str).checked)
         {
             trueorfalseforItOitem1 = true;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-6-"+str).checked)
         {
             trueorfalseforItOitem1 = true;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-0-"+str).checked)
         {
             trueorfalseforItOitem1 = false;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-5-"+str).checked)
         {
             trueorfalseforItOitem1 = false;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-7-"+str).checked)
         {
             trueorfalseforItOitem1 = false;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-8-"+str).checked)
         {
             trueorfalseforItOitem1 = false;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-9-"+str).checked)
         {
             trueorfalseforItOitem1 = false;
         }
         if(document.getElementById("softwarelist-5-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked && document.getElementById("electroniccontentlist-10-"+str).checked)
         {
             trueorfalseforItOitem1 = false;
         }
        
         if(exceptiontoallICT != true && trueorfalseforItOitem11 != true && trueorfalseforItOitem1 != true)
         {
            var myElem = OutputHTML.includes("<h2 id='iot'>");
            if (myElem === false)
            {
                OutputHTML += instructionstoofferors;
            }
            OutputHTML += '<li>For each commercially available Information and Communications Technology (ICT) item offered through this contract, the Offeror shall provide an Accessibility Conformance Report (ACR).&nbsp; The ACR shall be created using the Voluntary Product Accessibility Template Version 2.0 508 (or later). The template can be found at <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a>. Each ACR shall be completed in accordance with all the instructions provided in the VPAT template.&nbsp;&nbsp; Each ACR must address the applicable Section 508 requirements referenced in the Work Statement.&nbsp; Each ACR shall state exactly how the ICT meets the applicable standards in the remarks/explanations column, or through additional narrative.&nbsp; All “Supports”, “Supports with Exceptions”, “Does Not Support”, and “Not Applicable” (N/A) responses must be explained in the remarks/explanations column or through additional narrative.&nbsp; The offeror is cautioned to address each standard individually and with specificity, and to be clear whether conformance is achieved throughout the entire ICT Item (for example - user functionality, administrator functionality, and reporting), or only in limited areas of the ICT Item.&nbsp; The ACR shall provide a description of the evaluation methods used to support Section 508 conformance claims.&nbsp;&nbsp; The agency reserves the right, prior to making an award decision, to perform testing on some or all of the Offeror&rsquo;s proposed ICT items to validate Section 508 conformance claims made in the ACR.</li>';
         }
         if(document.getElementById("step3q6-0").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-3").checked || document.getElementById("step3q6-4").checked || document.getElementById("step3q6-5").checked || document.getElementById("step3q6-6").checked || document.getElementById("step3q6-8").checked || document.getElementById("step3q6-9").checked || document.getElementById("step3q6-10").checked)
         {
            var myElem = OutputHTML.includes("<h2 id='iot'>");
            if (myElem === false)
            {
                OutputHTML += instructionstoofferors;
            }
            OutputHTML += '<li>For each ICT Item that will be developed, modified, installed, configured, integrated, maintained, or hosted by the contractor pursuant to this contract, the offeror shall provide an acknowledgement of the Section 508 requirements and a detailed explanation of the Offerors plan to ensure conformance with the requirements. The Offeror shall also describe the evaluation methods that will be used to validate for conformance to the Section 508 Standards.</li>';

            if(document.getElementById("step3q6-2").checked)
            {
              OutputHTML += '<li>For each ICT Item that will be developed, modified, installed, configured, integrated, maintained, or hosted by the contractor pursuant to this contract, the offeror shall provide an acknowledgement of the Section 508 requirements and a detailed explanation of the Offerors plan to ensure conformance with the requirements. The Offeror shall also describe the evaluation methods that will be used to validate for conformance to the Section 508 Standards.</li>';
            }

            if(document.getElementById("step3q6-0").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-10").checked)
            {
              OutputHTML += '<li>Describe your approach to ensuring the information and communications technology deliverables will conform to the Section 508 requirements in this solicitation, including those for custom development, modification and configuration of existing products, installation and integration, ongoing maintainence, hosting and support. In your proposal response, describe:<ul><li>Your organization&rsquo;s accessibility policy (provide a link if publicly available)</li><li>The life cycle processes that will be used to ensure accessibility</li><li>The testing approach(s) your organization will use to validate conformance to the Section 508 requirements, including the methodologies and tools that will be used.</li><li>Description of known Section 508 issues and constraints with technology components that will be used, modified, or configured; Contractor plans for features that do not fully conform to the Section 508 Standards, and recommended alternative means for users who have disabilities for features that Contractor will not be able to make accessible.</li></ul></li>';
            }
         }
        
         var trueorfalse = false;
         for(var i = 0; i < unique_array.length; i++)
         {
            var str = unique_array[i].replace(/\s/g, '');
            if(document.getElementById("Step2Q42Yes-"+str) !== null)
            {
             if(document.getElementById("Step2Q42Yes-"+str).checked)
             {
                trueorfalse = true;
             }
            }
         }
         if(trueorfalse === true)
         {
            if(exceptiontoallICT != true)
            {
                var myElem = OutputHTML.includes("<h2 id='iot'>");
            if (myElem === false)
                {
                    OutputHTML += instructionstoofferors;
                }
            OutputHTML += '<li>For each commercially available authoring tool offered that generates electronic content (e.g., an authoring tool that is used to create html pages, reports, surveys, charts, dashboards, etc.), the Offeror shall describe the level of Section 508 compliance supported for the content that can be generated. </li>';
            }
         }
        if(document.getElementById("step4q7-0").checked || document.getElementById("step4q7-1").checked || document.getElementById("step4q7-2").checked || document.getElementById("step4q7-3").checked || document.getElementById("step4q7-4").checked || document.getElementById("step4q7-5").checked)
         {
            //  OutputHTML += '<li>The offeror shall provide describe accessibility remediation plans for features that don’t fully conform to the Section 508 Standards.</li>';
         }
         if(document.getElementById("step3q6-0").checked)
         {
            if(document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-3").checked || document.getElementById("step3q6-4").checked || document.getElementById("step3q6-5").checked)
            {
               OutputHTML += '<li>For each commercially available authoring tool offered that generates electronic content (example: an authoring tool that is used to create html pages, reports, surveys, charts, dashboards, etc.), the Offeror shall describe the level of 508 compliance supported for the content that can be generated. </li>';
               OutputHTML += '<li>The offeror shall provide describe accessibility remediation plans for features that don’t fully conform to the Section 508 Standards.</li>'
               //The Offeror is encouraged to also provide:<ul><li>Samples of accessible electronic content produced by the tool(s). Consider requesting samples that include a full range of user interface elements that are generated by the tool.</li><li>Information on the documentation available for authors on how the tool(s) can produce and validate accessible electronic content.</li></ul>
            }
         }
         if(document.getElementById("step4q7-0").checked || document.getElementById("step4q7-1").checked || document.getElementById("step4q7-2").checked || document.getElementById("step4q7-3").checked || document.getElementById("step4q7-4").checked || document.getElementById("step4q7-5").checked)
         {
            if(exceptiontoallICT != true)
            {
                var myElem = OutputHTML.includes("<h2 id='iot'>");
            if (myElem === false)
                {
                    OutputHTML += instructionstoolafferors;
                }
                OutputHTML += '<li>The offeror shall describe plans for features that do not fully conform to the Section 508 Standards.</li>';
            }
            // OutputHTML += '<li>The offeror shall describe their approach to incorporating universal design principles to ensure their ICT products or services are designed to support disabled users.</li><li>The offeror shall describe plans for features that do not fully conform to the Section 508 Standards.</li><li>The offeror shall describe "typical" user scenarios and tasks, including individuals with disabilities, to ensure fair and accurate accessibility testing of the ICT product or service being offered.</li>';
         }
		 //<li>The offeror shall provide a description of training they can provide to users on the accessibility features of the ICT product and services, as well as any associated training costs not included in the baseline proposal.</li>
         OutputHTML += "</ol>";

         //------------------------------------------------------
         // EVAULATION FACTOR SECTION
         //------------------------------------------------------
         // OutputHTML += '<hr /><strong>Instructions:</strong> Insert the following language into Evaluation Factors section of the solicitation.<hr /><h2><strong>Evaluation Factor</strong></h2>';
         // OutputHTML += "<ol><li>Section 508 Compliance: The Offeror shall demonstrate the capability to conform to the Section 508 requirements identified in this solicitation for all deliverables that contain Information and Communications Technology (ICT) for both commercially available products being offered, as well as services developing custom products or platforms.</li></ol>";
         //------------------------------------------------------
         // ACCEPTANCE CRITERIA SECTION
         //------------------------------------------------------
        //  OutputHTML += '<hr /><strong>Instructions:</strong> Insert the following language into the Acceptance Criteria section of the solicitation, and include with any associated ITAR approval requests. If the solicitation uses the FAR Uniform Contract Format (UCF), this text would be placed in Section E., Inspection and acceptance.  (See FAR 14.201-1, et. seq. and FAR 15.204-1, et. seq.)<hr />';
         OutputHTML += "<h2><strong>Acceptance Criteria</strong></h2><ol>";
         if(document.getElementById("step3q6-0").checked || document.getElementById("step3q6-1").checked || document.getElementById("step3q6-2").checked || document.getElementById("step3q6-3").checked)
         {
            if(exceptiontoallICT != true)
            {
                OutputHTML += '<li>Before accepting Information and Communications Technology (ICT) that are developed, modified, or configured according to this contract, the government reserves the right to require the contractor to provide the following:<ul id="numberingspace1"><li>Accessibility test results based on the required test methods.</li><li>Documentation of features provided to help achieve accessibility and usability for people with disabilities.</li><li>Documentation of core functions that cannot be accessed by persons with disabilities.</li><li>Documentation on how to configure and install the ICT Item to support accessibility.</li><li>Demonstration of the ICT Item&rsquo;s conformance to the applicable Section 508 Standards, (including the ability of the ICT Item to create electronic content &ndash; where applicable).</li></ul></li>';
            }
         }
         if(exceptiontoallICT != true)
            {
                OutputHTML += '<li>Before accepting ICT required under the contract, the government reserves the right to perform testing on required ICT items to validate the offeror&rsquo;s Section 508 conformance claims. If the government determines that Section 508 conformance claims provided by the offeror represent a higher level of conformance than what is actually provided to the agency, the government shall, at its option, require the offeror to remediate the item to align with the offeror&rsquo;s original Section 508 conformance claims prior to acceptance.</li>';
            }
         OutputHTML += "</ol></div>";
         OutputHTML += '<script> function SelectAllandCopy(){ var x = document.getElementById("ABC123").innerText;  var range = document.createRange(); range.selectNode(document.getElementById("ABC123"));   window.getSelection().addRange(range);    document.execCommand("copy");     alert("text copied, go ahead and paste!") }  <\/script>';
        
          //export to doc 
          OutputHTML += '<script>function getFormattedTime() {    var today = new Date();    var y = today.getFullYear();    var m = today.getMonth() + 1;    var d = today.getDate();    var h = today.getHours();    var mi = today.getMinutes();    var s = today.getSeconds();    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;}<\/script>';
        OutputHTML += '<script> function Export2Doc(element, filename = ""){    var preHtml = "<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'><title>Export HTML To Doc</title></head><body>";    var postHtml = "</body></html>";    var html = preHtml+document.getElementById("ABC123").innerHTML+postHtml;     var blob = new Blob([\'ufeff\', html], {        type: \'application/msword\'    });         var url = \'data:application/vnd.ms-word;charset=utf-8,\' + encodeURIComponent(html); filename = filename?filename+\'.doc\':\'ART 508 Solicitation Language.doc\'; var downloadLink = document.createElement("a");   document.body.appendChild(downloadLink);     if(navigator.msSaveOrOpenBlob ){        navigator.msSaveOrOpenBlob(blob, filename);    }else{ downloadLink.href = url;        downloadLink.download = filename;        downloadLink.click();    }   document.body.removeChild(downloadLink);} <\/script>';


    if(unique_array.length == 1) // brand name products output
    {
      var str = unique_array[0].replace(/\s/g, '');
      if(document.getElementById("Step1Q1-0").checked && document.getElementById("Step1Q1-1").checked == false && document.getElementById("electroniccontentlist-11-"+str).checked && document.getElementById("softwarelist-0-"+str).checked && document.getElementById("Step2Q40Yes-"+str).checked && document.getElementById("hardwarelist-10-"+str).checked)
      {
        OutputHTML = "";
        generateGoBackButton();
        OutputHTML += "<p /><h2><strong>Section 508 Requirements</strong></h2><p>All software licenses delivered as part of this work statement that, by definition, are deemed ICT or that contain ICT shall conform to the revised regulatory implementation of Section 508 Standards, which are located at 36&nbsp;C.F.R.&nbsp;&sect;&nbsp;1194.1 &amp; Apps. A, C &amp; D, and available at <a href='https://www.ecfr.gov/cgi-bin/text-idx?SID=e1c6735e25593339a9db63534259d8ec&mc=true&node=pt36.3.1194&rgn=div5'>https://www.ecfr.gov/cgi-bin/text-idx?SID=e1c6735e25593339a9db63534259d8ec&mc=true&node=pt36.3.1194&rgn=div5</a>. If software maintenance is provided with the license, the Offeror shall provide an updated Accessibility Conformance Report (ACR) for each major product version update during the software maintainence term.&nbsp; The ACR should based on the Voluntary Product Accessibility Template Version 2.2 508 (or later). The template can be located at <a href='https://www.itic.org/policy/accessibility/vpat'>https://www.itic.org/policy/accessibility/vpat</a>.</p>";
      }
    } */
    // end of old ART 2.0 Instructions to Offerors and Acceptance Criteria 
    OutputHTML += '<script> function SelectAllandCopy(){ var x = document.getElementById("ABC123").innerText;  var range = document.createRange(); range.selectNode(document.getElementById("ABC123"));   window.getSelection().addRange(range);    document.execCommand("copy");     alert("text copied, go ahead and paste!") }  <\/script>';
              //print instructions only
      OutputHTML += '<script> function printDiv(divName) {     var printContents = document.getElementById(divName).innerHTML;     var originalContents = document.body.innerHTML;     document.body.innerHTML = printContents;     window.print();     document.body.innerHTML = originalContents;}  <\/script>';
        //export to doc 
        OutputHTML += '<script>function getFormattedTime() {    var today = new Date();    var y = today.getFullYear();    var m = today.getMonth() + 1;    var d = today.getDate();    var h = today.getHours();    var mi = today.getMinutes();    var s = today.getSeconds();    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;}<\/script>';
        OutputHTML += '<script> function Export2Doc(element, filename = ""){    var preHtml = "<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'><title>Export HTML To Doc</title></head><body>";    var postHtml = "</body></html>";    var html = preHtml+document.getElementById("ABC123").innerHTML+postHtml;     var blob = new Blob([\'ufeff\', html], {        type: \'application/msword\'    });         var url = \'data:application/vnd.ms-word;charset=utf-8,\' + encodeURIComponent(html); filename = filename?filename+\'.doc\':\'ART 508 Solicitation Language.doc\'; var downloadLink = document.createElement("a");   document.body.appendChild(downloadLink);     if(navigator.msSaveOrOpenBlob ){        navigator.msSaveOrOpenBlob(blob, filename);    }else{ downloadLink.href = url;        downloadLink.download = filename;        downloadLink.click();    }   document.body.removeChild(downloadLink);} <\/script>';
   } // end of function generateContractHTML
   function showModal()
   {
    $(document).ready(function () {
      // Check if user saw the modal
      var key = 'hadModal',
          hadModal = localStorage.getItem(key);

      // Show the modal only if new user
      if (!hadModal) {
        // document.getElementById("myBtn").click();
        localStorage.setItem(key, true);
      }
    });  
    // document.getElementById("myBtn").click();
   }
