// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    if(x1 > x2 && v1 > v2){
        return "NO";
    }else if(x2 > x1 && v2 > v1){
        return "NO";
    }else{
        let d1 = x1;
        let d2 = x2;
        let count = 0;
        while(true){

            if(d1 == d2){
                return "YES";
                break;
            }else if(count > 10000){
                return "NO";
                break;
            }

            d1 += v1;
            d2 += v2;

            count++

           
        }
    }

}
