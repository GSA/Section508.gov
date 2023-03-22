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
  setDropdownRule();
  createPicklistColumn();
  createPicklistFilter(data, index);
  generateTableData(data, index);
  
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


async function runTable()
{
  //_assets/js/app.js
  //assets/it-accessibility-policy-framework.json
  fetch('/assets/it-accessibility-policy-framework.json')
  .then(res => res.json())
  .then(data => 
  {
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
  })
}

if(document.getElementById('policytype-table') != null)
{ 
  runTable();
}
