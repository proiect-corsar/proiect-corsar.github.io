$(document).ready(function() {
  imageSelectors();
  setPrice();

  $("input:radio[name=transport]").change(function(){
    setPrice();
  });
  $("input:radio[name=payment]").change(function(){
    setPrice();
  });
});

function imageSelectors() {
  var productImages = $('#productImages li'),
      mainImage = $('#mainImage');

  productImages.click(function(e) {
    mainImage.attr('src', $(this).find('img').attr('src'));
    mainImage.addClass('animated fadeIn');
    setTimeout(function(){
      mainImage.removeClass('animated fadeIn');
    },200);
  });
}

function setPrice() {
  var price = $('#price'),
      priceTag = $('.price-tag')
      transport = $("input:radio[name=transport]:checked"),
      payment = $("input:radio[name=payment]:checked")
      buyButton = $("#buynow");

  price.text('170');

  if(transport.val() == "curier") {
    price.text(Number(price.text()) + 20);
    // priceTag.addClass('animated pulse');
    // setTimeout(function(){
    //   priceTag.removeClass('animated pulse');
    // },1000);
  }
  if(payment.val() == "ramburs") {
    price.text(Number(price.text()) + 20);
  }

  if(transport.length && payment.length) {
    buyButton.text('Procesează comanda');
    buyButton.css('background', '#ff0000');
  } else {
    if(transport.length && !payment.length) {
      buyButton.text('Selectează și opțiunea de plată');
    }
    if(!transport.length && payment.length) {
      buyButton.text('Selectează și opțiunea de transport');
    }
    buyButton.css('background', '#001630');
  }

}
