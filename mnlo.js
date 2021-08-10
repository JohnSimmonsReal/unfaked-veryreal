var enabled = 0;
var i = 0;
const txt = document.querySelector(".txt");
const cbox = document.getElementById("checkbox");
document.onkeydown = function(a) {
	if (a.code == "ControlLeft" || a.code == "ControlRight" || a.code == "ShiftLeft" || a.code == "ShiftRight") {
		return;
	} else {
		next();
	}
}
document.ontouchstart = function() {
        next();
}

function next() {
	if (enabled == 1) {
		if (txt !== null) {
			txt.remove();
		}
		if (cbox !== null) {
			cbox.remove();
		}
		if (i < 31) {
			document.body.style.backgroundImage = "url("+websites[i]+")";
			i += 1;
			if (i > 30) {
				i = 0;
			}
		}
	}
}

function enabledisable() {
	if (enabled == 1) {
		enabled = 0;
	} else if (enabled == 0) {
		enabled = 1;
	}
	cbox.classList.toggle("checkbox");
	cbox.classList.toggle("checkbox-active");
}





































const websites = new Array();
websites[0] = "https://i.pinimg.com/736x/54/23/ae/5423aec28c56d9acbf6065b546c66f5d.jpg";
websites[1] = "https://preview.redd.it/pxuz5vcia4n61.jpg?width=640&crop=smart&auto=webp&s=0683596b8cd694b8bb18f2757a2d4bc40b82d775";
websites[2] = "https://i.pinimg.com/736x/93/04/a7/9304a793de95773b959129e821b3f069.jpg";
websites[3] = "https://www.sexiestpicture.com/upload/Pictures/storage/Barely-Legal-18-sexy-perfect-blonde-nude-huge-boobs-big-tits-barely-legal-18-sexy-perfect-blonde-nude-huge-boobs-big-tits.jpg";
websites[4] = "https://nupics.pro/pics/139/cute-anime-girls-big-boobs-hentai.jpg";
websites[5] = "https://indienet.info/imgs/hot-big-tits-hentai-7.jpg";
websites[6] = "https://i.redd.it/nx45ftj0ga141.jpg";
websites[7] = "https://pornsimpsonsparody.com/wp-content/uploads/boobs-marge-simpson.jpg";
websites[8] = "https://xxgasm.com/wp-content/upload/2018/04/marge_simp-2095.jpg";
websites[9] = "https://pornsimpsonsparody.com/wp-content/uploads/marge-simpson-huge-boobs.jpg";
websites[10] = "http://xxxpicss.com/xxx/sexy-blonde-teen-nude-huge-boobs-big-tits-sexy-blonde-teen-nude-huge-boobs-big-tits.jpg";
websites[11] = "https://purple64ets.files.wordpress.com/2016/03/blonde-model-topless-playboy-nude-babe-big-tits-natural-breasts.jpg";
websites[12] = "https://hotnupics.com/pics/2170/sexy-blonde-country-girl-big-tits.jpg";
websites[13] = "https://freepornpicss.com/xxx/super-hot-naked-blonde-with-big-tits.jpg";
websites[14] = "https://xxgasm.com/wp-content/upload/2019/09/sexy_nude_blonde_wom-5612.jpg";
websites[15] = "https://preview.redd.it/mad7wxesr7161.jpg?auto=webp&s=82a00b7bf48d710ea3d9b4d9fef320fab2b9d3d5";
websites[16] = "https://i.imgur.com/pDSpbxf.jpeg";
websites[17] = "https://upicsz.com/pics/399/hot-sexy-naked-boobs.jpg";
websites[18] = "https://upicsz.com/pics/2966/big-tit-hentai-uncensored.jpg"
websites[19] = "https://www.hentaimovie.tv/wp-content/uploads/2018/06/2619.jpg"
websites[20] = "https://www.bigtitsgallery.net/wp-content/uploads/2016/03/busty-hentai-schoolgirl-with-big-fake-tits-625x900.jpg";
websites[21] = "https://i.redd.it/o9z2wzcnkrz21.jpg";
websites[22] = "https://i.imgur.com/WvzdZAL.jpeg";
websites[23] = "https://cumception.com/wp-content/upload/2017/06/uncensored_hentai_t-1138.gif";
websites[24] = "https://a.xxxlibz.com/wp-content/uploads/2017/07/13173529-5011-xxxlibz.com.jpg";
websites[25] = "https://cumception.com/wp-content/upload/2017/06/uncensored_hent-7787.jpg";
websites[26] = "https://static10.hentai-img.com/upload/20200527/648/662663/p=700/1.jpg";
websites[27] = "https://i.redd.it/n8dyncbf8dh51.jpg";
websites[28] = "https://i.redd.it/qf36x7b40ej21.jpg";
websites[29] = "https://external-preview.redd.it/2JfuFvIa1wZ0OY_Erq0mdflxd0KMyfLJWx5r2ojLLWo.jpg?auto=webp&s=12108273d07fe939ad781dc3c5a5a719ad7dec26";
websites[30] = "https://danbooru.donmai.us/data/sample/b5/08/sample-b508ce54501dae9c7c592aefb962a4dc.jpg";
