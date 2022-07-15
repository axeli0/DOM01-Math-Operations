const evaluateAdd = () => {
    const addLeft = Number(document.getElementById("add-oper-left").value);
    const addRight = Number(document.getElementById("add-oper-right").value);
    const result = addLeft + addRight;
    document.getElementById("result-add").innerHTML = result;
}

const evaluateSub = () => {
    const subLeft = Number(document.getElementById("sub-oper-left").value);
    const subRight = Number(document.getElementById("sub-oper-right").value);
    const result = subLeft - subRight;
    document.getElementById("result-sub").innerHTML = result;
}

const evaluateMult = () => {
    const multLeft = Number(document.getElementById("mult-oper-left").value);
    const multRight = Number(document.getElementById("mult-oper-right").value);
    const result = multLeft * multRight;
    document.getElementById("result-mult").innerHTML = result;
}
const evaluateDiv = () => {
    const divLeft = Number(document.getElementById("div-oper-left").value);
    const divRight = Number(document.getElementById("div-oper-right").value);
    const result = divLeft / divRight;
    document.getElementById("result-div").innerHTML = result;
}