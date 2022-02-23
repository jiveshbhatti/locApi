var shortestPalindrome = function(s) {
 let array = [...s]
 let left = 0
 let right = array.length-1
    for (let i = left; i < array.length; i+=1) {
        const element = array[i];
        for (let j = right; j > 0; j-=1) {
            const element2 = array[j];
            console.log(element,element2)
            if(element===element2){

                left++
                right--
                i+=1
                console.log(i)
            }else{
                array.splice(array[left], 1, array[right] )
                j-=1
            }
        }
        
    }
    console.log(array)
};


shortestPalindrome('aacecaaa')