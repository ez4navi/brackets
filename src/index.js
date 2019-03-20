module.exports = function check(str, bracketsConfig) {
    let openBrackets = [], clsBrackets = [], stack = [], all=[], same = [];
    for (let i=0; i<bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        clsBrackets.push(bracketsConfig[i][1]);
        if (bracketsConfig[i][0]===bracketsConfig[i][1]) {
            same.push(bracketsConfig[i][0]);
        }
        all.push(bracketsConfig[i][0],bracketsConfig[i][1]);
    }
    if (str.length===0) {
        return false;
    }
    for (let i=0; i<str.length; i++) {
        if (all.indexOf(str[i])===-1) {
            return false;
        }
        if (openBrackets.indexOf(str[i])>-1) {
            stack.push(str[i]);
            if (stack.length>1) {
                console.log(stack[stack.length-1] + " " + stack[stack.length-2]);
                if (stack[stack.length-1]===stack[stack.length-2] && same.indexOf(stack[stack.length-1])>-1) {
                    stack.pop();
                    stack.pop();
                }
            }
            console.log(stack);
            continue;
        }
        if (stack[stack.length-1]===all[all.indexOf(str[i])-1])  {
            stack.pop();
        } else if (stack[stack.length-1]===str[i] && same.indexOf(stack[stack.length-1])>-1){
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length===0) {
        return true;
    } else {
        return false;
    }
}
