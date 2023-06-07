function Baslat()
{
    var atlar = document.getElementsByClassName("AT");//sayfadaki tüm img sınıfına ait at resimleri alınır.
    for (var i = 0; i < atlar.length; i++) 
    {
          hareketEttir(atlar[i]);//hareketEttir() fonksiyonu ile atlar hareket ettirilir.
    }
    
}

function hareketEttir(atResmi)//Bu fonksiyon bir at resmini hareket ettirmek için kullanılır. Fonksiyona hareket ettirilecek olan atResmi parametresi verilir.
{
    var hiz = Math.floor(Math.random() * 10) + 1;//Atın hızı rastgele bir sayı olarak belirlenir.
    var pozisyon = 0;//Başlangıç pozisyonu 0 olarak belirlenir.
    var bitisCizgisi =1390;//Bitiş noktası div uzunluğuna göre ayarlanır.
    var hareket = setInterval(function()  //setInterval atın belirtilen hızda hareket etmesini sağlar.Her 50 milisaniyede bir bu kod çalışıcaktır.
        {
            pozisyon += hiz;//pozisyon eğişkeni atın konumu ile güncellenir.
            atResmi.style.left = pozisyon + "px";//Atın yeni konumu sayfada gösterilir.
            atSırası();
            document.getElementById("sıralamaSonucu").innerHTML=ondekiAt.id+" ÖNDE";
            if (pozisyon >= bitisCizgisi) //Eğer at bitiş çizgisine ulaşırsa clearInterval() fonksiyonu ile hareket durdurulur.
            {
                clearInterval(hareket);
                kontrolEt(atResmi);//hareket durdurulduktan sonra kontrolEt() fonksiyonu çağrılır.
                setTimeout()    
            }
        }, 100);
}