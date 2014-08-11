'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	BaseModelSchema = require('../models/BaseModel'),
	BaseModel = mongoose.model('BaseModel');

exports.get1 = function(req, res) {
	var mockData = ["Cillum corned beef filet mignon ad elit pastrami proident ball tip.  Tempor ut meatloaf fatback chuck.  Leberkas porchetta pariatur anim jowl non culpa nulla.  Pork turkey drumstick nostrud fugiat dolore.  In irure pork loin doner anim magna bresaola.  Landjaeger turkey chicken, velit fugiat venison quis chuck labore proident.  Sausage consequat ham id, est biltong ut nostrud minim ham hock fugiat nisi adipisicing boudin.","Velit beef ribs boudin sunt.  Voluptate dolore sed, qui est elit quis pig aliquip cow cupidatat sunt culpa.  Tri-tip frankfurter nisi, incididunt tenderloin prosciutto pork porchetta short ribs enim.  Prosciutto magna corned beef consequat, proident adipisicing cupidatat ground round short ribs duis.","Sunt ex fugiat corned beef hamburger, duis tempor capicola boudin consequat nostrud reprehenderit proident in.  Exercitation porchetta doner, t-bone pork chop tenderloin in ball tip labore eiusmod.  Landjaeger ham beef, pig veniam corned beef tempor in aliquip.  Ball tip meatball ut mollit, tenderloin pastrami short ribs dolore cow non esse adipisicing cillum porchetta.  Chuck pig est ullamco occaecat voluptate.  Frankfurter landjaeger eu magna, drumstick in sunt sausage beef ribs ham hock.","Meatloaf pancetta t-bone leberkas bresaola venison adipisicing ribeye ut sausage cupidatat strip steak.  Laborum magna pork tri-tip brisket, pork belly ea strip steak ut mollit incididunt eu tongue.  Filet mignon pork chop do, kielbasa pancetta bresaola shoulder sausage.  Corned beef salami consequat, boudin tenderloin exercitation magna frankfurter elit ham hock proident landjaeger.  Excepteur jerky meatloaf swine.  Voluptate porchetta flank t-bone culpa minim nisi.","Commodo non boudin turducken.  Do pork loin pastrami ea consectetur ex aliqua, pariatur ut.  Consequat duis kevin, t-bone aute labore venison id bresaola quis laboris laborum shoulder ribeye.  Excepteur sunt filet mignon nulla incididunt.  Filet mignon qui magna, cow shoulder leberkas ad fatback jowl nisi biltong shankle dolore esse.  Kielbasa exercitation eiusmod fatback esse pork loin.  Commodo et short ribs ground round."];
	res.send(mockData);
};

exports.get2 = function(req, res) {
	var mockData = ["Pork belly in pariatur sed flank bresaola dolor pork.  Ribeye jerky laborum pig dolore in ball tip id est filet mignon turkey biltong anim meatball officia.  Nulla porchetta drumstick, salami enim ut ut mollit.  Occaecat in brisket prosciutto.  Incididunt consequat ground round cillum dolor pariatur pork belly minim frankfurter.","Filet mignon corned beef aliqua qui shank velit tenderloin in dolore andouille swine esse irure flank.  Esse ball tip pariatur pastrami bresaola ut nisi eiusmod flank qui dolor shoulder aute.  Culpa voluptate tongue pastrami, porchetta consequat sunt laborum id nisi.  Corned beef fatback ut shankle enim.  Minim tempor chuck deserunt est.  Ham aliquip qui shoulder enim prosciutto nisi t-bone corned beef meatball exercitation fugiat.  Qui in dolore cow.","Turducken pariatur nulla veniam.  Chicken short ribs magna shoulder.  Non jerky ex, dolore id ad culpa meatball aliqua esse salami doner cupidatat sint.  Ex turkey chuck eu, jerky consequat swine rump hamburger pork chicken pork belly.  Fatback culpa capicola, commodo reprehenderit ribeye ut exercitation chicken dolore.  Est salami kevin, mollit shoulder reprehenderit id aliqua duis.","Flank doner nulla pastrami chuck, pork loin sed frankfurter.  Drumstick excepteur shank eiusmod tempor, cow meatball hamburger ea bacon proident.  Laborum ut t-bone shank ex fatback, kevin pariatur aliqua qui veniam magna.  Non rump hamburger excepteur ham hock chicken officia pancetta tri-tip.  Kielbasa occaecat shankle nulla adipisicing veniam velit dolore chicken et.","Laboris jowl beef in tri-tip jerky shankle short ribs in.  Ad commodo cow velit meatball enim fatback pork, laborum ut proident.  Prosciutto laboris drumstick, salami excepteur tail esse ham culpa short loin.  Occaecat cow bresaola sint consequat beef ribs labore strip steak nisi.  Pig id fugiat cow."];
	res.send(mockData);
};

exports.create1 = function(req, res) {
	var baseModel = new BaseModel();

	baseModel.title = 'This is a title';
	baseModel.body = 'This is a body';

	baseModel.save(function(err) {
		if (err) {
			res.status(400).send('There was an error adding baseModel');
		} else {
			res.send('baseModel saved');
		}
	});
};

exports.read1 = function(req, res) {
	BaseModel.find({}, function(err, data) {
		if (err) {
			res.status(400).send('Error: ' + err);
		} else {
			res.send(data);
		}
	});
};