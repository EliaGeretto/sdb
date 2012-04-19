/* node sdb test */

var sdb = require ("./build/Release/sdb");
var util = require ("util");

console.log (sdb);
var db = new sdb.open ("db.sdb");
//console.log (db);
console.log ("version: "+sdb.version);
console.log ("file: "+db.file);
	db.set ("g", 
"{\"glossary\":{\"title\":\"example glossary\",\"page\":1,\"GlossDiv\":{\"title\":\"First gloss title\",\"GlossList\":{\"GlossEntry\":{\"ID\":\"SGML\",\"SortAs\":\"SGML\",\"GlossTerm\":\"Standard Generalized Markup Language\",\"Acronym\":\"SGML\",\"Abbrev\":\"ISO 8879:1986\",\"GlossDef\":{\"para\":\"A meta-markup language, used to create markup languages such as DocBook.\",\"GlossSeeAlso\":[\"OK\",\"GML\",\"XML\"]},\"GlossSee\":\"markup\"}}}}} "
);

var i=0;
for(i=0; i<199999; i++) {
	var lala = db.jsonGet ("g", "glossary.title");
	//db.set ("foo", "bar");
}
var r = db.set ("foo", "bar");
console.log (db.get ("foo"));
console.log (db.get ("cow"));

// var s = new Sdb (null);
