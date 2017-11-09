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

<section class="bg-white team-style6 builder-bg padding-110px-tb xs-padding-60px-tb" id="team">
        <div class="container">
            <div class="row">
                <!-- section title -->
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                    <h2 class="section-title-large sm-section-title-medium xs-section-title-large text-dark-gray font-weight-600 alt-font margin-three-bottom xs-margin-fifteen-bottom tz-text">OUR TEAM</h2>
                    <div class="text-medium width-60 margin-lr-auto md-width-70 sm-width-100 tz-text margin-thirteen-bottom xs-margin-nineteen-bottom"></div>
                </div>
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/dr-anmol-kalha.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">Dr ANMOL S KALHA</span>
                                <!-- <span class="text-small display-block tz-text">FOUNDER AND CEO</span> -->
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="https://www.linkedin.com/in/anmol-kalha-43140522/"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">Col (Retd) AD Corps, BSc BDS MDS Cert Lingual Ortho (Germany), awarded clinician, and a distinguished
                                    professor with a career spanning over 40 years.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/kartik-v.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">KARTIK VISVANATHAN</span>
                                <span class="text-small display-block tz-text">DIRECTOR</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="https://www.linkedin.com/in/karthikayanv/"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">A research and analytics professional with over 20 years of experience.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/amit-kinariwala.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">AMIT KINARIWALA</span>
                                <span class="text-small display-block tz-text">CHIEF TECHNOLOGY OFFICER</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="https://www.linkedin.com/in/amitkinariwala/"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <!-- <div class="text-medium tz-text width-85 sm-width-100 center-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been standard dummy.</div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/jaidev-deshpande.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">JAIDEV DESHPANDE</span>
                                <span class="text-small display-block tz-text">MEMBER OF THE TECHNICAL TEAM</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="https://www.linkedin.com/in/jaidevd/"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                                <div class="display-inline-block margin-five no-margin-tb"><a href="http://twitter.com/jaidevd"><i class="fa ti-twitter-alt icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">Jaidev specializes in building end-to-end machine learning applications to automate business
                                    processes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/uday-singh.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">DR UDAY SINGH</span>
                                <!-- <span class="text-small display-block tz-text">DIRECTOR</span> -->
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="https://www.linkedin.com/in/pratapsingh1102/"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">A research-oriented clinician - BDS and MDS (Oral Medicine and Radiology) – who is fluent
                                    in Clinical Research and Data Analytics for healthcare.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/vani-t.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">Dr VANI T.</span>
                                <span class="text-small display-block tz-text">MEDICAL ANALYST</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="http://www.linkedin.com/in/vanisivadas"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">An inquisitive dentist, intellectual, and an ardent music and books lover. Currently exploring
                                    the space of healthcare analytics.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/abhishek-kapoor.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">ABHISHEK KAPOOR</span>
                                <span class="text-small display-block tz-text">MEMBER OF THE TECHNICAL TEAM</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="http://www.linkedin.com/in/abhishek-kapoor-4b7b9295"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">A software professional who likes to execute projects using free and open-source software.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/mahith-m.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">MAHITH M</span>
                                <span class="text-small display-block tz-text">MEMBER OF THE TECHNICAL TEAM</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="https://in.linkedin.com/in/mahith-mukundan-03aa3058"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">Tech junkie, foodie, Big Data and ML enthusiast, and an explorer at heart.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/nipun-sadvilkar.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">NIPUN SADVILKAR</span>
                                <span class="text-small display-block tz-text">MEMBER OF THE TECHNICAL TEAM</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="https://www.linkedin.com/in/nipunsadvilkar/"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">A self-taught programmer who likes to explore the jungle of data with Python as his Swiss
                                    knife.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/naresh-yaduvanshi.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">NARESH KUMAR YADUVANSHI</span>
                                <span class="text-small display-block tz-text">MEMBER OF THE TECHNICAL TEAM</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="https://www.linkedin.com/in/naresh-yaduvanshi-18650823/"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">A motivated and result-oriented professional who thrives in executing projects using Python.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
                <!-- team member -->
                <div class="col-md-4 col-sm-4 col-xs-12 text-center xs-margin-fifteen-bottom">
                    <div class="team position-relative overflow-hidden">
                        <div class="team-img">
                            <img alt="" src="images/team/prateek-nagpal.png" data-img-size="(W)750px X (H)893px">
                        </div>
                        <div class="team-details bg-white builder-bg text-center">
                            <div class="team-name padding-twelve no-padding-lr">
                                <span class="alt-font text-dark-gray tz-text font-weight-500">PRATEEK NAGPAL</span>
                                <span class="text-small display-block tz-text">MEMBER OF THE TECHNICAL TEAM</span>
                            </div>
                            <div class="team-content padding-twelve no-padding-lr no-padding-bottom border-top tz-border">
                                <div class="display-inline-block margin-five no-margin-tb"><a href="#"><i class="fa ti-linkedin icon-extra-small tz-icon-color text-dark-gray"></i></a></div>
                            </div>
                            <div class="team-details-text padding-twelve no-padding-lr xs-no-padding-bottom">
                                <div class="text-medium tz-text width-85 sm-width-100 center-col">A data freak, passionate about creating business logics through machine learning/NLP algorithms.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end team member -->
            </div>
        </div>
    </section>