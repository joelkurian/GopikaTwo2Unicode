// import MarkdownIt from 'markdown-it';
import './style.css';

var $ = require('jquery');
var Gujarati = require('./unicode-gu');
var Unicode = require('./unicode');
// var padma = require('./padma');
// console.log(padma)
var rawEditor = $('#raw');
var unicodeEditor = $('#unicode');

var gopikaTwo = [];

// gopikaTwo[32] = '\u0A95';
// gopikaTwo[33] = '\u0A95';
// gopikaTwo[34] = '\u0A95';
gopikaTwo[35] = Gujarati.letter_II + Gujarati.sign_ANUSVARA;
gopikaTwo[36] = Gujarati.letter_I + Gujarati.sign_ANUSVARA;
// gopikaTwo[37] = '\u0A95';
gopikaTwo[38] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[39] = '\u0A95';
// gopikaTwo[40] = '\u0A95';
// gopikaTwo[41] = '\u0A95';
// gopikaTwo[42] = '\u0A95';
// gopikaTwo[43] = '\u0A95';
// gopikaTwo[44] = '\u0A95';
// gopikaTwo[45] = '\u0A95';
// gopikaTwo[46] = '\u0A95';
// gopikaTwo[47] = '\u0A95';
gopikaTwo[48] = Gujarati.digit_ZERO;
gopikaTwo[49] = Gujarati.digit_ONE;
gopikaTwo[50] = Gujarati.digit_TWO;
gopikaTwo[51] = Gujarati.digit_THREE;
gopikaTwo[52] = Gujarati.digit_FOUR;
gopikaTwo[53] = Gujarati.digit_FIVE;
gopikaTwo[54] = Gujarati.digit_SIX;
gopikaTwo[55] = Gujarati.digit_SEVEN;
gopikaTwo[56] = Gujarati.digit_EIGHT;
gopikaTwo[57] = Gujarati.digit_NINE;
// gopikaTwo[58] = '\u0A95';
// gopikaTwo[59] = '\u0A95';
// gopikaTwo[60] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
// gopikaTwo[61] = '\u0A95';
// gopikaTwo[62] = '\u0A95';
// gopikaTwo[63] = '\u0A95';
// gopikaTwo[64] = '\u0A95';
gopikaTwo[65] = Gujarati.letter_CHA;
gopikaTwo[66] = Gujarati.letter_MA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[67] = '\u0A95';
// gopikaTwo[68] = '\u0A95';
gopikaTwo[69] = Gujarati.letter_II;
// gopikaTwo[70] = '\u0A95';
gopikaTwo[71] = Gujarati.letter_YA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[72] = Gujarati.sign_OM;
gopikaTwo[73] = Gujarati.vowel_SIGN_AI + Gujarati.sign_ANUSVARA;
// gopikaTwo[74] = '\u0A95';
// gopikaTwo[75] = '\u0A95';
gopikaTwo[76] = Gujarati.letter_NA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[77] = Gujarati.letter_SA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[78] = '\u0A95';
// gopikaTwo[79] = '\u0A95';
gopikaTwo[80] = Gujarati.sign_CANDRABINDU;
gopikaTwo[81] = Gujarati.letter_UU;
gopikaTwo[82] = Gujarati.letter_I;
gopikaTwo[83] = Gujarati.letter_JA + Gujarati.vowel_SIGN_II;
gopikaTwo[84] = Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_NON_JOINER;
gopikaTwo[85] = Gujarati.vowel_SIGN_E + Gujarati.sign_ANUSVARA;
gopikaTwo[86] = Gujarati.letter_PHA;
gopikaTwo[87] = Gujarati.letter_U;
gopikaTwo[88] = Gujarati.letter_TTHA;
gopikaTwo[89] = Gujarati.letter_RA + Gujarati.vowel_SIGN_UU;
gopikaTwo[90] = Gujarati.letter_DDHA;
gopikaTwo[91] = Gujarati.letter_CA;
// gopikaTwo[92] = '\u0A95';
gopikaTwo[93] = Gujarati.vowel_SIGN_VOCALIC_R;
gopikaTwo[94] = Gujarati.letter_PHA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[95] = Gujarati.sign_ABBREVIATION;
// gopikaTwo[96] = '\u0A95';
// gopikaTwo[97] = '\u0A95';
// gopikaTwo[98] = '\u0A95';
// gopikaTwo[99] = '\u0A95';
// gopikaTwo[100] = '\u0A95';
gopikaTwo[101] = Gujarati.vowel_SIGN_II;
gopikaTwo[102] = Gujarati.letter_KA;
// gopikaTwo[103] = '\u0A95';
gopikaTwo[104] = Gujarati.letter_RA;
gopikaTwo[105] = Gujarati.vowel_SIGN_AI;
// gopikaTwo[106] = '\u0A95';
gopikaTwo[107] = Gujarati.vowel_SIGN_AA;
// gopikaTwo[108] = '\u0A95';
// gopikaTwo[109] = '\u0A95';
gopikaTwo[110] = Gujarati.letter_HA;
gopikaTwo[111] = Gujarati.letter_RA + Gujarati.sign_VIRAMA;
// gopikaTwo[112] = '\u0A95';
gopikaTwo[113] = Gujarati.vowel_SIGN_UU;
gopikaTwo[114] = Gujarati.vowel_SIGN_I;
gopikaTwo[115] = Gujarati.letter_JA;
gopikaTwo[116] = Gujarati.sign_ANUSVARA;
gopikaTwo[117] = Gujarati.vowel_SIGN_E;
// gopikaTwo[118] = '\u0A95';
gopikaTwo[119] = Gujarati.vowel_SIGN_U;
gopikaTwo[120] = Gujarati.letter_TTA;
gopikaTwo[121] = Gujarati.letter_A;
gopikaTwo[122] = Gujarati.letter_DDA
gopikaTwo[123] = Gujarati.letter_MA;
gopikaTwo[124] = Gujarati.sign_NUKTA;
gopikaTwo[125] = Gujarati.letter_VOCALIC_RR;
gopikaTwo[126] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[141] = Gujarati.letter_VOCALIC_R;
// gopikaTwo[160] = '\u0A95';
// gopikaTwo[161] = '\u0A95';
gopikaTwo[162] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
gopikaTwo[163] = Gujarati.letter_PHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
gopikaTwo[164] = Gujarati.letter_LLA;
gopikaTwo[165] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_TA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[166] = '\u0A95';
gopikaTwo[167] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
// gopikaTwo[168] = '\u0A95';
gopikaTwo[169] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
gopikaTwo[170] = Gujarati.vowel_SIGN_II + Gujarati.sign_ANUSVARA;
gopikaTwo[171] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
// gopikaTwo[172] = '\u0A95';
// gopikaTwo[173] = Gujarati.sign_CANDRABINDU;
gopikaTwo[174] = Gujarati.vowel_SIGN_I + Gujarati.sign_ANUSVARA;
// gopikaTwo[175] = '\u0A95';
// gopikaTwo[176] = '\u0A95';
// gopikaTwo[177] = '\u0A95';
// gopikaTwo[178] = '\u0A95';
// gopikaTwo[179] = '\u0A95';
// gopikaTwo[180] = '\u0A95';
// gopikaTwo[181] = '\u0A95';
// gopikaTwo[182] = '\u0A95';
// gopikaTwo[183] = '\u0A95';
gopikaTwo[184] = Gujarati.vowel_SIGN_UU;
// gopikaTwo[185] = '\u0A95';
gopikaTwo[186] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[187] = Gujarati.letter_SSA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[188] = Gujarati.letter_BHA;
gopikaTwo[189] = Gujarati.letter_GHA;
gopikaTwo[190] = Gujarati.letter_KHA;
gopikaTwo[191] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Gujarati.letter_NYA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[192] = '\u0A95';
// gopikaTwo[193] = '\u0A95';
gopikaTwo[194] = Gujarati.vowel_SIGN_I;
gopikaTwo[195] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[196] = Gujarati.letter_DHA;
gopikaTwo[197] = Gujarati.letter_NYA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[198] = '\u0A95';
gopikaTwo[199] = Gujarati.letter_BHA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[200] = '\u0A95';
gopikaTwo[201] = Gujarati.letter_VOCALIC_R;
// gopikaTwo[202] = '\u0A95';
gopikaTwo[203] = Gujarati.letter_DA
gopikaTwo[204] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_YA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[205] = Gujarati.letter_JHA;
gopikaTwo[206] = Gujarati.letter_GHA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[207] = Gujarati.letter_KHA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[209] = '\u0A95';
// gopikaTwo[210] = '\u0A95';
gopikaTwo[211] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_YA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[212] = Gujarati.letter_VA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[213] = Gujarati.letter_LA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[214] = '\u0A95';
gopikaTwo[216] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_DHA;
gopikaTwo[217] = Gujarati.sign_VIRAMA + Gujarati.letter_RA;
gopikaTwo[218] = Gujarati.letter_THA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[219] = Gujarati.letter_NNA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[220] = '\u0A95';
// gopikaTwo[221] = '\u0A95';
gopikaTwo[222] = Gujarati.letter_YA;
gopikaTwo[223] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[224] = '\u0A95';
gopikaTwo[225] = Gujarati.letter_DA + Gujarati.vowel_SIGN_VOCALIC_R;
gopikaTwo[226] = Gujarati.sign_VIRAMA + Gujarati.letter_YA;
gopikaTwo[227] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_YA;
// gopikaTwo[228] = '\u0A95';
gopikaTwo[229] = Gujarati.letter_CA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[230] = Gujarati.letter_DHA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[231] = Gujarati.letter_BA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[232] = '\u0A95';
gopikaTwo[233] = Gujarati.letter_LLA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[234] = '\u0A95';
// gopikaTwo[235] = '\u0A95';
gopikaTwo[236] = Gujarati.vowel_SIGN_CANDRA_E;
gopikaTwo[237] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[238] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_VA;
gopikaTwo[239] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_VA;
gopikaTwo[240] = Gujarati.letter_VA;
// gopikaTwo[241] = '\u0A95';
gopikaTwo[242] = Gujarati.letter_JA + Gujarati.vowel_SIGN_AA;
gopikaTwo[243] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Gujarati.letter_TA;
gopikaTwo[244] = Gujarati.letter_U + Gujarati.sign_ANUSVARA;
gopikaTwo[245] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[246] = '\u0A95';
gopikaTwo[247] = Gujarati.letter_LA;
gopikaTwo[248] = Gujarati.letter_GA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[249] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.sign_VIRAMA + Gujarati.letter_VA;
gopikaTwo[250] = Gujarati.sign_VIRAMA + Gujarati.letter_RA;
gopikaTwo[251] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_SSA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[252] = '\u0A95';
gopikaTwo[253] = Gujarati.letter_NNA;
gopikaTwo[254] = Gujarati.letter_SHA;
gopikaTwo[255] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
gopikaTwo[376] = Gujarati.letter_UU + Gujarati.sign_ANUSVARA;
gopikaTwo[8482] = Gujarati.letter_NA;

let consonants = [];
let independentVowels = [];
let dependentVowels = [];
let consonantConjucts = [];
let halfForms = [];

let starter = [38, 60, 64, 65, 66, 67, 71, 74, 76, 77, 83, 86, 88, 89, 90, 91, 94, 102, 103, 104, 106, 110, 115, 120, 121, 122, 123, 126, 161, 162, 163, 164, 165, 167, 169, 171, 172, 178, 179, 180, 186, 187, 188, 189, 190, 191, 193, 195, 196, 197, 199, 203, 204, 205, 206, 207, 210, 211, 212, 213, 216, 218, 219, 222, 223, 227, 228, 229230, 231, 232, 233, 234, 235, 237, 238, 239, 240, 241, 242, 243, 245, 246, 247, 248, 249, 251, 252, 253, 254, 255, 338, 381, 382, 402, 8482];
let finisher = [60, 64, 65, 67, 70, 74, 75, 78, 86, 88, 90, 91, 97, 98, 99, 102, 103, 104, 106, 107, 109, 110, 115, 120, 122, 123, 125, 161, 162, 163, 164, 167, 169, 171, 172, 179, 180, 188, 189, 190, 196, 200, 201, 203, 205, 217, 222, 226, 227, 228, 232, 234, 235, 238, 239, 240, 241, 243, 247, 249, 250, 252, 253, 254, 255, 338, 381, 402, 8482];
let viramaChars = [84, 217, 226, 250];

var codePointPrinter = function (string) {
    for (var i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        console.log(char, char.codePointAt(0).toString(16));
    }
}

var shiftRight = function (charArr, matra) {

    for (let matraIndex = charArr.indexOf(matra), charIndex = matraIndex + 1; matraIndex > -1; matraIndex = charArr.indexOf(matra, charIndex + 1), charIndex = matraIndex + 1) {

        while (charIndex !== charArr.length) {
            let charCode = charArr[charIndex].codePointAt(0);
            if (finisher.indexOf(charCode) > -1 && (charIndex + 1 === charArr.length ||viramaChars.indexOf(charArr[charIndex + 1].codePointAt(0)) === -1)) {
                break;
            } else {
                charIndex++;
            }
        }
        charArr.splice(charIndex + 1, 0, matra);
        charArr.splice(matraIndex, 1);

    }

    return charArr;
}

var shiftLeft = function (charArr, matra) {

    for (let matraIndex = charArr.indexOf(matra), charIndex = matraIndex - 1; matraIndex > -1; matraIndex = charArr.indexOf(matra, charIndex + 1), charIndex = matraIndex - 1) {

        while (charIndex !== -1) {
            let charCode = charArr[charIndex].codePointAt(0);
            if (starter.indexOf(charCode) > -1) {
                break;
            } else {
                charIndex--;
            }
        }

        charArr.splice(matraIndex, 1);
        charArr.splice(charIndex, 0, matra);

    }

    return charArr;
}


var parser = {
    convertOld: function (word) {
        let output = ''
        var wordLen = word.length;
        for (var i = 0; i < wordLen; i++) {
            let char = word.charAt(i);
            console.log(char, char.codePointAt(0));
            let iCodePoint = word.codePointAt(i);
            output += gopikaTwo[iCodePoint] || String.fromCodePoint(iCodePoint);
        }
        return output;
    },

    convert: function (word) {
        let output = '';
        let wordArr = [...word];
        console.log('initial', wordArr);

        wordArr = shiftLeft(wordArr, '\u006F');
        // let rephaIndex = wordArr.indexOf('\u006F');
        // if (rephaIndex > -1) {
        //     let startIndex = rephaIndex - 1;
        //     while (startIndex !== -1) {
        //         let charCode = wordArr[startIndex].codePointAt(0);
        //         if (starter.indexOf(charCode) > -1) {
        //             break;
        //         } else {
        //             startIndex--;
        //         }
        //     }
        //     wordArr.splice(rephaIndex, 1);
        //     wordArr.splice(startIndex, 0, '\u006F');
        // }

        wordArr = shiftRight(wordArr, '\u0072');
        wordArr = shiftRight(wordArr, '\u00C2');
        wordArr = shiftRight(wordArr, '\u00AE');
        console.log('after shift', wordArr);
        // let sCharIndex = wordArr.indexOf('\u0072');
        // if (sCharIndex > -1) {
        //     let endIndex = sCharIndex + 1;
        //     while (endIndex !== wordArr.length) {
        //         let charCode = wordArr[endIndex].codePointAt(0);
        //         if (finisher.indexOf(charCode) > -1) {
        //             break;
        //         } else {
        //             endIndex++;
        //         }
        //     }
        //     wordArr.splice(endIndex + 1, 0, '\u0072');
        //     wordArr.splice(sCharIndex, 1);
        // }

        // sCharIndex = wordArr.indexOf('\u00C2', );
        // if (sCharIndex > -1) {
        //     let endIndex = sCharIndex + 1;
        //     while (endIndex !== wordArr.length) {
        //         let charCode = wordArr[endIndex].codePointAt(0);
        //         if (finisher.indexOf(charCode) > -1) {
        //             break;
        //         } else {
        //             endIndex++;
        //         }
        //     }
        //     wordArr.splice(endIndex + 1, 0, '\u00C2');
        //     wordArr.splice(sCharIndex, 1);
        // }

        // sCharIndex = wordArr.indexOf('\u00AE');
        // if (sCharIndex > -1) {
        //     let endIndex = sCharIndex + 1;
        //     while (endIndex !== wordArr.length) {
        //         let charCode = wordArr[endIndex].codePointAt(0);
        //         if (finisher.indexOf(charCode) > -1) {
        //             break;
        //         } else {
        //             endIndex++;
        //         }
        //     }
        //     wordArr.splice(endIndex + 1, 0, '\u00AE');
        //     wordArr.splice(sCharIndex, 1);
        // }

        // [...word].forEach((char, index) => {

        //     console.log(char, char.codePointAt(0));
        //     output += gopikaTwo[char.codePointAt(0)] || char
        // });


        // for (let remaining = length - index; remaining > 0; remaining = length - index) {
        //     let char = wordArr[index];
        //     let codePoint = char.codePointAt(0);
        //     if (consonants.indexOf(codePoint) || independentVowels.indexOf(codePoint)) {

        //     }
        // }




        wordArr.forEach((char, index) => {
            console.log(char, char.codePointAt(0));
            output += gopikaTwo[char.codePointAt(0)] || char
        });

        console.log('initial unicode', [...output])

        while (output.indexOf(Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER + Gujarati.vowel_SIGN_AA) !== -1) {
            output = output.replace(Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER + Gujarati.vowel_SIGN_AA, '');
        }
       
        while (output.indexOf(Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E) !== -1) {
        output = output.replace(Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E, Gujarati.vowel_SIGN_O);
        }

        output = output.replace(Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_AI, Gujarati.vowel_SIGN_AU);
        output = output.replace(Gujarati.letter_A + Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E, Gujarati.letter_O);

        console.log('result', [...output]);
        // // console.log('a', output)
        // codePointPrinter(output);
        // for (let rephaIndex = output.indexOf(gopikaTwo[111]), pCount = -1; rephaIndex > pCount;) {
        //     let liveConsonantIndex = rephaIndex - 1;
        //     let startString = output.slice(0, liveConsonantIndex);
        //     let endString = output.slice(liveConsonantIndex, output.length).replace(gopikaTwo[111], '');
        //     output = startString + (gopikaTwo[111]) + endString;
        //     pCount = rephaIndex;
        //     rephaIndex = output.indexOf(gopikaTwo[111]);
        // }


        


        return output;
    }
}

function* wordGenerator(string) {
    let i = 0,
        len = string.length,
        word = '';
    while (i < len) {
        let char = string.charAt(i);
        if (char === ' ') {
            if (word !== '') {
                yield word;
                word = '';
            }
            yield ' ';
        } else {
            word += char;
        }
        i++;
    }
    return word;
}

rawEditor.bind('input propertychange', function () {
    // console.log(rawEditor.val());
    var rawString = rawEditor.val();

    let unicodeString = '';

    let wordIterator = wordGenerator(rawString);
    for (let word; word = wordIterator.next().value;) {
        console.log(word);
        let converted = parser.convert(word);
        console.log(converted);
        unicodeString += converted;
    }

    unicodeEditor.val(unicodeString);
});

rawEditor.val('økrík');
// rawEditor.val(' Úk{kuoR÷uÂõxÙf');
rawEditor.trigger('input');