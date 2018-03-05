app.factory('stringService', function(){
    return{
            processingString : function(input){
                if(input == ""){
                    return input;
                }
                output ="";
                for(i = 0;i<input.length;i++){
                    if(i>0 && input[i] == input[i].toUpperCase()){
                        output+=" ";
                    }
                    output+=input[i];
                }
                return output;
         }
    }
})