/**
 * Form Validation
 * Use class name to apply validation.
 * allow charecter without space 'its_name'
 * allow charecter with space  'its_character'
 * Mobile 'its_mobile'
 * Email 'its_email'
 * Date(DD-MM-YYYY) 'its_date'
 * Number 'its_number'
 * Decimal 'its_decimal'
 * 
 */

$(document).ready(function(){
    
//validation of character
    $(document).on('keypress','.its_name',function(e){
        if(!(e.ctrlKey && e.which==97)&&!(e.ctrlKey && e.which==99)&&!(e.ctrlKey && e.which==118)&&!(e.ctrlKey && e.which==120)&&!(e.which==0)
                &&!(e.which>96 && e.which<123)&&!(e.which>64 && e.which<91)&&!(e.key==='Tab')&&!(e.key==='Delete')&&!(e.which==8)){
            return false;
        }
    });
    
    $(document).on('change','.its_name',function(){
        var character=$(this).val();
        var re='/^[a-zA-Z]*$/';
        if(!re.test(character)){
            $(this).val('');
        }
    });
    
//validation of character
    $(document).on('keypress','.its_character',function(e){
        if(!(e.ctrlKey && e.which==97)&&!(e.ctrlKey && e.which==99)&&!(e.ctrlKey && e.which==118)&&!(e.ctrlKey && e.which==120)&&!(e.which==0)
                &&!(e.which>96 && e.which<123)&&!(e.which>64 && e.which<91)&&!(e.which==32)&&!(e.key==='Tab')&&!(e.key==='Delete')&&!(e.which==8)){
            return false;
        }
    });
    
    $(document).on('change','.its_character',function(){
        var character=$(this).val();
        var re='/^[a-zA-Z][a-zA-Z\s]*$/';
        if(!re.test(character)){
            $(this).val('');
        }
    }); 
    
//mobile no validation which will start from 7,8,9;
    $(document).on('keypress','.its_mobile',function(e){
        if($(this).val().length<1){
            if(!(e.ctrlKey && e.which==97)&&!(e.ctrlKey && e.which==99)&&!(e.ctrlKey && e.which==118)&&!(e.ctrlKey && e.which==120)
                &&!(e.which>54 && e.which<58)&&!(e.key==='Tab')&&!(e.key==='Delete')&&!(e.which==8)){
                return false;
            }

        }else if(!(e.ctrlKey && e.which==97)&&!(e.ctrlKey && e.which==99)&&!(e.ctrlKey && e.which==118)&&!(e.ctrlKey && e.which==120)
                &&!(e.which>47 && e.which<58)&&!(e.key==='Tab')&&!(e.key==='Delete')&&!(e.which==8)&&!(e.which==0)){
            return false;
        }
    });
    
    $(document).on('change','.its_mobile',function(){
        var mobile=$(this).val();
            var re=/^[7-9][0-9]{9}$/;
            if(!re.test(mobile)){
                $(this).val('');
             }
    });
    
    
//Email Validation
    $(document).on('change','.its_email',function(){
        var re=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*[\.][a-z]{2,3}$/;
        var value=$(this).val();
        if(!re.test(value)){
            $(this).val('');
        }
    });

//validation for date
    $(document).on('keypress','.its_date',function(e){
        if(!(e.ctrlKey && e.which==97)&&!(e.ctrlKey && e.which==99)&&!(e.ctrlKey && e.which==118)&&!(e.ctrlKey && e.which==120)
                &&!(e.which>47 && e.which<58)&&!(e.key==='Tab')&&!(e.key==='Delete')&&!(e.which==8)&&!(e.which==0)&&!(e.which==45)){
            return false;
        }
    });
    
    $(document).on('change','.its_date',function(){
        var date=$(this).val();
            var re=/^((([0-2][0-9])|([3][0-1]))\-(([0][1,3,5,7,8])|([1][0,2]))|(([0-2][0-9])|([3]))\-(([0][4,6,9])|([1][1]))|(([0-2][0-9]))\-(([0][2])))\-[1,2][0,9][0-9]{2}$/;
            if(!re.test(date)){
                $(this).val('');
            }
    });    
    
//validatio of Number
    $(document).on('keypress','.its_number',function(e){
        if(!(e.ctrlKey && e.which==97)&&!(e.ctrlKey && e.which==99)&&!(e.ctrlKey && e.which==118)&&!(e.ctrlKey && e.which==120)
                &&!(e.which>47 && e.which<58)&&!(e.key==='Tab')&&!(e.key==='Delete')&&!(e.which==8)&&!(e.which==0)){
            return false;
        }
    });
    
    $(document).on('change','.its_number',function(){
        var number=$(this).val();
            var re='/^[0-9]*$/';
            if(!re.test(number)){
                $(this).val('');
            }
    });            
    
//validation for decimal no
    $(document).on('keypress','.its_decimal',function(e){
        var value1=$(this).val();
        var count=value1.match(/\./g).length;
        if(count<1){
            if(!(e.which==46)&&!(e.ctrlKey && e.which==97)&&!(e.ctrlKey && e.which==99)&&!(e.ctrlKey && e.which==118)&&!(e.ctrlKey && e.which==120)
                    &&!(e.which>47 && e.which<58)&&!(e.key==='Tab')&&!(e.key==='Delete')&&!(e.which==8)&&!(e.which==0)){
                return false;
            }
        }else{
            if(!(e.ctrlKey && e.which==97)&&!(e.ctrlKey && e.which==99)&&!(e.ctrlKey && e.which==118)&&!(e.ctrlKey && e.which==120)
                    &&!(e.which>47 && e.which<58)&&!(e.key==='Tab')&&!(e.key==='Delete')&&!(e.which==8)&&!(e.which==0)){
                return false;
            }
        }    
    });

    $(document).on('change','.its_decimal',function(e){
        var re=/^[0-9]*(||[\.][0-9]{2})$/;
        var decimal=$(this).val();
        if(!re.test(decimal)){
            $(this).val("");
        }
    });
    
});