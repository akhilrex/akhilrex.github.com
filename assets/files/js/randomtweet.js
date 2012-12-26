 var tweets=[];
 var time=45;
        $(document).ready(function () {
            getTweets("what OR why OR where OR who OR why ?") ;
            $('#replylink').bind('click',function(){
                setTimeout(setTweet,2000);
            });
            setInterval(function(){
				$('#time').text('The question will change in '+time+ " seconds.");
				time--;
				if(time<=0){
					setTweet();
					
					}
				},1000);
        });
        function getTweets(query, page) {
            $.twitter({q:query,result_type:"recent",replies:false,retweets:false, limit:100, nots:"RT",within:100, units:"km"}, function (data,queryObject) {
                tweets=data.results;
                setTweet();

            });
        }
        function setTweet(){
			
			if(tweets.length<=0){
				 getTweets("what OR why OR where OR who OR why ?") ;
				 return false;
				}
			
            var num= _.random(0,tweets.length);
            var tweet=tweets[num];
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
