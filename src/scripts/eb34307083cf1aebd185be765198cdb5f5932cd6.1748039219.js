/*!
 * Slidebars - A jQuery Framework for Off-Canvas Menus and Sidebars
 * Version: 2.0.2
 * Url: http://www.adchsm.com/slidebars/
 * Author: Adam Charles Smith
 * Author url: http://www.adchsm.com/
 * License: MIT
 * License url: http://www.adchsm.com/slidebars/license/
 */
var slidebars = function() {
    var t = $("[canvas]"),
        e = {},
        i = !1,
        n = !1,
        s = ["top", "right", "bottom", "left"],
        r = ["reveal", "push", "overlay", "shift"],
        o = function(i) {
            var n = $(),
                s = "0px, 0px",
                r = 1e3 * parseFloat(e[i].element.css("transitionDuration"), 10);
            return ("reveal" === e[i].style || "push" === e[i].style || "shift" === e[i].style) && (n = n.add(t)), ("push" === e[i].style || "overlay" === e[i].style || "shift" === e[i].style) && (n = n.add(e[i].element)), e[i].active && ("top" === e[i].side ? s = "0px, " + e[i].element.css("height") : "right" === e[i].side ? s = "-" + e[i].element.css("width") + ", 0px" : "bottom" === e[i].side ? s = "0px, -" + e[i].element.css("height") : "left" === e[i].side && (s = e[i].element.css("width") + ", 0px")), {
                elements: n,
                amount: s,
                duration: r
            }
        },
        c = function(t, i, n, s) {
            return a(t) ? !1 : void(e[t] = {
                id: t,
                side: i,
                style: n,
                element: s,
                active: !1
            })
        },
        a = function(t) {
            return e.hasOwnProperty(t) ? !0 : !1
        };
    this.init = function(t) {
        return i ? !1 : (n || ($("[off-canvas]").each(function() {
            var t = $(this).attr("off-canvas").split(" ", 3);
            return t && t[0] && -1 !== s.indexOf(t[1]) && -1 !== r.indexOf(t[2]) ? void c(t[0], t[1], t[2], $(this)) : !1
        }), n = !0), i = !0, this.css(), $(f).trigger("init"), void("function" == typeof t && t()))
    }, this.exit = function(t) {
        if (!i) return !1;
        var e = function() {
            i = !1, $(f).trigger("exit"), "function" == typeof t && t()
        };
        this.getActiveSlidebar() ? this.close(e) : e()
    }, this.css = function(t) {
        if (!i) return !1;
        for (var n in e)
            if (a(n)) {
                var s;
                s = "top" === e[n].side || "bottom" === e[n].side ? e[n].element.css("height") : e[n].element.css("width"), ("push" === e[n].style || "overlay" === e[n].style || "shift" === e[n].style) && e[n].element.css("margin-" + e[n].side, "-" + s)
            }
        this.getActiveSlidebar() && this.open(this.getActiveSlidebar()), $(f).trigger("css"), "function" == typeof t && t()
    }, this.open = function(t, n) {
        if (!i) return !1;
        if (!t || !a(t)) return !1;
        var s = function() {
            e[t].active = !0, e[t].element.css("display", "block"), $(f).trigger("opening", [e[t].id]);
            var i = o(t);
            i.elements.css({
                "transition-duration": i.duration + "ms",
                transform: "translate(" + i.amount + ")"
            }), setTimeout(function() {
                $(f).trigger("opened", [e[t].id]), "function" == typeof n && n()
            }, i.duration)
        };
        this.getActiveSlidebar() && this.getActiveSlidebar() !== t ? this.close(s) : s()
    }, this.close = function(t, n) {
        if ("function" == typeof t && (n = t, t = null), !i) return !1;
        if (t && !a(t)) return !1;
        if (t || (t = this.getActiveSlidebar()), t && e[t].active) {
            e[t].active = !1, $(f).trigger("closing", [e[t].id]);
            var s = o(t);
            s.elements.css("transform", ""), setTimeout(function() {
                s.elements.css("transition-duration", ""), e[t].element.css("display", ""), $(f).trigger("closed", [e[t].id]), "function" == typeof n && n()
            }, s.duration)
        }
    }, this.toggle = function(t, n) {
        return i && t && a(t) ? void(e[t].active ? this.close(t, function() {
            "function" == typeof n && n()
        }) : this.open(t, function() {
            "function" == typeof n && n()
        })) : !1
    }, this.isActive = function() {
        return i
    }, this.isActiveSlidebar = function(t) {
        return i && t && a(t) ? e[t].active : !1
    }, this.getActiveSlidebar = function() {
        if (!i) return !1;
        var t = !1;
        for (var n in e)
            if (a(n) && e[n].active) {
                t = e[n].id;
                break
            }
        return t
    }, this.getSlidebars = function() {
        if (!i) return !1;
        var t = [];
        for (var n in e) a(n) && t.push(e[n].id);
        return t
    }, this.getSlidebar = function(t) {
        return i && t && t && a(t) ? e[t] : !1
    }, this.events = {};
    var f = this.events;
    $(window).on("resize", this.css.bind(this))
};

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}
(function($) {
    $('#expandAll').on('click', function() {
        $('#expandAll').hide();
        $('#collapseAll').show();
        $('a[data-toggle="collapse"]').each(function() {
            var objectID = $(this).attr('href');
            if ($(objectID).hasClass('in') === false) {
                $(objectID).collapse('show');
            }
        });
    });
    $('#collapseAll').on('click', function() {
        $('#expandAll').show();
        $('#collapseAll').hide();
        $('a[data-toggle="collapse"]').each(function() {
            var objectID = $(this).attr('href');
            $(objectID).collapse('hide');
        });
    });

    function matchHeight(parentClassName, childSelector) {
        var maxHeight = 0;
        var elementsToMatch;
        elementsToMatch = $(parentClassName).find(childSelector);
        elementsToMatch.each(function() {
            console.log("  iter", i, "height:", $(this).height());
            var thisHeight = $(this).height();
            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
                console.log("maxHeight: " + maxHeight + childSelector);
            }
            console.log("maxHeightB: " + maxHeight + childSelector);
        });
        elementsToMatch.height(maxHeight);
    }
    $(function() {
        matchHeight(".media-awards .copy-wrapper", "span");
        matchHeight(".media-pc .copy-wrapper", "span");
        matchHeight(".media-blogs .copy-wrapper", "span");
        matchHeight(".news-and-media-pr .copy-wrapper", "span");
        matchHeight(".add-resources-wrapper", "span");
        matchHeight(".sub-cat-content", ".col-match-height");
    });
    var youtube = document.querySelectorAll(".youtube");
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jph";
        var image = new Image();
        image.src = source;
        image.addEventListener("load", function() {
            youtube[i].appendChild(image);
        }(i));
        youtube[i].addEventListener("click", function() {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };
    $('.smtc-vidyard .vidyard_wrapper').on("click", function(e) {
        $(this).find('.img-responsive').attr('src', "/assets/img/preloader-black.gif").addClass('preloader');
        var newUUID = $(this).data('viduuid');
        var vidplayer = document.createElement('script');
        vidplayer.type = 'text/javascript';
        vidplayer.src = '//play.vidyard.com/' + newUUID + '.js?v=3.1.1&type=inline&autoplay=1';
        vidplayer.id = "vidyard_embed_code_" + newUUID;
        $(this).off('click');
        $(this).append(vidplayer);
    });
    $('.lightbox-media').on("click", function(e) {
        $(this).addClass('lightbox-show');
        var newUUID = $(this).find('.smtc-vidyard .vidyard_wrapper').data('viduuid');
        var vidplayer = document.createElement('script');
        vidplayer.type = 'text/javascript';
        vidplayer.src = '//play.vidyard.com/' + newUUID + '.js?v=3.1.1&type=inline&autoplay=1';
        vidplayer.id = "vidyard_embed_code_" + newUUID;
        $(this).off('click');
        $(this).append(vidplayer);
    });
    $('.lightbox-close, .lightbox-overlay').on("click", function(e) {
        $('.lightbox-media').removeClass('lightbox-show');
    });
    let isVidyard = document.querySelector('.main_player .smtc-vidyard .vidyard_wrapper');
    let isYoutube = document.querySelector('.main_player .smtc-video .youtube');
    const btn_element = isVidyard != null ? isVidyard : isYoutube;
    if (btn_element) {
        btn_element.click();
    }
    if (window.location.hash == "#download-resources") {
        $('#documentation a').trigger('click');
        $('body > div[canvas="container"]').animate({
            scrollTop: $("#documentation a").offset().top
        }, 0);
    }
    $('#lora-application-categories').change(function() {
        var selected_value = $(this).val();
        if (selected_value != 0) {
            $('#accordion').children('.category-' + selected_value).slideDown();
            $('#accordion').children().not('.category-' + selected_value).slideUp();
        } else {
            $('#accordion').children().slideDown();
        }
    });
    $('#region-categories').change(function() {
        var selected_value = $(this).val();
        if (selected_value != 0) {
            $('#accordion').children('.category-' + selected_value).slideDown();
            $('#accordion').children().not('.category-' + selected_value).slideUp();
        } else {
            $('#accordion').children().slideDown();
        }
    });
    $(".home-featured-arrow-down").on("click", function() {
        $('html,body').animate({
            scrollTop: $(".homepage-featured-boxes").offset().top
        }, 100, 'linear');
    });
    $(".back-to-top-arrow").on("click", function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    const ieMessage = "Internet Explorer is not a supported browser for XpertRF.com. For the best experience, please use a different browser.";
    var msie = /msie\s|trident/i.test(window.navigator.userAgent);
    if (msie) {
        $('body main > section:nth-child(1) > .container').prepend("<p class='ie-warning'><img src='/uploads/images/ie-warning-icon.jph' class='img-fluid'>" + ieMessage + " </p>");
    }
    const dsheets = $('.documentation');
    if (dsheets.length != 0) {
        $('.btn-header-documentation').addClass('visible');
    } else {
        $('.btn-header-documentation').css('display', 'none');
    }
    let isMobileDevice = window.matchMedia("only screen and (max-width: 760px)").matches;
    if (!isMobileDevice) {
        const homeBannerBgVideo = $('#billboard-video');
        if (homeBannerBgVideo.length > 0) {
            $('source', homeBannerBgVideo).each(function() {
                const el = $(this);
                el.attr('src', el.data('src'));
            });
            homeBannerBgVideo[0].load();
        }
    }
})(jQuery);
(function($) {
    $(document).ready(function() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement('style')
            msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
            document.querySelector('head').appendChild(msViewportStyle)
        }
        var controller = new slidebars();
        controller.init();
        $('.js-toggle-right-slidebar').on('click', function(event) {
            event.stopPropagation();
            controller.toggle('slidebar-1');
        });
        $(controller.events).on('opened', function() {
            $('[canvas="container"]').addClass('js-close-any-slidebar');
        });
        $(controller.events).on('closed', function() {
            $('[canvas="container"]').removeClass('js-close-any-slidebar');
        });
        $('body').on('click', '.js-close-any-slidebar', function(event) {
            event.stopPropagation();
            controller.close();
        });
        $('body').on('click', function(e) {
            if (!$(e.target).hasClass('sb-arrow') && !$(e.target).hasClass('sb-slidebar')) {
                controller.close();
            }
        });
        $('.sb-slidebar nav ul li span.sb-arrow').on('click', function(event) {
            event.preventDefault();
            if ($(this).next('ul').is(':visible')) {
                $(this).parent().siblings().removeClass('open');
                $(this).parent().removeClass('open');
                $(this).next().slideUp(250);
                $(this).next().find('ul').slideUp(250, function() {
                    $(this).next().slideUp(250);
                });
            } else {
                $(this).parent().siblings().removeClass('open');
                $(this).parent().siblings().find('ul').slideUp(250);
                $(this).next().slideDown(250);
                $(this).next().find('li').removeClass('open');
                $(this).parent().addClass('open');
            }
        });
    });
    $(window).on("load", function() {});
    $(window).on("resize", function() {});
})(window.jQuery);