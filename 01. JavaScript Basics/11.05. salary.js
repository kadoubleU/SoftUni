function salary(input) {
    let openBrowserTabsNum = Number(input[0]);
    let salary = Number(input[1]);
    

    let fbFine = 0;
    let instFine = 0;
    let redFine = 0;

    let totalPrice;

    for(let i = 1; i <= openBrowserTabsNum + 1; i++) {
        switch (input[i]) {
            case "Facebook":
                fbFine += 150;
            break;
        
            case "Instagram":
                instFine += 100;
            break;

            case "Reddit":
                redFine += 50;
            break;
        }

        totalPrice = fbFine + instFine + redFine;

        if(totalPrice >= salary) {
            console.log("You have lost your salary.");
            return;
        }
        
    }
   
        console.log((salary - totalPrice).toFixed(0));   
        
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);

// 5.	Заплата
// Шеф на компания забелязва че все повече служители прекарват  време в сайтове, които ги разсейват.  
// За да предотврати това, той въвежда изненадващи проверки на отворените табове на браузъра на служителите си. 
// Според отворения сайт в таба се налагат следните глоби:
// •	"Facebook" -> 150 лв.
// •	"Instagram" -> 100 лв.
// •	"Reddit" -> 50 лв.
// От конзолата се четат два реда:
// •	Брой отворени табове в браузъра n - цяло число в интервала [1...10]
// •	Заплата - число в интервала [500...1500]
// След това n – на брой пъти се чете име на уебсайт – текст
// Изход
// •	Ако по време на проверката заплатата стане по-малка или равна на 0 лева, на конзолата се изписва 
// "You have lost your salary." и програмата приключва. 
// •	В противен случай след проверката на конзолата се изписва остатъкът от заплатата (да се изпише като цяло число).
