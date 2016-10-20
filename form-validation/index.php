<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Form Validation</title>
        
        <script src="http://code.jquery.com/ui/1.12.0/jquery-ui.min.js" integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        <script src="itsme.js" type="text/javascript"></script>
        
        <style>
            body{
                background: #20B2AA;
            }
            .container-main{
                width:50%;
                background: white;
                border: 1px solid black;
                margin:40px auto;
                padding: 20px;
                border-radius:10px;
            }           
        </style>
          
    </head>
    <body>
        <div class="container-main">
            <h2 class="text-center">Form Validation</h2>
            <form action="#" method="post" id="myform" enctype="multipart/form-data">
                <label for="f_name">First Name:</label>
                <input class="form-control its_name" title="f_name" type="f_name" id="f_name" name="f_name"><br/>
                <label for="name">Character:</label>
                <input class="form-control its_character" title="Character" type="text" id="character" name="character"><br/>
                <label for="mobile">Mobile:</label>
                <input class="form-control its_mobile" type="text" name="mobile" id="mobile" maxlength="10"><br/>
                <label for="email">Email:</label>
                <input class="form-control its_email" type="test" name="email" id="email"><br/>
                <label for="date">Date(DD-MM-YYYY):</label>
                <input class="form-control its_date" type="text" name="date" id="date" maxlength="10"><br/>
                <label for="number">Number</label>
                <input class="form-control its_number" type="text" name="number" id="number"><br/>
                <label for="decimal">Decimal</label>
                <input class="form-control its_decimal" type="text" name="decimal" id="decimal"><br/>
                
                <input class="btn btn-success center-block submit" type="submit" value="Submit" name="submit">
            </form>
        </div>       
    </body>
</html>
