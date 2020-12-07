////// ****** Created by John Glennon ***** //////

/////// ----------- update these values ----------- ///////
var em = 16;
var masterFont = "Arial";


// Folder name
var groupName = "Parachute";
var characterGroupName = "Charachute";


////// ****** Master Variables ***** //////
///// Para attributes /////
var masterBase = {
    name: "$ master",
    appliedFont: masterFont,
    hyphenation: false,
    kerningMethod: "Optical",
    ligatures: false,
    spaceAfter: em * 1 + "pt"
}

var hBase = {
    name: "$ h-master",
    appliedFont: masterFont,
    fontStyle: "Bold"
}

var pBase = {
    name: "$ p-master",
    appliedFont: masterFont,
    fontStyle: "Regular"
}

var h1 = {
    name:  "h1",
    appliedFont: masterFont,
    pointSize: em * 2.5
}

var h2 = {
    name:  "h2",
    appliedFont: masterFont,
    pointSize: em * 2
}

var h3 = {
    name:  "h3",
    appliedFont: masterFont,
    pointSize: em * 1.75
}

var h4 = {
    name:  "h4",
    appliedFont: masterFont,
    pointSize: em * 1.5
}

var h5 = {
    name:  "h5",
    appliedFont: masterFont,
    pointSize: em * 1.25
}

var h6 = {
    name:  "h6",
    appliedFont: masterFont,
    pointSize: em * 1
}

var p = {
    name:  "p",
    appliedFont: "Arial",
    pointSize: em * 1,
}

var p2 = {
    name:  "p2",
    appliedFont: "Arial",
    pointSize: em * 0.6875,
}

////// ****** Character Styles ***** //////

var bold = {
    name: "Bold",
    fontStyle: "Bold"
}

var italic = {
    name: "Italic",
    fontStyle: "Italic"
}

var superScript = {
    name: "Superscript",
    position: 1936749411
}

var noBreak = {
    name: "No Break",
    noBreak: true
}

////// ****** Main Code ***** //////
var myDoc = app.documents.item(0);
var paraGroups = myDoc.paragraphStyleGroups;
var charGroups = myDoc.characterStyleGroups;

var num = 0;

// gives us the current paragraph group name, so we can add things to it
var groupNameReturn = groupName;

function createPGroup(){
    if ( paraGroups.length == 0 ) {
        paraGroups.add( { name: groupName } );
        paraGroups[ paraGroups.item( groupNameReturn ).index ].paragraphStyleGroups.add( { name: "Para masters" } );
    } else {
        for ( var i = 0; paraGroups.length > i; i++ ){
            if ( paraGroups[i].name == groupName ){
                pGroupAdd( num );
                return;
            } 
        }
        paraGroups.add( { name: groupName } );
        paraGroups[ paraGroups.item( groupNameReturn ).index ].paragraphStyleGroups.add( { name: "Para masters" } );
    }
}

function pGroupAdd( num ){
    for ( var i = 0; paraGroups.length > i; i++ ){
        if ( paraGroups[i].name === groupName + "_" + num ){
            num++;
            pGroupAdd( num );
            return;
        }
    }
    paraGroups.add( {name: ( groupName + "_" + num ) } );

    groupNameReturn = groupName + "_" + num
    paraGroups[paraGroups.item(groupNameReturn).index].paragraphStyleGroups.add({name: "Para masters"})
}

// Character folder create
function createCGroup(){
    if ( charGroups.length == 0 ){
        charGroups.add( { name: characterGroupName } );
    } else {
        for ( var i = 0; charGroups.length > i; i++ ){
            if ( charGroups[i].name == characterGroupName ){
                return;
            }
        }
        charGroups.add( { name: characterGroupName } );
    }
}

createCGroup();
createPGroup();

var currentCGroup = charGroups.item( characterGroupName ).characterStyles;
var currentPGroup = paraGroups.item( groupNameReturn ).paragraphStyles;
var currentsettingGroup = paraGroups.item( groupNameReturn ).paragraphStyleGroups[0].paragraphStyles;

//////////////// group end


function pStyleAdd( properties, folder, styleName, basedOnFolder ){
    folder.add( properties );
    if ( basedOnFolder != "nill") {
        if ( styleName == "$ h-master" || styleName == "$ p-master" ){
            paraStyle = currentsettingGroup.item( styleName );
            paraStyle.basedOn = currentsettingGroup.item( basedOnFolder );
        } else {
            paraStyle = currentPGroup.item( styleName );
            paraStyle.basedOn = currentsettingGroup.item( basedOnFolder );
        }
    } else {
        paraStyle = currentsettingGroup.item( styleName );
    }
}

function cStyleAdd( properties ){
    currentCGroup.add( properties )
}


////// ****** Add in para styles here ***** //////
////// ****** Modifiy Below ***** //////
////// ****** Remove a line if not needed ***** //////
pStyleAdd( masterBase, currentsettingGroup, masterBase.name, "nill" );
pStyleAdd( hBase, currentsettingGroup, hBase.name, masterBase.name );
pStyleAdd( pBase, currentsettingGroup, pBase.name, masterBase.name );

pStyleAdd( h1, currentPGroup, h1.name, hBase.name );
pStyleAdd( h2, currentPGroup, h2.name, hBase.name );
pStyleAdd( h3, currentPGroup, h3.name, hBase.name );
pStyleAdd( h4, currentPGroup, h4.name, hBase.name );
pStyleAdd( h5, currentPGroup, h5.name, hBase.name );
pStyleAdd( h6, currentPGroup, h6.name, hBase.name );

pStyleAdd( p, currentPGroup, p.name, pBase.name );
pStyleAdd( p2, currentPGroup, p2.name, pBase.name );

cStyleAdd( bold );
cStyleAdd( italic );
cStyleAdd( superScript );
cStyleAdd( noBreak );
