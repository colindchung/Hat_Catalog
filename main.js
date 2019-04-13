$(document).ready(() => {
    $(".arrow-button-caps").on("click", () => {
        $(".body-caps").slideToggle(400);
        $(".arrow-image-caps").toggleClass("arrow-rotate");
        $(".buffer-caps").toggle();
    });
        
    $(".arrow-button-toques").on("click", () => {
        $(".body-toques").slideToggle(400);
        $(".arrow-image-toques").toggleClass("arrow-rotate");
        $(".buffer-toques").toggle();
    });
    
    $(".hat-image").on("mouseenter", event => {
        $(event.currentTarget).animate({
            width: "50%",
            height: "auto"
        }, "fast");
    }).on("mouseleave", () => {
        $(event.currentTarget).animate({
            width: "25%",
            height: "aut0"
        }, "fast");
    });
});