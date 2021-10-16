// = - оперотор присвоения, приваевает значению слева от себя, значение стправа от себя, напрмер при объявлении переменной
// == - оператор равенства, сравнивает два значения и возвращает true, если они эквивалентны или false, если нет.
        // 1   ==  1  вернет true
        // 1   ==  2  вернет false
        // 1   == "1" вернет true
        // "3" ==  3  вернет true
// === - оператор строгого равенства, в отличие от == не выполняет преобразование типа
        // 3 === 3  вернет true
        // 3 === "3" вернет false
        // typeof - оперратор определяет тип или значение переменной
        // typeof 3 вернет number
        // typeof '3' вернет string
// != - оператор неравенства, работает зеркально ==  при неравенстве вернет true, при равенстве вернет false
        //1 !=  2 вернет true
        // 1 != "1" вернет false
        // 1 != '1' вернет false
        // 1 != true вернет false
        // 0 != false вернет false
// !== - оператор строгого, работает зеркально ===  при строгом неравенстве вернет true, при равенстве вернет false
        //3 !==  3 вернет false
        // 3 !== '3' вернет true
        // 4 !==  3 вернет true
// > и < - операторы стравнения,  если значение слева бельше значения справа, вернет true, иначе false, и наоборот
        //5   >  3 вернет true
        // 7   > '3' вернет true
        // 2   >  3 вернет false
        // '1' >  9 вернет false
// >= и <= - операторы больше или равно и меньше или равно, если значение слева бельше или равно значения справа, вернет true, иначе false , и наоборот
        //6   >=  6 вернет true
        // 7   >= '3' вернет true
        // 2   >=  3 вернет false
        // '7' >=  9 вернет false
// && - логический оператор and, если значения слева и справа от && true, вернет true, иначе false
        // 7 > 5 && 7 < 10 вернет true
        // 7 < 5 && 7 < 10 вернет false
// || - логический оперратор or, елси одно из значений слева и справа от || true, вернет true, иначе false
        //7 > 10 || 7 > 5 вернет true
        // 7 > 10 || 7 < 5 вернет false

//58
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

//59
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

//60
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

//61
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//62
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

//63
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }
    if (val > 10) {  // Change this line
        return "Over 10";
    }
    return "10 or Under";
}

testGreaterThan(10);

//64
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }
    if (val >= 10) {  // Change this line
        return "10 or Over";
    }
    return "Less than 10";
}

testGreaterOrEqual(10);

//65
function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }
    if (val < 55) {  // Change this line
        return "Under 55";
    }
    return "55 or Over";
}

testLessThan(10);

//66
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

testLessOrEqual(10);

//67
function testLogicalAnd(val) {
    // Only change code below this line
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

//68
function testLogicalOr(val) {
    // Only change code below this line
    if (val < 10 || val > 20) {
        return "Outside";
    }
    // Only change code above this line
    return "Inside";
}
testLogicalOr(15);

//69
function testElse(val) {
    var result = "";
    // Only change code below this line
    if (val > 5) {
        result = "Bigger than 5";
    } else  {
        result = "5 or Smaller";
    }
    // Only change code above this line
    return result;
}
testElse(4);

//70
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else   {
        return "Between 5 and 10";
    }
}
testElseIf(7);

//71
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(7);

//72
function testSize(num) {
    if (num >= 20) {
        return "Huge";
    } else if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num <20) {
        return "Large";
    } else {
        return "Change Me";
    }
}
testSize(7);
