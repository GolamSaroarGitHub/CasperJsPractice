var casper = require("casper").create({
    clientScripts: ["jquery.js"]
});

casper.start("http://www.google.com/ncr");

casper.then(function(){

    this.evaluate(function() {
        $("input[name='q']").val("CasperJS execute javascript on remote page");
    });

});

casper.then(function(){
    this.capture('google.png', {
        top: 0,
        left: 0,
        width: 1500,
        height: 1000
    });
});

casper.run(function() {
    this.echo(this.getTitle()); // Google
    this.exit();
});
