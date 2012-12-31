 var tweets=[];
 var time=45;
        $(document).ready(function () {
            getTweets("Happy New Year OR HNY :)") ;
            $('#replylink').bind('click',function(){
                setTimeout(setTweet,2000);
            });
            setInterval(function(){
				$('#time').text('The wish will change in '+time+ " seconds.");
				time--;
				if(time<=0){
					setTweet();
					
					}
				},1000);
        });
        function getTweets(query, page) {
            $.twitter({q:query,result_type:"recent",replies:false,retweets:false, limit:100, nots:'@ OR RT',within:100, units:"km",lang:"en"}, function (data,queryObject) {
                tweets=data.results;
                setTweet();

            });
        }
        function setTweet(){
			
			if(tweets.length<=0){
				  getTweets("Happy New Year OR HNY :)") ;
				 return false;
				}
			
            var num= _.random(0,tweets.length);
            var tweet=tweets[num];
            
            if (tweet.text.indexOf("@") >= 0){
				tweets= _.without(tweets,tweet);
				setTweet();
				return false;
				}
            
            l(tweet);
            $('#question #img').attr('src',tweet.profile_image_url);
            $('#question #name').text(tweet.from_user);
            $('#question #name').attr('href',"http://twitter.com/"+tweet.from_user);
            $('#question #text').html(tweet.text);
            $('#reply #response').val("@"+tweet.from_user+" ");

            $('#reply').delegate('textarea#response','change',function(){
                $('#replylink').attr('href',"https://twitter.com/intent/tweet?in_reply_to="+tweet.id+"&text="+$('#reply #response').val());
            });


            $('#replylink').attr('href',"https://twitter.com/intent/tweet?in_reply_to="+tweet.id);

            tweets= _.without(tweets,tweet);
            l(tweets.length);
			time=45;
        }

        function l(d) {
            console.log(d);
        }
