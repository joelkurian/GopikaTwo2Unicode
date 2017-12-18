// $Id: GopikaTwo.js,v 1.2 2005/12/09 15:05:44 vnagarjuna Exp $ -->

//Copyright 2005 Nagarjuna Venna <vnagarjuna@yahoo.com>

/* ***** BEGIN LICENSE BLOCK ***** 
 *  This file is part of Padma.
 *
 *  Padma is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.

 *  Padma is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Padma; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * ***** END LICENSE BLOCK ***** */

var Padma = require('../Common/Padma');

function GopikaTwo()
{
}

//The interface every dynamic font encoding should implement
GopikaTwo.maxLookupLen = 3;
GopikaTwo.fontFace     = "GopikaTwo";
GopikaTwo.displayName  = "GopikaTwo";
GopikaTwo.script       = Padma.script_GUJARATI;
GopikaTwo.hasSuffixes  = true;

GopikaTwo.lookup = function (str) 
{
    return GopikaTwo.toPadma[str];
}

GopikaTwo.isPrefixSymbol = function (str)
{
    return GopikaTwo.prefixList[str] != null;
}

GopikaTwo.isSuffixSymbol = function (str)
{
    return GopikaTwo.suffixList[str] != null;
}

GopikaTwo.isOverloaded = function (str)
{
    return GopikaTwo.overloadList[str] != null;
}

GopikaTwo.handleTwoPartVowelSigns = function (sign1, sign2)
{
    if ((sign1 == Padma.vowelsn_EE && sign2 == Padma.vowelsn_AA) ||
        (sign1 == Padma.vowelsn_AA && sign2 == Padma.vowelsn_EE))
        return Padma.vowelsn_OO;
    return sign1 + sign2;    
}

//no preprocessing necessary
GopikaTwo.preprocessMessage = function (input)
{
    return input;
}

//Implementation details start here
//48, B1, B9, C0, C4, DD

//Specials
GopikaTwo.anusvara       = "\u006B";
GopikaTwo.candrabindu_1  = "\u0050";
GopikaTwo.candrabindu_2  = "\u0070";

//Vowels
GopikaTwo.vowel_A        = "\u0079";
GopikaTwo.vowel_AA       = "\u0079\u0074";
GopikaTwo.vowel_I        = "\u0052";
GopikaTwo.vowel_II       = "\u0045";
GopikaTwo.vowel_U        = "\u0057";
GopikaTwo.vowel_UU       = "\u0051";
GopikaTwo.vowel_RR       = "\u007D";
GopikaTwo.vowel_EE       = "\u0079\u0075";
GopikaTwo.vowel_AI       = "\u0079\u0069";
GopikaTwo.vowel_OO       = "\u0079\u0074\u0075";
GopikaTwo.vowel_AU       = "\u0079\u0074\u0069";

//Consonants
GopikaTwo.consnt_KA_1    = "\u0066";
GopikaTwo.consnt_KA_2    = "\u00BE";
GopikaTwo.consnt_KHA     = "\u0046";
GopikaTwo.consnt_GA      = "\u0064";
GopikaTwo.consnt_GHA_1   = "\u0044";
GopikaTwo.consnt_GHA_2   = "\u00BC";
GopikaTwo.consnt_NGA     = "\u00CA";

GopikaTwo.consnt_CA      = "\u0061";
GopikaTwo.consnt_CHA     = "\u0041";
GopikaTwo.consnt_JA      = "\u0073";
GopikaTwo.consnt_JHA_1   = "\u00CD";
GopikaTwo.consnt_JHA_2   = "\u00E3";
GopikaTwo.consnt_NYA     = "\u00C5\u0074";

GopikaTwo.consnt_TTA     = "\u0078";
GopikaTwo.consnt_TTHA    = "\u0058";
GopikaTwo.consnt_DDA_1   = "\u007A";
GopikaTwo.consnt_DDA_2   = "\u00FD";
GopikaTwo.consnt_DDHA    = "\u005A";
GopikaTwo.consnt_NNA     = "\u004B";

GopikaTwo.consnt_TA      = "\u003B";
GopikaTwo.consnt_THA     = "\u003A"; 
GopikaTwo.consnt_DA_1    = "\u2019";
GopikaTwo.consnt_DA_2    = "\u00E6";
GopikaTwo.consnt_DHA     = "\u0022";
GopikaTwo.consnt_NA      = "\u006C";

GopikaTwo.consnt_PA      = "\u0076";
GopikaTwo.consnt_PHA     = "\u0056";
GopikaTwo.consnt_BA      = "\u0063";
GopikaTwo.consnt_BHA     = "\u0043";
GopikaTwo.consnt_MA      = "\u0062";

GopikaTwo.consnt_YA_1    = "\u0067";
GopikaTwo.consnt_YA_2    = "\u00E2";
GopikaTwo.consnt_RA      = "\u0068";
GopikaTwo.consnt_LA      = "\u006A";
GopikaTwo.consnt_VA      = "\u004A";
GopikaTwo.consnt_SHA     = "\u004E";
GopikaTwo.consnt_SSA     = "\u00BB\u0074";
GopikaTwo.consnt_SA      = "\u006D";
GopikaTwo.consnt_HA      = "\u006E";
GopikaTwo.consnt_LLA     = "\u00A4";

//Gunintamulu
GopikaTwo.vowelsn_AA     = "\u0074";
GopikaTwo.vowelsn_I_1    = "\u0072";
GopikaTwo.vowelsn_I_2    = "\u00C2";
GopikaTwo.vowelsn_II     = "\u0065";
GopikaTwo.vowelsn_U_1    = "\u0077";
GopikaTwo.vowelsn_U_2    = "\u00B8";
GopikaTwo.vowelsn_UU_1   = "\u0054";
GopikaTwo.vowelsn_UU_2   = "\u0071";
GopikaTwo.vowelsn_UU_3   = "\u00B2";
GopikaTwo.vowelsn_R      = "\u005D";
GopikaTwo.vowelsn_EE     = "\u0075";
GopikaTwo.vowelsn_AI     = "\u0069";
GopikaTwo.vowelsn_OO     = "\u0074\u0075";
GopikaTwo.vowelsn_AU     = "\u0074\u0069";

//Vowel + anusvara
GopikaTwo.vowel_IM       = "\u0024";
GopikaTwo.vowel_IIM      = "\u0023";
GopikaTwo.vowel_UM       = "\u00F4";
GopikaTwo.vowel_UUM      = "\u00B3";

//Matra + modifier
GopikaTwo.vowelsn_IM     = "\u00AE";
GopikaTwo.vowelsn_IIM    = "\u00B4";
GopikaTwo.vowelsn_EEM    = "\u0055";
GopikaTwo.vowelsn_AIM    = "\u0049";

//Half Forms
GopikaTwo.halffm_KSH     = "\u00FB";
GopikaTwo.halffm_KHA     = "\u00CF";
GopikaTwo.halffm_GA      = "\u00F8";
GopikaTwo.halffm_GHA     = "\u00CE";
GopikaTwo.halffm_CA      = "\u00E5";
GopikaTwo.halffm_JA      = "\u00DF";
GopikaTwo.halffm_JNY     = "\u00BF";
GopikaTwo.halffm_NYA     = "\u00C5";
GopikaTwo.halffm_NNA     = "\u00BD";
GopikaTwo.halffm_TA      = "\u00F0";
GopikaTwo.halffm_TT      = "\u2022";
GopikaTwo.halffm_TR      = "\u00BA";
GopikaTwo.halffm_THA     = "\u00DA";
GopikaTwo.halffm_DHA     = "\u00E6";
GopikaTwo.halffm_NA      = "\u004C";
GopikaTwo.halffm_NN      = "\u00D2";
GopikaTwo.halffm_PA      = "\u00C3";
GopikaTwo.halffm_BA      = "\u00E7";
GopikaTwo.halffm_BHA     = "\u00C7";
GopikaTwo.halffm_MA      = "\u0042";
GopikaTwo.halffm_YA      = "\u0047";
GopikaTwo.halffm_RA      = "\u006F";
GopikaTwo.halffm_LA      = "\u00D5";
GopikaTwo.halffm_VA      = "\u00D4";
GopikaTwo.halffm_SHA     = "\u007E";
GopikaTwo.halffm_SSA     = "\u00BB";
GopikaTwo.halffm_SA      = "\u004D";
GopikaTwo.halffm_HY      = "\u00CC";
GopikaTwo.halffm_LLA     = "\u00E9";

//Conjuncts
GopikaTwo.conjct_KK      = "\u00AC";
GopikaTwo.conjct_KR      = "\u00A2";
GopikaTwo.conjct_KSH     = "\u00FB\u0074";
GopikaTwo.conjct_KHT     = "\u00C9";
GopikaTwo.conjct_NGK     = "\u00D1";
GopikaTwo.conjct_NGKH    = "\u00D6";
GopikaTwo.conjct_NGG     = "\u00DC";
GopikaTwo.conjct_NGGH    = "\u00E1";
GopikaTwo.conjct_NGM     = "\u00E0";
GopikaTwo.conjct_JNY     = "\u00BF\u0074";
GopikaTwo.conjct_JJ      = "\u00E4";
GopikaTwo.conjct_JR      = "\u0040";
GopikaTwo.conjct_TTTT    = "\u00E8";
GopikaTwo.conjct_TT_TTH  = "\u00D9";
GopikaTwo.conjct_TTHTTH  = "\u00EA";
GopikaTwo.conjct_DDDD    = "\u00A8";
GopikaTwo.conjct_DD_DDH  = "\u00DB";
GopikaTwo.conjct_DDHDDH  = "\u00EB";
GopikaTwo.conjct_TT      = "\u2022\u0074";
GopikaTwo.conjct_TR      = "\u00BA\u0074";
GopikaTwo.conjct_TN      = "\u00ED";
GopikaTwo.conjct_DGH     = "\u00EC";
GopikaTwo.conjct_DD      = "\u00C6";
GopikaTwo.conjct_D_DH    = "\u00D8";
GopikaTwo.conjct_DB      = "\u00EF";
GopikaTwo.conjct_DM      = "\u00C8";
GopikaTwo.conjct_DR      = "\u00F7";
GopikaTwo.conjct_DV      = "\u00EE";
GopikaTwo.conjct_PT      = "\u00F3";
GopikaTwo.conjct_PN      = "\u00A1";
GopikaTwo.conjct_PR      = "\u00AB";
GopikaTwo.conjct_PHR     = "\u00A3";
GopikaTwo.conjct_SHC     = "\u00F9";
GopikaTwo.conjct_SHN     = "\u00A7";
GopikaTwo.conjct_SHR     = "\u00A9";
GopikaTwo.conjct_SHV     = "\u00B5";
GopikaTwo.conjct_SSTT    = "\u00D0";
GopikaTwo.conjct_HN      = "\u00F6";
GopikaTwo.conjct_HM      = "\u00F1";
GopikaTwo.conjct_HY      = "\u00CC\u0074";
GopikaTwo.conjct_HL      = "\u00F5";
GopikaTwo.conjct_HV      = "\u00FA";

//Combos (aaaaaarghhhhhhhhhhhhhhhhhh!!!!)
GopikaTwo.combo_KSHU     = "\u00FB\u00FE";
GopikaTwo.combo_KSHUU    = "\u00FB\u00CB";
GopikaTwo.combo_KSHR     = "\u00FB\u005C";
GopikaTwo.combo_KHU      = "\u00CF\u00FE";
GopikaTwo.combo_KHUU     = "\u00CF\u00CB";
GopikaTwo.combo_KHR      = "\u00CF\u005C";
GopikaTwo.combo_GU       = "\u00F8\u00FE";
GopikaTwo.combo_GUU      = "\u00F8\u00CB";
GopikaTwo.combo_GR       = "\u00F8\u005C";
GopikaTwo.combo_GHU      = "\u00CE\u00FE";
GopikaTwo.combo_GHUU     = "\u00CE\u00CB";
GopikaTwo.combo_GHR      = "\u00CE\u005C";
GopikaTwo.combo_CU       = "\u00E5\u00FE";
GopikaTwo.combo_CUU      = "\u00E5\u00CB";
GopikaTwo.combo_CR       = "\u00E5\u005C";
GopikaTwo.combo_JAA      = "\u00F2";
GopikaTwo.combo_JII      = "\u0053";
GopikaTwo.combo_NNU      = "\u00BD\u00FE";
GopikaTwo.combo_NNUU     = "\u00BD\u00CB";
GopikaTwo.combo_NNR      = "\u00BD\u005C";
GopikaTwo.combo_TU       = "\u00F0\u00FE";
GopikaTwo.combo_TUU      = "\u00F0\u00CB";
GopikaTwo.combo_TR       = "\u00F0\u005C";
GopikaTwo.combo_THU      = "\u00DA\u00FE";
GopikaTwo.combo_THUU     = "\u00DA\u00CB";
GopikaTwo.combo_THR      = "\u00DA\u005C";
GopikaTwo.combo_DR       = "\u005E";
GopikaTwo.combo_DHU      = "\u00E6\u00FE";
GopikaTwo.combo_DHUU     = "\u00E6\u00CB";
GopikaTwo.combo_DHR      = "\u00E6\u005C";
GopikaTwo.combo_NU       = "\u004C\u00FE";
GopikaTwo.combo_NUU      = "\u004C\u00CB";
GopikaTwo.combo_NR       = "\u004C\u005C";
GopikaTwo.combo_PU       = "\u00C3\u00FE";
GopikaTwo.combo_PUU      = "\u00C3\u00CB";
GopikaTwo.combo_PR       = "\u00C3\u005C";
GopikaTwo.combo_BU       = "\u00E7\u00FE";
GopikaTwo.combo_BUU      = "\u00E7\u00CB";
GopikaTwo.combo_BR       = "\u00E7\u005C";
GopikaTwo.combo_BHU      = "\u00C7\u00FE";
GopikaTwo.combo_BHUU     = "\u00C7\u00CB";
GopikaTwo.combo_BHR      = "\u00C7\u005C";
GopikaTwo.combo_MU       = "\u0042\u00FE";
GopikaTwo.combo_MUU      = "\u0042\u00CB";
GopikaTwo.combo_MR       = "\u0042\u005C";
GopikaTwo.combo_YU       = "\u0047\u00FE";
GopikaTwo.combo_YUU      = "\u0047\u00CB";
GopikaTwo.combo_YR       = "\u0047\u005C";
GopikaTwo.combo_RUU_1    = "\u0059";
GopikaTwo.combo_RUU_2    = "\u00C1";
GopikaTwo.combo_LU       = "\u00D5\u00FE";
GopikaTwo.combo_LUU      = "\u00D5\u00CB";
GopikaTwo.combo_LR       = "\u00D5\u005C";
GopikaTwo.combo_VU       = "\u00D4\u00FE";
GopikaTwo.combo_VUU      = "\u00D4\u00CB";
GopikaTwo.combo_VR       = "\u00D4\u005C";
GopikaTwo.combo_LLU      = "\u00E9\u00FE";
GopikaTwo.combo_LLUU     = "\u00E9\u00CB";
GopikaTwo.combo_LLR      = "\u00E9\u005C";
GopikaTwo.combo_SHU      = "\u007E\u00FE";
GopikaTwo.combo_SHUU     = "\u007E\u00CB";
GopikaTwo.combo_SHR      = "\u007E\u005C";
GopikaTwo.combo_SSU      = "\u00BB\u00FE";
GopikaTwo.combo_SSUU     = "\u00BB\u00CB";
GopikaTwo.combo_SSR      = "\u00BB\u005C";
GopikaTwo.combo_SU       = "\u004D\u00FE";
GopikaTwo.combo_SUU      = "\u004D\u00CB";
GopikaTwo.combo_SR       = "\u004D\u005C";
GopikaTwo.combo_HR       = "\u00D3";
GopikaTwo.combo_HYU      = "\u00CC\u00CB";
GopikaTwo.combo_HYUU     = "\u00CC\u00FE";
GopikaTwo.combo_HYR      = "\u00CC\u005C";

//Half forms of RA
GopikaTwo.halffm_RA_ANU  = "\u004F";

GopikaTwo.vattu_RA_1     = "\u005B";
GopikaTwo.vattu_RA_2     = "\u007B";

GopikaTwo.misc_DANDA     = "\u003E";
GopikaTwo.misc_DDANDA    = "\u003E\u003E";
GopikaTwo.misc_OM        = "\u0060";
GopikaTwo.nukta          = "\u007C";

//Gujarati Digits
GopikaTwo.digit_ZERO     = "\u0030";
GopikaTwo.digit_ONE      = "\u0031";
GopikaTwo.digit_TWO      = "\u0032";
GopikaTwo.digit_THREE    = "\u0033";
GopikaTwo.digit_FOUR     = "\u0034";
GopikaTwo.digit_FIVE     = "\u0035";
GopikaTwo.digit_SIX      = "\u0036";
GopikaTwo.digit_SEVEN    = "\u0037";
GopikaTwo.digit_EIGHT    = "\u0038";
GopikaTwo.digit_NINE     = "\u0039";

//Matches ASCII
GopikaTwo.EXCLAM         = "\u0021";
GopikaTwo.PERCENT        = "\u0025";
GopikaTwo.PAREN_LEFT     = "\u0028";
GopikaTwo.PAREN_RIGHT    = "\u0029";
GopikaTwo.ASTERISK       = "\u002A";
GopikaTwo.PLUS           = "\u002B";
GopikaTwo.COMMA          = "\u002C";
GopikaTwo.PERIOD         = "\u002E";
GopikaTwo.SLASH          = "\u002F";
GopikaTwo.EQUALS         = "\u003D";
GopikaTwo.QUESTION       = "\u003F";

//Does not match ASCII
GopikaTwo.extra_COLON      = "\u0026";
GopikaTwo.extra_SEMICOLON  = "\u003C";
GopikaTwo.extra_HYPHEN     = "\u005F";
GopikaTwo.extra_QTSINGLE_1 = "\u2018";
GopikaTwo.extra_QTSINGLE_2 = "\u00A5";
GopikaTwo.extra_QTSINGLE_3 = "\u00FC";
GopikaTwo.extra_QTDOUBLE_1 = "\u00AA";

GopikaTwo.toPadma = new Object();

GopikaTwo.toPadma[GopikaTwo.anusvara]      = Padma.anusvara;
GopikaTwo.toPadma[GopikaTwo.candrabindu_1] = Padma.candrabindu;
GopikaTwo.toPadma[GopikaTwo.candrabindu_2] = Padma.candrabindu;

GopikaTwo.toPadma[GopikaTwo.vowel_A]    = Padma.vowel_A;
GopikaTwo.toPadma[GopikaTwo.vowel_AA]   = Padma.vowel_AA;
GopikaTwo.toPadma[GopikaTwo.vowel_I]    = Padma.vowel_I;
GopikaTwo.toPadma[GopikaTwo.vowel_II]   = Padma.vowel_II;
GopikaTwo.toPadma[GopikaTwo.vowel_U]    = Padma.vowel_U;
GopikaTwo.toPadma[GopikaTwo.vowel_UU]   = Padma.vowel_UU;
GopikaTwo.toPadma[GopikaTwo.vowel_RR]   = Padma.vowel_RR;
GopikaTwo.toPadma[GopikaTwo.vowel_EE]   = Padma.vowel_EE;
GopikaTwo.toPadma[GopikaTwo.vowel_AI]   = Padma.vowel_AI;
GopikaTwo.toPadma[GopikaTwo.vowel_OO]   = Padma.vowel_OO;
GopikaTwo.toPadma[GopikaTwo.vowel_AU]   = Padma.vowel_AU;

GopikaTwo.toPadma[GopikaTwo.consnt_KA_1]  = Padma.consnt_KA;
GopikaTwo.toPadma[GopikaTwo.consnt_KA_2]  = Padma.consnt_KA;
GopikaTwo.toPadma[GopikaTwo.consnt_KHA]   = Padma.consnt_KHA;
GopikaTwo.toPadma[GopikaTwo.consnt_GA]    = Padma.consnt_GA;
GopikaTwo.toPadma[GopikaTwo.consnt_GHA_1] = Padma.consnt_GHA;
GopikaTwo.toPadma[GopikaTwo.consnt_GHA_2] = Padma.consnt_GHA;
GopikaTwo.toPadma[GopikaTwo.consnt_NGA]   = Padma.consnt_NGA;

GopikaTwo.toPadma[GopikaTwo.consnt_CA]    = Padma.consnt_CA;
GopikaTwo.toPadma[GopikaTwo.consnt_CHA]   = Padma.consnt_CHA;
GopikaTwo.toPadma[GopikaTwo.consnt_JA]    = Padma.consnt_JA;
GopikaTwo.toPadma[GopikaTwo.consnt_JHA_1] = Padma.consnt_JHA;
GopikaTwo.toPadma[GopikaTwo.consnt_JHA_2] = Padma.consnt_JHA;
GopikaTwo.toPadma[GopikaTwo.consnt_NYA]   = Padma.consnt_NYA;

GopikaTwo.toPadma[GopikaTwo.consnt_TTA]   = Padma.consnt_TTA;
GopikaTwo.toPadma[GopikaTwo.consnt_TTHA]  = Padma.consnt_TTHA;
GopikaTwo.toPadma[GopikaTwo.consnt_DDA_1] = Padma.consnt_DDA;
GopikaTwo.toPadma[GopikaTwo.consnt_DDA_2] = Padma.consnt_DDA;
GopikaTwo.toPadma[GopikaTwo.consnt_DDHA]  = Padma.consnt_DDHA;
GopikaTwo.toPadma[GopikaTwo.consnt_NNA]   = Padma.consnt_NNA;

GopikaTwo.toPadma[GopikaTwo.consnt_TA]    = Padma.consnt_TA;
GopikaTwo.toPadma[GopikaTwo.consnt_THA]   = Padma.consnt_THA;
GopikaTwo.toPadma[GopikaTwo.consnt_DA_1]  = Padma.consnt_DA;
GopikaTwo.toPadma[GopikaTwo.consnt_DA_2]  = Padma.consnt_DA;
GopikaTwo.toPadma[GopikaTwo.consnt_DHA]   = Padma.consnt_DHA;
GopikaTwo.toPadma[GopikaTwo.consnt_NA]    = Padma.consnt_NA;

GopikaTwo.toPadma[GopikaTwo.consnt_PA]    = Padma.consnt_PA;
GopikaTwo.toPadma[GopikaTwo.consnt_PHA]   = Padma.consnt_PHA;
GopikaTwo.toPadma[GopikaTwo.consnt_BA]    = Padma.consnt_BA;
GopikaTwo.toPadma[GopikaTwo.consnt_BHA]   = Padma.consnt_BHA;
GopikaTwo.toPadma[GopikaTwo.consnt_MA]    = Padma.consnt_MA;

GopikaTwo.toPadma[GopikaTwo.consnt_YA_1]  = Padma.consnt_YA;
GopikaTwo.toPadma[GopikaTwo.consnt_YA_2]  = Padma.consnt_YA;
GopikaTwo.toPadma[GopikaTwo.consnt_RA]    = Padma.consnt_RA;
GopikaTwo.toPadma[GopikaTwo.consnt_LA]    = Padma.consnt_LA;
GopikaTwo.toPadma[GopikaTwo.consnt_VA]    = Padma.consnt_VA;
GopikaTwo.toPadma[GopikaTwo.consnt_SHA]   = Padma.consnt_SHA;
GopikaTwo.toPadma[GopikaTwo.consnt_SSA]   = Padma.consnt_SSA;
GopikaTwo.toPadma[GopikaTwo.consnt_SA]    = Padma.consnt_SA;
GopikaTwo.toPadma[GopikaTwo.consnt_HA]    = Padma.consnt_HA;
GopikaTwo.toPadma[GopikaTwo.consnt_LLA]   = Padma.consnt_LLA;

//Gunintamulu
GopikaTwo.toPadma[GopikaTwo.vowelsn_AA]   = Padma.vowelsn_AA;
GopikaTwo.toPadma[GopikaTwo.vowelsn_I_1]  = Padma.vowelsn_I;
GopikaTwo.toPadma[GopikaTwo.vowelsn_I_2]  = Padma.vowelsn_I;
GopikaTwo.toPadma[GopikaTwo.vowelsn_II]   = Padma.vowelsn_II;
GopikaTwo.toPadma[GopikaTwo.vowelsn_U_1]  = Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.vowelsn_U_2]  = Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.vowelsn_UU_1] = Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.vowelsn_UU_2] = Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.vowelsn_UU_3] = Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.vowelsn_R]    = Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.vowelsn_EE]   = Padma.vowelsn_EE;
GopikaTwo.toPadma[GopikaTwo.vowelsn_AI]   = Padma.vowelsn_AI;
GopikaTwo.toPadma[GopikaTwo.vowelsn_OO]   = Padma.vowelsn_OO;
GopikaTwo.toPadma[GopikaTwo.vowelsn_AU]   = Padma.vowelsn_AU;

//Vowel + anusvara
GopikaTwo.toPadma[GopikaTwo.vowel_IM]     = Padma.vowel_I + Padma.anusvara;
GopikaTwo.toPadma[GopikaTwo.vowel_IIM]    = Padma.vowel_II + Padma.anusvara;
GopikaTwo.toPadma[GopikaTwo.vowel_UM]     = Padma.vowel_U + Padma.anusvara;
GopikaTwo.toPadma[GopikaTwo.vowel_UUM]    = Padma.vowel_UU + Padma.anusvara;

//matra + modifier
GopikaTwo.toPadma[GopikaTwo.vowelsn_IM]   = Padma.vowelsn_I + Padma.anusvara;
GopikaTwo.toPadma[GopikaTwo.vowelsn_IIM]  = Padma.vowelsn_II + Padma.anusvara;
GopikaTwo.toPadma[GopikaTwo.vowelsn_EEM]  = Padma.vowelsn_EE + Padma.anusvara;
GopikaTwo.toPadma[GopikaTwo.vowelsn_AIM]  = Padma.vowelsn_AI + Padma.anusvara;

//Halffm
GopikaTwo.toPadma[GopikaTwo.halffm_KSH]  = Padma.halffm_KA + Padma.halffm_SSA;
GopikaTwo.toPadma[GopikaTwo.halffm_KHA]  = Padma.halffm_KHA;
GopikaTwo.toPadma[GopikaTwo.halffm_GA]   = Padma.halffm_GA;
GopikaTwo.toPadma[GopikaTwo.halffm_GHA]  = Padma.halffm_GHA;
GopikaTwo.toPadma[GopikaTwo.halffm_CA]   = Padma.halffm_CA;
GopikaTwo.toPadma[GopikaTwo.halffm_JA]   = Padma.halffm_JA;
GopikaTwo.toPadma[GopikaTwo.halffm_JNY]  = Padma.halffm_JA + Padma.halffm_NYA;
GopikaTwo.toPadma[GopikaTwo.halffm_NYA]  = Padma.halffm_NYA;
GopikaTwo.toPadma[GopikaTwo.halffm_NNA]  = Padma.halffm_NNA;
GopikaTwo.toPadma[GopikaTwo.halffm_TA]   = Padma.halffm_TA;
GopikaTwo.toPadma[GopikaTwo.halffm_TT]   = Padma.halffm_TA + Padma.halffm_TA;
GopikaTwo.toPadma[GopikaTwo.halffm_TR]   = Padma.halffm_TA + Padma.halffm_RA;
GopikaTwo.toPadma[GopikaTwo.halffm_THA]  = Padma.halffm_THA;
GopikaTwo.toPadma[GopikaTwo.halffm_DHA]  = Padma.halffm_DHA;
GopikaTwo.toPadma[GopikaTwo.halffm_NA]   = Padma.halffm_NA;
GopikaTwo.toPadma[GopikaTwo.halffm_NN]   = Padma.halffm_NA + Padma.halffm_NA;
GopikaTwo.toPadma[GopikaTwo.halffm_PA]   = Padma.halffm_PA;
GopikaTwo.toPadma[GopikaTwo.halffm_BA]   = Padma.halffm_BA;
GopikaTwo.toPadma[GopikaTwo.halffm_BHA]  = Padma.halffm_BHA;
GopikaTwo.toPadma[GopikaTwo.halffm_MA]   = Padma.halffm_MA;
GopikaTwo.toPadma[GopikaTwo.halffm_YA]   = Padma.halffm_YA;
GopikaTwo.toPadma[GopikaTwo.halffm_RA]   = Padma.halffm_RA;
GopikaTwo.toPadma[GopikaTwo.halffm_LA]   = Padma.halffm_LA;
GopikaTwo.toPadma[GopikaTwo.halffm_VA]   = Padma.halffm_VA;
GopikaTwo.toPadma[GopikaTwo.halffm_SHA]  = Padma.halffm_SHA;
GopikaTwo.toPadma[GopikaTwo.halffm_SSA]  = Padma.halffm_SSA;
GopikaTwo.toPadma[GopikaTwo.halffm_SA]   = Padma.halffm_SA;
GopikaTwo.toPadma[GopikaTwo.halffm_LLA]  = Padma.halffm_LLA;

//Conjuncts
GopikaTwo.toPadma[GopikaTwo.conjct_KK]     = Padma.consnt_KA + Padma.vattu_KA;
GopikaTwo.toPadma[GopikaTwo.conjct_KR]     = Padma.consnt_KA + Padma.vattu_RA;
GopikaTwo.toPadma[GopikaTwo.conjct_KSH]    = Padma.consnt_KA + Padma.vattu_SSA;
GopikaTwo.toPadma[GopikaTwo.conjct_KHT]    = Padma.consnt_KHA + Padma.vattu_TA;
GopikaTwo.toPadma[GopikaTwo.conjct_NGK]    = Padma.consnt_NGA + Padma.vattu_KA;
GopikaTwo.toPadma[GopikaTwo.conjct_NGKH]   = Padma.consnt_NGA + Padma.vattu_KHA;
GopikaTwo.toPadma[GopikaTwo.conjct_NGG]    = Padma.consnt_NGA + Padma.vattu_GA;
GopikaTwo.toPadma[GopikaTwo.conjct_NGGH]   = Padma.consnt_NGA + Padma.vattu_GHA;
GopikaTwo.toPadma[GopikaTwo.conjct_NGM]    = Padma.consnt_NGA + Padma.vattu_MA;
GopikaTwo.toPadma[GopikaTwo.conjct_JNY]    = Padma.consnt_JA + Padma.vattu_NYA;
GopikaTwo.toPadma[GopikaTwo.conjct_JJ]     = Padma.consnt_JA + Padma.vattu_JA;
GopikaTwo.toPadma[GopikaTwo.conjct_JR]     = Padma.consnt_JA + Padma.vattu_RA;
GopikaTwo.toPadma[GopikaTwo.conjct_TTTT]   = Padma.consnt_TTA + Padma.vattu_TTA;
GopikaTwo.toPadma[GopikaTwo.conjct_TT_TTH] = Padma.consnt_TTA + Padma.vattu_TTHA;
GopikaTwo.toPadma[GopikaTwo.conjct_TTHTTH] = Padma.consnt_TTHA + Padma.vattu_TTHA;
GopikaTwo.toPadma[GopikaTwo.conjct_DDDD]   = Padma.consnt_DDA + Padma.vattu_DDA;
GopikaTwo.toPadma[GopikaTwo.conjct_DD_DDH] = Padma.consnt_DDA + Padma.vattu_DDHA;
GopikaTwo.toPadma[GopikaTwo.conjct_DDHDDH] = Padma.consnt_DDHA + Padma.vattu_DDHA;
GopikaTwo.toPadma[GopikaTwo.conjct_TT]     = Padma.consnt_TA + Padma.vattu_TA;
GopikaTwo.toPadma[GopikaTwo.conjct_TR]     = Padma.consnt_TA + Padma.vattu_RA;
GopikaTwo.toPadma[GopikaTwo.conjct_TN]     = Padma.consnt_TA + Padma.vattu_NA;
GopikaTwo.toPadma[GopikaTwo.conjct_DGH]    = Padma.consnt_DA + Padma.vattu_GHA;
GopikaTwo.toPadma[GopikaTwo.conjct_DD]     = Padma.consnt_DA + Padma.vattu_DA;
GopikaTwo.toPadma[GopikaTwo.conjct_D_DH]   = Padma.consnt_DA + Padma.vattu_DHA;
GopikaTwo.toPadma[GopikaTwo.conjct_DB]     = Padma.consnt_DA + Padma.vattu_BA;
GopikaTwo.toPadma[GopikaTwo.conjct_DM]     = Padma.consnt_DA + Padma.vattu_MA;
GopikaTwo.toPadma[GopikaTwo.conjct_DR]     = Padma.consnt_DA + Padma.vattu_RA;
GopikaTwo.toPadma[GopikaTwo.conjct_DV]     = Padma.consnt_DA + Padma.vattu_VA;
GopikaTwo.toPadma[GopikaTwo.conjct_PT]     = Padma.consnt_PA + Padma.vattu_TA;
GopikaTwo.toPadma[GopikaTwo.conjct_PN]     = Padma.consnt_PA + Padma.vattu_NA;
GopikaTwo.toPadma[GopikaTwo.conjct_PR]     = Padma.consnt_PA + Padma.vattu_RA;
GopikaTwo.toPadma[GopikaTwo.conjct_PHR]    = Padma.consnt_PHA + Padma.vattu_RA;
GopikaTwo.toPadma[GopikaTwo.conjct_SHC]    = Padma.consnt_SHA + Padma.vattu_CA;
GopikaTwo.toPadma[GopikaTwo.conjct_SHN]    = Padma.consnt_SHA + Padma.vattu_NA;
GopikaTwo.toPadma[GopikaTwo.conjct_SHR]    = Padma.consnt_SHA + Padma.vattu_RA;
GopikaTwo.toPadma[GopikaTwo.conjct_SHV]    = Padma.consnt_SHA + Padma.vattu_VA;
GopikaTwo.toPadma[GopikaTwo.conjct_SSTT]   = Padma.consnt_SSA + Padma.vattu_TTA;
GopikaTwo.toPadma[GopikaTwo.conjct_HN]     = Padma.consnt_HA + Padma.vattu_NA;
GopikaTwo.toPadma[GopikaTwo.conjct_HM]     = Padma.consnt_HA + Padma.vattu_MA;
GopikaTwo.toPadma[GopikaTwo.conjct_HY]     = Padma.consnt_HA + Padma.vattu_YA;
GopikaTwo.toPadma[GopikaTwo.conjct_HL]     = Padma.consnt_HA + Padma.vattu_LA;
GopikaTwo.toPadma[GopikaTwo.conjct_HV]     = Padma.consnt_HA + Padma.vattu_VA;

//Combos
GopikaTwo.toPadma[GopikaTwo.combo_KSHU]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_KSHUU]   = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_KSHR]    = Padma.consnt_KA + Padma.vattu_SSA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_KHU]     = Padma.consnt_KHA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_KHUU]    = Padma.consnt_KHA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_KHR]     = Padma.consnt_KHA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_GU]      = Padma.consnt_GA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_GUU]     = Padma.consnt_GA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_GR]      = Padma.consnt_GA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_GHU]     = Padma.consnt_GHA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_GHUU]    = Padma.consnt_GHA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_GHR]     = Padma.consnt_GHA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_CU]      = Padma.consnt_CA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_CUU]     = Padma.consnt_CA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_CR]      = Padma.consnt_CA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_JAA]     = Padma.consnt_JA + Padma.vowelsn_AA;
GopikaTwo.toPadma[GopikaTwo.combo_JII]     = Padma.consnt_JA + Padma.vowelsn_II;
GopikaTwo.toPadma[GopikaTwo.combo_NNU]     = Padma.consnt_NNA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_NNUU]    = Padma.consnt_NNA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_NNR]     = Padma.consnt_NNA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_TU]      = Padma.consnt_TA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_TUU]     = Padma.consnt_TA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_TR]      = Padma.consnt_TA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_THU]     = Padma.consnt_THA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_THUU]    = Padma.consnt_THA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_THR]     = Padma.consnt_THA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_DHR]     = Padma.consnt_DA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_DHU]     = Padma.consnt_DHA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_DHUU]    = Padma.consnt_DHA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_DHR]     = Padma.consnt_DHA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_NU]      = Padma.consnt_NA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_NUU]     = Padma.consnt_NA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_NR]      = Padma.consnt_NA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_PU]      = Padma.consnt_PA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_PUU]     = Padma.consnt_PA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_PR]      = Padma.consnt_PA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_BU]      = Padma.consnt_BA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_BUU]     = Padma.consnt_BA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_BR]      = Padma.consnt_BA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_BHU]     = Padma.consnt_BHA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_BHUU]    = Padma.consnt_BHA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_BHR]     = Padma.consnt_BHA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_MU]      = Padma.consnt_MA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_MUU]     = Padma.consnt_MA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_MR]      = Padma.consnt_MA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_YU]      = Padma.consnt_YA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_YUU]     = Padma.consnt_YA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_YR]      = Padma.consnt_YA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_RUU_1]   = Padma.consnt_RA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_RUU_2]   = Padma.consnt_RA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_LU]      = Padma.consnt_LA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_LUU]     = Padma.consnt_LA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_LR]      = Padma.consnt_LA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_VU]      = Padma.consnt_VA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_VUU]     = Padma.consnt_VA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_VR]      = Padma.consnt_VA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_LLU]     = Padma.consnt_LLA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_LLUU]    = Padma.consnt_LLA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_LLR]     = Padma.consnt_LLA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_SHU]     = Padma.consnt_SHA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_SHUU]    = Padma.consnt_SHA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_SHR]     = Padma.consnt_SHA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_SSU]     = Padma.consnt_SSA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_SSUU]    = Padma.consnt_SSA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_SSR]     = Padma.consnt_SSA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_SU]      = Padma.consnt_SA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_SUU]     = Padma.consnt_LA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_SR]      = Padma.consnt_SA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_HR]      = Padma.consnt_HA + Padma.vowelsn_R;
GopikaTwo.toPadma[GopikaTwo.combo_HYU]     = Padma.consnt_HA + Padma.vattu_YA + Padma.vowelsn_U;
GopikaTwo.toPadma[GopikaTwo.combo_HYUU]    = Padma.consnt_HA + Padma.vattu_YA + Padma.vowelsn_UU;
GopikaTwo.toPadma[GopikaTwo.combo_HYR]     = Padma.consnt_HA + Padma.vattu_YA + Padma.vowelsn_R;

GopikaTwo.toPadma[GopikaTwo.halffm_RA_ANU] = Padma.halffm_RA + Padma.anusvara;

GopikaTwo.toPadma[GopikaTwo.vattu_RA_1]    = Padma.vattu_RA;
GopikaTwo.toPadma[GopikaTwo.vattu_RA_2]    = Padma.vattu_RA;

GopikaTwo.toPadma[GopikaTwo.misc_DANDA]    = Padma.danda;
GopikaTwo.toPadma[GopikaTwo.misc_DDANDA]   = Padma.ddanda;
GopikaTwo.toPadma[GopikaTwo.misc_OM]       = Padma.om;
GopikaTwo.toPadma[GopikaTwo.nukta]         = Padma.nukta;

//Digits
GopikaTwo.toPadma[GopikaTwo.digit_ZERO]    = Padma.digit_ZERO;
GopikaTwo.toPadma[GopikaTwo.digit_ONE]     = Padma.digit_ONE;
GopikaTwo.toPadma[GopikaTwo.digit_TWO]     = Padma.digit_TWO;
GopikaTwo.toPadma[GopikaTwo.digit_THREE]   = Padma.digit_THREE;
GopikaTwo.toPadma[GopikaTwo.digit_FOUR]    = Padma.digit_FOUR;
GopikaTwo.toPadma[GopikaTwo.digit_FIVE]    = Padma.digit_FIVE;
GopikaTwo.toPadma[GopikaTwo.digit_SIX]     = Padma.digit_SIX;
GopikaTwo.toPadma[GopikaTwo.digit_SEVEN]   = Padma.digit_SEVEN;
GopikaTwo.toPadma[GopikaTwo.digit_EIGHT]   = Padma.digit_EIGHT;
GopikaTwo.toPadma[GopikaTwo.digit_NINE]    = Padma.digit_NINE;

//Does not match ASCII
GopikaTwo.toPadma[GopikaTwo.extra_COLON]      = ":";
GopikaTwo.toPadma[GopikaTwo.extra_SEMICOLON]  = ";";
GopikaTwo.toPadma[GopikaTwo.extra_HYPHEN]     = "-";
GopikaTwo.toPadma[GopikaTwo.extra_QTSINGLE_1] = "'";
GopikaTwo.toPadma[GopikaTwo.extra_QTSINGLE_2] = "'";
GopikaTwo.toPadma[GopikaTwo.extra_QTSINGLE_3] = "'";
GopikaTwo.toPadma[GopikaTwo.extra_QTDOUBLE_1] = '"';

GopikaTwo.prefixList = new Object();
GopikaTwo.prefixList[GopikaTwo.vowelsn_I_1] = true;
GopikaTwo.prefixList[GopikaTwo.vowelsn_I_2] = true;
GopikaTwo.prefixList[GopikaTwo.vowelsn_IM]  = true;
GopikaTwo.prefixList[GopikaTwo.nukta]       = true;

GopikaTwo.suffixList = new Object();
GopikaTwo.suffixList[GopikaTwo.halffm_RA]     = true;
GopikaTwo.suffixList[GopikaTwo.halffm_RA_ANU] = true;

GopikaTwo.overloadList = new Object();
GopikaTwo.overloadList[GopikaTwo.vowel_A]     = true;
GopikaTwo.overloadList[GopikaTwo.vowel_AA]    = true;
GopikaTwo.overloadList[GopikaTwo.vowelsn_AA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_KSH]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_KHA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_GA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_GHA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_CA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_JNY]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_NYA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_NNA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_TA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_TT]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_TR]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_THA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_DHA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_NA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_PA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_BA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_BHA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_MA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_YA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_LA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_VA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_LLA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_SHA]  = true;
GopikaTwo.overloadList[GopikaTwo.halffm_SSA]  = true
GopikaTwo.overloadList[GopikaTwo.halffm_SA]   = true;
GopikaTwo.overloadList[GopikaTwo.halffm_HY]   = true;
GopikaTwo.overloadList[GopikaTwo.misc_DANDA]  = true;

module.exports = GopikaTwo;