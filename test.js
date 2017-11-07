$(function () {
    var $content = $('#blogContent');
    var data = {
        rss_url: 'https://medium.jasonmdesign.com/feed'
    };
    $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
        if (response.status == 'ok') {
            var customHtml = '';
            $.each(response.items, function (k, item) {
                var visibleSm;
                if (k < 3) {
                    visibleSm = '';
                } else {
                    visibleSm = ' visible-sm';
                }
                var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
                var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
                var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
                var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
                var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
                customHtml += '<div class="col-md-4 col-sm-4 col-xs-12 xs-margin-nineteen-bottom">' +
                    '<div class="post-thumbnail overflow-hidden margin-twelve-bottom">' +
                    '<a href="#"><img src="' + src + '" data-img-size="(W)800px X (H)507px" alt=""/></a>' +
                    '</div>';
                var contentBody = item.description.replace(/<img[^>]*>/g, ""); //replace with your string.
                var maxLength = 120 // maximum number of characters to extract
                //trim the string to the maximum length
                var trimmedString = contentBody.substr(0, maxLength);
                //re-trim if we are in the middle of a word
                trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
                customHtml += '<div class="post-details no-margin-lr no-margin-bottom">'+
                                '<a href="'+item.link+'" class="tz-text text-dark-gray text-medium alt-font font-weight-500 display-block margin-four-bottom md-text-medium">"'+item.title+'"</a>'+
                                '<div class="text-medium tz-text"><p>"'+trimmedString+'"</p></div>'+
                                '<div class="separator-line-full bg-middle-gray margin-ten-bottom tz-background-color"></div>'+
                                '<div class="text-extra-small alt-font"><a href="#" class="tz-text text-medium-gray">"'+item.pubDate+'"</a>   /   <span class="tz-text">POSTED BY</span> <a href="#" class="tz-text text-medium-gray">"'+item.author+'"</a></div>'+
                                '</div></div>';
                return k < 3;
            });
            $content.html(customHtml);
        }
    });
});