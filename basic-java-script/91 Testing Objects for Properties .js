//Мы можем использовать метод объектов .hasOwnProperty (propname),
// чтобы определить, имеет ли этот объект заданное имя свойства.
// .hasOwnProperty () возвращает true или false, если свойство найдено или нет.


function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    return  "Not Found";

}