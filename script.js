/* =========================
   OPENING ENVELOPE
========================= */

const waxSeal = document.getElementById("waxSeal");

const openingScreen =
    document.getElementById("openingScreen");

const music =
    document.getElementById("backgroundMusic");


waxSeal.addEventListener("click", () => {

    /* Prevent multiple clicks */

    if (
        openingScreen.classList.contains("open")
    ) {
        return;
    }


    /* Start opening animation */

    openingScreen.classList.add("open");


    /* Start music */

    music.play().catch((error) => {

        console.log(
            "Music could not start:",
            error
        );

    });


    /* Remove opening screen
       after animation */

    setTimeout(() => {

        openingScreen.style.display = "none";

    }, 1600);

});


/* =========================
   COUNTDOWN TIMER
========================= */


/* CHANGE THIS DATE */

const weddingDate = new Date(
    "September 25, 2026 18:00:00"
).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    /* Wedding already started */

    if (distance <= 0) {

        document.getElementById(
            "days"
        ).innerText = "00";


        document.getElementById(
            "hours"
        ).innerText = "00";


        document.getElementById(
            "minutes"
        ).innerText = "00";


        document.getElementById(
            "seconds"
        ).innerText = "00";


        return;
    }


    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (
            distance %
            (1000 * 60 * 60 * 24)
        )
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (
            distance %
            (1000 * 60 * 60)
        )
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (
            distance %
            (1000 * 60)
        )
        /
        1000
    );


    document.getElementById(
        "days"
    ).innerText =
        String(days).padStart(2, "0");


    document.getElementById(
        "hours"
    ).innerText =
        String(hours).padStart(2, "0");


    document.getElementById(
        "minutes"
    ).innerText =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "seconds"
    ).innerText =
        String(seconds).padStart(2, "0");

}


/* Start immediately */

updateCountdown();


/* Update every second */

setInterval(
    updateCountdown,
    1000
);