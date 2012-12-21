var key = '6pZVHbHV34HcuBIbuQsRJSSuQPdYUMCUly1jHmxVx3Rp7nMEvSJYmxb6M_P7ruFo';

        $(document).ready(function () {
            $('#getStates').click(function (e) {
                var selected = $('#countries :selected').val();
                var url = "http://where.yahooapis.com/v1/states/" + selected + "?appid=" + key;
                fetch(url);
                return false;
            });
            $('#getCountries').click(function (e) {
			    var str = "<select>\r\n";
                $('#countries option').each(function (index, item) {
                        str += "<option value='" + $(item).text() + "'>" + $(item).text() + "</option>\r\n";

                    });
                    str += "</select>";
                    

                    $('#live').empty().append(str);
                    $('#copy').text(str);
                    $('.output').fadeIn();
                return false;
            });

            function fetch(url) {
                $.get(url, "", function (data) {
                    var arr = [];
                    var x = $(data).find('place').each(function (index, item) {
                        var name = $(item).find('name').text();
                        var id = $(item).find('woeid').text();
                        arr.push({'id':id, 'name':name});
                    });
                    var x = _.sortBy(arr, function (x) {
                        return x.name;
                    });
                    var str = "<select>\r\n";
                    $.each(x, function (index, item) {
                        str += "<option value='" + item.name + "'>" + item.name + "</option>\r\n";

                    });
                    str += "</select>";
                    

                     $('#live').empty().append(str);
                    $('#copy').text(str);
                    $('.output').fadeIn();

                }, 'xml');
            }

			 var textBox = document.getElementById("copy");
				textBox.onfocus = function() {
					textBox.select();

					// Work around Chrome's little problem
					textBox.onmouseup = function() {
						// Prevent further mouseup intervention
						textBox.onmouseup = null;
						return false;
					};
				};
        });
