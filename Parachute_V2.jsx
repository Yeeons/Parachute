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
    appliedFont: masterFont,
    pointSize: em * 1,
}

var p2 = {
    name:  "p2",
    appliedFont: masterFont,
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


function pStyleAdd( properties, currentFolder, basedOnFolder ){
    currentFolder.add( properties );
    if ( basedOnFolder != "nill") {
        if ( properties.name == "$ h-master" || properties.name == "$ p-master" ){
            paraStyle = currentsettingGroup.item( properties.name );
            paraStyle.basedOn = currentsettingGroup.item( basedOnFolder );
        } else {
            paraStyle = currentPGroup.item( properties.name );
            paraStyle.basedOn = currentsettingGroup.item( basedOnFolder );
        }
    } else {
        paraStyle = currentsettingGroup.item( properties.name );
    }
}

function cStyleAdd( properties ){
    try {
        currentCGroup.add( properties )
    } catch( err ){
        // currently does nothing. Will look at checking to see if forlder is there and creating a new one or skipping
    }
}


////// ****** Add in para styles here ***** //////
////// ****** Modifiy Below ***** //////
////// ****** Remove a line if not needed ***** //////
pStyleAdd( masterBase, currentsettingGroup, "nill" );
pStyleAdd( hBase, currentsettingGroup, masterBase.name );
pStyleAdd( pBase, currentsettingGroup, masterBase.name );

pStyleAdd( h1, currentPGroup, hBase.name );
pStyleAdd( h2, currentPGroup, hBase.name );
pStyleAdd( h3, currentPGroup, hBase.name );
pStyleAdd( h4, currentPGroup, hBase.name );
pStyleAdd( h5, currentPGroup, hBase.name );
pStyleAdd( h6, currentPGroup, hBase.name );

pStyleAdd( p, currentPGroup, pBase.name );
pStyleAdd( p2, currentPGroup, pBase.name );

cStyleAdd( bold );
cStyleAdd( italic );
cStyleAdd( superScript );
cStyleAdd( noBreak );
