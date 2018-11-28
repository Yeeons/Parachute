var myDoc = app.documents.item(0);
var gStyle = myDoc.paragraphStyleGroups.item("Font Name");

// Create Group for styles to live in
try {
  paraGroupStyle = myDoc.paragraphStyleGroups.item("Font Name");
  myName = paraGroupStyle.name;
  alert("Paragraph group already exists");
  } catch(myError) {
    paraGroupStyle = myDoc.paragraphStyleGroups.add({name:"Font Name"});
  }

// Paragraph styles
// Masters
paraCreator("• Master", "", 12, "None"); //Name, font weight, point size, based on 
paraCreator("• H Master", "Bold", 12, "• Master");
paraCreator("• P Master", "Regular", 10, "• Master");

// Headings
paraCreator("H1", "Bold", 30, "• H Master");
paraCreator("H2", "Bold", 16, "• H Master");
paraCreator("H3", "Bold", 12, "• H Master");

// Paragraphs
paraCreator("P", "", 10, "• P Master");
paraCreator("P1", "", 10, "• P Master"); // May look to remove this as copying p would be easier

// Character styles
// Character
charCreator("Bold", "Bold");
charCreator("Italic", "Italic");
charCreator("Superscript", 2);

function paraCreator(styleName, fontWeight, fontSize, paraBasedOn){
  try {
    paraStyle = gStyle.paragraphStyles.item(styleName);
    myName = paraStyle.name;
  } catch(myError) {
    paraStyle = gStyle.paragraphStyles.add({name:styleName});
  }

  try {

    paraStyle.basedOn = gStyle.paragraphStyles.item(paraBasedOn);
  } catch (myError){
  }
  
  try {
    paraStyle.fontStyle = fontWeight;
    paraStyle.pointSize = fontSize;
  } catch(myError){
  }

};

function charCreator(charName, option){
  try {
    charStyle = myDoc.characterStyles.item(charName);
    myName = charStyle.name;
  } catch(myError) {
    charStyle = myDoc.characterStyles.add({name:charName});
  }
    
  if (charName == "Superscript") {
    charStyle.position = 1936749411;
  } else {
    charStyle.fontStyle = option;
  }
};
