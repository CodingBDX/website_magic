
 <script type="text/javascript">
        window.onload = choosePic;

        var myPix = new Array('https://i.imgur.com/pbyO8uHb.jpg', 'https://i.imgur.com/KgVNwGhb.jpg', 'https://i.imgur.com/Tj1bKhLb.jpg')

        function choosePic() {
            
            var randomNum = Math.floor(Math.random() * myPix.length);
            document.getElementById("myPicture").src = myPix[randomNum];
        }

    </script>