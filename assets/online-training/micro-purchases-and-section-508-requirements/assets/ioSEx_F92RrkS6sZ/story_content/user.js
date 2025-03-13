function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5sVJNCo3nWB":
        Script1();
        break;
  }
}

function Script1()
{
  //Retrieve Player Variables (Learner's Name)
var player = GetPlayer();
learnerName = player.GetVar("LearnerName");

//Set date
var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
learnerDate = mm + '/' + dd + '/' + yyyy;

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'Micro-Purchases_and_Section_508_Requirements_Certificate_of_Completion.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const nameField = form.getTextField('Name');
  const dateField = form.getTextField('Date');

//Fill in form
  nameField.setText(learnerName);
  dateField.setText(learnerDate);
  var filename = learnerName + "_Micro-Purchases_and_Section_508_Requirements_Certificate_of_Completion.pdf"

//Make fields uneditable
// form.flatten();

//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

