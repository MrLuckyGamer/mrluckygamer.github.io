// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
function getTanDeg(deg) {
	var rad = deg * Math.PI / 180;
	return Math.tan(rad);
}

function ransomizeSpans(containerElem, numToCutOut) {
	var letterElems = Array.from(containerElem.querySelectorAll("span:not(.whitespace)"));

	for (letterElem of letterElems) {
		letterElem.style.transform = "rotate(" + String(getRandomInt(-10, 10))  + "deg)";
	}

	for (i = 0; i < numToCutOut; i++) {
		const ransomLetterNum = getRandomInt(0, letterElems.length);
		const ransomLetterElem = letterElems[ransomLetterNum];
		ransomLetterElem.className = "ransom-letter";

		letterElems.splice(ransomLetterNum, 1);
	}
}

// https://stackoverflow.com/a/59575227
var dynamicStyleSheet = null;
var knifeStabAnimIndex = null;
function addRuleToDynamicStyleSheet(ruleText) {
	if (!dynamicStyleSheet) {
		dynamicStyleSheet = document.createElement("style");
		document.head.appendChild(dynamicStyleSheet);
	}

	knifeStabAnimIndex = dynamicStyleSheet.sheet.insertRule(ruleText, dynamicStyleSheet.length);
}

const knifeSoundElem = document.getElementById("knife-sound");
const knifeElem = document.getElementById("knife");
const serviceElems = document.getElementsByClassName("service");

for (serviceElem of serviceElems) {
	ransomizeSpans(serviceElem, 0);

	serviceElem.addEventListener("click", function(event) {
		// Wait! Don't do the redirect immediately, we want the sound/animation to play
		event.preventDefault();

		const thisServiceElem = this;

		this.style.animationPlayState = "paused";

		const endX = event.pageX - 12;
		const endY = event.pageY - 55;
		const startY = -64;
		const startX = endX + (endY - startY) / getTanDeg(45);

		const endXStr = String(endX) + "px";
		const endYStr = String(endY) + "px";
		const startYStr = String(startY) + "px";
		const startXStr = String(startX) + "px";

		addRuleToDynamicStyleSheet(`
			@keyframes knife-stab {
				from {
					left: ` + startXStr + `;
					top: ` + startYStr + `;
				}
				to {
					left: ` + endXStr + `;
					top: ` + endYStr + `;
				}
			}
		`);
		knifeElem.style.animation = "66ms linear 0s 1 forwards knife-stab";
		knifeElem.style.display = "block";

		knifeSoundElem.currentTime = 0;
		knifeSoundElem.play();

		// Play 75% of the sound before redirecting
		setTimeout(function() {
			window.location.href = thisServiceElem.href;
		}, knifeSoundElem.duration * 0);

		function knifeStabEnd() {
			// Reset the knife-stab animation
			dynamicStyleSheet.sheet.deleteRule(knifeStabAnimIndex);
			knifeStabAnimIndex = null;

			thisServiceElem.style.animation = "250ms linear 0s 1 forwards card-stabbed";

			knifeElem.style.left = endXStr;
			knifeElem.style.top = endYStr;
			knifeElem.style.animation = "250ms linear 0s 1 forwards knife-wiggle";

			knifeElem.removeEventListener("animationend", knifeStabEnd);
		}

		knifeElem.addEventListener("animationend", knifeStabEnd);
	});
}
ransomizeSpans(document.getElementsByTagName("h1")[0], 3);
