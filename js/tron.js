var tronWeb;
var waiting = 0;
var currentAddr;
var coinForBuydata;
var coinForSaledata
var totalcoinsForBuy; 
var contractBal = 0;
async function main() {

    if (typeof(window.tronWeb) === 'undefined') {
        console.log('Waiting for tronWeb...');
        waiting += 1;
        if (waiting == 5) {
            //  $("#tronWebModal").modal("hide");
            //  $("#noTronWebModal").modal("show");
        }
        setTimeout(main, 1000);
    } else {
        tronWeb = window.tronWeb;
        tronland = await tronWeb.contract().at("TFRLa5AW6WSQ7wqzz4vVWgLeZPFNb52X8C");
        //tronlandstat = await tronWeb.contract().at("TXBSLa7f3ziNSKZesPXBYswRhKThWWNqXQ");
        //  token = await tronWeb.contract().at("TUxH1XrKRWQ8B5ZXsytxUWjFtDUBj3bVpR");

        BigNumber = tronWeb.BigNumber;
        currentAddr = tronWeb.defaultAddress['base58'];
        setTimeout(function() {
            //  $("#tronWebModal").modal("hide");
            //  $("#noTronWebModal").modal("hide");
        }, 2000);
        setInterval(function() {
            mainloop();
        }, 2000);
    }
}



/*
function nFormatter(num) {
    isNegative = false
    if (num < 0) {
        isNegative = true
    }
    num = Math.abs(num)
    if (num >= 1000000000) {
        formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    } else if (num >= 1000000) {
        formattedNumber = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1000) {
        formattedNumber = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        formattedNumber = num;
    }
    if (isNegative) {
        formattedNumber = '-' + formattedNumber
    }
    return formattedNumber;
}


*/

function mainloop() {


    if (tronWeb.defaultAddress['base58'] !== currentAddr) {
        location.reload();
    }
    var dataRef = window.location.origin + "?ref=" + tronWeb.defaultAddress['base58']
    document.getElementById('currentAccount').textContent = currentAddr;
    // document.getElementById('ref').textContent = dataRef; 
    
    
    tronWeb.trx.getBalance(tronWeb.defaultAddress['base58']).then(result => {
        walletBal = result;
        document.getElementById('user_balance').textContent = (tronWeb.fromSun(result)*1).toFixed(2);
    });

    
      tronWeb.trx.getBalance('TFRLa5AW6WSQ7wqzz4vVWgLeZPFNb52X8C').then(result => {
        contractBal = result;
        
    });

   
    tronland.totalPayout().call().then(result => {
        console.log("totalPayout", result);
        var totalPayout = result.toString();
        
        var totalPayoutCont = parseInt(totalPayout) + parseInt(contractBal)
        document.getElementById('contractBal').textContent = ((totalPayoutCont)/1e6).toFixed(2);
        console.log("totalPayout", totalPayout);
        document.getElementById('totalPayout').textContent = totalPayout/1e6 + " TRX";
    });

    tronland.totalPlayers().call().then(result => {
        console.log("totalPlayers", result);
        var totalPlayers = result.toString();
        
        var tp = parseInt(totalPlayers) + parseInt(3);
        console.log("totalPlayers", totalPlayers);
        document.getElementById('totalPlayers').textContent = tp;
    });


    tronland.totalPlantation().call().then(result => {
        console.log("totalPlantation", result);
        var totalPlantation = result.toString();
        console.log("totalPlayers", totalPlantation);
        document.getElementById('totalPlantation').textContent = totalPlantation;
    });


    tronland.profitPerHour().call().then(result => {
        console.log("profitPerHour", result);
        var profitPerHour = result.toString();
        console.log("totalPlayers", profitPerHour);
        document.getElementById('user_dividents').textContent = profitPerHour;
    });



    tronland.totalPlantation().call().then(result => {
        console.log("totalPlantation", result);
        var totalPlantation = result.toString();
        console.log("totalPlantation", totalPlantation);
        document.getElementById('user_factories').textContent = totalPlantation;
    });

    tronland.coins(currentAddr).call().then(result => {
        console.log("coins", result);
        coinForBuydata = result.coinForBuy.toString();
        coinForSaledata = result.coinForSale.toString();


      //  document.getElementById('user_coinsForBuy').textContent = coinForBuydata;
      //  document.getElementById('user_coinsForSell').textContent = coinForSaledata;


    });




    tronland.players(currentAddr).call().then(result => {
        console.log("players", result);
        var coinsForBuy = result.coinsForBuy.toString();
        var coinsForSale = result.coinsForSale.toString();
        var time = result.time.toString();
        
        totalcoinsForBuy = parseInt(coinsForBuy) + parseInt(coinForBuydata);
         document.getElementById('user_coinsForBuy').textContent = totalcoinsForBuy;
        
        var totalcoinsForSell = parseInt(coinsForSale) + parseInt(coinForSaledata);
         document.getElementById('user_coinsForSell').textContent = totalcoinsForSell;
        
       
       
        
        
        
        document.getElementById('vivod_balance').textContent = coinsForSale;

        document.getElementById('plant_user_balance_0').textContent = coinsForBuy;
        document.getElementById('plant_user_balance_1').textContent = coinsForBuy;
        document.getElementById('plant_user_balance_2').textContent = coinsForBuy;
        document.getElementById('plant_user_balance_3').textContent = coinsForBuy;
        document.getElementById('plant_user_balance_4').textContent = coinsForBuy;
        document.getElementById('plant_user_balance_5').textContent = coinsForBuy;




    });




    tronland.plantationOf(currentAddr).call().then(result => {
        console.log("plantationOf", result);
        var plantationOf0 = result[0];
        var plantationOf1 = result[1];
        var plantationOf2 = result[2];
        var plantationOf3 = result[3];
        var plantationOf4 = result[4];
        var plantationOf5 = result[5];
        //   console.log("plantationOf1", plantationOf0);


        //    var totalfactory =  Math.round(plantationOf0 + plantationOf1 + plantationOf2 + plantationOf3 + plantationOf4 + plantationOf5);

        //   document.getElementById('user_factories').textContent = totalfactory;


        var factory_divident_0 = plantationOf0 * 6;
        var factory_divident_1 = plantationOf1 * 24;
        var factory_divident_2 = plantationOf2 * 97;
        var factory_divident_3 = plantationOf3 * 355;
        var factory_divident_4 = plantationOf4 * 1125;
        var factory_divident_5 = plantationOf3 * 2375;


        // var totalProfit = Math.round(factory_divident_0 + factory_divident_1 + factory_divident_2 + factory_divident_3 + factory_divident_4 + factory_divident_5);

        //   document.getElementById('user_dividents').textContent = totalProfit;




        document.getElementById('factory_count_0').textContent = plantationOf0;
        document.getElementById('factory_count_1').textContent = plantationOf1;
        document.getElementById('factory_count_2').textContent = plantationOf2;
        document.getElementById('factory_count_3').textContent = plantationOf3;
        document.getElementById('factory_count_4').textContent = plantationOf4;
        document.getElementById('factory_count_5').textContent = plantationOf5;


        document.getElementById('factory_divident_0').textContent = factory_divident_0;
        document.getElementById('factory_divident_1').textContent = factory_divident_1;
        document.getElementById('factory_divident_2').textContent = factory_divident_2;
        document.getElementById('factory_divident_3').textContent = factory_divident_3;
        document.getElementById('factory_divident_4').textContent = factory_divident_4;
        document.getElementById('factory_divident_5').textContent = factory_divident_5;


    });



}




function deposit() {
    var sell = Number($("#input_buy").val());
    var amt = sell * 1e6
    tronland.deposit().send({
        callValue: amt
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}



function withdraw() {
    var sell = Number($("#input_withdraw").val());
    tronland.withdraw(sell).send({
        callValue: 0
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });


}




$("#plant_button_0").click(function() {

    var data = Number($("#plant_input_0").val());

    tronland.buy(0, data).send({
        callValue: 0
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });


});


$("#plant_button_1").click(function() {

    var data = Number($("#plant_input_1").val());

    tronland.buy(1, data).send({
        callValue: 0
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });


});

$("#plant_button_2").click(function() {

    var data = Number($("#plant_input_2").val());

    tronland.buy(2, data).send({
        callValue: 0
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });


});

$("#plant_button_3").click(function() {

    var data = Number($("#plant_input_3").val());

    tronland.buy(3, data).send({
        callValue: 0
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });


});

$("#plant_button_4").click(function() {

    var data = Number($("#plant_input_4").val());

    tronland.buy(4, data).send({
        callValue: 0
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });


});

$("#plant_button_5").click(function() {

    var data = Number($("#plant_input_5").val());

    tronland.buy(5, data).send({
        callValue: 0
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });


});


 
    $('#plant_input_0').on('keyup input', function() {
    var buy1 = Number($("#plant_input_0").val());
    var data = buy1 * 3000;
    document.getElementById('data0').textContent = data;
      //   $("#plant_error_field_0").show();
       if(totalcoinsForBuy < data){
            
             $("#plant_error_field_0").show();
              $("#plant_button_0").attr("disabled", true);
             document.getElementById("plant_button_0").style.cursor = "not-allowed";
            
           }
        else{
             $("#plant_error_field_0").hide();
             $("#plant_button_0").attr("disabled", false);
             document.getElementById("plant_button_0").style.cursor = "pointer";
        }
     
});

$('#plant_input_1').on('keyup input', function() {
    var buy1 = Number($("#plant_input_1").val());
    var data = buy1 * 11750;
    document.getElementById('data1').textContent = data;
    if(totalcoinsForBuy < data){
            
             $("#plant_error_field_1").show();
              $("#plant_button_1").attr("disabled", true);
             document.getElementById("plant_button_1").style.cursor = "not-allowed";
            
           }
        else{
             $("#plant_error_field_1").hide();
             $("#plant_button_1").attr("disabled", false);
             document.getElementById("plant_button_1").style.cursor = "pointer";
        }
 
 
});
$('#plant_input_2').on('keyup input', function() {
    var buy1 = Number($("#plant_input_2").val());
    var data = buy1 * 44500;
    document.getElementById('data2').textContent = data;
    if(totalcoinsForBuy < data){
            
             $("#plant_error_field_2").show();
              $("#plant_button_2").attr("disabled", true);
             document.getElementById("plant_button_2").style.cursor = "not-allowed";
            
           }
        else{
             $("#plant_error_field_2").hide();
             $("#plant_button_2").attr("disabled", false);
             document.getElementById("plant_button_2").style.cursor = "pointer";
        }
 
 
});
$('#plant_input_3').on('keyup input', function() {
    var buy1 = Number($("#plant_input_3").val());
    var data = buy1 * 155000;
    document.getElementById('data3').textContent = data;
    if(totalcoinsForBuy < data){
            
             $("#plant_error_field_3").show();
              $("#plant_button_3").attr("disabled", true);
             document.getElementById("plant_button_3").style.cursor = "not-allowed";
            
           }
        else{
             $("#plant_error_field_3").hide();
             $("#plant_button_3").attr("disabled", false);
             document.getElementById("plant_button_3").style.cursor = "pointer";
        }
 
 
});
$('#plant_input_4').on('keyup input', function() {
    var buy1 = Number($("#plant_input_4").val());
    var data = buy1 * 470000;
    document.getElementById('data4').textContent = data;
    if(totalcoinsForBuy < data){
            
             $("#plant_error_field_4").show();
              $("#plant_button_4").attr("disabled", true);
             document.getElementById("plant_button_4").style.cursor = "not-allowed";
            
           }
        else{
             $("#plant_error_field_4").hide();
             $("#plant_button_4").attr("disabled", false);
             document.getElementById("plant_button_4").style.cursor = "pointer";
        }
 
 
});
$('#plant_input_5').on('keyup input', function() {
    var buy1 = Number($("#plant_input_5").val());
    var data = buy1 * 950000;
    document.getElementById('data5').textContent = data;
    if(totalcoinsForBuy < data){
            
             $("#plant_error_field_5").show();
              $("#plant_button_5").attr("disabled", true);
             document.getElementById("plant_button_5").style.cursor = "not-allowed";
            
           }
        else{
             $("#plant_error_field_5").hide();
             $("#plant_button_5").attr("disabled", false);
             document.getElementById("plant_button_5").style.cursor = "pointer";
        }
 
 
});



$('#input_withdraw').on('keyup input', function() {
    var buy1 = Number($("#input_withdraw").val());
    var data = buy1 / 25;
    document.getElementById('widata').textContent = data;



});

$('#input_buy').on('keyup input', function() {
    var buy1 = Number($("#input_buy").val());
    var data = 25 * buy1;
    document.getElementById('buydata').textContent = data;



});
$("#button_popol").click(function() {

    if (typeof(window.tronWeb) === 'undefined') {
        $("#no_tronweb").show();
    } else {
        $("#no_tronweb").hide();
        $("#popol").show();
    }
});

$("#button_vivod").click(function() {

    if (typeof(window.tronWeb) === 'undefined') {
        $("#no_tronweb").show();
    } else {
        $("#no_tronweb").hide();
        $("#vivod").show();
    }

});

$("#factory_button_0").click(function() {

    if (typeof(window.tronWeb) === 'undefined') {
        $("#no_tronweb").show();
    } else {
        $("#no_tronweb").hide();
        $("#rise").show();
    }


});
$("#factory_button_1").click(function() {
    if (typeof(window.tronWeb) === 'undefined') {
        $("#no_tronweb").show();
    } else {
        $("#no_tronweb").hide();
        $("#phen").show();
    }

});
$("#factory_button_2").click(function() {
    if (typeof(window.tronWeb) === 'undefined') {
        $("#no_tronweb").show();
    } else {
        $("#no_tronweb").hide();
        $("#orange").show();
    }
});
$("#factory_button_3").click(function() {

    if (typeof(window.tronWeb) === 'undefined') {
        $("#no_tronweb").show();
    } else {
        $("#no_tronweb").hide();
        $("#tea").show();
    }

});
$("#factory_button_4").click(function() {
    if (typeof(window.tronWeb) === 'undefined') {
        $("#no_tronweb").show();
    } else {
        $("#no_tronweb").hide();
        $("#vino").show();
    }

});
$("#factory_button_5").click(function() {
    if (typeof(window.tronWeb) === 'undefined') {
        $("#no_tronweb").show();
    } else {
        $("#no_tronweb").hide();
        $("#koki").show();
    }

});




main();