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
gopikaTwo[36] = Gujarati.letter_I + Gujarati.sign_ANUSVARA;;
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
gopikaTwo[111] = Gujarati.letter_RA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
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
gopikaTwo[191] = Gujarati.letter_GA + Gujarati.sign_VIRAMA + Gujarati.letter_NA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
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
// gopikaTwo[216] = '\u0A95';
gopikaTwo[217] = Gujarati.sign_VIRAMA + Gujarati.letter_RA;
gopikaTwo[218] = Gujarati.letter_THA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
gopikaTwo[219] = Gujarati.letter_NNA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[220] = '\u0A95';
// gopikaTwo[221] = '\u0A95';
gopikaTwo[222] = Gujarati.letter_YA;
gopikaTwo[223] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[224] = '\u0A95';
// gopikaTwo[225] = '\u0A95';
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
// gopikaTwo[236] = '\u0A95';
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
// gopikaTwo[250] = '\u0A95';
gopikaTwo[251] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_SSA + Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER;
// gopikaTwo[252] = '\u0A95';
gopikaTwo[253] = Gujarati.letter_NNA;
gopikaTwo[254] = Gujarati.letter_SHA;
gopikaTwo[255] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;

let consonants = [];
let independentVowels = [];
let dependentVowels = [];
let consonantConjucts = [];
let halfForms = [];

var codePointPrinter = function (string) {
    for (var i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        console.log(char, char.codePointAt(0).toString(16));
    }
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
        let output = ''
        var wordLen = word.length;
        for (var i = 0; i < wordLen; i++) {
            let char = word.charAt(i);
            // console.log(char, char.codePointAt(0));
            let iCodePoint = word.codePointAt(i);
            output += gopikaTwo[iCodePoint] || String.fromCodePoint(iCodePoint);
        }

        while (output.indexOf(Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER + Gujarati.vowel_SIGN_AA) !== -1) {
            output = output.replace(Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER + Gujarati.vowel_SIGN_AA, '');
        }
       
        output = output.replace(Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E, Gujarati.vowel_SIGN_O);
        output = output.replace(Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_AI, Gujarati.vowel_SIGN_AU);
        output = output.replace(Gujarati.letter_A + Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E, Gujarati.letter_O);

        // console.log('a', output)
        codePointPrinter(output);
        for (let rephaIndex = output.indexOf(Gujarati.letter_RA + Gujarati.sign_VIRAMA), pCount = -1; rephaIndex > pCount;) {
            let liveConsonantIndex = rephaIndex - 1;
            let startString = output.slice(0, liveConsonantIndex);
            let endString = output.slice(liveConsonantIndex, output.length).replace(Gujarati.letter_RA + Gujarati.sign_VIRAMA, '');
            output = startString + (Gujarati.letter_RA + Gujarati.sign_VIRAMA) + endString;
            pCount = rephaIndex;
            rephaIndex = output.indexOf(Gujarati.letter_RA + Gujarati.sign_VIRAMA);
        }
        


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

// rawEditor.val('rðãwík[wtçkfeÞ');
rawEditor.val('nxTÍoLkk «Þkuøk{kt rðãwík[wtçkfeÞ íkhtøkku');
rawEditor.trigger('input');