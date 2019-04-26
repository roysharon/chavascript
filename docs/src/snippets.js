const playground = `יכולת לברך(מבורך) {
    בקרה.תעד(״היוש, ״ + מבורך);
}
לברך(״עולם״);`;

const main = `יכולת לברך(מבורך) {
    בקרה.תעד(״היוש, ״ + מבורך);
}
לברך(״עולם״);`;

const variables = `משתנה א = ״מדברים״;
// את ערכו של א ניתן לשנות
יהי ב = ״על״;
// את ערכו של ב ניתן לשנות
קבוע ג = ״הא ודא״;
// את ג לא ניתן לשנות
בקרה.תעד(א, ב, ג);`;

const functions = `יכולת לדבר1(נושא) {
        החזירי ״מדברים על ״ + נושא;
}
בקרה.תעד(לדבר1(״הא״));

יכולת לדבר2() {
    עבור (קבוע טיעון של טיעונים) {
        בקרה.תעד(״מדברים על ״ + טיעון);
    }
}
לדבר2(״הא״, ״דא״);`;

const ifs = `יכולת שחור_או_לבן(האם_שחור) {
    אם (האם_שחור) {
        בקרה.תעד(״שחור״);
    } אחרת {
        בקרה.תעד(״לבן״);
    }
}

שחור_או_לבן(אמת);
שחור_או_לבן(שקר);`;

const loops = `קבוע חברים = [״עמיחי״, ״נחמייה״, ״עמוס״];

בקרה.תעד(״לולאת עבור״);
עבור (יהי מ = 0; מ < חברים.אורך; מ++) {
    בקרה.תעד(מ);
}

בקרה.תעד(״לולאת עבור-מתוך״);
עבור (קבוע מ מתוך חברים) {
    בקרה.תעד(מ);
}

בקרה.תעד(״לולאת עבור-של״);
עבור (קבוע חבר של חברים) {
    בקרה.תעד(חבר);
}

בקרה.תעד(״לולאת כלעוד״);
יהי מ = 0;
כלעוד (מ < חברים.אורך) {
    בקרה.תעד(מ);
    מ++;
}

בקרה.תעד(״לולאת עשי״);
עשי {
    בקרה.תעד(מ);
    מ--;
} כלעוד (מ >= 0);

בקרה.תעד(״הדפיסי עד נחמייה״);
עבור (קבוע חבר של חברים) {
    אם (חבר === ״נחמייה״) {
        שברי;
    }
    בקרה.תעד(חבר);
}

בקרה.תעד(״הדפיסי ללא נחמייה״);
עבור (קבוע חבר של חברים) {
    אם (חבר === ״נחמייה״) {
        המשיכי;
    }
    בקרה.תעד(חבר);
}`;

const switches = `יכולת האם_נהנים(על_מה_מדברים) {
    החליפי (על_מה_מדברים) {
        מקרה ״הא״:
            בקרה.תעד(״נהנים מאוד״);
            שברי;
        מקרה ״דא״:
            בקרה.תעד(״נהנים חלקית״);
            שברי;
        ברירתמחדל:
            בקרה.תעד(״לא נהנים״);
    }
}

האם_נהנים(״הא״);
האם_נהנים(״דא״);
האם_נהנים(״מזג האוויר״);`;

const errors = `יכולת ניסיון(שם, יכ) {
    נסי {
        יכ();
        בקרה.תעד(שם, ״רצה ללא שגיאה״);
    } תפסי (שגיאה) {
        בקרה.שגיאה(שם, ״רצה עם שגיאה״, שגיאה);
    } ולבסוף {
        בקרה.תעד(שם, ״סיימה לרוץ״);
    }
}

ניסיון(״יכולת ראשונה״, () => {
    בקרה.תעד(״יכולת ראשונה אינה זורקת שגיאה״);
});

ניסיון(״יכולת שניה״, () => {
    בקרה.תעד(״יכולת שניה עומדת לזרוק שגיאה״);
    זרקי ״אבוי, אירעה שגיאה!״;
});`;

const oop1 = `מחלקה איש {
    בנאי(גיל) {
        אנוכי.גיל = גיל;
    }
    האם_בוגר() {
        החזירי אנוכי.גיל >= 18;
    }
}

קבוע ילד = צרי איש(5);
קבוע מבוגר = צרי איש(40);

בקרה.תעד(״ילד בוגר״, ילד.האם_בוגר());
בקרה.תעד(״מבוגר בוגר״, מבוגר.האם_בוגר());`;

const oop2 = `מחלקה איש {
    בנאי(גיל) {
        אנוכי.גיל = גיל;
    }
    האם_בוגר() {
        החזירי אנוכי.גיל >= 18;
    }
}

מחלקה מכר מרחיבה איש {
    בנאי(גיל) {
        אמא(גיל);
    }
    שוחח() {
        אם (אמא.האם_בוגר()) {
            החזירי ״הא ודא״;
        } אחרת {
            החזירי ״קשקושים״;
        }
    }
}

קבוע ילד = צרי מכר(5);
קבוע מבוגר = צרי מכר(40);

בקרה.תעד(״ילד משוחח על״, ילד.שוחח());
בקרה.תעד(״מבוגר משוחח על״, מבוגר.שוחח());`;

const comments = `// הערות בחווה סקריפט לא מועברות לקוד המומר,
// ניתן להגדירן בשורה,
/*
    או בבלוק הערה שלם.
    תוצאת הקוד הנוכחי תהיה ריקה מאחר וכל הקוד מכיל אך ורק הערות.
*/`;

const dictionary1 = `בקרה.תעד(״תיעוד״);
בקרה.אזהר(״אזהרה״);
// כעת נדרוס את ההתייחסות לשיטה תעד
בקרה.תעד = בקרה.אזהר;
// כעת כל תיעוד, יודפס כאזהרה
בקרה.תעד(״תיעוד נוסף״);
// כעת נדרוס את ההתייחסות לכל המשתנה בקרה
קבוע הדפס = בקרה.תעד;
בקרה = {};
הדפס(סוגשל בקרה.תעד);
// כעת נגדיר משתנה חדש בשם תעד. נשים לב שהמשתנה מתורגם אף הוא ל-log בלעז,
// אך עם זאת, אינו דורס שום התייחסות מאחר ואין משתנה גלובאלי העונה לשם log.
קבוע תעד = הדפס;
תעד(סוגשל תעד);`;

const dictionary2 = `יהי א;
בקרה.תעד(א == לאמוגדר);
א = לאמספר;
בקרה.תעד(סוגשל א);
א = {שדה: חשבון.אקראי()};
בקרה.תעד(פנחס.מחרז(א));`;

const dictionary3 = `בקרה.תעד(חשבון.רצפה(1.3));
הבטחה.הפר(״שגיאה״).תפוס(שגיאה => {
    // קוד זה ירוץ לאחר ההדפס למסך, ולכן לא יוצג בפלט,
    // אך התיעוד יופיע בממשק הבקרה של הדפדפן.
    בקרה.תעד(״נתפסה הפרה של הבטחה״, שגיאה);
});
קבוע נושאי_שיחה = [״הא״, ״דא״, ״מתכון משגע לסלט סלקים״];
קבוע שיחה = נושאי_שיחה
    .מפה(נושא => ״מדברים על ״ + נושא)
    .הפחת((צובר, ערך, מ) => צובר + ערך + (מ == נושאי_שיחה.אורך - 1 ? ״״ : ״, ״), ״״);
בקרה.תעד(שיחה);`;

export default {
    playground,
    main,
    variables,
    functions,
    ifs,
    loops,
    switches,
    errors,
    oop1,
    oop2,
    comments,
    dictionary1,
    dictionary2,
    dictionary3,
};
