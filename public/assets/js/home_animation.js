$((function() {
    let a;

    function e() {
        a = window.innerHeight
    }
    const n = [
        ["hp-feat-1", ["animate__animated", "animate__fadeInUp"]],
        ["hp-feat-2", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["hp-feat-3", ["animate__animated", "animate__fadeInUp", "animate__delay-2s"]],
        ["homepage-featured-products", ["animate__animated", "animate__fadeInUp"]],
        ["hp-feat-prod-1", ["animate__animated", "animate__fadeInUp"]],
        ["hp-feat-prod-2", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["hp-feat-prod-3", ["animate__animated", "animate__fadeInUp", "animate__delay-2s"]],
        ["homepage-markets", ["animate__animated", "animate__fadeInUp"]],
        ["hp-tab-1", ["animate__animated", "animate__fadeInUp"]],
        ["hp-tab-2", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["hp-tab-3", ["animate__animated", "animate__fadeInUp", "animate__delay-2s"]],
        ["homepage-callout h2", ["animate__animated", "animate__fadeInUp"]],
        ["homepage-callout span", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["homepage-parametric-search", ["animate__animated", "animate__fadeInUp"]],
        ["homepage-categories", ["animate__animated", "animate__fadeInUp"]],
        ["homepage-categories-featured-text", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["homepage-categories right", ["animate__animated", "animate__fadeInUp", "animate__delay-2s"]],
        ["hp-cats-card-0", ["animate__animated", "animate__fadeInUp"]],
        ["hp-cats-card-1", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["hp-cats-card-2", ["animate__animated", "animate__fadeInUp", "animate__delay-2s"]],
        ["hp-cats-card-3", ["animate__animated", "animate__fadeInUp"]],
        ["hp-cats-card-4", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["hp-cats-card-5", ["animate__animated", "animate__fadeInUp", "animate__delay-2s"]],
        ["hp-leadership-1", ["animate__animated", "animate__fadeInUp"]],
        ["hp-leadership-2", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["homepage-corporate-responsibility h2", ["animate__animated", "animate__fadeInUp"]],
        ["homepage-corporate-responsibility p", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["btn-smtc-centered-wrapper", ["animate__animated", "animate__fadeInUp"]],
        ["homepage-corporate-responsibility-block-left", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["homepage-corporate-responsibility-block-right", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["homepage-corporate-responsibility-block-image", ["animate__animated", "animate__fadeInUp", "animate__delay-2s"]],
        ["homepage-join-our-team-block", ["animate__animated", "animate__fadeInUp"]],
        ["homepage-join-our-team-block-left", ["animate__animated", "animate__fadeInUp", "animate__delay-1s"]],
        ["homepage-join-our-team-block-right", ["animate__animated", "animate__fadeInUp", "animate__delay-2s"]],
        ["homepage-section-banner-footer-container", ["animate__animated", "animate__fadeInUp"]]
    ];

    function t() {
        n.forEach((([e, n]) => ((e, n) => {
            let t = document.querySelector("." + e);
            t && t.getBoundingClientRect().top - a <= 0 && n.forEach((a => t.classList.add(a)))
        })(e, n)))
    }
    window.addEventListener("scroll", t), window.addEventListener("resize", e), e(), t()
}));