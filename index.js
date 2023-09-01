function distanceFromHqInBlocks (x) {
        if (x>=42) {
        return x-42}

        else {
        return 42-x}
}
distanceFromHqInBlocks (43, 50, 34)

function distanceFromHqInFeet (x) {
    if (x>=42) {
        return (x-42)*264
    }
    else {
        return (42-x)*264
    }
}
distanceFromHqInFeet(43, 50, 34)

function distanceTravelledInFeet (x,y) {
    return Math.abs(x-y)*264
}

distanceTravelledInFeet ((43,48), (50,60) (34,28))

function calculatesFarePrice (x,y) {
    if (Math.abs(x-y)<=1) {
        return 0
    }
    else if (Math.abs(x-y)>=2, Math.abs(x-y)<=7) {
        return ((Math.abs(x-y)*264)-400)*.02
    }
    else if (Math.abs(x-y)>=8, Math.abs(x-y)<=9){
        return 25
    }
    else if (Math.abs(x-y)>=10) {
        return "cannot travel that far"
    }
}

calculatesFarePrice ((43,44), (34,32), (50,58), (34, 24))
