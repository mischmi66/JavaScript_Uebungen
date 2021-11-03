
 writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Franz Beckenbauer:<br/><br/>Ja gut, ähhh, einen wie den Robben brauchen wir natürlich nicht. <br /> Er ist ein reiner Außenstürmer. So weit ich weiß steht das Tor aber immer noch in der Mitte";
    quotes[1] = "Lukas Podolski:<br/><br/>So ist Fußball. Manchmal gewinnt der Bessere.";
    quotes[2] = "Aleksandar Ristic:<br/><br/>Wenn man ein 0:2 kassiert, dann ist ein 1:1 nicht mehr möglich.";
    quotes[3] = "Andreas Brehme:<br/><br/>Haste Scheiße am Fuß, haste Scheiße am Fuß!";
    quotes[4] = "Andreas Möller:<br/><br/>Mein Problem ist, dass ich immer sehr selbstkritisch bin, auch mir selbst gegenüber.";
    quotes[5] = "Berti Vogts:<br/><br/>Hass gehört nicht ins Stadion.<br/>Solche Gefühle soll man gemeinsam mit seiner Frau daheim im Wohnzimmer ausleben.";
    
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);}