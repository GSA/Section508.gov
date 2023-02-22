// Add your custom javascript here
const list = document.querySelectorAll('.list');

function accordion(e){
    e.stopPropagation();
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else{
        for(i=0; i < list.length; i++){
            list[i].classList.remove('active');
        }
        this.classList.add('active');
    }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}
jQuery('.active').parent().parent().parent().parent().addClass('active');
jQuery('.active').parent().parent().addClass('active');


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
  //Change j according to the page
  var j = index;
  createPicklist(obj, j);
  generateTableData(obj, j);
}

//Create picklist according to the data
function createPicklist(obj, j)
{
  var picklistFilter = document.getElementById('picklist-filter');
  const filterMap = new Map(); //Use to check duplication
  for(i=0; i < obj.guidanceByPolicyType[j].content.length; i++)
  {
    console.log(filterMap.get(`${obj.guidanceByPolicyType[j].content[i].pt}`));
    if(filterMap.get(`${obj.guidanceByPolicyType[j].content[i].pt}`) == null)
    {
      console.log(i);
      if(i == 0)
      {
        picklistFilter.innerHTML = 
        `
        <li><input type="checkbox" class="name" name="name" value="${obj.guidanceByPolicyType[j].content[i].pt}" />${obj.guidanceByPolicyType[j].content[i].pt} </li>
        `;
        filterMap.set(`${obj.guidanceByPolicyType[j].content[i].pt}`, `${obj.guidanceByPolicyType[j].content[i].pt}`);
      }
      else
      {
      picklistFilter.innerHTML += 
        `
        <li><input type="checkbox" class="name" name="name" value="${obj.guidanceByPolicyType[j].content[i].pt}" />${obj.guidanceByPolicyType[j].content[i].pt} </li>
        `;
        filterMap.set(`${obj.guidanceByPolicyType[j].content[i].pt}`, `${obj.guidanceByPolicyType[j].content[i].pt}`);
      }
    }
  }
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
        <td>${obj.guidanceByPolicyType[j].content[i].description}</td>
        <td>${obj.guidanceByPolicyType[j].content[i].pg}</td>
        <td>${obj.guidanceByPolicyType[j].content[i].rInclusions}</td>
        <td>${obj.guidanceByPolicyType[j].content[i].rPolicy}</td>
      </tr>
    `
  }
}


var checkList = document.getElementById('table-filter-list');
checkList.getElementsByClassName('anchor')[0].onclick = 
function(evt) 
{
  if(checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

$(document).ready(function(){
  $(".name").on("click", function() {
  name_list = []
  $("#table-body tr").hide()
  var flag = 1
  $("input:checkbox[name=name]:checked").each(function(){
  		flag = 0;
    	var value = $(this).val().toLowerCase();
      	$("#table-body tr").filter(function() {
            if($(this).text().toLowerCase().indexOf(value) > -1)
        		$(this).show()
    	});
 	 });
    if(flag == 1)
    	$("#table-body tr").show()
  });
});

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
                "rInclusions": "Section 508/ICT accessibility requirements in acquisition and procurement lifecycle processes.",
                "rPolicy": "The Contracting Officer must ensure that the applicable requirements for the current ICT Standards and Guidelines (36 C.F.R. § 1194) are incorporated into acquisition and procurement lifecycle processes, to include pre-award, award, and post-award phases. Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), requires [insert your agency] to ensure individuals with disabilities have access to the ICT it has acquired and procured."
            },
            {
                "pt": "Acquisition Management",
                "description": "Policies that apply to arrangement and administration of agreements, and management of performance of contract holders.",
                "pg": "Description of accessibility requirements for limited contract clauses in contracts for individuals with disabilities, but does not reference compliance to the Section 508 law, conformance to the ICT Standards and Guidelines, or additional ICT accessibility considerations.",
                "rInclusions": "Compliance with the Section 508 law for various contract clauses in contracts as required by the Federal Acquisition Regulation (FAR). ",
                "rPolicy": "Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d), requires [insert your agency] to provide accessible ICT to individuals with disabilities. The Section 508 law must be referenced in contract clauses for individuals with disabilities as required by Federal Acquisition Regulation (FAR) (48 C.F.R. § 52.222-36)."
            },
            {
                "pt": "Acquisition Management",
                "description": "Policies that apply to arrangement and administration of agreements, and management of performance of contract holders.",
                "pg": "No mention of a tool or resource to help identify and incorporate relevant accessibility requirements into procurement and contracting documentation.",
                "rInclusions": "Reference to the Accessibility Requirements Tool (ART) for guided assistance to identify and include relevant accessibility requirements into procurement and contracting documentation.",
                "rPolicy": "Those involved in the awarding and/or administration of contracts must ensure the applicable requirements for the current ICT Standards and Guidelines (36 C.F.R. § 1194) are included in procurement and contracting documentation. Refer to the Accessibility Requirements Tool (ART) tool for guided assistance to identify relevant accessibility requirements: https://app.buyaccessible.gov/."
            },
            {
                "pt": "Acquisition Management",
                "description": "Policies that apply to arrangement and administration of agreements, and management of performance of contract holders.",
                "pg": "Missing information on how to claim an exception for ICT for agency IT procurement and/or development projects.",
                "rInclusions": "Inclusion of information on how to claim an exception for ICT, as described in General Exceptions within the current ICT Standards and Guidelines.<sup>11</sup>",
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
              "pg": "Description of Section 508 of the Rehabilitation Act of 1973, as amended, with regard to agency official communication and guidance on required correspondence writing styles and formats, but excludes detailed requirements pertaining to Section 508 conformance of agency directives, orders, manuals, and instructions.<sup>13</sup>",
              "rInclusions": "Description that all agency official communication correspondence and directives, including those pertaining to digital signatures, must conform to the applicable requirements in the current ICT Standards and Guidelines.",
              "rPolicy": "[Insert your agency] points of contact drafting official agency communication correspondence, to include agency directives, orders, manuals, and instructions, must ensure writing styles and formats conform to the applicable requirements in the current ICT Standards and Guidelines (36 C.F.R. § 1194), including the use of electronic signature software to enable greater access for individuals with disabilities."
            },
            {
              "pt": "Directives and Correspondence Management",
              "description": "Policies that apply to the processing, internal review, approval, and issuance of agency directives, external correspondence and other official documents.",
              "pg": "Requirement for authors of internal directives to conduct a Section 508 conformance evaluation, but excludes purpose to ensure documents are accessible to individuals with disabilities, or any guidance on how to create an accessible document.<sup>14</sup>",
              "rInclusions": "Emphasis on Section 508 conformance evaluation goals for internal directives and correspondence with instructional guidance for accessible documents.",
              "rPolicy": "As part of internal directives management procedures, [insert your agency] points of contact drafting internal agency directives must follow the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure documents are digitally accessible to individuals with disabilities. Software and electronic content, including web and non-web content, must conform to the applicable requirements in the current ICT Standards and Guidelines."
            },
            {
                "pt": "Directives and Correspondence Management",
                "description": "Policies that apply to the processing, internal review, approval, and issuance of agency directives, external correspondence and other official documents. ",
                "pg": "Description of requirement for external directives to be written in plain language, but does not reference compliance with the Section 508 law or conformance to the current ICT Standards and Guidelines.<sup>15</sup>",
                "rInclusions": "Mentions conformance to the current ICT Standards and Guidelines for the creation of external directives, and provides guidance on how to conform to the applicable requirements in the current ICT Standards and Guidelines.",
                "rPolicy": "[Insert your agency] points of contact drafting agency external directives must ensure writing styles and formats conform to the current ICT Standards and Guidelines (36 C.F.R. § 1194) to ensure documents are accessible to individuals with disabilities. Software and electronic content, including web and non-web content, must conform to the applicable requirements in the current ICT Standards and Guidelines."
            },
            {
                "pt": "Directives and Correspondence Management",
                "description": "Policies that apply to the processing, internal review, approval, and issuance of agency directives, external correspondence and other official documents.",
                "pg": "No mention of a Section 508 PM in general policy making work groups.",
                "rInclusions": "Established Section 508 PM role in agency policy making work groups and specific responsibilities for facilitating Section 508 compliance.<sup>16</sup>",
                "rPolicy": "[Insert your agency] policy making work groups should include an IT Accessibility/508 Program Manager (PM) with the responsibility of facilitating agency compliance with Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794d)."
            },
            {
                "pt": "Forms Management",
                "description": "Policies that apply to the creation and management of forms for internal and external use.",
                "pg": "Lack of reference to ICT characteristics in form design requirements.",
                "rInclusions": "Requirement for the creation of Section 508 conformant forms to ensure instructions and data elements (checkboxes, text fields, etc.) are accessible.<sup>17</sup>",
                "rPolicy": "When designing forms, refer to the current ICT Standards and Guidelines (36 C.F.R. § 1194) for applicable provisions to ensure the data elements in those forms (checkboxes, text fields, etc.) are accessible to individuals with disabilities. Software and electronic content, including web and non-web content, must conform to the applicable requirements in the current ICT Standards and Guidelines."
            }
        ]
        }  
        
    ]
}
  `;
  if(document.getElementById('acquisition-and-procurement') != null)
  {
    generateTable(data, 0);
  } 
  else if(document.getElementById('administrative-services') != null)
  {
    generateTable(data, 1);
  } 
  else if(document.getElementById('budget-and-finance') != null)
  {
    generateTable(data, 2);
  } 
  else if(document.getElementById('communications') != null)
  {
    generateTable(data, 3);
  } 
  else if(document.getElementById('emergency-response') != null)
  {
    generateTable(data, 4);
  } 
  else if(document.getElementById('human-resources-management') != null)
  {
    generateTable(data, 4);
  } 
  else if(document.getElementById('information-technology-services') != null)
  {
    generateTable(data, 5);
  }
  else if(document.getElementById('legal') != null)
  {
    generateTable(data, 6);
  }
  else if(document.getElementById('legal') != null)
  {
    generateTable(data, 6);
  }
  else if(document.getElementById('real-property-management') != null)
  {
    generateTable(data, 7);
  }
}