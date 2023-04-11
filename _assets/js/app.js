// Add your custom javascript here
const list = document.querySelectorAll('.list');

function accordion(e){
    e.stopPropagation();
    if(this.classList.contains('active')){
        this.classList.remove('active');
        this.firstElementChild.setAttribute("aria-expanded", "false");
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
        this.firstElementChild.setAttribute("aria-expanded", "true");
    }
    else{
        for(i=0; i < list.length; i++){
            list[i].classList.remove('active');
            this.firstElementChild.setAttribute("aria-expanded", "false");
        }
        this.classList.add('active');
        this.firstElementChild.setAttribute("aria-expanded", "true");
    }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}
jQuery('.active').parent().parent().parent().parent().addClass('active');
jQuery('.active').parent().parent().addClass('active');
jQuery('li.active:not(".usa-current") > a:first-child').attr('aria-expanded','true');


$(document).ready(function (e) {

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
var topButton= $("#backtotop");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.css('display','block');
  } else {
    topButton.css('display','none');
  }
}


  // When the user clicks on the button, scroll to the top of the document
  topButton.click(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

});


async function generateTable(data, index)
{
  const obj = JSON.parse(data);
  setDropdownRule();
  //Change j according to the page
  var j = index;
  createPicklistColumn();
  createPicklistFilter(obj, j);
  generateTableData(obj, j);
}

function setDropdownRule()
{
  var rowFilter = document.getElementById('table-filter-list');
  var columnFilter = document.getElementById('column-filter-list');

  rowFilter.getElementsByClassName('dropdown')[0].onclick = 
  function() 
  {
    if(rowFilter.classList.contains('visible'))
      rowFilter.classList.remove('visible');
    else
      rowFilter.classList.add('visible');
  }

  columnFilter.getElementsByClassName('dropdown')[0].onclick = 
  function() 
  {
    if(columnFilter.classList.contains('visible'))
      columnFilter.classList.remove('visible');
    else
      columnFilter.classList.add('visible');
  }
  rowFilter.getElementsByClassName('dropdown')[0].onkeydown = 
  function(key) 
  {
    if((key.keyCode === 32)||(key.keyCode === 13))
    {
      if(rowFilter.classList.contains('visible'))
        rowFilter.classList.remove('visible');
      else
        rowFilter.classList.add('visible');
    }
  }
  columnFilter.getElementsByClassName('dropdown')[0].onkeydown  = 
  function(key) 
  {
    if((key.keyCode === 32)||(key.keyCode === 13))
    {
      if(columnFilter.classList.contains('visible'))
        columnFilter.classList.remove('visible');
      else
        columnFilter.classList.add('visible');
    }
  }
}
function createPicklistColumn()
{
  document.getElementById('column-filter').innerHTML =
  `
    <li><input aria-labelledby="dlabel" type="checkbox" id="Description" onclick="hideColumn(Description, 'columnD')" checked/><p id="dlabel">Description</p></li>
    <li><input aria-labelledby="pglabel" type="checkbox" id="PotentialGaps" onclick="hideColumn(PotentialGaps, 'columnPG')" checked/><p id="pglabel">Potential Gaps</p></li>
    <li><input aria-labelledby="rilabel" type="checkbox" id="RecommendedI" onclick="hideColumn(RecommendedI, 'columnRI')" checked/><p id="rilabel">Recommended Inclusions</p></li>
    <li><input aria-labelledby="rplabel" type="checkbox" id="RecommendedP" onclick="hideColumn(RecommendedP, 'columnRPL')" checked/><p id="rplabel">Recommended Policy Language</p></li>
  `
}
//This function will hide the column depend on the column name
function hideColumn(columnPicklistId, columnToRemove)
{
  var rowList = document.getElementsByClassName(columnToRemove);
  if(columnPicklistId.checked == false)
  {
    for(i = 0; i < rowList.length; i++)
    {
      rowList[i].style.display = "none";
    }
  }
  else
  {
    for(i = 0; i < rowList.length; i++)
    {
      rowList[i].style = null;
    }
  }
}
//Create picklist according to the data from JSON
function createPicklistFilter(obj, j)
{

  var picklistFilter = document.getElementById('picklist-filter');
  const filterMap = new Map(); //Use to check duplication
  for(i=0; i < obj.guidanceByPolicyType[j].content.length; i++)
  {
    if(filterMap.get(`${obj.guidanceByPolicyType[j].content[i].pt}`) == null)
    {
      if(i == 0)
      {
        picklistFilter.innerHTML = 
        `
        <li><input aria-labelledby="${obj.guidanceByPolicyType[j].content[i].pt.replace(/\s/g, "")}" type="checkbox" class="name" name="name" value="${obj.guidanceByPolicyType[j].content[i].pt}" /><p id="${obj.guidanceByPolicyType[j].content[i].pt.replace(/\s/g, "")}">${obj.guidanceByPolicyType[j].content[i].pt}</p></li>
        `;
        filterMap.set(`${obj.guidanceByPolicyType[j].content[i].pt}`, `${obj.guidanceByPolicyType[j].content[i].pt}`);
      }
      else
      {
      picklistFilter.innerHTML += 
        `
        <li><input aria-labelledby="${obj.guidanceByPolicyType[j].content[i].pt.replace(/\s/g, "")}" type="checkbox" class="name" name="name" value="${obj.guidanceByPolicyType[j].content[i].pt}" /><p id="${obj.guidanceByPolicyType[j].content[i].pt.replace(/\s/g, "")}">${obj.guidanceByPolicyType[j].content[i].pt}</p></li>
        `;
        filterMap.set(`${obj.guidanceByPolicyType[j].content[i].pt}`, `${obj.guidanceByPolicyType[j].content[i].pt}`);
      }
    }
  }
  $(".name").on("click", function() 
  {
    name_list = []
    $("#table-body tr").hide()
    var flag = 1
    $("input:checkbox[name=name]:checked").each(function(){
        flag = 0;
        var value = $(this).val().toLowerCase();
        $("#table-body tr").filter(function() 
        {
              if($(this).text().toLowerCase().indexOf(value) > -1)
                $(this).show()
        });
    });
      if(flag == 1)
        $("#table-body tr").show()
  });
}

//Generate the table using data
function generateTableData(obj, j)
{
  var tableDiv = document.getElementById('table-body');
  for(i=0; i < obj.guidanceByPolicyType[j].content.length; i++)
  {
    tableDiv.innerHTML += 
    `
      <tr>
        <td>${obj.guidanceByPolicyType[j].content[i].pt}</td>
        <td class="columnD">${obj.guidanceByPolicyType[j].content[i].description}</td>
        <td class="columnPG">${obj.guidanceByPolicyType[j].content[i].pg}</td>
        <td class="columnRI">${obj.guidanceByPolicyType[j].content[i].rInclusions}</td>
        <td class="columnRPL">${obj.guidanceByPolicyType[j].content[i].rPolicy}</td>
      </tr>
    `
  }
}

if(document.getElementById('policytype-table') != null)
{ 
  //Unable to fetch the data temporary create json file here, until the problem resolved.
  let data = 
  `
  {
    "guidanceByPolicyType":
    [
        {
        "title": "Acquisition and Procurement", 
        "content" :
        [
            {
                "pt": "Acquisition Management",
                "description": "Policies that apply to arrangement and administration of agreements, and management of performance of contract holders.",
                "pg": "No requirement for Section 508/ICT accessibility throughout the acquisition and procurement lifecycle.",
                "rInclusions": "Section 508/ICT accessibility requirements in acquisition and procurement lifecycle processes.<sup>1</sup>",
                "rPolicy": "The Contracting Officer must ensure that the applicable requirements for the current ICT Standards and Guidelines (36 C.F.R. § 1194) are incorporated into acquisition and procurement lifecycle processes, to include pre-award, award, and post-award phases. Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), requires [insert your agency] to ensure individuals with disabilities have access to the ICT it has acquired and procured."
            },
            {
                "pt": "Acquisition Management",
                "description": "Policies that apply to arrangement and administration of agreements, and management of performance of contract holders.",
                "pg": "Description of accessibility requirements for limited contract clauses in contracts for individuals with disabilities, but does not reference compliance to the Section 508 law, conformance to the ICT Standards and Guidelines, or additional ICT accessibility considerations.<sup>2</sup>",
                "rInclusions": "Compliance with the Section 508 law for various contract clauses in contracts as required by the Federal Acquisition Regulation (FAR).<sup>3</sup>",
                "rPolicy": "Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), requires [insert your agency] to provide accessible ICT to individuals with disabilities. The Section 508 law must be referenced in contract clauses for individuals with disabilities as required by Federal Acquisition Regulation (FAR) (48 C.F.R. § 52.222-36)."
            },
            {
                "pt": "Acquisition Management",
                "description": "Policies that apply to arrangement and administration of agreements, and management of performance of contract holders.",
                "pg": "No mention of a tool or resource to help identify and incorporate relevant accessibility requirements into procurement and contracting documentation.",
                "rInclusions": "Reference to the Accessibility Requirements Tool (ART) for guided assistance to identify and include relevant accessibility requirements into procurement and contracting documentation.",
                "rPolicy": "Those involved in the awarding and/or administration of contracts must ensure the applicable requirements for the current ICT Standards and Guidelines (36 C.F.R. § 1194) are included in procurement and contracting documentation. Refer to the <a href='https://app.buyaccessible.gov/'>Accessibility Requirements Tool (ART)</a> for guided assistance to identify relevant accessibility requirements."
            },
            {
                "pt": "Acquisition Management",
                "description": "Policies that apply to arrangement and administration of agreements, and management of performance of contract holders.",
                "pg": "Missing information on how to claim an exception for ICT for agency IT procurement and/or development projects.",
                "rInclusions": "Inclusion of information on how to claim an exception for ICT, as described in General Exceptions within the current ICT Standards and Guidelines.<sup>4</sup>",
                "rPolicy": "The Section 508 Program Manager must approve of ICT exceptions to the current ICT Standards and Guidelines (36 C.F.R. § 1194), including those described in E202.2 Legacy ICT Exception, E202.3 National Security Systems Exception, E202.4 Federal Contracts Exception, E202.5 ICT Functions Located in Maintenance or Monitoring Spaces Exception, E202.6 Undue Burden or Fundamental Alteration Exception, and E202.7 Best Meets Exception."
            }
        ]
        },
        {
        "title": "Administrative Services", 
        "content" :
        [
            {
              "pt": "Directives and Correspondence Management",
              "description": "Policies that apply to the processing, internal review, approval, and issuance of agency directives, external correspondence, and other official documents.",
              "pg": "Description of Section 508 of the Rehabilitation Act of 1973, as amended, with regard to agency official communication and guidance on required correspondence writing styles and formats, but excludes detailed requirements pertaining to Section 508 conformance of agency directives, orders, manuals, and instructions.<sup>2</sup>",
              "rInclusions": "Description that all agency official communication correspondence and directives, including those pertaining to digital signatures, must conform to the applicable requirements in the current ICT Standards and Guidelines.",
              "rPolicy": "[Insert your agency] points of contact drafting official agency communication correspondence, to include agency directives, orders, manuals, and instructions, must ensure writing styles and formats conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), including the use of electronic signature software to enable greater access for individuals with disabilities."
            },
            {
              "pt": "Directives and Correspondence Management",
              "description": "Policies that apply to the processing, internal review, approval, and issuance of agency directives, external correspondence and other official documents.",
              "pg": "Requirement for authors of internal directives to conduct a Section 508 conformance evaluation, but excludes purpose to ensure documents are accessible to individuals with disabilities, or any guidance on how to create an accessible document.<sup>3</sup>",
              "rInclusions": "Emphasis on Section 508 conformance evaluation goals for internal directives and correspondence with instructional guidance for accessible documents.",
              "rPolicy": "As part of internal directives management procedures, [insert your agency] points of contact drafting internal agency directives must follow the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure documents are digitally accessible to individuals with disabilities. Software and electronic content, including web and non-web content, must conform to the applicable requirements in the current ICT Standards and Guidelines."
            },
            {
                "pt": "Directives and Correspondence Management",
                "description": "Policies that apply to the processing, internal review, approval, and issuance of agency directives, external correspondence and other official documents. ",
                "pg": "Description of requirement for external directives to be written in plain language, but does not reference compliance with the Section 508 law or conformance to the current ICT Standards and Guidelines.<sup>4</sup>",
                "rInclusions": "Mentions conformance to the current ICT Standards and Guidelines for the creation of external directives, and provides guidance on how to conform to the applicable requirements in the current ICT Standards and Guidelines.",
                "rPolicy": "[Insert your agency] points of contact drafting agency external directives must ensure writing styles and formats conform to the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure documents are accessible to individuals with disabilities. Software and electronic content, including web and non-web content, must conform to the applicable requirements in the current ICT Standards and Guidelines."
            },
            {
                "pt": "Directives and Correspondence Management",
                "description": "Policies that apply to the processing, internal review, approval, and issuance of agency directives, external correspondence and other official documents.",
                "pg": "No mention of a Section 508 PM in general policy making work groups.",
                "rInclusions": "Established Section 508 PM role in agency policy making work groups and specific responsibilities for facilitating Section 508 compliance.<sup>5</sup>",
                "rPolicy": "[Insert your agency] policy making work groups should include an IT Accessibility/508 Program Manager (PM) with the responsibility of facilitating agency compliance with Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d)."
            },
            {
                "pt": "Forms Management",
                "description": "Policies that apply to the creation and management of forms for internal and external use.",
                "pg": "Lack of reference to ICT characteristics in form design requirements.",
                "rInclusions": "Requirement for the creation of Section 508 conformant forms to ensure instructions and data elements (checkboxes, text fields, etc.) are accessible.<sup>6</sup>",
                "rPolicy": "When designing forms, refer to the current ICT Standards and Guidelines (36 C.F.R. § 1194) for applicable provisions to ensure the data elements in those forms (checkboxes, text fields, etc.) are accessible to individuals with disabilities. Software and electronic content, including web and non-web content, must conform to the applicable requirements in the current ICT Standards and Guidelines."
            },
            {
                "pt": "Government IT Equipment and Services",
                "description": "Policies that apply to the procurement and handling of agency furnished or purchased IT equipment, including printing devices and other similar office equipment.",
                "pg": "Description of purchase process for printers, copiers and similar office equipment, but does not mention a requirement for these devices to be accessible.",
                "rInclusions": "Description of ICT office equipment and their accessibility characteristics incorporated into purchase processes of accessible office equipment.<sup>7</sup>",
                "rPolicy": "The process for purchasing printers, copiers, and similar office equipment must incorporate the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure equitable digital access for individuals with disabilities."
            },
            {
                "pt": "Government IT Equipment and Services",
                "description": "Policies that apply to the procurement and handling of agency furnished or purchased IT equipment, including printing devices and other similar office equipment.",
                "pg": "Exclusion of ICT-related accommodations for the supply of government-furnished or -purchased ICT equipment and services conformance to Section 508 requirements unless the ICT itself is an assistive technology.<sup>8</sup>",
                "rInclusions": "Mention of Section 508 conformance of ICT-related accommodations for IT equipment.",
                "rPolicy": "For reasonable accommodation requests granted in accordance with the Americans with Disabilities Act of 1990, as amended (42 U.S.C. § 12101), government furnished or purchased ICT office equipment or services provided to employees must conform to the current ICT Standards and Guidelines (36 C.F.R. § 1194). Individuals with disabilities must be able to access and use all supplied ICT office equipment or services for their work arrangement."
            },
            {
                "pt": "Travel, Training, and Conferences",
                "description": "Policies that apply to the sponsorship of and travel for federal meetings, training and conferences, including cost requirements.",
                "pg": "Omission of ICT-related accommodations, and ICT accessibility of materials and digital platforms used during events.",
                "rInclusions": "Description of ICT-related accommodations and coordination with the agency communications office to ensure Section 508 conformance of external presentation materials and facilitations using digital tools.<sup>9</sup>",
                "rPolicy": "The [insert your agency] communications office must ensure external presentation materials and use of digital tools at events conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            }
            
        ]
        },
        {
          "title": "Budget and Finance", 
          "content" :
          [
                {
                  "pt": "Financial Audit Oversight",
                  "description": "Policies that apply to the management of internal agency financial audits, in accordance with Generally Accepted Government Auditing Standards (GAGAS), and dissemination of financial audit reports.",
                  "pg": "No mention of accessibility of web content and other electronic content (e.g., Portable Document Format (PDF) files) created and maintained by the Office of the Inspector General (OIG).",
                  "rInclusions": "Emphasis on alignment of OIG web content and other electronic content (e.g., PDF files) to the current ICT Standards and Guidelines.<sup>2</sup>",
                  "rPolicy": "All electronic content released by the [insert your agency]-Office of Inspector General (OIG), including all web content and static documents, must conform to the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
                },
                {
                  "pt": "Financial Management",
                  "description": "Policies that apply to the accounting and control of funds required for agency operations.",
                  "pg":"No mention of ICT systems and ICT system characteristics, including accessibility, to support the system of internal controls needed to ensure the reliability of financial reporting.",
                  "rInclusions": "Mention of accessibility as part of ICT, generally considered to be one of the key components of internal control.",
                  "rPolicy": "All ICT systems used for the accounting and internal control of funds required for agency operations must be accessible to individuals with disabilities. These systems may consist of a combination of hardware, software, and electronic content, all of which must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
                },
                {
                  "pt": "Financial Plans and Budgets",
                  "description": "Policies that apply to planning, programming, and budgeting funds required for agency operations, in particular the operation of ICT systems.",
                  "pg":"Omission of the Section 508 standards in IT acquisitions language, including IT acquisitions related to budgeting and finance software.",
                  "rInclusions": "Incorporation of the Section 508 standards into IT acquisitions language to ensure that individuals with disabilities can access and use budgetary and financial data.<sup>3</sup>",
                  "rPolicy": "As part of the acquisition of budgeting and finance software, [insert your agency] must ensure that the software will conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure that individuals with disabilities are able to access budgetary and financial data."
                },
                {
                  "pt": "Financial Plans and Budgets",
                  "description": "Policies that apply to planning, programming, and budgeting funds required for agency operations, in particular the operation of ICT systems.",
                  "pg":"No information on ICT accessibility as part of the agency's budget for ICT spending for a specific product, project, or program.",
                  "rInclusions": "Emphasis on planning, programming, and budgeting for ICT accessibility and compliance with the Section 508 law, as part of the agency’s formulation of its IT budget.<sup>4</sup>",
                  "rPolicy": "All proposed costs associated with Section 508 compliance should be incorporated into annual budget formulation, including planning, programming, and budgeting."
                },
                {
                  "pt": "Reports Management",
                  "description": "Policies that apply to reporting on funds required for agency operations.",
                  "pg":"Omission of ICT accessibility/Section 508 requirements for ICT systems used for financial accounting and reporting.<sup>5</sup>",
                  "rInclusions": "Mention of ICT accessibility/Section 508 standards as part of financial accounting and reporting requirements, alongside other standards such as Generally Accepted Accounting Principles (GAAP) and the U.S. Government Standard General Ledger (USSGL).",
                  "rPolicy": "All ICT systems involved in financial accounting and reporting, including hardware, software, and web and non-web electronic content, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure that individuals with disabilities are able to access and use these systems."
                }
        ]
       },
        {
          "title": "Communications", 
          "content" :
          [
            {
              "pt": "Social Media",
              "description": "Policies that apply to relevant technologies, regulations and resources for using social media.",
              "pg": "Description of equal access for individuals with disabilities, but omits mention of Section 508 compliance or conformance.<sup>1</sup>",
              "rInclusions": "Reference the Section 508 standards for all social media content.",
              "rPolicy": "Social media content must conform to applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure individuals with disabilities have equal access to the content provided on non-federal social media services."
            },
            {
              "pt": "Survey Management",
              "description": "Policies that apply to survey materials distributed to recipients outside of and/or across the agency.",
              "pg": "Lacks language that Section 508 conformance is mandatory for agency survey submissions.<sup>2</sup>",
              "rInclusions": "Mandatory requirements for conformance to the current ICT Standards and Guidelines for all customer survey submissions, and provides description of accessibility characteristics in surveys",
              "rPolicy": "Agency surveys must be digitally accessible to all users, including individuals with disabilities, in conformance to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "Visual Communication",
              "description": "Policies that apply to graphic design, photos and portraits, video guidelines, and technical standards.",
              "pg": "Description of Section 508 provisions for visual information products, but does not include reference to Section 508 conformance.<sup>3</sup>",
              "rInclusions": "Mention of Section 508 provisions to ensure the agency's visual information products are accessible to individuals with disabilities and describe ICT accessibility standards.",
              "rPolicy": "Electronic information that requires vision, such as photos, graphics, video media, data visualization, and other images, must conform  to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "Website and Digital Content Communication",
              "description": "Policies that apply to guidelines and tools to ensure a consistent agency digital presence.",
              "pg": "Lack of reference to a regular cadence of accessibility audits as part of established agency assessment process of websites.",
              "rInclusions": "Assignment of appropriate office/point of contact (i.e., Office of the Chief Information Officer (OFCIO) or Section 508 PM) to conduct regular accessibility audits.",
              "rPolicy": "As part of [insert your agency] compliance with Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), the [insert your agency] Section 508 Program Manager (PM) should conduct and report on regular accessibility audits of agency website portfolios. Websites should be evaluated using [insert your agency]’s enterprise-wide test processes that align with the Section 508 ICT Testing Baseline for Web, a best practice of the Federal CIO Council Accessibility Community of Practice (ACOP)."
            },
            {
              "pt": "Website and Digital Content Communication",
              "description": "Policies that apply to guidelines and tools to ensure a consistent agency digital presence.",
              "pg": "Description of agency content creators and publishers role, but lacks clear roles and responsibilities including ensuring website content is accessible.",
              "rInclusions": "Mention of content creator and publisher responsibility to ensure website and mobile version of content is accessible.",
              "rPolicy": "[Insert your agency] content creators are responsible for the accuracy of web content, conformance to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), and for reviewing and updating content on a regular and recurring basis."
            },
            {
              "pt": "Website and Digital Content Communication",
              "description": "Policies that apply to guidelines and tools to ensure a consistent agency digital presence.",
              "pg": "Lacks reference to ensuring the development of any external digital content be accessible.",
              "rInclusions": "Requirement of Section 508 conformance for the development of all external digital content (e.g., documents, presentations, and PDFs).<sup>4</sup>",
              "rPolicy": "The development of all [insert your agency] external digital content (documents, presentations, PDFs, etc.) must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure content is accessible to individuals with disabilities."
            },
            {
              "pt": "Website and Digital Content Communication",
              "description": "Policies that apply to guidelines and tools to ensure a consistent agency digital presence.",
              "pg": "Discussion of agency branding templates and style guides, without mention of those resources conform to the applicable requirements in the current ICT Standards and Guidelines.<sup>5</sup>",
              "rInclusions": "Mention of Section 508 conformance in agency branding templates (for all document types) and style guides creation, including requirements that new employee resource templates and resulting documents be accessible.",
              "rPolicy": "[Insert your agency] branding templates and style guides must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure documents are accessible to individuals with disabilities."
            }
        ]
       },
        {
          "title": "Emergency Response", 
          "content" :
          [
            {
              "pt": "Continuity of Operations (COOP)",
              "description": "Policies that apply to efforts within the agency to ensure the operation of Primary Mission Essential Functions (PMEFs) during emergencies.<sup>2</sup>",
              "pg": "Discussion of access to ICT during an emergency, without mention of the Section 508 standards.<sup>3</sup>",
              "rInclusions": "Emphasis on accessibility of the emergency ICT systems and alternate location data connectivity.",
              "rPolicy": "All emergency ICT systems, including those at alternate sites such as mobile sites where recovery operations occur, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). Section 508 conformance helps sustain Primary Mission Essential Functions (PMEFs) during emergencies because it ensures that individuals with disabilities can access and operate from alternate locations emergency ICT systems."
            },
            {
              "pt": "Continuity of Operations (COOP)",
              "description": "Policies that apply to efforts within the agency to ensure the operation of PMEFs during emergencies.<sup>4</sup>",
              "pg": "Mention of ICT systems required to perform PMEFs without mention of accessibility characteristics of such systems.",
              "rInclusions": "Description of accessibility of ICT systems used for PMEFs.",
              "rPolicy": "All ICT systems used to perform Primary Mission Essential Functions (PMEFs) during emergencies must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to allow individuals with disabilities access to these systems. Section 508 conformance helps sustain PMEFs in emergencies because it ensures that individuals with disabilities can access emergency ICT systems."
            },
            {
              "pt": "Continuity of Operations (COOP)",
              "description": "Policies that apply to efforts within the agency to ensure the operation of PMEFs during emergencies.<sup>5</sup>",
              "pg": "Exclusion of ICT accessibility from the description of the provision of ICT systems for emergencies.",
              "rInclusions": "Emphasis on ICT accessibility in the provision of ICT systems for emergencies.",
              "rPolicy": "All ICT systems provisioned for emergencies must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), such that any ICT systems ultimately provided for emergencies are accessible to individuals with disabilities. Section 508 conformance helps sustain Primary Mission Essential Functions (PMEFs) (as defined by XXXXX policy) during emergencies because it ensures that individuals with disabilities can access emergency ICT systems."
            },
            {
              "pt": "Emergency Communications",
              "description": "Policies that apply to the reporting of emergency information to the appropriate agency entities",
              "pg": "Description of ICT systems used for reporting emergency information without mention of ICT accessibility.",
              "rInclusions": "Mention of ICT accessibility in descriptions of ICT systems used for reporting emergency information.",
              "rPolicy": "All ICT systems used for reporting emergency information to the appropriate interagency and intraagency entities must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). Individuals with disabilities must have digitally accessible ICT to assist in the communication of emergency information throughout the federal government."
            },
            {
              "pt": "Emergency Planning",
              "description": "Policies that apply to precautionary measures for emergencies.",
              "pg": "Discussion of internal websites for employees to share material on emergencies, including educational and training content, without mention of web accessibility.",
              "rInclusions": "Mention that internal websites, including associated educational and training content, is digitally accessible.<sup>6</sup>",
              "rPolicy": "Internal [insert your agency] websites for employees to share digital content on emergencies, including educational and training content, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). [Insert your agency] should evaluate these websites with test processes that aligns with the Section 508 ICT Testing Baseline for Web, a best practice recommended by the Federal CIO Council Accessibility Community of Practice (ACOP)."
            },
            {
              "pt": "Emergency Planning",
              "description": "Policies that apply to precautionary measures for emergencies.",
              "pg": "Discussion of an agency audible alarm system that omits description of how individuals with hearing impairments receive emergency notifications.",
              "rInclusions": "Discussion of the agency audible alarm system, including triggers to alternate communication channels for those with hearing impairments (e.g., visual, text, and email notifications).",
              "rPolicy": "Individuals with hearing impairments may not hear an audible alarm system. To conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), [insert your agency name]’s audible alarm system must also trigger alternative communication channels for those with hearing impairments. Alternative communication channels may include but are not limited to visual, text, and email notifications."
            },
            {
              "pt": "Emergency Planning",
              "description": "Policies that apply to precautionary measures for emergencies.",
              "pg": "Description of physical access control system policies and procedures, without mention of digital accessibility.",
              "rInclusions": "Description of physical access control system policies and procedures, alongside mention of digital accessibility and ICT system characteristics.",
              "rPolicy": "All ICT components of physical access control systems must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to allow authorized individuals with disabilities physical access to restricted areas and buildings. Importantly, these standards and guidelines apply to the ICT components of physical access control systems, including hardware and software, but not to the built environment in which such systems reside. Agency compliance with Section 508 must complement other physical access requirements provided in other sections of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d)."
            },
            {
              "pt": "Emergency Planning",
              "description": "Policies that apply to precautionary measures for emergencies.",
              "pg": "Description of ICT systems used for pay and pay reporting during emergencies, without description of ICT system characteristics, including ICT accessibility.",
              "rInclusions": "Description of accessibility of ICT systems used for pay and pay reporting during emergencies.",
              "rPolicy": "All ICT systems used for pay and pay reporting, including those operational during emergencies, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). [Insert your agency] must ensure the accessibility and usability of such systems for employees with disabilities."
            }
        ]
       },
        {
          "title": "human-resources-management", 
          "content" :
          [
            {
              "pt": "Attendance",
              "description": "Policies that apply to the hours and days that employees work, and to their leave time.",
              "pg": "Requirement of aids for those with disabilities to perform work, but not ICT aids specifically.",
              "rInclusions": "Requirement of physical and virtual ICT aids for those with disabilities to perform work.",
              "rPolicy": "[Insert your agency] must provide accessible and usable ICT via physical and virtual ICT aids, including hardware and software aids, that conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) for employees and contractors with disabilities to perform work."
            },
            {
              "pt": "Attendance",
              "description": "Policies that apply to the hours and days that employees work, and to their leave time.",
              "pg": "Description of ICT systems used for time and leave tracking, but not accessibility characteristics of such systems.",
              "rInclusions": "Description of accessibility characteristics of ICT systems used for time and leave tracking.",
              "rPolicy": "All ICT systems used for time and leave tracking, including hardware, software, and web and non-web electronic content, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure that these systems are accessible to employees and contractors with disabilities."
            },
            {
              "pt": "Career Transition",
              "description": "Policies that apply to hiring in the competitive and excepted service, and to employees requiring career transition assistance due to downsizing or restructuring.",
              "pg": "Mention of ICT systems used for hiring and career transitions, but not accessibility characteristics of such systems.",
              "rInclusions": "Description of accessibility characteristics of ICT systems used for hiring and career transitions.",
              "rPolicy": "All ICT systems used for hiring and career transitions, including hardware, software, and web and non-web electronic content, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure that these systems are accessible to employees and contractors with disabilities. "
            },
            {
              "pt": "Career Transition",
              "description": "Policies that apply to hiring in the competitive and excepted service, and to employees requiring career transition assistance due to downsizing or restructuring.",
              "pg": "Lack of detail on reasonable accommodations for those with disabilities pursuing career transitions.",
              "rInclusions": "Discussion of making reasonable accommodations, including ICT-related accommodations, for vacancy announcements and career transitions as required by 5 C.F.R. § 302.106.<sup>2</sup>",
              "rPolicy": "All vacancy announcements in the excepted service, including those for career transitions, must contain a statement about making reasonable accommodations, including ICT-related accommodations, as required by 5 C.F.R. § 302.106. The statement should emphasize that [insert your agency] will provide Section 508 conformant ICT to employees with disabilities. All ICT interfaces with the public related to vacancy announcements and career transition opportunities must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "Delegations of Authority",
              "description": "Policies that establish and describe the transfer of decision-making responsibility through agency-specific roles.",
              "pg": "Omission of Section 508 compliance or ICT accessibility from agency IT delegations related to acquisitions and procurement.<sup>3</sup>",
              "rInclusions": "Description of accessible ICT systems incorporated into agency IT delegations of purchase of ICT systems.",
              "rPolicy": "Individuals authorized to acquire and procure ICT must ensure that [insert your agency] complies with Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), and that the ICT conforms to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), including purchases of hardware, software, and web and non-web electronic content."
            },
            {
              "pt": "Delegations of Authority",
              "description": "Policies that establish and describe the transfer of decision-making responsibility through agency-specific roles.",
              "pg": "Omission of Section 508 compliance or ICT accessibility from agency IT delegations related to acquisitions and procurement.<sup>4</sup>",
              "rInclusions": "Description of accessible ICT systems incorporated into agency IT delegations of management of ICT systems.",
              "rPolicy": "Individuals authorized to manage ICT must ensure that [insert your agency] complies with Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), and that the ICT conforms to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), including purchases of hardware, software, and web and non-web electronic content"
            },
            {
              "pt": "Delegations of Authority",
              "description": "Policies that establish and describe the transfer of decision-making responsibility through agency-specific roles.",
              "pg": "In agency CFO delegations, omission of ICT accessibility as a consideration for financial management and accounting systems.",
              "rInclusions": "In agency CFO delegations, description of conformance to the Section 508 standards in financial management and accounting systems.<sup>5</sup>",
              "rPolicy": "All financial management and accounting ICT systems must be accessible to individuals with disabilities via [insert your agency] compliance to Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), and conformance of those systems to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), including purchases of hardware, software, and web and non-web electronic content."
            },
            {
              "pt": "Delegations of Authority",
              "description": "Policies that establish and describe the transfer of decision-making responsibility through agency-specific roles.",
              "pg": "Inclusion of privacy and cybersecurity agency-wide delegations for ICT systems, among others, but no mention of ICT accessibility.",
              "rInclusions": "Description of Section 508 requirements in agency-wide delegations for cybersecurity ICT systems.<sup>6</sup>",
              "rPolicy": "All ICT related to cybersecurity must be accessible to individuals with disabilities via conformance to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). [Insert your agency] must provide accessible ICT related to cybersecurity to comply with Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d)."
            },
            {
              "pt": "Employee Relations",
              "description": "Policies that govern how the agency manages and resolves employee and labor issues.",
              "pg": "In discussion of those with disabilities as a protected Equal Employment Opportunity (EEO) class, omission of ICT systems and ICT accessibility.<sup>7</sup>",
              "rInclusions": "Incorporation of ICT systems, accessibility, and/or system characteristics into discussion of those with disabilities as a protected EEO class.",
              "rPolicy": "As a protected Equal Employment Opportunity (EEO) class as defined in the Americans with Disabilities Act of 1990, as amended (42 U.S.C. § 12101), and in accordance with [insert your agency]’s [insert reasonable accommodation policy or similar], individuals with disabilities must have reasonable accommodations for the job application process and for the performance of essential job functions. Any reasonable accommodations made via ICT, including hardware, software, and web and non-web electronic content, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure that the ICT is accessible to individuals with disabilities."
            },
            {
              "pt": "Grievances",
              "description": "Policies that describe agency procedures for reviewing and resolving employee complaints, including but not limited violations of law, rule, or regulation impacting employment terms.",
              "pg": "Description of grievance process for those with a disability, but no mention of reasonable accommodation and associated ICT system.<sup>8</sup>",
              "rInclusions": "Mention of reasonable accommodations for grievance process, including ICT accessibility and/or system characteristics.",
              "rPolicy": "Aggrieved employees with disabilities must have reasonable accommodations, as defined in the Americans with Disabilities Act of 1990, as amended (42 U.S.C. § 12101), to document and submit grievances in accordance with [insert your agency]’s formal grievance process. Any ICT used for the formal grievance process may consist of a combination of hardware, software, and electronic content, all of which must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "Onboarding",
              "description": "Policies that apply to the integration of new employees into their agency.",
              "pg": "No mention of accessible ICT systems and/or ICT system characteristics required for onboarding",
              "rInclusions": "Emphasis that onboarding must be fully accessible to employees and contractors with disabilities, conform to the Section 508 standards, and describe accessible ICT systems and ICT system characteristics.<sup>9</sup>",
              "rPolicy": "ICT systems used for onboarding may consist of a combination of hardware, software, and electronic content, including web and non-web content, all of which must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). [Insert your agency] must adhere to these standards and guidelines to ensure that ICT systems used for onboarding are accessible to employees and contractors with disabilities."
            },
            {
              "pt": "Telework",
              "description": "Policies that describe the manner in which an agency uses telework/remote work/virtual work.",
              "pg": "Omission of ICT systems and/or ICT system characteristics to facilitate telework or those used as a reasonable accommodation to employees and contractors with disabilities.<sup>10</sup>",
              "rInclusions": "Description of ICT systems and ICT system characteristics and reasonable accommodations used to facilitate telework for employees with disabilities.",
              "rPolicy": "As a protected Equal Employment Opportunity (EEO) class as defined in the Americans with Disabilities Act of 1990, as amended (42 U.S.C. § 12101), and in accordance with [insert your agency]’s [insert reasonable accommodation policy or similar], employees with disabilities must have reasonable accommodations for telework. Any reasonable accommodations made via ICT, including hardware, software, and web and non-web electronic content, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure that the ICT is accessible to individuals with disabilities."
            },
            {
              "pt": "Workforce Development",
              "description": "Policies that apply to training, learning, and development opportunities for current agency employees.",
              "pg": "No mention of accessible ICT systems and/or ICT system characteristics required for training, learning, and development opportunities.",
              "rInclusions": "Emphasis that training, learning, and development opportunities must be fully accessible to those with disabilities, conform to the Section 508 standards, and describe ICT systems and ICT system characteristics.<sup>11</sup>",
              "rPolicy": "ICT systems used for workforce development, including training, learning, and career development opportunities, must conform to the current ICT Standards and Guidelines (36 C.F.R. § 1194). Such ICT systems may consist of a combination of hardware, software, and electronic content, including web and non-web content, all of which must conform to the applicable requirements in the current ICT Standards and Guidelines."
            }
        ]
       },
        {
          "title": "Information Technology Services", 
          "content" :
          [
            {
              "pt": "Data Management",
              "description": "Policies that apply to the process of ingesting, storing, organizing and maintaining the data created and collected by an agency.",
              "pg": "Lack of provisions in open data policies to ensure agency data is accessible.<sup>2</sup>",
              "rInclusions": "Inclusion of provisions in open data policies to ensure agency data is accessible.",
              "rPolicy": "All agency data to be reported publicly or internally must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), such that agency data that is made publicly available must be accessible to individuals with disabilities (OMB M-13-13)."
            },
            {
              "pt": "Data Management",
              "description": "Policies that apply to the process of ingesting, storing, organizing and maintaining the data created and collected by an agency.",
              "pg": "Exclusion of requirement for agency data to be machine readable for public release.",
              "rInclusions": "Emphasis that machine readable information be included in internal processes that clear agency data for public release.",
              "rPolicy": "The current ICT Standards and Guidelines (36 C.F.R. § 1194) require that members of the public with disabilities have access to publicly available data. The internal clearance process [as stated in XXXXX policy] for agency data should ensure that publicly available data is machine readable to improve search and discovery for members of the public with disabilities."
            },
            {
              "pt": "Information Systems Management",
              "description": "Policies that apply to the implementation and management of information systems.",
              "pg": "Lack of a reference to equity, inclusion, and accessibility as policy goals and objectives to guide business needs for new information systems.",
              "rInclusions": "Equity, inclusion, and accessibility listed as key policy goals and objectives for new information systems, with an emphasis on ICT accessibility.",
              "rPolicy": "New ICT systems must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure that these systems are accessible to the [insert your agency] workforce. Section 508 conformance should figure prominently in the planning and managing of ICT systems developed for or operated by [insert your agency]."
            },
            {
              "pt": "Information Systems Management",
              "description": "Policies that apply to the implementation and management of information systems.",
              "pg": "Periodic mention of Section 508 conformance for systems functional requirements, but not included in the agency's formal IT standards list.<sup>3</sup>",
              "rInclusions": "Description of Section 508 in agency IT standards list and conformance for all systems functional requirements.",
              "rPolicy": "In order for an information technology to become an approved IT standard for use, purchase, or development, it must undergo the agency's security and accessibility reviews for approval to ensure conformance to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "IT Governance",
              "description": "Policies that apply to the strategic direction of agency information systems, including roles and responsibilities of the agency’s enterprise architecture (EA).",
              "pg": "Listing of several governing roles to lead the agency’s EA, but excludes mention of a Section 508 PM and individuals with disabilities as impacted stakeholders.",
              "rInclusions": "Established Section 508 PM role in agency EA and specific responsibilities for facilitating the conformance of ICT accessibility requirements.<sup>4</sup>",
              "rPolicy": "The IT Accessibility/Section 508 Program Manager is responsible for ensuring that [insert your agency] carries out Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), and acting as the agency-wide Section 508 liaison to ensure [insert your agency]'s enterprise architecture (EA) considers the needs of individuals with disabilities. Overall, it is incumbent upon agency leadership to ensure that ICT systems under their purview meet all relevant requirements under the Section 508 law and conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "IT Governance",
              "description": "Policies that apply to the strategic direction of agency information systems, including roles and responsibilities of the agency’s EA.",
              "pg": "Lacks reference to key laws that describe legal requirements for Section 508 compliance and establish the role and responsibilities of the Section 508 PM.",
              "rInclusions": "Alignment to key federal laws and guidance that require Section 508 compliance, such as the E-Government Act of 2002 and OMB Circular A-130.<sup>5</sup>",
              "rPolicy": "[Insert your agency]’s enterprise architecture (EA) must comply with federal laws and guidance that apply to ICT accessibility, including Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), the E-Government Act of 2002 (44 U.S.C. § 101), and OMB Circular A-130."
            },
            {
              "pt": "IT Governance",
              "description": "Policies that apply to the strategic direction of agency information systems, including roles and responsibilities of the agency’s EA.",
              "pg": "No mention of a tool, resource, or test process to help identify and incorporate relevant accessibility requirements into EA.",
              "rInclusions": "Reference to ART (or similar) for guided assistance to include relevant accessibility requirements into in-house IT development",
              "rPolicy": "[Insert your agency] should utilize the Accessibility Requirements Tool (ART) (or similar) in the planning of agency enterprise architecture (EA) to ensure ICT developed by [insert your agency] conforms to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). Refer to the ART tool for guided assistance to identify relevant accessibility requirements: <a href='https://app.buyaccessible.gov/'>https://app.buyaccessible.gov/</a>"
            },
            {
              "pt": "IT Investment Management",
              "description": "Policies that apply to the agency’s process for complying with federal Capital Planning and Investment Control (CPIC) reporting requirements.<sup>6</sup>",
              "pg": "Lack of reference to ICT accessibility requirements in the CPIC process as it relates to acquisition planning.",
              "rInclusions": "Incorporation of Section 508 of the Rehabilitation Act of 1973, as amended, in listing of federal laws and policies to comply with in the CPIC process.<sup>7</sup>",
              "rPolicy": "Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), requires [insert your agency] to provide accessible ICT to individuals with disabilities. The [insert your agency] Capital Planning and Investment Control (CPIC) (40 U.S.C. § 1401) process should include Section 508 considerations, such that acquisition planning for any ICT investments accounts for digital accessibility."
            },
            {
              "pt": "IT Security and Privacy",
              "description": "Policies that apply to the management of agency security and privacy practices, including identity, credential, and access management (ICAM).",
              "pg": "Mention of ICAM solutions adherence to all relevant laws and policies, but does not call out ICT accessibility or the Section 508 standards specifically.<sup>8</sup>",
              "rInclusions": "Inclusion of explicit reference to ICT accessibility requirements when discussing software for ICAM solutions.",
              "rPolicy": "New or updated software solutions, including identity, credential, and access management (ICAM) solutions, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "IT Security and Privacy",
              "description": "Policies that apply to the management of agency security and privacy practices, including ICAM.",
              "pg": "Mention of requirement that records be in a publicly accessible electronic format in agency records management process, but lacks reference to the Section 508 standards.<sup>9</sup>",
              "rInclusions": "Reference to Section 508 conformance in records management procedures, including citation of the Section 508 standards.",
              "rPolicy": "ICT systems used for records management procedures to identify records of general interest or use to the public that are appropriate for public disclosure, and to post such records in a publicly accessible electronic format (i.e., machine readable) must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). Machine readable information improves search and discovery for individuals with disabilities."
            }
        ]
       },
        {
          "title": "Legal", 
          "content" :
          [
            {
              "pt": "Civil Rights",
              "description": "Policies that apply to the enforcement of federal civil rights laws that protect the rights of individuals and entities from unlawful discrimination.",
              "pg": "Reference to disability as a protected category status for EEO, but does not include a requirement for complaint management tools to be digitally accessible.<sup>2</sup>",
              "rInclusions": "Requirements for EEO complaint management tools to use digitally accessible platforms.",
              "rPolicy": "Employees and applicants for employment with disabilities must have access to Section 508 conformant ICT to ensure that they can document and submit Equal Employment Opportunity (EEO) complaints in accordance with the [insert your agency]’s EEO complaint process (29 CFR § 1614.106). ICT systems used for the formal EEO complaint process may consist of a combination of hardware, software, and electronic content, all of which must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "General Counsel",
              "description": "Policies that govern how the agency manages and resolves legal matters and services performed within or involving the agency.",
              "pg": "Mention of special agency office equipment in ethics policy, but lacks explicit reference to adaptive devices for individuals with disabilities.",
              "rInclusions": "Mention of adaptive devices for individuals with disabilities as part of agency office equipment in ethics policy.",
              "rPolicy": "Office equipment provided to [insert your agency] employees may include adaptive devices. The hardware, software, and web and non-web electronic content associated with all office equipment, including adaptive devices, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            }
        ]
       },
        {
          "title": "Real Property Management", 
          "content" :
          [
            {
              "pt": "Design and Construction",
              "description": "Policies that apply to governing the use of project management and building design principles.",
              "pg": "Description of physical accessibility in building design principles, but excludes ICT-related characteristics in IT systems, software, and platforms.",
              "rInclusions": "Description of physical and ICT accessibility characteristics in the project management of building designs and IT hardware and software.",
              "rPolicy": "Managers of building design and construction projects shall ensure that, throughout the project lifecycle, all hardware, software, and web and non-web electronic content used for design, construction, reporting, and other activities for which they are responsible conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194)."
            },
            {
              "pt": "Design and Construction",
              "description": "Policies that apply to governing the use of project management and building design principles.",
              "pg": "Description of ICT systems access in buildings, but excludes reference to ICT-related accommodations for individuals with disabilities.",
              "rInclusions": "Description of ICT-related accommodations incorporated into building standards.",
              "rPolicy": "[Insert your agency] must meet the needs of employees with disabilities by ensuring that sufficient and usable space is allocated within work areas for Section 508 conformant ICT, in accordance with [insert your agency] building standards, space allocation policies, and design practices (36 C.F.R. § 1194)."
            },
            {
              "pt": "Facilities Management",
              "description": "Policies that apply to the maintenance of federal buildings and related equipment, excluding fire protection and health and safety.",
              "pg": "Mention of IT systems during use of energy and utilities but excludes description of ICT system characteristics.",
              "rInclusions": "Description of ICT accessibility characteristics in IT systems of energy and utilities management.",
              "rPolicy": "All ICT systems used for energy and utilities management, including all hardware, software, and web and non-web electronic content, must conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194). [Insert your agency] must adhere to these standards to ensure that these ICT systems are accessible to employees and contractors with disabilities."
            }
        ]
       }
    ]
}
  `;

  if(document.getElementById('acquisition-and-procurement') != null)
    generateTable(data, 0);
  else if(document.getElementById('administrative-services') != null)
    generateTable(data, 1);
  else if(document.getElementById('budget-and-finance') != null)
    generateTable(data, 2);
  else if(document.getElementById('communications') != null)
    generateTable(data, 3);
  else if(document.getElementById('emergency-response') != null)
    generateTable(data, 4);
  else if(document.getElementById('human-resources-management') != null)
    generateTable(data, 5);
  else if(document.getElementById('information-technology-services') != null)
    generateTable(data, 6);
  else if(document.getElementById('legal') != null)
    generateTable(data, 7);
  else if(document.getElementById('real-property-management') != null)
    generateTable(data, 8);
}