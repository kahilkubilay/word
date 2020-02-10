// CSS selectorlarının bulunduğu kapsayıcı
var CSS = {
	wordBox: document.querySelector('.englishWord'),
	turkishWord: document.querySelector('.turkishWord'),
}

// Javascript selectorlarının bulunduğu kapsayıcı
var CONSTS = {
	gameSpeed: 1000,
	indexNumb: 0,
	level: 1,
}

// word list
var wordsLevel1 = [
	['accountant', 'muhasebeci', 'sayman'], ['afraid', 'korkmuş', 'korkan'], ['age', 'yaş'], ['airplane', 'uçak'], ['alone', 'yalnız', 'tek başına', 'kimsesiz'],
	['angry', 'kızgın', 'öfkeli', 'kızmış', 'hiddetli'], ['animal', 'hayvan'], ['answer', 'cevap', 'yanıt', 'çözüm'], ['architect', 'mimar', 'yaratıcı'],
	['arrive', 'varmak', 'ulaşmak', 'gelmek'], ['aunt', 'teyze', 'hala', 'yenge'], ['bag', 'çanta', 'sırt çantası', 'torba', 'poşet'],
	['ball', 'top', 'bilye', 'küre'], ['bath', 'banyo', 'küvet'], ['beautiful', 'güzel', 'harika', 'hoş'], ['bill', 'hesap', 'fatura'],
	['body', 'vücut', 'beden'], ['boil', 'kaynatmak', 'kaynama', 'haşmalak'], ['bookstore', 'kitapçı', 'kitapevi'], ['boring', 'sıkıcı'],
	['borrow', 'ödünç almak', 'borç almak'], ['boss', 'patron', 'yönetici'], ['bottle', 'şişe'], ['box', 'kutu'], ['brave', 'cesur', 'yiğit'],
	['bread', 'ekmek'], ['break', 'kırmak', 'mola', 'ara'], ['bridge', 'köprü'], ['brush', 'fırça'], ['build', 'inşa etmek', 'yapı'], 
	['butter', 'tereyağı'], ['calculator', 'hesap makinesi', 'hesap cetveli'], ['calender', 'takvim'], ['call', 'aramak', 'çağrı'],
	['capital', 'başkent'], ['carpet', 'halı'], ['carry', 'taşımak'], ['cartoon', 'çizgi film'], ['chair', 'sandalye'], ['cheap', 'ucuz'], ['cheese', 'peynir'],
	['cherry', 'kiraz', 'vişne'], ['chicken', 'tavuk', 'piliç'], ['church', 'kilise'], ['clean', 'temiz', 'saf'], ['clear', 'açık', 'net'],
	['clever', 'zeki', 'akıllı'], ['clock', 'saat'], ['cloud', 'bulut'], ['coat', 'palto', 'ceket', 'kaban'], ['cold', 'soğuk'], ['company', 'şirket'],
	['continue', 'devam etmek', 'sürdürmek'], ['correct', 'doğru', 'uygun'], ['country', 'ülke'], ['cow', 'inek'], ['cry', 'ağlamak', 'ağla', 'çığlık', 'feryat', 'haykırış'],
	['daily', 'günlük', 'gündelik'], ['dark', 'karanlık', 'koyu', 'kara'], ['dentist', 'diş doktoru', 'dişçi'], ['difficult', 'zor', 'güç'],
	['dirty', 'kirli', 'pis'], ['divorced', 'boşanmış', 'ayrılmış'], ['draw', 'çizmek', 'çekmek'], ['early', 'erken', 'erkenden'], ['earn', 'kazanmak'], 
	['elephant', 'fil'], ['emergency', 'acil', 'acil durum'], ['empty', 'boş', 'aç'], ['engaged', 'nişanlı', 'meşgul'], ['engineer', 'mühendis', 'makinist'],
	['enough', 'yeter', 'yeterli'], ['eraser', 'silgi'], ['error', 'hata'], ['fall', 'sonbahar', 'düşmek', 'düşüş'], ['far', 'uzak', 'uzakta'], ['farm', 'çiftlik'],
	['fat', 'şişman', 'yağ'], ['finger', 'parmak'], ['favourite', 'favori', 'gözde']
];

var wordsLevel2 = [
	['fire', 'yangın', 'ateş', 'alev'], ['flight', 'uçuş'], ['floor', 'zemin', 'kat', 'döşeme', 'taban'], ['fork', 'çatal'], 
	['friendly', 'samimi', 'dostça', 'sıcak', 'arkadaş canlısı'], ['fruit', 'meyve'], ['funny', 'komik', 'eğlenceli', 'tuhaf', 'garip', 'gülünç'],
	['garden', 'bahçe'], ['glass', 'bardak', 'cam', 'kadeh'], ['grape', 'üzüm'], ['gun', 'silah', 'tabanca', 'tüfek', 'top'], 
	['habit', 'alışkanlık', 'huy', 'bağımlılık', 'adet'], ['half', 'yarım', 'buçuk', 'yarı'], ['hand', 'el', 'yardım', 'taraf'],
	['handsome', 'yakışklı', 'güzel'], ['hate', 'nefret', 'kin'], ['health', 'sağlık'], ['hear', 'duymak', 'dinlemek', 'işitmek', 'öğrenmek'],
	['heart', 'kalp', 'yürek'], ['heavy', 'ağır', 'şiddetli', 'aşırı', 'çok'], ['high', 'yüksek', 'üst', 'büyük', 'ileri', 'üstün'],
	['history', 'tarih', 'geçmiş'], ['horror', 'korku', 'dehşet'], ['hungry', 'aç', 'acıkmış'], ['ill', 'hasta', 'kötü'], 
	['interested', 'ilgili', 'ilgilenen'], ['job', 'iş', 'görev', 'meslek'], ['journalist', 'gazeteci'], ['kill', 'öldürmek'],
	['large', 'geniş', 'büyük', 'iri'], ['laugh', 'gülmek'], ['lawyer', 'avukat', 'hukukçu'], ['leave', 'ayrılmak', 'izin', 'veda'],
	['left', 'sol', 'ayrıldı', 'soldaki'], ['send', 'gönderme', 'göndermek', 'yollamak'], ['letter', 'mektup', 'harf'], ['library', 'kütüphane', 'kitaplık'],
	['light', 'ışık', 'aydınlık'], ['lunch', 'öğlen yemeği'], ['main', 'başlıca', 'ana', 'esas', 'asıl'], ['manager', 'müdür', 'yönetici'],
	['map', 'harita'], ['married', 'evli'], ['meal', 'yemek', 'öğün'], ['meet', 'karşılamak', 'tanışmak', 'buluşmak', 'görüşmek'], 
	['meeting', 'toplantı', 'buluşma', 'görüşme', 'karşılama'], ['melon', 'kavun'], ['minute', 'dakika', 'an'], ['mirror', 'ayna', 'yansıtmak'],
	['miss', 'özlemek', 'bayan', 'karavana', 'hanım'], ['mistake', 'hata', 'yanlış', 'yanlışlık'], ['month', 'ay'], 
	['need', 'ihtiyaç', 'gerek', 'gereksinim', 'lüzum'], ['neighbour', 'komşu', 'bitişik'], ['news', 'haberler', 'haber'],
	['nice', 'hoş', 'güzel'], ['nose', 'burun'], ['nurse', 'hemşire', 'dadı', 'hastabakıcı'], ['object', 'nesne', 'cisim', 'obje', 'amaç', 'hedef'],
	['opposite', 'karşısında', 'karşısındaki', 'karşılıklı'], ['oven', 'fırın', 'ocak'], ['page', 'sayfa'], ['paint', 'boya'], 
	['parent', 'ebeveyn', 'ana', 'esas'], ['pass', 'geçmek', 'geçme', 'geçiş', 'pass'], ['pay', 'ödeme', 'ödemek', 'ücret', 'maaş'], 
	['pepper', 'biber'], ['personal', 'kişisel', 'kişiye özel', 'özel', 'şahsi'], ['pet', 'evcil hayvan'], ['place', 'yer'], 
	['plane', 'uçak', 'düzlem', 'çınar', 'yüzey'], ['pocket', 'cep'], ['polite', 'kibar', 'nazik', 'terbiyeli'], ['pool', 'havuz', 'bilardo'],
	['poor', 'fakir', 'yoksul', 'kötü', 'zayıf', 'zavallı', 'az'], ['possible', 'mümkün', 'olası', 'olanaklı'], ['push', 'it', 'itmek'],
	['quick', 'hızlı', 'çabuk', 'hızla'], ['quiet', 'sessiz', 'sakin'], ['railway', 'demiryolu', 'tren yolu'], ['ready', 'hazır', 'kolay'],
	['refrigerator', 'buzdolabı', 'soğutucu']
];

window.localStorage.getItem('indexArr') == null ? window.localStorage.setItem('indexArr', 75) : '';

// localstorage get word
function getWord(indexArr){
	if( window.localStorage.getItem('indexArr') ){
		return window.localStorage.getItem('indexArr');
	}else {
		// control localStorage
		return (parseInt(window.localStorage.getItem('indexArr')) + 1);
	}
}

// set word
function setWord(){
	CONSTS.indexNumb = getWord();
	CONSTS.level = wordsLevel1;

	CSS.wordBox.innerHTML = wordsLevel1[CONSTS.indexNumb][0];
}

// progressbar animation
function progressBar(progressVal, totalPercentageVal){
	var strokeVal = (2 * 80) / totalPercentageVal;
	var circleProgress = document.querySelector('.progress-circle-prog');
	circleProgress.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
}

// level up
function levelUp(arrayList){
	CONSTS.indexNumb = 0;
	CONSTS.level = arrayList;

	progressBar(window.localStorage.getItem('indexArr') * 2, 100);
	window.localStorage.setItem('indexArr', CONSTS.indexNumb);
}

// set event
setWord();
progressBar(window.localStorage.getItem('indexArr') * 2, 100);

// döngü
function gameStart() {
	setInterval(function(){

		
		for(var wordCount=1 ; wordCount<CONSTS.level[CONSTS.indexNumb].length ; wordCount++){
	
			if(CSS.turkishWord.value === CONSTS.level[CONSTS.indexNumb][wordCount]){


				CONSTS.indexNumb++;
				
				
				if(CONSTS.indexNumb == 80){
					levelUp(wordsLevel2);
				}

				progressBar(window.localStorage.getItem('indexArr') * 2, 100);
				
				CSS.turkishWord.value = '';
				CSS.wordBox.innerHTML = CONSTS.level[CONSTS.indexNumb][0];

				// save on localStorage
				window.localStorage.setItem('indexArr', CONSTS.indexNumb);


			}			
		}

	}, CONSTS.gameSpeed);
}

gameStart();





